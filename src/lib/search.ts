import type { IconName } from '../components/Icon'
import { categories, categoryHref } from '../data'
import { searchProducts } from '../data/products'

export type SearchResult = {
  kind: 'servicio' | 'producto'
  title: string
  subtitle: string
  href: string
  /** Imagen (productos) o ícono (servicios). */
  image?: string
  icon?: IconName
}

/** Minúsculas y sin acentos, para comparar texto de búsqueda. */
function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
}

function matchServices(query: string): SearchResult[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean)
  if (terms.length === 0) return []

  return categories
    .filter((c) => {
      const haystack = normalize(`${c.name} ${c.description}`)
      return terms.every((t) => haystack.includes(t))
    })
    .map((c) => ({
      kind: 'servicio' as const,
      title: c.name,
      subtitle: 'Servicio',
      href: categoryHref(c.name),
      icon: c.icon,
    }))
}

/** Búsqueda unificada: servicios primero, luego productos. */
export function search(query: string): SearchResult[] {
  const q = query.trim()
  if (q.length < 2) return []

  const services = matchServices(q)
  const products: SearchResult[] = searchProducts(q).map((p) => ({
    kind: 'producto',
    title: p.name,
    subtitle: p.category,
    href: `/producto/${p.slug}`,
    image: p.image,
  }))

  return [...services, ...products]
}
