'use client'

import React from 'react'

interface AuthCardProps {
  children: React.ReactNode
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-sm">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        {children}
      </div>
    </div>
  )
}

