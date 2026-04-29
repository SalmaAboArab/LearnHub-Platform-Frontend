import React from "react";
import { Check, Play } from "lucide-react";

export function LearnHubBranding() {
  return (
    <div className="flex flex-col gap-8">
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-3">
        <div className="bg-indigo-500 rounded-lg p-2 flex items-center justify-center">
          <Play className="w-6 h-6 text-white fill-white" />
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900 leading-snug">
          LearnHub
        </h1>
      </div>

      {/* Main Headline */}
      <div className="flex flex-col gap-4">
        {/* <h2 className="text-5xl font-bold text-gray-900 leading-tight"> */}
        <h2 className="text-3xl font-extrabold text-gray-900 leading-snug">
          Unlock your <span className="text-indigo-500">potential</span> with
          world-class courses
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-base leading-relaxed">
          Join 500,000+ learners mastering skills with expert-led courses,
          interactive quizzes, and globally recognized certificates.
        </p>
      </div>

      {/* Features List */}
      <div className="flex flex-col gap-4">
        <CheckList text="10,000+ Courses across 200+ categories" />
        <CheckList text="Certificate programs from top universities" />
        <CheckList text="Learn at your own pace, on any device" />
      </div>

      {/* Reviews Section */}
      <div className="flex items-center gap-4">
        <div className="flex">
          <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
            AK
          </div>
          <div className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs font-bold relative right-1">
            ML
          </div>
          <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold relative right-2">
            JR
          </div>
          <div className="w-7 h-7 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-bold relative right-3">
            PS
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="font-semibold text-gray-900">4.9★</span>
          <span className="text-gray-500">from 50k+ reviews</span>
        </div>
      </div>
    </div>
  );
}

const CheckList = ({ text } : { text: string }) => (
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-green-300/30 mt-2 shrink-0 flex items-center justify-center">
        <Check className="w-3 h-3 " />
      </div>
      <p className="text-gray-500">
        {text}
      </p>
    </div>
);
