import type { Product } from '../data/products'
import Icon from './Icon'
import './ProductCard.css'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a className="pcard" href={`/producto/${product.slug}`}>
      <div className="pcard__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="pcard__cat">{product.category}</span>
      </div>
      <div className="pcard__body">
        <h3>{product.name}</h3>
        <p className="pcard__tagline">{product.tagline}</p>
        <div className="pcard__foot">
          <span className="pcard__link">
            Ver producto <Icon name="arrow-right" size={15} />
          </span>
        </div>
      </div>
    </a>
  )
}
