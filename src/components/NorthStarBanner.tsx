import { Link } from 'react-router-dom'
import type { NorthStar } from '../types'

export default function NorthStarBanner({ northStar }: { northStar: NorthStar }) {
  if (!northStar.locked) return null

  return (
    <div className="flex items-center gap-3 border-b border-card-border bg-accent-soft px-6 py-2 text-sm sm:px-10">
      <span aria-hidden className="text-accent-strong">
        ✦
      </span>
      <p className="flex-1 truncate text-accent-strong">
        <span className="font-medium">North Star:</span> {northStar.logline}
      </p>
      <Link
        to="/spark"
        className="shrink-0 whitespace-nowrap text-xs font-medium text-accent-strong underline decoration-accent-strong/40 underline-offset-2 hover:decoration-accent-strong"
      >
        View / edit
      </Link>
    </div>
  )
}
