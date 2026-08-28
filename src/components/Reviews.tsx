import { reviews } from '../data'
import Icon from './Icon'
import './Reviews.css'

function Stars({ n }: { n: number }) {
  return (
    <span className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={15} className={i < n ? '' : 'is-empty'} />
      ))}
    </span>
  )
}

export default function Reviews() {
  return (
    <section className="section reviews" id="nosotros">
      <div className="container">
        <div className="section-head">
          <h2>Lo que dicen nuestros clientes</h2>
        </div>

        <div className="reviews__summary">
          <span className="reviews__google">
            Reseñas reales de <strong>Google</strong>
          </span>
          <div className="reviews__score">
            <strong>4.9</strong>
            <Stars n={5} />
            <small>Basado en 152 reseñas</small>
          </div>
        </div>

        <div className="reviews__grid">
          {reviews.map((r) => (
            <article key={r.name} className="review-card">
              <header>
                <img src={r.avatar} alt={r.name} loading="lazy" />
                <div>
                  <strong>{r.name}</strong>
                  <small>{r.time}</small>
                </div>
              </header>
              <Stars n={r.rating} />
              <p>{r.text}</p>
              <span className="review-card__g">G</span>
            </article>
          ))}
        </div>

        <div className="reviews__cta">
          <a className="btn" href="#">
            Ver más reseñas en Google
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
