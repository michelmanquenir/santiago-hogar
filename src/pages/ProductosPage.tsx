import ProductCard from '../components/ProductCard'
import Icon from '../components/Icon'
import {
  categorySlug,
  productCategories,
  products,
  searchProducts,
} from '../data/products'
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
                {visible.length}{' '}
                {visible.length === 1
                  ? 'producto encontrado'
                  : 'productos encontrados'}{' '}
                para <strong>«{term}»</strong>.{' '}
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

        {visible.length > 0 ? (
          <div className="prods__grid">
            {visible.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div className="prods__empty">
            <Icon name="search" size={28} />
            <p>
              No encontramos productos para <strong>«{term}»</strong>.
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
