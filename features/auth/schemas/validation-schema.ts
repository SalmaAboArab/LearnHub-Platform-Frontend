import * as Yup from 'yup'

// Login Schema
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
})

export type LoginFormData = Yup.InferType<typeof loginSchema>

// Register Schema
export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full Name is required')
    .min(3, 'Full Name must be at least 3 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  role: Yup.string()
    .required('Please select a role')
    .default('student'),
})

export type RegisterFormData = Yup.InferType<typeof registerSchema>
