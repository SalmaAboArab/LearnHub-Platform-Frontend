import { cn } from "@/utils/cn"
import React from "react"
// add variants and sizes if needed
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn('w-full h-10 rounded-xl border px-3 outline-none focus:ring-2 focus:ring-blue-500', className)} {...props} />
))
Input.displayName = 'Input'