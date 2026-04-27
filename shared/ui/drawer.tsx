import { cn } from "@/utils/cn";

export function Drawer({ open, onClose, side='right', children }: { open: boolean; onClose: () => void; side?: 'left' | 'right'; children: React.ReactNode }) {
  if (!open) return null
  const position = side === 'right' ? 'right-0' : 'left-0'
  return (
    <div className='fixed inset-0 z-50 bg-black/50' onClick={onClose}>
      <div className={cn('absolute top-0 h-full w-80 bg-white p-6 shadow-xl', position)} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}