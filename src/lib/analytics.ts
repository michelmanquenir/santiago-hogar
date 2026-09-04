/**
 * Google Analytics 4 (gtag.js), sin dependencias.
 *
 * - `initAnalytics()` carga el script y arma el seguimiento de clics por
 *   atributo: cualquier elemento con `data-ga-event="algo"` (y opcionalmente
 *   `data-ga-label="detalle"`) envía un evento automáticamente al hacer clic.
 * - `trackPageview(path)` envía un pageview manual — la app es una SPA de un
 *   solo `index.html`, así que GA no detecta los cambios de ruta solo.
 * - `trackEvent(action, label)` para los casos con lógica propia (buscador,
 *   newsletter) donde un atributo estático no alcanza.
 *
 * ID de medición: flujo "santiagohogar" (Administrador → Flujos de datos).
 * Solo se carga en producción (el sitio publicado), nunca en `npm run dev`.
 */
const GA_MEASUREMENT_ID: string = 'G-VMKDPGYR00'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

let initialized = false

function isConfigured(): boolean {
  return GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' && /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID)
}

export function initAnalytics(): void {
  if (initialized || !import.meta.env.PROD || !isConfigured()) return
  initialized = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  // Los pageviews de la SPA se envían a mano en cada cambio de ruta (App.tsx).
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })

  // Seguimiento de clics por atributo: data-ga-event="..." [data-ga-label="..."].
  document.addEventListener('click', (event) => {
    const el = (event.target as HTMLElement | null)?.closest<HTMLElement>(
      '[data-ga-event]',
    )
    if (!el?.dataset.gaEvent) return
    trackEvent(el.dataset.gaEvent, el.dataset.gaLabel)
  })
}

/** Envía un pageview manual. */
export function trackPageview(path: string): void {
  if (!window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

/** Envía un evento personalizado a GA4. */
export function trackEvent(action: string, label?: string): void {
  if (!window.gtag) return
  window.gtag('event', action, label ? { event_label: label } : undefined)
}
