import type { PlayProject } from '../types'

// Mock data standing in for a real backend / local persistence.
// Shape mirrors PlayProject so this can be swapped for a live data
// source (API call, localStorage, etc.) without touching the UI.
export const mockPlay: PlayProject = {
  title: 'The Light Between Acts',
  currentStage: 'characters',
  currentStageLabel: 'Character Development',
  currentStagePercent: 60,
  overallPercent: 35,
  mentorNudge: {
    headline: 'Next up',
    body: 'finish the relationship map for your three main characters.',
    actionLabel: 'Build clearer connections.',
    actionHint: 'Stronger scenes follow.',
  },
  quickStats: {
    scenesOutlined: 4,
    wordsDrafted: 1240,
    lastSessionLabel: '2 days ago',
    currentStreakDays: 5,
  },
  northStar: {
    logline: 'A stage manager who has never left the wings must direct opening night alone after the director walks out.',
    theme: 'Stepping into the spotlight you never asked for.',
    locked: true,
  },
  recentScenes: [
    {
      id: 'scene-1',
      number: 1,
      title: 'Opening Night',
      summary: 'The cast gathers for the first read-through. Tension and excitement surface.',
      minutesToRead: 12,
      status: 'outlined',
    },
    {
      id: 'scene-2',
      number: 2,
      title: 'The Argument',
      summary: 'Eleanor and Thomas clash over a secret from the past.',
      minutesToRead: 18,
      status: 'drafted',
    },
    {
      id: 'scene-3',
      number: 3,
      title: 'Between Acts',
      summary: 'A quiet moment shifts the stakes for everyone.',
      minutesToRead: 10,
      status: 'outlined',
    },
  ],
}
