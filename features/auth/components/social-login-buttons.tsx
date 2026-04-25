'use client'

import React from 'react'

export function SocialLoginButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        type="button"
        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
      >
      
        Google
      </button>
      <button
        type="button"
        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
      >
     
        GitHub
      </button>
    </div>
  )
}
