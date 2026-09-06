import type { Scene } from '../types'
import StatusBadge from './StatusBadge'

export default function SceneCard({ scene }: { scene: Scene }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-card-border bg-card p-4 transition-shadow hover:shadow-[0_2px_10px_rgba(43,38,32,0.06)]">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-strong">
          {String(scene.number).padStart(2, '0')}
        </span>
        <h3 className="font-serif-display text-base font-semibold text-ink">
          {scene.title}
        </h3>
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-soft">
        {scene.summary}
      </p>
      <div className="flex items-center justify-between text-xs text-ink-faint">
        <span className="flex items-center gap-1">
          <span aria-hidden>🕐</span>
          {scene.minutesToRead} min read
        </span>
        <StatusBadge status={scene.status} />
      </div>
    </div>
  )
}
