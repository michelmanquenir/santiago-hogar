import { contact, quoteWhatsappHref } from '../data'
import Icon from './Icon'
import './FloatingActions.css'

export default function FloatingActions() {
  return (
    <div className="fab">
      <a
        className="fab__btn fab__btn--wa"
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        data-ga-event="contacto_whatsapp"
        data-ga-label="floating"
      >
        <Icon name="whatsapp" size={22} />
        <span>WhatsApp</span>
      </a>
      <a
        className="fab__btn fab__btn--call"
        href={contact.phoneHref}
        aria-label="Llámanos"
        data-ga-event="contacto_llamada"
        data-ga-label="floating"
      >
        <Icon name="phone" size={20} />
        <span>Llamar</span>
      </a>
      <a
        className="fab__btn fab__btn--quote"
        href={quoteWhatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp"
        data-ga-event="contacto_cotizar"
        data-ga-label="floating"
      >
        <Icon name="mail" size={20} />
        <span>Cotizar</span>
      </a>
    </div>
  )
}
