'use client'

import React from 'react'
import { AuthCard, AuthTabs, LoginForm } from './auth-card'

export function Login() {
  return (
    <AuthCard>
      <AuthTabs defaultTab="login">
        <LoginForm onSubmit={(data) => console.log('Login data:', data)} />
      </AuthTabs>
    </AuthCard>
  )
}
