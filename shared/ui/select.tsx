import { cn } from "@/utils/cn"
import React from "react"
// add variants and sizes if needed
export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(({ className, children, ...props }, ref) => (
  <select ref={ref} className={cn('w-full h-10 rounded-xl border px-3 outline-none focus:ring-2 focus:ring-blue-500 bg-white', className)} {...props}>
    {children}
  </select>
))
Select.displayName = 'Select'