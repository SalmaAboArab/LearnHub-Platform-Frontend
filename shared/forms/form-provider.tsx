import { cn } from '@/utils/cn'
import React from 'react'
import { FormProvider as RHFProvider, UseFormReturn } from 'react-hook-form'

export type FormProps<T extends Record<string, unknown> = Record<string, unknown>> = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  children: React.ReactNode
  methods?: UseFormReturn<T>
  className?: string
}

export function FormProvider<T extends Record<string, unknown> = Record<string, unknown>>({
  methods,
  onSubmit,
  children,
  className,
}: FormProps<T>) {
  if (methods) {
    return (
      <RHFProvider {...(methods as UseFormReturn<Record<string, unknown>>)}>
        <form onSubmit={onSubmit} noValidate autoComplete="off" className={cn('space-y-3', className)}>
          {children}
        </form>
      </RHFProvider>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate autoComplete="off" className={cn('space-y-3', className)}>
      {children}
    </form>
  )
}
