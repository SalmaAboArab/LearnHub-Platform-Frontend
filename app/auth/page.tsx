import React from 'react'
import { LearnHubBranding } from '@/features/shared/components/learnhub-branding'
import { Login } from '@/features/auth/components/login'

export default function Auth() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center md:m-4">
        {/* Left Side - Branding */}
        <div className="hidden md:block">
          <LearnHubBranding />
        </div>

        {/* Right Side - Login Form */}
        <div className="flex justify-center md:justify-end">
          <Login />
        </div>
      </div>
    </div>
  )
}
