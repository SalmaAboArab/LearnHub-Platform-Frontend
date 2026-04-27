import { useFormContext } from "react-hook-form"
import FieldWrapper from "./field-wrapper"

export function RHFTextarea({ name, label, ...props }: any) {
  const { register, formState: { errors } } = useFormContext()
  const error = errors?.[name]?.message as string | undefined

  return (
    <FieldWrapper label={label} error={error}>
      <textarea
        {...register(name)}
        {...props}
        className='w-full min-h-28 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500'
      />
    </FieldWrapper>
  )
}