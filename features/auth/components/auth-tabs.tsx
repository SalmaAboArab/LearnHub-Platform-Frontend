'use client'

import React, { useState } from 'react'

interface TabsProps {
  defaultTab: 'login' | 'register'
  onTabChange?: (tab: 'login' | 'register') => void
  children: React.ReactNode
}

export function AuthTabs({ defaultTab, onTabChange, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabChange = (tab: 'login' | 'register') => {
    setActiveTab(tab)
    onTabChange?.(tab)
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2 bg-gray-100 rounded-lg p-1 w-full">
        <button
          onClick={() => handleTabChange('login')}
          className={`flex-1 px-8 py-2 rounded-md font-bold text-sm cursor-pointer transition-all ${
            activeTab === 'login'
              ? 'bg-white text-indigo-500 shadow-sm'
              : 'bg-transparent text-gray-500 hover:text-gray-700' // hover:text-indigo-500
          }`}
        >
          Login
        </button>
        <button
          onClick={() => handleTabChange('register')}
          className={`flex-1 px-8 py-2 rounded-md font-bold text-sm cursor-pointer transition-all ${
            activeTab === 'register'
              ? 'bg-white text-indigo-500 shadow-sm'
              : 'bg-transparent text-gray-500 hover:text-gray-700' // hover:text-indigo-500
          }`}
        >
          Register
        </button>
      </div>
      {children}
    </div>
  )
}
