// import { cn } from "@/utils/cn";

// export function Skeleton({ className='' }: { className?: string }) { // add shape type prop if needed
//   return <div className={cn('animate-pulse rounded-xl bg-gray-200', className)} />
// }

import { cn } from "@/utils/cn";

type SkeletonProps = {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  animation?: 'pulse' | 'wave' | false;
  width?: number | string;
  height?: number | string;
};

export function Skeleton({
  className = '',
  variant = 'rectangular',
  animation = 'pulse',
  width,
  height
}: SkeletonProps) {

  const base = 'bg-gray-200 overflow-hidden relative';

  const variants = {
    text: 'h-4 w-full rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-xl'
  };

  const animations = {
    pulse: 'animate-pulse',
    wave: 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent',
    none: ''
  };

  return (
    <div
      className={cn(
        base,
        variants[variant],
        animation !== false && animations[animation],
        className
      )}
      style={{ width, height }}
    />
  );
}