/**
 * Google Tag Manager (contenedor GTM-5TDZV4LL, cargado desde `index.html`).
 *
 * Este módulo solo empuja eventos a `window.dataLayer`; los tags que hacen
 * algo con esos eventos (GA4, Google Ads, etc.) se configuran dentro de GTM.
 *
 * - `initAnalytics()` arma el seguimiento de clics por atributo: cualquier
 *   elemento con `data-ga-event="algo"` (y opcional `data-ga-label="detalle"`)
 *   empuja un evento al hacer clic.
 * - `trackPageview(path)` empuja una vista de página en cada cambio de ruta —
 *   la app es una SPA y GTM no detecta los cambios de ruta solo.
 * - `trackEvent(action, label)` para los casos con lógica propia (buscador,
 *   newsletter).
 */

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

let initialized = false

function pushEvent(payload: Record<string, unknown>): void {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

export function initAnalytics(): void {
  if (initialized) return
  initialized = true

  // Seguimiento de clics por atributo: data-ga-event="..." [data-ga-label="..."].
  document.addEventListener('click', (event) => {
    const el = (event.target as HTMLElement | null)?.closest<HTMLElement>(
      '[data-ga-event]',
    )
    if (!el?.dataset.gaEvent) return
    trackEvent(el.dataset.gaEvent, el.dataset.gaLabel)
  })
}

/** Empuja una vista de página al dataLayer (SPA: una por cada cambio de ruta). */
export function trackPageview(path: string): void {
  pushEvent({
    event: 'spa_pageview',
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

/** Empuja un evento personalizado al dataLayer. */
export function trackEvent(action: string, label?: string): void {
  pushEvent(label ? { event: action, event_label: label } : { event: action })
}
