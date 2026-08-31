import { useCallback, useEffect, useState } from 'react'

/**
 * Router mínimo basado en la History API (URLs limpias, sin `#`).
 *
 * - Devuelve `{ route, navigate }`. `route` es `pathname + search` y
 *   re-renderiza al cambiar (incluye cambios de `?query=`).
 * - Intercepta los clics en enlaces internos (`<a href="/...">`) para navegar
 *   sin recargar la página.
 * - Los enlaces externos, `tel:`, `mailto:`, `target="_blank"` y `download`
 *   se dejan pasar al navegador.
 * - Soporta anclas dentro de la página (`/#seccion`): navega y hace scroll.
 * - `navigate(to)` permite navegar por código (ej. desde el buscador).
 *
 * Requiere que el hosting sirva `index.html` para cualquier ruta
 * (ver `vercel.json`).
 */
function readRoute(): string {
  return window.location.pathname + window.location.search
}

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.slice(1))
  if (!id) {
    window.scrollTo({ top: 0 })
    return
  }
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  else window.scrollTo({ top: 0 })
}

export function useHistoryRoute() {
  const [route, setRoute] = useState(readRoute)

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.origin)
    const samePath = url.pathname === window.location.pathname

    window.history.pushState({}, '', url.pathname + url.search + url.hash)
    setRoute(url.pathname + url.search)

    if (url.hash) {
      if (samePath) scrollToHash()
      else
        window.requestAnimationFrame(() =>
          window.requestAnimationFrame(scrollToHash),
        )
    } else if (!samePath) {
      window.requestAnimationFrame(() =>
        window.requestAnimationFrame(() => window.scrollTo({ top: 0 })),
      )
    }
  }, [])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const anchor = (event.target as HTMLElement | null)?.closest('a')
      if (!anchor) return

      const target = anchor.getAttribute('target')
      if (target && target !== '_self') return
      if (anchor.hasAttribute('download')) return
      if (!anchor.getAttribute('href')) return

      let url: URL
      try {
        url = new URL(anchor.href)
      } catch {
        return
      }

      // Externo, tel:, mailto:, wa.me, etc. → lo maneja el navegador.
      if (url.origin !== window.location.origin) return

      event.preventDefault()

      // URL idéntica a la actual (ej. href="#"): no hacer nada.
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search &&
        !url.hash
      ) {
        return
      }

      navigate(url.pathname + url.search + url.hash)
    }

    const onPopState = () => setRoute(readRoute())

    document.addEventListener('click', onClick)
    window.addEventListener('popstate', onPopState)
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('popstate', onPopState)
    }
  }, [navigate])

  return { route, navigate }
}
