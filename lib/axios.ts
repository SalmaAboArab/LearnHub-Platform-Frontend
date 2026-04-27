import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

const apiBaseURL = process.env.VITE_API_BASE_URL ?? 'http://localhost:5000';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

const setAccessToken = (token: string | null) => {
  if (token) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
};

const setRefreshToken = (token: string | null) => {
  if (token) {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
};

const tokensUpdaterRegistry: Array<(access: string | null, refresh?: string | null) => void> = [];
const unauthorizedHandlers: Array<() => void> = [];

export const setTokensUpdater = (updater: (access: string | null, refresh?: string | null) => void) => {
  tokensUpdaterRegistry.push(updater);
};

export const setUnauthorizedHandler = (handler: () => void) => {
  unauthorizedHandlers.push(handler);
};

export const forceLogout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  unauthorizedHandlers.forEach((fn) => fn());
  window.location.href = '/login';
};

export const axiosInstance = axios.create({
  baseURL: apiBaseURL,
  withCredentials: false
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    const headers = config.headers ?? {};
    (headers as Record<string, string>).Authorization = `Bearer ${token}`;
    config.headers = headers;
  }
  return config;
});

type RetryableRequestConfig = AxiosRequestConfig & { _retry?: boolean };

let refreshPromise: Promise<string | null> | null = null;

const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    forceLogout();
    return null;
  }

  const response: AxiosResponse<{
    accessToken?: string;
    access_token?: string;
    refresh_token?: string;
    refreshToken?: string;
  }> = await axios.post(`${apiBaseURL}/auth/refresh`, { refresh_token: refreshToken });
  const newAccessToken = response.data?.accessToken ?? response.data?.access_token ?? null;
  const newRefreshToken = response.data?.refreshToken ?? response.data?.refresh_token ?? null;
  if (!newAccessToken) {
    throw new Error('No access token returned from refresh');
  }
  setAccessToken(newAccessToken);
  if (newRefreshToken) {
    setRefreshToken(newRefreshToken);
  }
  tokensUpdaterRegistry.forEach((fn) => fn(newAccessToken, newRefreshToken ?? undefined));
  return newAccessToken;
};

const isInvalidTokenMessage = (err: any): boolean => {
  const msg: unknown = err?.response?.data?.message;
  if (typeof msg !== 'string') return false;
  const normalized = msg.toLowerCase();
  return normalized.includes('in-valid token') || normalized.includes('invalid token');
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config as RetryableRequestConfig | undefined;
    const status = error?.response?.status;
    const requestUrl = (originalRequest?.url ?? '').toString();

    // Only handle authable 401/403 responses
    if (!originalRequest || !status || (status !== 401 && status !== 403)) {
      if (isInvalidTokenMessage(error)) {
        forceLogout();
      }
      return Promise.reject(error);
    }

    // Do not attempt refresh on auth endpoints themselves
    const isAuthEndpoint = requestUrl.includes('/auth/refresh') || requestUrl.includes('/auth/login');
    if (isAuthEndpoint) {
      forceLogout();
      return Promise.reject(error);
    }

    if (originalRequest._retry) {
      forceLogout();
      return Promise.reject(error);
    }

    if (!refreshPromise) {
      originalRequest._retry = true; // mark early to avoid loops on subsequent failures
      refreshPromise = refreshAccessToken()
        .catch((err) => {
          forceLogout();
          throw err;
        })
        .finally(() => {
          refreshPromise = null;
        });
    }

    let newAccessToken: string | null = null;
    try {
      newAccessToken = await refreshPromise;
    } catch (refreshErr) {
      return Promise.reject(refreshErr);
    }

    if (!newAccessToken) {
      forceLogout();
      return Promise.reject(error);
    }

    originalRequest.headers = originalRequest.headers || {};
    (originalRequest.headers as Record<string, string>).Authorization = `Bearer ${newAccessToken}`;
    return axiosInstance(originalRequest);
  }
);