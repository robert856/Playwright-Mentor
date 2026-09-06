import { NavLink } from 'react-router-dom'
import { STAGES } from '../types'

const icons: Record<string, string> = {
  spark: '✦',
  characters: '◇',
  outline: '▤',
  drafting: '✎',
  revision: '↻',
  finish: '⚑',
}

export default function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r border-card-border bg-card/60 px-4 py-6 md:block">
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wide text-ink-faint">
        Guided Path
      </p>
      <nav className="flex flex-col gap-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
              isActive
                ? 'bg-accent-soft font-medium text-accent-strong'
                : 'text-ink-soft hover:bg-paper-dark'
            }`
          }
        >
          <span className="w-4 text-center">⌂</span>
          Dashboard
        </NavLink>
        {STAGES.map((stage) => (
          <NavLink
            key={stage.id}
            to={stage.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive
                  ? 'bg-accent-soft font-medium text-accent-strong'
                  : 'text-ink-soft hover:bg-paper-dark'
              }`
            }
          >
            <span className="w-4 text-center">{icons[stage.id]}</span>
            {stage.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
