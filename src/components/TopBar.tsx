import { contact, socials } from '../data'
import Icon from './Icon'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contacts">
          <a href={contact.phoneHref}>
            <Icon name="phone" size={15} />
            {contact.phone}
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={15} />
            WhatsApp
          </a>
          <a href={`mailto:${contact.email}`}>
            <Icon name="mail" size={15} />
            {contact.email}
          </a>
        </div>
        <div className="topbar__social">
          <span>Síguenos:</span>
          {socials.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label}>
              <Icon name={s.icon} size={15} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
