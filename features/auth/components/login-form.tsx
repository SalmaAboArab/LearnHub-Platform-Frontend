 'use client'

import React from 'react'
import { Mail, Lock } from 'lucide-react'
import { FormProvider } from '@/shared/forms/form-provider'
import { Button } from '@/shared/ui/button'
import { RHFInput } from '@/shared/forms/rhf-input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { loginSchema, type LoginFormData } from '../schemas/validation-schema'

interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const defaultValues: LoginFormData = {
    email: '',
    password: '',
  }

  const methods = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues,
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods

  const submit = handleSubmit(async (data) => {
    onSubmit?.(data)
  })

  return (
    <FormProvider methods={methods} onSubmit={submit} className="">
      <RHFInput
        name="email"
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        icon={<Mail className="w-4 h-4" />}
      />

      <RHFInput
        name="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        icon={<Lock className="w-4 h-4" />}
      />

      <div className="flex justify-end">
        <a href="#" className="text-sm text-indigo-500 hover:text-indigo-600 font-semibold font-sans">
          Forgot password?
        </a>
      </div>

      <Button type="submit" loading={isSubmitting} className="w-full font-semibold">
        {isSubmitting ? 'Signing in...' : 'Sign In'}
      </Button>
    </FormProvider>
  )
}
