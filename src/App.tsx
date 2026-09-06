import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import SparkAndLogline from './pages/SparkAndLogline'
import StagePlaceholder from './pages/StagePlaceholder'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="spark" element={<SparkAndLogline />} />
        <Route path="characters" element={<StagePlaceholder stage="characters" />} />
        <Route path="outline" element={<StagePlaceholder stage="outline" />} />
        <Route path="drafting" element={<StagePlaceholder stage="drafting" />} />
        <Route path="revision" element={<StagePlaceholder stage="revision" />} />
        <Route path="finish" element={<StagePlaceholder stage="finish" />} />
      </Route>
    </Routes>
  )
}

export default App
