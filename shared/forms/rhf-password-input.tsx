import React, { useState } from "react"
import { RHFInput } from "./rhf-input"

export function RHFPasswordInput({ name, label }: any) {
  const [show, setShow] = useState(false)
  return (
    <div className='space-y-1'>
      <RHFInput name={name} label={label} type={show ? 'text' : 'password'} />
      <button type='button' onClick={() => setShow(!show)} className='text-sm text-blue-600'>
        {show ? 'Hide' : 'Show'} password
      </button>
    </div>
  )
}