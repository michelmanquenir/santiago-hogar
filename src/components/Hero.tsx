import { contact } from '../data'
import Icon from './Icon'
import './Hero.css'

const bullets = ['Instalación', 'Mantención', 'Reparación']

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__media">
        <img
          src="/images/inicio/calderas-Rinnai-Anwo.png"
          alt="Calderas Rinnai y Anwo"
          loading="eager"
          width={1672}
          height={941}
        />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <h1>
            Servicio técnico de{' '}
            <span>Calderas Rinnai, Anwo y principales marcas</span>
          </h1>

          <hr className="hero__rule" />

          <ul className="hero__bullets">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="hero__cta">
            <a
              className="btn btn--whatsapp"
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-ga-event="contacto_whatsapp"
              data-ga-label="hero"
            >
              <Icon name="whatsapp" size={26} />
              Hablar por WhatsApp
            </a>
            <a
              className="btn hero__call"
              href={contact.phoneHref}
              data-ga-event="contacto_llamada"
              data-ga-label="hero"
            >
              <Icon name="phone" size={24} />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
