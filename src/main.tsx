import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { PlayProvider } from './context/PlayContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PlayProvider>
        <App />
      </PlayProvider>
    </BrowserRouter>
  </StrictMode>,
)
