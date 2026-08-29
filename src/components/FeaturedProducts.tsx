import { useRef } from 'react'
import { formatCLP } from '../data'
import { products } from '../data/products'
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
              <a
                key={p.slug}
                className="product-card"
                href={`#/producto/${p.slug}`}
              >
                <div className="product-card__media">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="product-card__body">
                  <span className="product-card__cat">{p.category}</span>
                  <h3>{p.name}</h3>
                  {p.price != null && (
                    <div className="product-card__price">
                      Desde {formatCLP(p.price)}
                    </div>
                  )}
                  {p.installIncluded && (
                    <p className="product-card__tag">
                      <span className="dot" /> Instalación incluida
                    </p>
                  )}
                  <span className="product-card__link">
                    Ver producto <Icon name="arrow-right" size={15} />
                  </span>
                </div>
              </a>
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

        <div className="products__all">
          <a className="btn btn--ghost" href="#/productos">
            Ver todos los productos
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
