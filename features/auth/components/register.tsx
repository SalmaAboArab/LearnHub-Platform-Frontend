'use client'

import React, { useState } from 'react'
import { Mail, Lock, User } from 'lucide-react'
import * as Yup from 'yup'
import { FormField } from './auth-card'
import { registerSchema, type RegisterFormData } from '../schemas/validation-schema'

export default function Register() {
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (field: keyof RegisterFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      const validatedData = await registerSchema.validate(formData, { abortEarly: false })
      setErrors({})
      console.log('Register data:', validatedData)
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
        <label className="block text-sm font-semibold text-gray-900/75">I want to join as</label>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="student"
              checked={formData.role === 'student'}
              onChange={handleChange('role')}
              className="w-4 h-4 text-indigo-500"
            />
            <span className="text-sm text-gray-700">Student</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="instructor"
              checked={formData.role === 'instructor'}
              onChange={handleChange('role')}
              className="w-4 h-4 text-indigo-500"
            />
            <span className="text-sm text-gray-700">Instructor</span>
          </label>
        </div>
        {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
      </div>

      <div>
        <FormField
          label="Full Name"
          type="text"
          placeholder="John Doe"
          icon={<User size={18} />}
          value={formData.fullName}
          onChange={handleChange('fullName')}
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>

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

      <div>
        <FormField
          label="Confirm Password"
          isPassword
          placeholder="••••••••"
          icon={<Lock size={18} />}
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          showPasswordToggle
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Create Account
      </button>
    </form>
  )
}
