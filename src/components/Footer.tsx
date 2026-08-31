import { contact, footerLinks, paymentMethods, socials } from '../data'
import Icon from './Icon'
import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="light" />
          <p>
            Más de 20 años entregando soluciones con calidad, confianza y
            compromiso.
          </p>
          <div className="footer__social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                <Icon name={s.icon} size={16} />
              </a>
            ))}
            <a
              href={contact.whatsappHref}
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={16} />
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="footer__col">
            <h3>{title}</h3>
            <ul>
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__col">
          <h3>Contacto</h3>
          <ul className="footer__contact">
            <li>
              <Icon name="phone" size={16} />
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <Icon name="whatsapp" size={16} />
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escríbenos por WhatsApp
              </a>
            </li>
            <li>
              <Icon name="mail" size={16} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Icon name="map-pin" size={16} />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 Santiago Hogar. Todos los derechos reservados.</p>
          <div className="footer__pay">
            {paymentMethods.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
