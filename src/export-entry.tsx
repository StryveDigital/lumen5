// Entry point for the standalone page export (npm run build:pages).
// Renders ONE landing page directly, with no router, so each exported
// folder works on its own on any web host. '@page' is set per build in
// vite.pages.config.ts.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from '@page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
