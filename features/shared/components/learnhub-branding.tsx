import React from 'react'
import { Play } from 'lucide-react'

export function LearnHubBranding() {
  return (
    <div className="flex flex-col gap-8">
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-3">
        <div className="bg-indigo-500 rounded-lg p-2 flex items-center justify-center">
          <Play className="w-6 h-6 text-white fill-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">LearnHub</h1>
      </div>

      {/* Main Headline */}
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
          Unlock your <span className="text-indigo-500">potential</span> with world-class courses
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed">
          Join 500,000+ learners mastering skills with expert-led courses, interactive quizzes, and globally recognized certificates.
        </p>
      </div>

      {/* Features List */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0"></div>
          <p className="text-gray-700">10,000+ Courses across 200+ categories</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0"></div>
          <p className="text-gray-700">Certificate programs from top universities</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0"></div>
          <p className="text-gray-700">Learn at your own pace, on any device</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex items-center gap-4">
        <div className="flex">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-bold">AK</div>
          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white text-sm font-bold ml-2">ML</div>
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold ml-2">JR</div>
          <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-sm font-bold ml-2">PS</div>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">4.9★</span>
          <span className="text-gray-600 text-sm">from 50k+ reviews</span>
        </div>
      </div>
    </div>
  )
}
