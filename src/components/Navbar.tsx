import { useState } from 'react'
import { contact, navItems } from '../data'
import Icon from './Icon'
import Logo from './Logo'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav__top">
        <button className="nav__cats" type="button">
          <Icon name="menu" size={18} />
          Categorías
        </button>

        <a href="#inicio" className="nav__brand">
          <Logo />
        </a>

        <form
          className="nav__search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="Buscar calderas, calefones, radiadores..."
            aria-label="Buscar productos"
          />
          <button type="submit" aria-label="Buscar">
            <Icon name="search" size={18} />
          </button>
        </form>

        <div className="nav__actions">
          <button className="btn btn--red nav__quote" type="button">
            <Icon name="mail" size={16} />
            Cotizar ahora
          </button>
          <a
            className="btn btn--whatsapp nav__wa"
            href={contact.whatsappHref}
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

      <nav className={`nav__bar ${open ? 'is-open' : ''}`}>
        <div className="container nav__links">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`nav__item ${item.children ? 'has-children' : ''}`}
            >
              <a href="#" className={item.label === 'Inicio' ? 'is-active' : ''}>
                {item.label}
                {item.children && <Icon name="chevron-down" size={15} />}
              </a>
              {item.children && (
                <div className="nav__dropdown">
                  {item.children.map((c) => (
                    <a key={c} href="#">
                      {c}
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
