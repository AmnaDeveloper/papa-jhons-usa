import { getTodayFormatted } from '../../lib/utils/date'

export default function LastUpdated() {
  const date = getTodayFormatted()
  
  return (
    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-md px-3 py-1 text-sm font-semibold text-green-700 mb-4 transition-all duration-300 hover:bg-red-50 hover:border-red-200 hover:text-red-700 cursor-default shadow-sm">
      <span className="text-base">🕐</span>
      <span className="uppercase tracking-tight">Last Updated: <strong className="font-black">{date}</strong></span>
    </div>
  )
}
