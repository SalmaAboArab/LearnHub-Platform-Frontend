'use client'

import React from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { SocialLoginButtons } from './social-login-buttons'

interface AuthCardProps {
  children: React.ReactNode
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-sm">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        {children}
      </div>
    </div>
  )
}

interface FormFieldProps {
  label: string
  type?: string
  placeholder?: string
  icon?: React.ReactNode
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  showPasswordToggle?: boolean
  isPassword?: boolean
}

export function FormField({
  label,
  type = 'text',
  placeholder,
  icon,
  value,
  onChange,
  showPasswordToggle,
  isPassword,
}: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  const inputType = isPassword && !showPassword ? 'password' : 'text'

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-900/75 font-sans">{label}</label>
      <div className="relative">
        {icon && <div className="absolute left-3 top-3 text-gray-400">{icon}</div>}
        <input
          type={isPassword ? inputType : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition-all ${
            icon ? 'pl-10' : ''
          }`}
        />
        {showPasswordToggle && isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
          >
            {/* {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} */}
          </button>
        )}
      </div>
    </div>
  )
}

interface LoginFormProps {
  onSubmit?: (data: { email: string; password: string }) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ email, password })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        icon={<Mail size={18} />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        label="Password"
        isPassword
        placeholder="••••••••"
        icon={<Lock size={18} />}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showPasswordToggle
      />

      <div className="flex justify-end">
        <a href="#" className="text-sm text-indigo-500 hover:text-indigo-600 font-semibold font-sans">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold py-3 rounded-lg transition-colors"
      >
        Sign In
      </button>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-2 bg-white text-gray-500">or continue with</span>
        </div>
      </div>

      <SocialLoginButtons />
    </form>
  )
}
