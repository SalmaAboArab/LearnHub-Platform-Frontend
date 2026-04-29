import { FieldValues, useFormContext } from "react-hook-form"
import FieldWrapper from "./field-wrapper"
import { cn } from "@/utils/cn"

export type RHFInputProps<T extends FieldValues = FieldValues> = {
  name: string
  label?: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  icon?: React.ReactNode
  isPassword?: boolean
  className?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "type">

export function RHFInput({
  name,
  label,
  type = "text",
  icon,
  className,
  ...props
}: RHFInputProps) {

  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors?.[name]?.message as string | undefined

  return (
    <FieldWrapper label={label} error={error} icon={icon}>
      <input
        type={type}
        {...register(name)}
        {...props}
        className={cn(
          "w-full px-4 py-2 border rounded-lg outline-none transition-all",
          "focus:ring-1 focus:ring-indigo-500 focus:border-transparent",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300",
          className
        )}
      />
    </FieldWrapper>
  )
}