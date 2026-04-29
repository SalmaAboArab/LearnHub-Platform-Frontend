import React from "react";
import { cn } from "@/utils/cn";

type FieldWrapperProps = {
  label?: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

export default function FieldWrapper({
  label,
  error,
  children,
  required,
  className,
  icon,
}: FieldWrapperProps) {
  const child = children as React.ReactElement<
    React.InputHTMLAttributes<HTMLInputElement>
  >;
  return (
    <div className={cn("space-y-1", className)}>
      {" "}
      {/*Add error styling to the container if there's an error : , error && "text-red-600",*/}
      {label && (
        <label className="block text-sm font-semibold text-gray-900/75 font-sans">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        {/* Inject padding into child automatically */}
        {React.cloneElement(child, {
          className: cn(child.props.className, icon ? "pl-10" : ""),
        })}
      </div>
      {error && <p className="text-sm text-red-600 leading-tight font-sans">{error}</p>}
    </div>
  );
}
