import { useFormContext } from "react-hook-form"
import FieldWrapper from "./field-wrapper"
import { cn } from "@/utils/cn"

type Option = {
  label: string
  value: string
}

type RHFRadioButtonGroupProps = {
  name: string
  label?: string
  options: Option[]
  className?: string
}

export function RHFRadioButtonGroup({
  name,
  label,
  options,
  className,
}: RHFRadioButtonGroupProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const error = errors?.[name]?.message as string | undefined
  const selected = watch(name)

  return (
    <FieldWrapper label={label} error={error}>
      <div className={cn("flex gap-2", className)}>
        {options.map((opt) => {
          const isActive = selected === opt.value

          return (
            <label key={opt.value}>
              <input
                type="radio"
                value={opt.value}
                {...register(name)}
                className="hidden"
              />

              <div
                className={cn(
                  "px-4 py-2 rounded-lg border cursor-pointer text-xs font-bold transition-all",
                //   "hover:border-indigo-400 hover:text-indigo-500",
                  isActive
                    ? "bg-indigo-50 text-indigo-500 border-indigo-500"
                    : " text-gray-500 border-gray-300"
                )}
              >
                {opt.label}
              </div>
            </label>
          )
        })}
      </div>
    </FieldWrapper>
  )
}