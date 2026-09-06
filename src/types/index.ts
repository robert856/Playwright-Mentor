export type StageId =
  | 'spark'
  | 'characters'
  | 'outline'
  | 'drafting'
  | 'revision'
  | 'finish'

export interface StageInfo {
  id: StageId
  label: string
  path: string
}

export const STAGES: StageInfo[] = [
  { id: 'spark', label: 'Spark & Logline', path: '/spark' },
  { id: 'characters', label: 'Characters', path: '/characters' },
  { id: 'outline', label: 'Structure & Outline', path: '/outline' },
  { id: 'drafting', label: 'Drafting Room', path: '/drafting' },
  { id: 'revision', label: 'Revision Studio', path: '/revision' },
  { id: 'finish', label: 'Finish Line', path: '/finish' },
]

export type SceneStatus = 'outlined' | 'drafted' | 'revised'

export interface Scene {
  id: string
  number: number
  title: string
  summary: string
  minutesToRead: number
  status: SceneStatus
}

export interface MentorNudge {
  headline: string
  body: string
  actionLabel: string
  actionHint: string
}

export interface QuickStats {
  scenesOutlined: number
  wordsDrafted: number
  lastSessionLabel: string
  currentStreakDays: number
}

export interface NorthStar {
  logline: string
  theme: string
  locked: boolean
}

export interface PlayProject {
  title: string
  currentStage: StageId
  currentStageLabel: string
  currentStagePercent: number
  overallPercent: number
  mentorNudge: MentorNudge
  quickStats: QuickStats
  recentScenes: Scene[]
  northStar: NorthStar
}
