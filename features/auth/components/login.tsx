'use client'

import React from 'react'
import { AuthCard } from './auth-card'
import { AuthTabs } from './auth-tabs'
import { LoginForm } from './auth-card'

export function Login() {
  return (
    <AuthCard>
      <AuthTabs defaultTab="login">
        <LoginForm onSubmit={(data) => console.log('Login data:', data)} />
      </AuthTabs>
    </AuthCard>
  )
}
