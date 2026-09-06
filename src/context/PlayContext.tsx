import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import type { NorthStar, PlayProject } from '../types'
import { mockPlay } from '../data/mockPlay'

const STORAGE_KEY = 'playwright-mentor:play'

function loadInitialPlay(): PlayProject {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as PlayProject
      // Merge over the mock so newly-added fields always have a value,
      // even for state saved before this field existed.
      return { ...mockPlay, ...parsed, northStar: { ...mockPlay.northStar, ...parsed.northStar } }
    }
  } catch {
    // Corrupt or unavailable storage — fall back to the mock silently.
  }
  return mockPlay
}

interface PlayContextValue {
  play: PlayProject
  updateNorthStar: (patch: Partial<Pick<NorthStar, 'logline' | 'theme'>>) => void
  lockNorthStar: () => void
  unlockNorthStar: () => void
}

const PlayContext = createContext<PlayContextValue | null>(null)

export function PlayProvider({ children }: PropsWithChildren) {
  const [play, setPlay] = useState<PlayProject>(loadInitialPlay)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(play))
    } catch {
      // Best-effort persistence — fine to no-op if storage is unavailable.
    }
  }, [play])

  const updateNorthStar = useCallback(
    (patch: Partial<Pick<NorthStar, 'logline' | 'theme'>>) => {
      setPlay((prev) => ({
        ...prev,
        northStar: { ...prev.northStar, ...patch, locked: false },
      }))
    },
    [],
  )

  const lockNorthStar = useCallback(() => {
    setPlay((prev) => ({ ...prev, northStar: { ...prev.northStar, locked: true } }))
  }, [])

  const unlockNorthStar = useCallback(() => {
    setPlay((prev) => ({ ...prev, northStar: { ...prev.northStar, locked: false } }))
  }, [])

  const value = useMemo(
    () => ({ play, updateNorthStar, lockNorthStar, unlockNorthStar }),
    [play, updateNorthStar, lockNorthStar, unlockNorthStar],
  )

  return <PlayContext.Provider value={value}>{children}</PlayContext.Provider>
}

export function usePlay() {
  const ctx = useContext(PlayContext)
  if (!ctx) throw new Error('usePlay must be used within a PlayProvider')
  return ctx
}
