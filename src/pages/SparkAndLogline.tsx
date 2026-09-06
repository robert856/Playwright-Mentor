import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import { usePlay } from '../context/PlayContext'

function loglineReaction(logline: string): string | null {
  const trimmed = logline.trim()
  if (!trimmed) return null
  const words = trimmed.split(/\s+/)
  if (trimmed.endsWith('?')) {
    return "That reads like the question the play answers — try stating it as what happens, not what's asked."
  }
  if (words.length < 8) {
    return 'Good bones. Now add what they want and what stands in the way.'
  }
  if (words.length > 45) {
    return "There's a lot here — see if you can cut it down to the one thing this play is really about."
  }
  return "That's got shape to it. Read it out loud — does it make you want to know what happens next?"
}

function themeReaction(theme: string): string | null {
  const trimmed = theme.trim()
  if (!trimmed) return null
  if (trimmed.split(/\s+/).length > 12) {
    return 'Themes tend to land hardest short. What if this were half as long?'
  }
  return "Keep this one nearby — you'll want to check every scene against it later."
}

export default function SparkAndLogline() {
  const { play, updateNorthStar, lockNorthStar, unlockNorthStar } = usePlay()
  const navigate = useNavigate()

  const [logline, setLogline] = useState(play.northStar.logline)
  const [theme, setTheme] = useState(play.northStar.theme)

  const isLocked = play.northStar.locked
  const loglineNote = useMemo(() => loglineReaction(logline), [logline])
  const themeNote = useMemo(() => themeReaction(theme), [theme])
  const canLock = logline.trim().length > 0 && theme.trim().length > 0

  function handleLock() {
    updateNorthStar({ logline, theme })
    lockNorthStar()
  }

  function handleEdit() {
    unlockNorthStar()
  }

  if (isLocked) {
    return (
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-serif-display text-3xl font-semibold text-ink">Spark & Logline</h1>
          <p className="mt-2 max-w-xl text-ink-soft">
            Your North Star is locked in. It'll follow you to every later screen.
          </p>
        </div>

        <Card className="max-w-2xl">
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                Logline
              </p>
              <p className="font-serif-display text-lg leading-snug text-ink">
                {play.northStar.logline}
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                Theme
              </p>
              <p className="text-ink">{play.northStar.theme}</p>
            </div>
          </div>
        </Card>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleEdit}
            className="rounded-lg border border-card-border bg-card px-4 py-2 text-sm font-medium text-ink-soft hover:bg-paper-dark"
          >
            Edit logline &amp; theme
          </button>
          <button
            type="button"
            onClick={() => navigate('/characters')}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-strong"
          >
            Head to Characters →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-serif-display text-3xl font-semibold text-ink">Spark & Logline</h1>
        <p className="mt-2 max-w-xl text-ink-soft">
          Find the one-sentence version of your play. This becomes your North Star — it'll show up
          at the top of every screen from here on.
        </p>
      </div>

      <Card className="max-w-2xl" icon={<span aria-hidden>✦</span>} title="What's the one-sentence version?">
        <div className="flex flex-col gap-3">
          <textarea
            value={logline}
            onChange={(e) => setLogline(e.target.value)}
            placeholder="A [protagonist] must [goal] before [stakes] — but [obstacle] is in the way."
            rows={3}
            className="w-full resize-none rounded-lg border border-card-border bg-paper px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />
          {loglineNote && (
            <div className="flex gap-2 rounded-lg bg-accent-soft px-3 py-2 text-sm text-accent-strong">
              <span aria-hidden>🪶</span>
              <span>{loglineNote}</span>
            </div>
          )}
        </div>
      </Card>

      <Card className="max-w-2xl" icon={<span aria-hidden>◐</span>} title="What's the theme?">
        <div className="flex flex-col gap-3">
          <p className="text-sm text-ink-soft">
            The idea underneath the plot — what this play is really about.
          </p>
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="e.g. the cost of ambition, forgiving a parent, found family"
            className="w-full rounded-lg border border-card-border bg-paper px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />
          {themeNote && (
            <div className="flex gap-2 rounded-lg bg-accent-soft px-3 py-2 text-sm text-accent-strong">
              <span aria-hidden>🪶</span>
              <span>{themeNote}</span>
            </div>
          )}
        </div>
      </Card>

      <div>
        <button
          type="button"
          disabled={!canLock}
          onClick={handleLock}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-40"
        >
          Lock logline &amp; theme
        </button>
        {!canLock && (
          <p className="mt-2 text-sm text-ink-faint">Fill in both fields to lock your North Star.</p>
        )}
      </div>
    </div>
  )
}
