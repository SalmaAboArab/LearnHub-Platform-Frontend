export function Badge({ children }: { children: React.ReactNode }) { // add color, variant and size props if needed
  return <span className='inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-2 py-1 text-xs font-medium'>{children}</span>
}