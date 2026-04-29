import React from 'react'

export default function FieldWrapper({ label, error, children }: any) {
  return (
    <div className='space-y-1'>
      {label && <label className='text-sm font-medium'>{label}</label>}
      {children}
      {error && <p className='text-sm text-red-600'>{error}</p>}
    </div>
  )
}