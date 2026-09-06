import type { SceneStatus } from '../types'

const styles: Record<SceneStatus, string> = {
  outlined: 'bg-accent-soft text-accent-strong',
  drafted: 'bg-success-soft text-success',
  revised: 'bg-paper-dark text-ink-soft',
}

const labels: Record<SceneStatus, string> = {
  outlined: 'Outlined',
  drafted: 'Drafted',
  revised: 'Revised',
}

export default function StatusBadge({ status }: { status: SceneStatus }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  )
}
