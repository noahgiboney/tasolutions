import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import { applySiteMeta, detectSite } from './site.ts'
import DreamTeam from './sites/DreamTeam.tsx'
import SlatWasher from './sites/SlatWasher.tsx'
import './index.css'

const site = detectSite()
applySiteMeta(site)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {site === 'slatwasher' ? (
      <SlatWasher />
    ) : site === 'dreamteam' ? (
      <DreamTeam />
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </StrictMode>,
)
