import { useEffect, useState } from 'react'

/**
 * Router mínimo basado en la History API (URLs limpias, sin `#`).
 *
 * - Devuelve el `pathname` actual y re-renderiza al cambiar.
 * - Intercepta los clics en enlaces internos (`<a href="/...">`) para navegar
 *   sin recargar la página.
 * - Los enlaces externos, `tel:`, `mailto:`, `target="_blank"` y `download`
 *   se dejan pasar al navegador.
 * - Soporta anclas dentro de la página (`/#seccion`): navega y hace scroll.
 *
 * Requiere que el hosting sirva `index.html` para cualquier ruta
 * (ver `vercel.json`).
 */
export function useHistoryRoute(): string {
  const [path, setPath] = useState(() => window.location.pathname || '/')

  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1))
      if (!id) {
        window.scrollTo({ top: 0 })
        return
      }
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo({ top: 0 })
    }

    const navigate = (to: string) => {
      const url = new URL(to, window.location.origin)
      const samePage = url.pathname === window.location.pathname
      window.history.pushState({}, '', url.pathname + url.search + url.hash)

      if (samePage) {
        scrollToHash()
        return
      }
      setPath(url.pathname)
      // Espera a que React monte la nueva página antes de hacer scroll.
      window.requestAnimationFrame(() =>
        window.requestAnimationFrame(scrollToHash),
      )
    }

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

      // Enlace "muerto" (href="#") o a la misma URL sin ancla: no hacer nada.
      if (url.pathname === window.location.pathname && !url.hash) return

      navigate(url.pathname + url.search + url.hash)
    }

    const onPopState = () => setPath(window.location.pathname || '/')

    document.addEventListener('click', onClick)
    window.addEventListener('popstate', onPopState)
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  return path
}
