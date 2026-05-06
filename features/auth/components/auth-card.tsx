'use client'

import React from 'react'
import { useState } from 'react'

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

export type { FormFieldProps }

