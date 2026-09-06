import type { StageId } from '../types'
import Card from '../components/Card'

interface StageCopy {
  title: string
  tagline: string
  bullets: string[]
}

const copy: Record<StageId, StageCopy> = {
  spark: {
    title: 'Spark & Logline',
    tagline: 'Find the one-sentence version of your play — your North Star for everything that follows.',
    bullets: [
      'Guided prompts to shape your logline and theme',
      'Mentor reacts in real time and asks clarifying questions',
      'Lock a working logline that carries through every later screen',
    ],
  },
  characters: {
    title: 'Characters',
    tagline: 'Build out who wants what from whom, and where the tension lives.',
    bullets: [
      'Character cards: want, obstacle, secret, voice notes',
      'A visual relationship map of who needs what from whom',
      'Mentor flags missing tension or underdeveloped characters',
    ],
  },
  outline: {
    title: 'Structure & Outline',
    tagline: 'Lay out your scenes and watch the shape of the play emerge.',
    bullets: [
      'Drag-and-drop scene cards on an act timeline',
      'Each card tracks setting, characters, what happens, what changes',
      'Mentor flags weak turns or missing rising action',
    ],
  },
  drafting: {
    title: 'Drafting Room',
    tagline: 'A clean, focused space for writing dialogue and stage directions.',
    bullets: [
      'Writing interface built for play formatting',
      'Side panel with scene outline and character notes',
      'Focus mode hides everything but the current scene',
    ],
  },
  revision: {
    title: 'Revision Studio',
    tagline: 'Table-read, prioritize, and track every version of your script.',
    bullets: [
      'Table-read simulation for you or collaborators',
      'A feedback checklist generated from your goals',
      'Version history with cut-vs-keep decisions',
    ],
  },
  finish: {
    title: 'Finish Line',
    tagline: 'Polish, format, and get your play ready to send out.',
    bullets: [
      'Polish checklist and standard play formatting export',
      'PDF export',
      'Submission tracker',
    ],
  },
}

export default function StagePlaceholder({ stage }: { stage: StageId }) {
  const info = copy[stage]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-serif-display text-3xl font-semibold text-ink">{info.title}</h1>
        <p className="mt-2 max-w-xl text-ink-soft">{info.tagline}</p>
      </div>

      <Card className="max-w-xl">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-strong">
          <span aria-hidden>🚧</span> Coming soon
        </div>
        <p className="mb-4 text-sm text-ink-soft">
          This module isn't built yet. Here's what's planned for it:
        </p>
        <ul className="flex flex-col gap-2 text-sm text-ink">
          {info.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="text-accent" aria-hidden>
                •
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
