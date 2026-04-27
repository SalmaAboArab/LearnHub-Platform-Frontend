'use client'
import { FormProvider } from '@/shared/forms/form-provider'
import { RHFInput } from '@/shared/forms/rhf-input'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Skeleton } from '@/shared/ui/skeleton'
import { Spinner } from '@/shared/ui/spinner'
import { Textarea } from '@/shared/ui/textarea'
// import { yupResolver } from '@hookform/resolvers/yup/src/index.js'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'

export default function Test() {
  const [Open, setOpen] = useState(true)

  const Schema = Yup.object().shape({
    username: Yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const defaultValues = {
    username: '',
    email: '',
  };

  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log("data: ", data)});

  return (
    <div>Test
      <Button variant="contained" color="primary" size='sm'>Save</Button>
<Button variant="outlined" color="error">Delete</Button>
<Button variant="text" color="secondary">Cancel</Button>
      <Skeleton className='w-full h-10'/>
      <Spinner />
      <Textarea placeholder='Enter text here...' 
      className='w-80 h-40'
      />
      <Badge >New</Badge>
      <Modal open={Open} onClose={() => {setOpen(false)}} title='Modal Title'>
        <p>This is the content of the modal.</p>
      </Modal>
      <FormProvider methods={methods} onSubmit={onSubmit} className='p-6 '>
        <RHFInput name='username' label='Username' placeholder='Enter your username' className='border-gray-300'/>
        <RHFInput name='email' label='Email' type='email' placeholder='Enter your email' />
        <Button type='submit' disabled={isSubmitting} className='w-full'>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </FormProvider>
      {/* <Skeleton variant="text" width={200} /> */}
{/* <Skeleton variant="circular" width={40} height={40} /> */}
{/* <Skeleton variant="rounded" width="100%" height={120} /> */}
{/* <Skeleton variant="rectangular" animation="wave" height={200} /> */}
    </div>
  )
}
