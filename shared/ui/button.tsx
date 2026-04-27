import { cn } from '@/utils/cn'
import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'error' | 'success'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export function Button({
  variant = 'contained',
  color = 'primary',
  size = 'md',
  loading,
  className,
  children,
  ...props
}: ButtonProps) {

  const base = 'rounded-xl transition inline-flex items-center justify-center gap-2 disabled:opacity-50'

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-lg'
  }

  const colors = {
    primary: {
      contained: 'bg-blue-600 text-white hover:bg-blue-700',
      outlined: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
      text: 'text-blue-600 hover:bg-blue-50'
    },
    secondary: {
      contained: 'bg-gray-800 text-white hover:bg-gray-900',
      outlined: 'border border-gray-400 text-gray-800 hover:bg-gray-100',
      text: 'text-gray-800 hover:bg-gray-100'
    },
    error: {
      contained: 'bg-red-600 text-white hover:bg-red-700',
      outlined: 'border border-red-600 text-red-600 hover:bg-red-50',
      text: 'text-red-600 hover:bg-red-50'
    },
    success: {
      contained: 'bg-green-600 text-white hover:bg-green-700',
      outlined: 'border border-green-600 text-green-600 hover:bg-green-50',
      text: 'text-green-600 hover:bg-green-50'
    }
  }

  return (
    <button
      className={cn(
        base,
        sizes[size],
        colors[color][variant],
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  )
}