import HelpAside from '../components/HelpAside'
import Icon from '../components/Icon'
import type { IconName } from '../components/Icon'
import './page-shared.css'
import './RadiadoresPage.css'

type Split = {
  accent: 'red' | 'blue'
  icon: IconName
  title: string
  description: string
  bullets: string[]
  cta: string
  href: string
}

const splits: Split[] = [
  {
    accent: 'red',
    icon: 'radiator',
    title: 'Radiadores',
    description: 'Amplia variedad y accesorios para tu sistema de calefacción.',
    bullets: ['Radiadores de aluminio', 'Accesorios', 'Toalleros'],
    cta: 'Ver radiadores',
    href: '/productos/radiadores',
  },
  {
    accent: 'blue',
    icon: 'gear',
    title: 'Termostatos',
    description: 'Controla la temperatura y optimiza el consumo de energía.',
    bullets: ['Termostatos programables', 'Válvulas motorizadas'],
    cta: 'Ver termostatos',
    href: '/productos/termostatos',
  },
]

type Equipo = {
  name: string
  description: string
  image: string
  href: string
}

const equipos: Equipo[] = [
  {
    name: 'Válvulas motorizadas',
    description: 'Control automático para sistemas de calefacción.',
    image: '/images/productos/valvula-motorizada.jpg',
    href: '/producto/valvula-motorizada-anwo',
  },
  {
    name: 'Válvulas termostáticas',
    description: 'Regulación de temperatura por ambiente.',
    image: '/images/productos/valvula-termostatica-angular.jpg',
    href: '/producto/kit-valvula-termostatica-angular-ek',
  },
  {
    name: 'Radiadores',
    description: 'Soluciones de calefacción para distintos espacios.',
    image:
      '/images/servicios/radiadores-y-calefaccion/destacados/radiador-doble-dk.jpg',
    href: '/productos/radiadores',
  },
  {
    name: 'Toalleros',
    description: 'Calefacción y secado eficiente para el baño.',
    image: '/images/productos/seca-toalla.jpg',
    href: '/producto/secatoallas-anwo',
  },
]

export default function RadiadoresPage() {
  return (
    <div className="rad">
      <div className="container">
        <nav className="page-crumb" aria-label="Ruta de navegación">
          <a href="/">Inicio</a>
          <span className="page-crumb__sep">/</span>
          <a href="/#categorias">Categorías</a>
          <span className="page-crumb__sep">/</span>
          <span className="page-crumb__current">Radiadores y calefacción</span>
        </nav>

        <header className="rad-hero">
          <div className="rad-hero__text">
            <h1 className="page-title">Radiadores y Calefacción</h1>
            <p>
              Soluciones eficientes y confiables para mantener tu hogar o negocio
              siempre cálido. Venta e instalación de radiadores, accesorios y
              sistemas de calefacción.
            </p>
          </div>
          <div className="rad-hero__media">
            <img
              src="/images/servicios/radiadores-y-calefaccion/hero.jpg"
              alt="Técnico de Santiago Hogar instalando un radiador"
            />
            <img
              src="/images/servicios/radiadores-y-calefaccion/termostatos.jpg"
              alt="Técnico configurando un termostato con una clienta"
            />
          </div>
        </header>

        <div className="page-layout">
          <div className="rad-main">
            <div className="rad-splits">
              {splits.map((s) => (
                <article
                  key={s.title}
                  className={`rad-split rad-split--${s.accent}`}
                >
                  <div className="rad-split__intro">
                    <div className="rad-split__head">
                      <span className="rad-split__icon">
                        <Icon name={s.icon} size={22} />
                      </span>
                      <h2>{s.title}</h2>
                    </div>
                    <p>{s.description}</p>
                  </div>

                  <ul className="rad-split__list">
                    {s.bullets.map((b) => (
                      <li key={b}>
                        <Icon name="check" size={15} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    className={`btn rad-split__cta ${
                      s.accent === 'red' ? 'btn--red' : ''
                    }`}
                    href={s.href}
                    data-ga-event="modulo_click"
                    data-ga-label={`radiadores:${s.title}`}
                  >
                    {s.cta}
                    <Icon name="arrow-right" size={16} />
                  </a>
                </article>
              ))}
            </div>

            <section className="rad-equipos">
              <h2>Equipos que atendemos</h2>
              <div className="rad-equipos__grid">
                {equipos.map((e) => (
                  <a
                    key={e.name}
                    className="rad-equipo"
                    href={e.href}
                    data-ga-event="modulo_click"
                    data-ga-label={`equipo:${e.name}`}
                  >
                    <div className="rad-equipo__media">
                      <img src={e.image} alt={e.name} loading="lazy" />
                    </div>
                    <div className="rad-equipo__body">
                      <h3>{e.name}</h3>
                      <p>{e.description}</p>
                      <span className="rad-equipo__link">
                        Ver equipo <Icon name="arrow-right" size={15} />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>

          <HelpAside ctaLabel="Solicitar servicio" context="radiadores" />
        </div>
      </div>
    </div>
  )
}
