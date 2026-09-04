import { categories, categoryHref } from '../data'
import Icon from './Icon'
import './Categories.css'

export default function Categories() {
  return (
    <section className="section categories" id="categorias">
      <div className="container">
        <div className="section-head">
          <h2>Explora nuestras categorías</h2>
        </div>

        <div className="categories__grid">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={categoryHref(cat.name)}
              className="cat-card"
              data-ga-event="categoria_click"
              data-ga-label={cat.name}
            >
              <div className="cat-card__media">
                <img src={cat.image} alt={cat.name} loading="lazy" />
                <span className="cat-card__icon">
                  <Icon name={cat.icon} size={22} />
                </span>
              </div>
              <div className="cat-card__body">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <span className="cat-card__link">
                  Ver categoría <Icon name="arrow-right" size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
