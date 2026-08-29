import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import FloatingActions from './components/FloatingActions'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TopBar from './components/TopBar'
import { categoryPages } from './data/categoryPages'
import { productBySlug } from './data/products'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
import LimpiezaRedesPage from './pages/LimpiezaRedesPage'
import ProductoDetallePage from './pages/ProductoDetallePage'
import ProductosPage from './pages/ProductosPage'
import ServicioGasPage from './pages/ServicioGasPage'

/** Ruta actual: solo los hashes que empiezan con "#/" cuentan como página. */
function useRoute(): string {
  const read = () =>
    window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : '/'

  const [route, setRoute] = useState(read)

  useEffect(() => {
    const onChange = () => setRoute(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  useEffect(() => {
    if (window.location.hash.startsWith('#/')) window.scrollTo(0, 0)
  }, [route])

  return route
}

function renderRoute(route: string): ReactNode {
  if (route === '/servicio-tecnico-de-gas') return <ServicioGasPage />
  if (route === '/limpieza-de-redes') return <LimpiezaRedesPage />

  if (route === '/productos') return <ProductosPage />
  if (route.startsWith('/productos/')) {
    return <ProductosPage categorySlug={route.slice('/productos/'.length)} />
  }
  if (route.startsWith('/producto/')) {
    const product = productBySlug(route.slice('/producto/'.length))
    if (product) return <ProductoDetallePage product={product} />
  }

  const config = categoryPages[route.replace(/^\//, '')]
  if (config) return <CategoryPage config={config} />

  return <HomePage />
}

export default function App() {
  const route = useRoute()

  return (
    <>
      <TopBar />
      <Navbar />
      <main>{renderRoute(route)}</main>
      <Footer />
      <FloatingActions />
    </>
  )
}
