import type { CategoryPageConfig } from '../data/categoryPages'
import HelpAside from '../components/HelpAside'
import Icon from '../components/Icon'
import './page-shared.css'
import './CategoryPage.css'

export default function CategoryPage({
  config,
}: {
  config: CategoryPageConfig
}) {
  const {
    crumb,
    title,
    intro,
    heroImage,
    splits,
    featured,
    featuredCta,
    benefits,
  } = config

  return (
    <div className="cat">
      <div className="container page-layout">
        <div className="cat-main">
          <nav className="page-crumb" aria-label="Ruta de navegación">
            <a href="/">Inicio</a>
            <span className="page-crumb__sep">/</span>
            <a href="/#categorias">Categorías</a>
            <span className="page-crumb__sep">/</span>
            <span className="page-crumb__current">{crumb}</span>
          </nav>

          <div className={`page-head ${heroImage ? 'has-img' : ''}`}>
            <div>
              <h1 className="page-title">{title}</h1>
              <p className="page-intro">{intro}</p>
            </div>
            {heroImage && (
              <div className="page-head__img">
                <img src={heroImage} alt={title} />
              </div>
            )}
          </div>

          <div className="cat-splits">
            {splits.map((s) => (
              <article
                key={s.title}
                className={`cat-split cat-split--${s.accent}`}
              >
                <div className="cat-split__media">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <div className="cat-split__body">
                  <div className="cat-split__head">
                    <span className="cat-split__icon">
                      <Icon name={s.icon} size={22} />
                    </span>
                    <h2>{s.title}</h2>
                  </div>
                  <p>{s.description}</p>
                  <ul className="cat-split__list">
                    {s.bullets.map((b) => (
                      <li key={b}>
                        <Icon name="check" size={16} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${s.accent === 'red' ? 'btn--red' : ''}`}
                    href="/productos"
                  >
                    {s.cta}
                    <Icon name="arrow-right" size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <section className="cat-featured">
            <div className="page-h">
              <span className="page-h__icon">
                <Icon name="star" size={18} />
              </span>
              <h2>Productos destacados</h2>
            </div>

            <div
              className={`cat-featured__grid ${
                featured.length >= 5 ? 'cat-featured__grid--5' : ''
              }`}
            >
              {featured.map((p) => (
                <article key={p.name} className="cat-prod">
                  <div className="cat-prod__media">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <h3>{p.name}</h3>
                  {p.spec && <p className="cat-prod__spec">{p.spec}</p>}
                  <button className="cat-prod__btn" type="button">
                    {featuredCta}
                  </button>
                </article>
              ))}
            </div>

            <div className="cat-featured__all">
              <a className="btn btn--ghost" href="/productos">
                Ver todos los productos
                <Icon name="arrow-right" size={16} />
              </a>
            </div>
          </section>
        </div>

        <HelpAside benefits={benefits} showLogo ctaLabel="Contactar asesor" />
      </div>
    </div>
  )
}
