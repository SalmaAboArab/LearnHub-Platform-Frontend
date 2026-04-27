import { cn } from "@/utils/cn"
import React from "react"

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "elevated" | "outlined"
}

export function Card({
  className,
  variant = "elevated",
  ...props
}: CardProps) {
  const variants = {
    elevated: "bg-white dark:bg-gray-900 shadow-md border border-transparent",
    outlined: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
  }

  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden hover:shadow-lg transition ", // add hover effect if needed : cursor-pointer hover:scale-[1.01]
        variants[variant],
        className
      )}
      {...props}
    />
  )
}