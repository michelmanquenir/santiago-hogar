import { useRef } from 'react'
import { formatCLP, products } from '../data'
import Icon from './Icon'
import './FeaturedProducts.css'

export default function FeaturedProducts() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.8 * dir
    track.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="section products" id="productos">
      <div className="container">
        <div className="section-head">
          <h2>Productos destacados</h2>
        </div>

        <div className="products__carousel">
          <button
            className="products__arrow products__arrow--prev"
            type="button"
            aria-label="Anterior"
            onClick={() => scroll(-1)}
          >
            <Icon name="chevron-left" size={20} />
          </button>

          <div className="products__track" ref={trackRef}>
            {products.map((p) => (
              <article key={p.name} className="product-card">
                <div className="product-card__media">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="product-card__body">
                  <h3>
                    {p.name} <span>{p.spec}</span>
                  </h3>
                  <div className="product-card__price">{formatCLP(p.price)}</div>
                  {p.installIncluded && (
                    <p className="product-card__tag">
                      <span className="dot" /> Instalación incluida
                    </p>
                  )}
                  <button className="btn btn--red btn--block" type="button">
                    <Icon name="cart" size={16} />
                    Agregar al carrito
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button
            className="products__arrow products__arrow--next"
            type="button"
            aria-label="Siguiente"
            onClick={() => scroll(1)}
          >
            <Icon name="chevron-right" size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
