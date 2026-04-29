import { useFormContext } from "react-hook-form"
import FieldWrapper from "./field-wrapper"

export function RHFFileUpload({ name, label }: any) {
  const { register } = useFormContext()

  return (
    <FieldWrapper label={label}>
      <input type='file' {...register(name)} className='block w-full text-sm' />
    </FieldWrapper>
  )
}