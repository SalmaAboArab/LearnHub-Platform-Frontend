import { cn } from "@/utils/cn"
import React from "react"
// add lines number if needed and variant
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn('min-h-28 rounded-xl border px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500', className)} {...props} />
))
Textarea.displayName = 'Textarea'