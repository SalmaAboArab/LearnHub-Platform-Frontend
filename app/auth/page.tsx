import React from 'react'
import { LearnHubBranding } from '@/features/shared/components/learnhub-branding'
import { Login } from '@/features/auth/components/login'

export default function Auth() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block">
          <LearnHubBranding />
        </div>

        {/* Right Side - Login Form */}
        <div className="flex justify-center lg:justify-end">
          <Login />
        </div>
      </div>
    </div>
  )
}
