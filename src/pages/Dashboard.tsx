import { Link } from 'react-router-dom'
import Card from '../components/Card'
import ProgressRing from '../components/ProgressRing'
import SceneCard from '../components/SceneCard'
import { mockPlay } from '../data/mockPlay'

export default function Dashboard() {
  const { title, currentStageLabel, currentStagePercent, overallPercent, mentorNudge, quickStats, recentScenes } =
    mockPlay

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="font-serif-display text-4xl font-semibold text-ink sm:text-5xl">
          {title}
        </h1>
        <div className="mx-auto mt-6 max-w-md">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-ink-soft">Overall Progress</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-track">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-700 ease-out"
                style={{ width: `${overallPercent}%` }}
              />
            </div>
            <span className="text-sm font-medium text-ink-soft">{overallPercent}%</span>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <Card icon={<span aria-hidden>◐</span>} title="Current Stage">
          <div className="flex flex-col items-center gap-3 pt-1 text-center">
            <p className="text-sm font-medium text-ink">{currentStageLabel}</p>
            <ProgressRing percent={currentStagePercent} />
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong">
              In progress
            </span>
          </div>
        </Card>

        <Card icon={<span aria-hidden>✨</span>} title="What's Next">
          <p className="mb-4 text-sm leading-relaxed text-ink">
            <span className="font-semibold text-accent-strong">{mentorNudge.headline}:</span>{' '}
            {mentorNudge.body}
          </p>
          <div className="rounded-xl bg-accent-soft px-4 py-3 text-sm text-accent-strong">
            <p className="font-medium">{mentorNudge.actionLabel}</p>
            <p className="text-accent-strong/80">{mentorNudge.actionHint}</p>
          </div>
        </Card>

        <Card icon={<span aria-hidden>▦</span>} title="Quick Stats">
          <dl className="flex flex-col gap-3 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">Scenes outlined:</dt>
              <dd className="font-semibold text-accent-strong">{quickStats.scenesOutlined}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">Words drafted:</dt>
              <dd className="font-semibold text-ink">{quickStats.wordsDrafted.toLocaleString()}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">Last session:</dt>
              <dd className="font-medium text-ink">{quickStats.lastSessionLabel}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink-soft">Current streak:</dt>
              <dd className="font-semibold text-accent-strong">
                {quickStats.currentStreakDays} days
              </dd>
            </div>
          </dl>
        </Card>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-serif-display text-lg font-semibold text-ink">
            <span aria-hidden>📖</span> Recent Scenes
          </h2>
          <Link
            to="/outline"
            className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-strong"
          >
            View all scenes <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentScenes.map((scene) => (
            <SceneCard key={scene.id} scene={scene} />
          ))}
        </div>
      </div>
    </div>
  )
}
