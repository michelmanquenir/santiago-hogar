import ProductCard from '../components/ProductCard'
import Icon from '../components/Icon'
import {
  categorySlug,
  productCategories,
  products,
  searchProducts,
} from '../data/products'
import { search } from '../lib/search'
import './page-shared.css'
import './ProductosPage.css'

type ProductosPageProps = {
  categorySlug?: string
  query?: string
}

export default function ProductosPage({
  categorySlug: activeSlug = '',
  query = '',
}: ProductosPageProps) {
  const term = query.trim()

  const activeCategory =
    productCategories.find((c) => categorySlug(c) === activeSlug) ?? null

  const base = term ? searchProducts(term) : products
  const visible = activeCategory
    ? base.filter((p) => p.category === activeCategory)
    : base

  const matchedServices = term
    ? search(term).filter((r) => r.kind === 'servicio')
    : []

  const plural = (n: number, one: string, many: string) =>
    n === 1 ? one : many

  return (
    <div className="prods">
      <div className="container">
        <nav className="page-crumb" aria-label="Ruta de navegación">
          <a href="/">Inicio</a>
          <span className="page-crumb__sep">/</span>
          {term ? (
            <>
              <a href="/productos">Productos</a>
              <span className="page-crumb__sep">/</span>
              <span className="page-crumb__current">Búsqueda</span>
            </>
          ) : activeCategory ? (
            <>
              <a href="/productos">Productos</a>
              <span className="page-crumb__sep">/</span>
              <span className="page-crumb__current">{activeCategory}</span>
            </>
          ) : (
            <span className="page-crumb__current">Productos</span>
          )}
        </nav>

        <div className="page-head">
          <h1 className="page-title">
            {term ? 'Resultados de búsqueda' : 'Productos'}
          </h1>
          <p className="page-intro">
            {term ? (
              <>
                Para <strong>«{term}»</strong>: {visible.length}{' '}
                {plural(visible.length, 'producto', 'productos')}
                {matchedServices.length > 0 &&
                  ` y ${matchedServices.length} ${plural(
                    matchedServices.length,
                    'servicio',
                    'servicios',
                  )}`}
                .{' '}
                <a href="/productos" className="prods__clear">
                  Limpiar búsqueda
                </a>
              </>
            ) : (
              <>
                Todo nuestro catálogo de calefones, calderas, radiadores y
                termostatos. Elige un producto para ver sus características y
                especificaciones.
              </>
            )}
          </p>
        </div>

        {!term && (
          <div
            className="prods__filters"
            role="tablist"
            aria-label="Filtrar por categoría"
          >
            <a
              href="/productos"
              className={`prods__chip ${!activeCategory ? 'is-active' : ''}`}
            >
              Todos
            </a>
            {productCategories.map((c) => (
              <a
                key={c}
                href={`/productos/${categorySlug(c)}`}
                className={`prods__chip ${
                  activeCategory === c ? 'is-active' : ''
                }`}
              >
                {c}
              </a>
            ))}
          </div>
        )}

        {matchedServices.length > 0 && (
          <section className="prods__services">
            <h2>Servicios</h2>
            <div className="prods__services-grid">
              {matchedServices.map((s) => (
                <a key={s.href} href={s.href} className="prods__service">
                  <span className="prods__service-icon">
                    {s.icon && <Icon name={s.icon} size={22} />}
                  </span>
                  <span className="prods__service-name">{s.title}</span>
                  <Icon name="arrow-right" size={16} />
                </a>
              ))}
            </div>
          </section>
        )}

        {visible.length > 0 && (
          <div className="prods__grid">
            {visible.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}

        {visible.length === 0 && matchedServices.length === 0 && (
          <div className="prods__empty">
            <Icon name="search" size={28} />
            <p>
              No encontramos resultados para <strong>«{term}»</strong>.
            </p>
            <a className="btn btn--ghost" href="/productos">
              Ver todo el catálogo
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
