import { useEffect, useRef, useState } from 'react'
import { categories, categoryHref, contact, navItems } from '../data'
import type { NavItem } from '../data'
import { productCategories, categorySlug } from '../data/products'
import Icon from './Icon'
import Logo from './Logo'
import SearchBox from './SearchBox'
import './Navbar.css'

/** ¿El ítem del menú corresponde a la ruta actual? */
function isActive(item: NavItem, path: string): boolean {
  // Ítems que son anclas de la home (#marcas, /#contacto…) no se marcan.
  if (!item.href.startsWith('/') || item.href.startsWith('/#')) return false

  if (item.href === '/') return path === '/'

  if (path === item.href || path.startsWith(item.href + '/')) return true

  // "Productos" cubre también la ficha de un producto (/producto/<slug>).
  if (item.href === '/productos' && path.startsWith('/producto/')) return true

  // "Servicios" cubre cualquiera de sus subrutas.
  if (
    item.children?.some((c) => path === c.href || path.startsWith(c.href + '/'))
  ) {
    return true
  }

  return false
}

type NavbarProps = {
  path: string
  query: string
  navigate: (to: string) => void
}

export default function Navbar({ path, query, navigate }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [catsOpen, setCatsOpen] = useState(false)
  const catsRef = useRef<HTMLDivElement>(null)

  // Cerrar el panel de categorías al hacer clic fuera o con Escape.
  useEffect(() => {
    if (!catsOpen) return
    const onDocClick = (e: MouseEvent) => {
      if (!catsRef.current?.contains(e.target as Node)) setCatsOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCatsOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [catsOpen])

  return (
    <header className="nav">
      <div className="container nav__top">
        <div className="nav__cats-wrap" ref={catsRef}>
          <button
            className={`nav__cats ${catsOpen ? 'is-open' : ''}`}
            type="button"
            aria-haspopup="true"
            aria-expanded={catsOpen}
            onClick={() => setCatsOpen((v) => !v)}
          >
            <Icon name="menu" size={18} />
            Categorías
            <Icon name="chevron-down" size={15} />
          </button>

          {catsOpen && (
            <div className="nav__cats-panel" onClick={() => setCatsOpen(false)}>
              <p className="nav__cats-title">Productos</p>
              <ul>
                {productCategories.map((c) => (
                  <li key={c}>
                    <a href={`/productos/${categorySlug(c)}`}>{c}</a>
                  </li>
                ))}
                <li>
                  <a href="/productos" className="nav__cats-all">
                    Ver todo el catálogo
                    <Icon name="arrow-right" size={14} />
                  </a>
                </li>
              </ul>

              <p className="nav__cats-title">Servicios</p>
              <ul>
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <a href={categoryHref(cat.name)}>{cat.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <a href="/" className="nav__brand">
          <Logo />
        </a>

        <SearchBox
          key={query}
          initialQuery={query}
          navigate={navigate}
          onNavigated={() => setOpen(false)}
        />

        <div className="nav__actions">
          <button className="btn btn--red nav__quote" type="button">
            <Icon name="mail" size={16} />
            Cotizar ahora
          </button>
          <a
            className="btn btn--whatsapp nav__wa"
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={16} />
            WhatsApp
          </a>
          <button className="nav__cart" type="button" aria-label="Carrito">
            <Icon name="cart" size={20} />
            <span className="nav__cart-badge">0</span>
          </button>
          <button
            className="nav__burger"
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      <nav
        className={`nav__bar ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
      >
        <div className="container nav__links">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`nav__item ${item.children ? 'has-children' : ''}`}
            >
              <a
                href={item.href}
                className={isActive(item, path) ? 'is-active' : ''}
                aria-current={isActive(item, path) ? 'page' : undefined}
              >
                {item.label}
                {item.children && <Icon name="chevron-down" size={15} />}
              </a>
              {item.children && (
                <div className="nav__dropdown">
                  {item.children.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className={path === c.href ? 'is-active' : ''}
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}
