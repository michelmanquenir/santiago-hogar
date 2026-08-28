import { contact } from '../data'
import Icon from './Icon'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contacts">
          <a href={`tel:${contact.phone}`}>
            <Icon name="phone" size={15} />
            {contact.phone}
          </a>
          <a href={contact.whatsappHref}>
            <Icon name="whatsapp" size={15} />
            {contact.whatsapp}
          </a>
          <a href={`mailto:${contact.email}`}>
            <Icon name="mail" size={15} />
            {contact.email}
          </a>
        </div>
        <div className="topbar__social">
          <span>Síguenos:</span>
          <a href="#" aria-label="Facebook">
            <Icon name="facebook" size={15} />
          </a>
          <a href="#" aria-label="Instagram">
            <Icon name="instagram" size={15} />
          </a>
          <a href="#" aria-label="YouTube">
            <Icon name="youtube" size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}
