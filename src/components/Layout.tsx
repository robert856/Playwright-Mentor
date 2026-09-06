import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import NorthStarBanner from './NorthStarBanner'
import { usePlay } from '../context/PlayContext'

export default function Layout() {
  const { play } = usePlay()

  return (
    <div className="flex min-h-screen flex-col">
      <Header playTitle={play.title} />
      <NorthStarBanner northStar={play.northStar} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 py-8 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
