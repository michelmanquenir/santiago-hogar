import { useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { searchProducts } from '../data/products'
import Icon from './Icon'
import './SearchBox.css'

const MAX_SUGGESTIONS = 6

type SearchBoxProps = {
  initialQuery: string
  navigate: (to: string) => void
  onNavigated?: () => void
}

export default function SearchBox({
  initialQuery,
  navigate,
  onNavigated,
}: SearchBoxProps) {
  const [value, setValue] = useState(initialQuery)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const rootRef = useRef<HTMLDivElement>(null)

  const q = value.trim()
  const results = useMemo(
    () => (q.length >= 2 ? searchProducts(q).slice(0, MAX_SUGGESTIONS) : []),
    [q],
  )
  const showPanel = open && q.length >= 2

  // Cerrar al hacer clic fuera.
  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  const close = () => {
    setOpen(false)
    onNavigated?.()
  }

  const goToResults = () => {
    navigate(q ? `/productos?q=${encodeURIComponent(q)}` : '/productos')
    close()
  }

  const goToProduct = (slug: string) => {
    navigate(`/producto/${slug}`)
    close()
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setOpen(false)
      return
    }
    if (!showPanel || results.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => (i + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => (i <= 0 ? results.length - 1 : i - 1))
    } else if (e.key === 'Enter' && active >= 0) {
      e.preventDefault()
      goToProduct(results[active].slug)
    }
  }

  return (
    <div className="nav__search" ref={rootRef}>
      <form
        className="searchbox__row"
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          goToResults()
        }}
      >
        <input
          type="search"
          value={value}
          placeholder="Buscar calderas, calefones, radiadores..."
          aria-label="Buscar productos"
          autoComplete="off"
          onChange={(e) => {
            setValue(e.target.value)
            setActive(-1)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
        />
        <button type="submit" aria-label="Buscar">
          <Icon name="search" size={18} />
        </button>
      </form>

      {showPanel && (
        <div className="searchbox__panel">
          {results.length > 0 ? (
            <>
              <ul>
                {results.map((p, i) => (
                  <li key={p.slug}>
                    <a
                      href={`/producto/${p.slug}`}
                      className={i === active ? 'is-active' : ''}
                      onMouseEnter={() => setActive(i)}
                      onClick={close}
                    >
                      <img src={p.image} alt="" loading="lazy" />
                      <span>
                        <strong>{p.name}</strong>
                        <small>{p.category}</small>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="searchbox__all"
                onClick={goToResults}
              >
                Ver todos los resultados para «{q}»
                <Icon name="arrow-right" size={14} />
              </button>
            </>
          ) : (
            <p className="searchbox__empty">Sin resultados para «{q}»</p>
          )}
        </div>
      )}
    </div>
  )
}
