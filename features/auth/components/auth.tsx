"use client";

import React, { useState } from "react";
import { AuthCard } from "./auth-card";
import { AuthTabs } from "./auth-tabs";
import { LoginForm } from "./auth-card";
import Register from "./register";
import { SocialLoginButtons } from "./social-login-buttons";

export function Auth() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  return (
    <AuthCard>
      <AuthTabs currentTab={activeTab} onTabChange={setActiveTab}>
        {activeTab === "login" ? (
          <LoginForm onSubmit={(data) => console.log("Login data:", data)} />
        ) : (
          <Register />
        )}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-white text-gray-500">
              or continue with
            </span>
          </div>
        </div>
        <SocialLoginButtons />
      </AuthTabs>
    </AuthCard>
  );
}
