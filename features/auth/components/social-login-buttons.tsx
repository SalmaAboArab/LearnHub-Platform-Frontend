'use client'

import React from 'react'

export function SocialLoginButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        type="button"
        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg transition-colors font-bold text-sm hover:text-indigo-500 text-gray-700 cursor-pointer"
      >
      
        Google
      </button>
      <button
        type="button"
        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg transition-colors font-bold text-sm hover:text-indigo-500 text-gray-700 cursor-pointer"
      >
     
        GitHub
      </button>
    </div>
  )
}
