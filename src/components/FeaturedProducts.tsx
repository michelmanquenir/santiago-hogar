import Icon from './Icon'
import './FeaturedProducts.css'

type FeaturedCard = {
  category: string
  name: string
  description: string
  image: string
  href: string
}

const cards: FeaturedCard[] = [
  {
    category: 'Calefont',
    name: 'Calefont ANWO Htech Hydro 18',
    description: 'Disponible en múltiples capacidades: 10L / 13L / 16L / 24L',
    image: '/images/productos/calefont-anwo-hitech-hydro-18.jpg',
    href: '/producto/calefont-anwo-hitech-hydro-18',
  },
  {
    category: 'Calderas',
    name: 'Caldera ANWO Aqua Plus 2.0',
    description:
      'Disponible en múltiples capacidades: 20/22 – 30/32 – 35/42 – 40/42',
    image: '/images/productos/caldera-anwo-aqua-plus-2-0.jpg',
    href: '/producto/caldera-anwo-aqua-plus-2-0',
  },
  {
    category: 'Radiadores',
    name: 'Radiadores',
    description:
      'Disponible en múltiples capacidades: 500x400 / 500x600 / 500x800 / 500x1000 / 500x1200 / 500x1400',
    image: '/images/productos/radiador-simple-anwo-ek.jpg',
    href: '/producto/radiador-simple-anwo-ek',
  },
  {
    category: 'Termostatos',
    name: 'Termostatos ANWO',
    description: 'Disponible en versiones simples o programables.',
    image: '/images/productos/termostato-programable-anwo-atp-1.png',
    href: '/producto/termostato-programable-anwo-atp-1',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="section products" id="productos">
      <div className="container">
        <div className="section-head">
          <h2>Productos destacados</h2>
        </div>

        <div className="products__grid">
          {cards.map((c) => (
            <a key={c.name} className="product-card" href={c.href}>
              <div className="product-card__media">
                <img src={c.image} alt={c.name} loading="lazy" />
              </div>
              <div className="product-card__body">
                <span className="product-card__cat">{c.category}</span>
                <h3>{c.name}</h3>
                <p className="product-card__tagline">{c.description}</p>
                <span className="product-card__link">
                  Ver producto <Icon name="arrow-right" size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="products__all">
          <a className="btn btn--ghost" href="/productos">
            Ver todos los productos
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
