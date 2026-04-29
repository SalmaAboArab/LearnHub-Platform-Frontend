export function RadioGroup({ options, name, value, onChange }: { options: { label: string; value: string }[]; name: string; value?: string; onChange?: (value: string) => void }) {
  return (
    <div className='flex flex-col gap-2'>
      {options.map((option) => (
        <label key={option.value} className='inline-flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
            className='h-4 w-4 text-blue-600'
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  )
}