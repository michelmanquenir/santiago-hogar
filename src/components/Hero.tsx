import { contact } from '../data'
import Icon from './Icon'
import './Hero.css'

const bullets = [
  'Instalación',
  'Mantención',
  'Reparación',
  'Limpieza de redes',
  'Venta de artefactos',
]

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>
            Especialistas en <span>Calefacción</span>
          </h1>

          <ul className="hero__bullets">
            {bullets.map((b) => (
              <li key={b}>
                <span className="dot" />
                {b}
              </li>
            ))}
          </ul>

          <p className="hero__lead">
            Más de 20 años entregando soluciones con calidad, confianza y
            compromiso.
          </p>

          <div className="hero__cta">
            <a
              className="btn btn--whatsapp"
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} />
              Hablar por WhatsApp
            </a>
            <a className="btn" href={`tel:${contact.phone}`}>
              <Icon name="phone" size={18} />
              Llamar ahora
            </a>
          </div>
          <div className="hero__cta">
            <a className="btn btn--ghost" href="#/productos">
              <Icon name="cart" size={18} />
              Ver productos
            </a>
            <a className="btn btn--ghost" href="#/servicio-tecnico-de-gas">
              <Icon name="wrench" size={18} />
              Solicitar servicio
            </a>
          </div>

          <div className="hero__rating">
            <span className="hero__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" size={18} />
              ))}
            </span>
            <strong>+20 años</strong> de experiencia en el rubro
          </div>
        </div>

        <div className="hero__media">
          <img
            src="https://picsum.photos/seed/tecnico-calefaccion/720/760"
            alt="Técnico de Santiago Hogar instalando una caldera"
            loading="eager"
            width={720}
            height={760}
          />
          <div className="hero__badge">
            <Icon name="shield" size={22} />
            <div>
              <strong>Trabajo garantizado</strong>
              <small>Técnicos certificados</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
