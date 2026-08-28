import { contact } from '../data'
import Icon from './Icon'
import './FloatingActions.css'

export default function FloatingActions() {
  return (
    <div className="fab">
      <a
        className="fab__btn fab__btn--wa"
        href={contact.whatsappHref}
        aria-label="Escríbenos por WhatsApp"
      >
        <Icon name="whatsapp" size={22} />
        <span>WhatsApp</span>
      </a>
      <a
        className="fab__btn fab__btn--call"
        href={`tel:${contact.phone}`}
        aria-label="Llámanos"
      >
        <Icon name="phone" size={20} />
        <span>Llamar</span>
      </a>
      <button className="fab__btn fab__btn--quote" type="button">
        <Icon name="mail" size={20} />
        <span>Cotizar</span>
      </button>
    </div>
  )
}
