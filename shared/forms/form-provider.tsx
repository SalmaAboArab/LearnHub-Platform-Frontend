import { cn } from '@/utils/cn';
import React from 'react'
import { FormProvider as RHFProvider, UseFormReturn } from 'react-hook-form'

export type FormProps = {
  onSubmit?: () => void;
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  className?: string;
};

export function FormProvider({ methods, onSubmit, children, className }: FormProps) {
  return (
    <RHFProvider {...methods}>
      {/* <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-4'>
        {children}
      </form> */}
      <form onSubmit={onSubmit} noValidate autoComplete="off" className={cn('space-y-4', className)}>
        {children}
      </form>
    </RHFProvider>
  )
}
