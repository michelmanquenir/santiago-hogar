import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initAnalytics } from './lib/analytics'

// Se llama aquí (antes del primer render) y no en un useEffect de App: así el
// consentimiento por defecto se registra en el dataLayer lo antes posible,
// en vez de esperar a que React monte el árbol completo.
initAnalytics()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
