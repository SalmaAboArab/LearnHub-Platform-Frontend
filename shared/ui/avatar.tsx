export function Avatar({ src, name }: { src?: string, name: string }) {
  if (src) return <img src={src} alt={name} className='h-10 w-10 rounded-full object-cover' />
  return <div className='h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center font-medium'>{name.charAt(0).toUpperCase()}</div>
}