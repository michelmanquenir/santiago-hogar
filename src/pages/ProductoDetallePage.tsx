import { contact } from '../data'
import type { Product } from '../data/products'
import { products } from '../data/products'
import HelpAside from '../components/HelpAside'
import Icon from '../components/Icon'
import ProductCard from '../components/ProductCard'
import './page-shared.css'
import './ProductoDetallePage.css'

/** Arma el enlace de WhatsApp con la consulta de disponibilidad del producto. */
function buildWhatsAppHref(product: Product): string {
  const url = `${window.location.origin}${window.location.pathname}#/producto/${product.slug}`
  const specs = product.specs
    .slice(0, 4)
    .map((s) => `• ${s.label}: ${s.value}`)
    .join('\n')

  const message = [
    'Hola 👋, quiero consultar la *disponibilidad y el precio* de este producto:',
    '',
    `*${product.name}*`,
    `Categoría: ${product.category} · ${product.brand}`,
    ...(specs ? ['', specs] : []),
    '',
    `Ficha del producto: ${url}`,
  ].join('\n')

  return `${contact.productsWhatsappHref}?text=${encodeURIComponent(message)}`
}

export default function ProductoDetallePage({ product }: { product: Product }) {
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3)

  const waHref = buildWhatsAppHref(product)

  return (
    <div className="pd">
      <div className="container page-layout">
        <div className="pd-main">
          <nav className="page-crumb" aria-label="Ruta de navegación">
            <a href="#/">Inicio</a>
            <span className="page-crumb__sep">/</span>
            <a href="#/productos">Productos</a>
            <span className="page-crumb__sep">/</span>
            <a href={`#/productos/${product.category.toLowerCase()}`}>
              {product.category}
            </a>
            <span className="page-crumb__sep">/</span>
            <span className="page-crumb__current">{product.name}</span>
          </nav>

          <div className="pd-hero">
            <div className="pd-hero__media">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="pd-hero__info">
              <span className="pd-hero__cat">
                {product.category} · {product.brand}
              </span>
              <h1>{product.name}</h1>
              <p className="pd-hero__tagline">{product.tagline}</p>

              {product.installIncluded && (
                <p className="pd-hero__badge">
                  <Icon name="check" size={15} /> Instalación incluida
                </p>
              )}

              <div className="pd-hero__cta">
                <a
                  className="btn btn--whatsapp"
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={18} />
                  Consultar por WhatsApp
                </a>
                <a className="btn btn--ghost" href="#/productos">
                  Volver al catálogo
                </a>
              </div>
            </div>
          </div>

          <section className="pd-section">
            <div className="page-h">
              <span className="page-h__icon">
                <Icon name="clipboard" size={18} />
              </span>
              <h2>Descripción</h2>
            </div>
            {product.summary.map((paragraph, i) => (
              <p key={i} className="pd-text">
                {paragraph}
              </p>
            ))}
          </section>

          {product.features.length > 0 && (
            <section className="pd-section">
              <div className="page-h">
                <span className="page-h__icon">
                  <Icon name="check" size={18} />
                </span>
                <h2>Características</h2>
              </div>
              <ul className="pd-features">
                {product.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {product.specs.length > 0 && (
            <section className="pd-section">
              <div className="page-h">
                <span className="page-h__icon">
                  <Icon name="gear" size={18} />
                </span>
                <h2>Especificaciones</h2>
              </div>
              <div className="pd-specs__wrap">
                <table className="pd-specs">
                  <tbody>
                    {product.specs.map((s) => (
                      <tr key={s.label}>
                        <th scope="row">{s.label}</th>
                        <td>{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section className="pd-section">
              <div className="page-h">
                <span className="page-h__icon">
                  <Icon name="star" size={18} />
                </span>
                <h2>Productos relacionados</h2>
              </div>
              <div className="pd-related">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>

        <HelpAside ctaLabel="Consultar disponibilidad" ctaHref={waHref} />
      </div>
    </div>
  )
}
