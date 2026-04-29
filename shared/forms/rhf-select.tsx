import { Controller, useFormContext } from "react-hook-form"
import FieldWrapper from "./field-wrapper"

export function RHFSelect({ name, label, options=[] }: any) {
  const { control, formState: { errors } } = useFormContext()
  const error = errors?.[name]?.message as string | undefined

  return (
    <FieldWrapper label={label} error={error}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select {...field} className='w-full h-10 rounded-xl border px-3 bg-white'>
            <option value=''>Select...</option>
            {options.map((item: any) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        )}
      />
    </FieldWrapper>
  )
}