import { useFormContext } from "react-hook-form"

export function RHFCheckbox({ name, label }: any) {
  const { register } = useFormContext()

  return (
    <label className='inline-flex items-center gap-2 cursor-pointer'>
      <input type='checkbox' {...register(name)} className='h-4 w-4 rounded' />
      <span>{label}</span>
    </label>
  )
}