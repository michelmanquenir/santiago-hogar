import { contact } from '../data'
import Icon from './Icon'
import type { IconName } from './Icon'
import Logo from './Logo'
import './HelpAside.css'

export type AsideBenefit = {
  title: string
  text: string
  icon: IconName
}

type HelpAsideProps = {
  benefits?: AsideBenefit[]
  showLogo?: boolean
  ctaLabel?: string
  ctaHref?: string
}

export default function HelpAside({
  benefits,
  showLogo = false,
  ctaLabel = 'Solicitar servicio',
  ctaHref = contact.whatsappHref,
}: HelpAsideProps) {
  const hasBenefits = !!benefits && benefits.length > 0

  return (
    <aside className="help-aside">
      {showLogo && (
        <div className="help-aside__brand">
          <Logo />
        </div>
      )}

      {hasBenefits && (
        <>
          <ul className="help-aside__benefits">
            {benefits!.map((b) => (
              <li key={b.title}>
                <span className="help-aside__benefit-icon">
                  <Icon name={b.icon} size={18} />
                </span>
                <div>
                  <strong>{b.title}</strong>
                  <span>{b.text}</span>
                </div>
              </li>
            ))}
          </ul>
          <hr className="help-aside__rule" />
        </>
      )}

      <h3>¿Necesitas asesoría?</h3>
      <p className="help-aside__lead">Nuestro equipo está listo para ayudarte.</p>

      <ul className="help-aside__contact">
        <li>
          <Icon name="phone" size={17} />
          <a href={contact.phoneHref}>{contact.phone}</a>
        </li>
        <li>
          <Icon name="whatsapp" size={17} />
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escríbenos por WhatsApp
          </a>
        </li>
        <li>
          <Icon name="mail" size={17} />
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <Icon name="clock" size={17} />
          <span>Lunes a Viernes, 08:30 a 18:00 hrs.</span>
        </li>
      </ul>

      <a
        className="btn btn--red btn--block"
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {ctaLabel}
      </a>
    </aside>
  )
}
