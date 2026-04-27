export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title?: string; children: React.ReactNode }) {
  if (!open) return null
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4' onClick={onClose}>
      <div className='w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl' onClick={(e) => e.stopPropagation()}>
        {title && <h2 className='mb-4 text-xl font-semibold'>{title}</h2>}
        {children}
      </div>
    </div>
  )
}