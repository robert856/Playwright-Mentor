interface HeaderProps {
  playTitle: string
}

export default function Header({ playTitle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-card-border bg-card/70 px-6 py-3">
      <div className="flex items-center gap-2">
        <span aria-hidden className="text-lg text-accent">
          🪶
        </span>
        <span className="font-serif-display text-lg font-semibold text-ink">
          Playwright <span className="font-sans font-normal text-ink-soft">Mentor</span>
        </span>
        <span className="mx-3 hidden text-ink-faint sm:inline">/</span>
        <span className="hidden text-sm text-ink-soft sm:inline">{playTitle}</span>
      </div>
      <button
        type="button"
        className="flex items-center gap-2 rounded-full border border-card-border bg-card px-2 py-1 text-sm text-ink-soft hover:bg-paper-dark"
      >
        <span
          aria-hidden
          className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-strong"
        >
          RW
        </span>
        <span aria-hidden>⌄</span>
      </button>
    </header>
  )
}
