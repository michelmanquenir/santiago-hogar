import { trackEvent } from '../lib/analytics'
import Icon from './Icon'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <div className="newsletter__text">
          <span className="newsletter__icon">
            <Icon name="mail" size={26} />
          </span>
          <div>
            <h2>Suscríbete a nuestro newsletter</h2>
            <p>Recibe ofertas exclusivas y consejos para tu hogar.</p>
          </div>
        </div>
        <form
          className="newsletter__form"
          onSubmit={(e) => {
            e.preventDefault()
            trackEvent('newsletter_submit')
          }}
        >
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico..."
            aria-label="Correo electrónico"
            required
          />
          <button className="btn btn--red" type="submit">
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  )
}
