import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { mockPlay } from '../data/mockPlay'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header playTitle={mockPlay.title} />
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
