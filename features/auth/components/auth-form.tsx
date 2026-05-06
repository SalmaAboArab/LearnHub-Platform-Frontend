'use client'

import React, { useState } from 'react'
import { Mail, Lock } from 'lucide-react'
import * as Yup from 'yup'
import { FormField } from './auth-card'
import { loginSchema, type LoginFormData } from '../schemas/validation-schema'

interface AuthFormProps {
  onSubmit?: (data: LoginFormData) => void
}

export function AuthForm({ onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (field: keyof LoginFormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }))
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const validatedData = await loginSchema.validate(formData, { abortEarly: false })
      setErrors({})
      onSubmit?.(validatedData)
    } catch (error) {
      const newErrors: Record<string, string> = {}
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err: Yup.ValidationError) => {
          newErrors[err.path || ''] = err.message
        })
      }
      setErrors(newErrors)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <FormField
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          icon={<Mail size={18} />}
          value={formData.email}
          onChange={handleChange('email')}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <FormField
          label="Password"
          isPassword
          placeholder="••••••••"
          icon={<Lock size={18} />}
          value={formData.password}
          onChange={handleChange('password')}
          showPasswordToggle
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>

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
    </form>
  )
}
