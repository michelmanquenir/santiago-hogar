import { contact, footerLinks, paymentMethods } from '../data'
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
            <a href="#" aria-label="Facebook">
              <Icon name="facebook" size={16} />
            </a>
            <a href="#" aria-label="Instagram">
              <Icon name="instagram" size={16} />
            </a>
            <a href="#" aria-label="WhatsApp">
              <Icon name="whatsapp" size={16} />
            </a>
            <a href="#" aria-label="YouTube">
              <Icon name="youtube" size={16} />
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="footer__col">
            <h3>{title}</h3>
            <ul>
              {links.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
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
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </li>
            <li>
              <Icon name="whatsapp" size={16} />
              <a href={contact.whatsappHref}>{contact.whatsapp}</a>
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
