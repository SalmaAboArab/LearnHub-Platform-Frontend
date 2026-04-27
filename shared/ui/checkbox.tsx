import { cn } from "@/utils/cn"
import React from "react"

export const Checkbox = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input ref={ref} type='checkbox' className={cn('h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500', className)} {...props} />
))
Checkbox.displayName = 'Checkbox'
