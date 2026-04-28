import { useFormContext } from "react-hook-form"
import FieldWrapper from "./field-wrapper"
import { cn } from "@/utils/cn"

export function RHFInput({ name, label, type='text', className, ...props }: any) {
  const { register, formState: { errors } } = useFormContext()
  const error = errors?.[name]?.message as string | undefined

  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        {...register(name)}
        {...props}
        className={cn('w-full h-10 rounded-lg border border-gray-300 px-3 outline-none focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:shadow-blue-200', error && 'border-red-500 focus:ring-red-500', className)}
      />
    </FieldWrapper>
  )
}