import ProductCard from '../components/ProductCard'
import {
  categorySlug,
  productCategories,
  products,
} from '../data/products'
import './page-shared.css'
import './ProductosPage.css'

export default function ProductosPage({
  categorySlug: activeSlug = '',
}: {
  categorySlug?: string
}) {
  const activeCategory =
    productCategories.find((c) => categorySlug(c) === activeSlug) ?? null

  const visible = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products

  return (
    <div className="prods">
      <div className="container">
        <nav className="page-crumb" aria-label="Ruta de navegación">
          <a href="/">Inicio</a>
          <span className="page-crumb__sep">/</span>
          {activeCategory ? (
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
          <h1 className="page-title">Productos</h1>
          <p className="page-intro">
            Todo nuestro catálogo de calefones, calderas, radiadores y
            termostatos. Elige un producto para ver sus características y
            especificaciones.
          </p>
        </div>

        <div className="prods__filters" role="tablist" aria-label="Filtrar por categoría">
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

        <div className="prods__grid">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
