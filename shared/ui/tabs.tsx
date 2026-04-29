import { cn } from "@/utils/cn";

export function Tabs({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (tab: string) => void }) {
  return (
    <div>
      <div className='flex gap-2 border-b'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={cn('px-4 py-2 text-sm font-medium border-b-2 transition', active === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500')}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}