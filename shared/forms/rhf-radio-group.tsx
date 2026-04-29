import { useFormContext } from "react-hook-form"
import FieldWrapper from "./field-wrapper"
import { cn } from "@/utils/cn"

type Option = {
  label: string
  value: string
}

type RHFRadioGroupProps = {
  name: string
  label?: string
  options: Option[]
  className?: string
}

export function RHFRadioGroup({
  name,
  label,
  options,
  className,
}: RHFRadioGroupProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors?.[name]?.message as string | undefined

  return (
    <FieldWrapper label={label} error={error}>
      <div className={cn("flex gap-4", className)}>
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2">
            <input
              type="radio"
              value={opt.value}
              {...register(name)}
              className="accent-indigo-600"
            />
            <span className="text-sm text-gray-700">{opt.label}</span>
          </label>
        ))}
      </div>
    </FieldWrapper>
  )
}