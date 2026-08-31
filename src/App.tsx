import type { ReactNode } from 'react'
import FloatingActions from './components/FloatingActions'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TopBar from './components/TopBar'
import { productBySlug } from './data/products'
import { useHistoryRoute } from './lib/router'
import HomePage from './pages/HomePage'
import LimpiezaRedesPage from './pages/LimpiezaRedesPage'
import ProductoDetallePage from './pages/ProductoDetallePage'
import ProductosPage from './pages/ProductosPage'
import RadiadoresPage from './pages/RadiadoresPage'
import ServicioGasPage from './pages/ServicioGasPage'

function renderRoute(path: string, query: string): ReactNode {
  if (path === '/servicio-tecnico-de-gas') return <ServicioGasPage />
  if (path === '/radiadores-y-calefaccion') return <RadiadoresPage />
  if (path === '/limpieza-de-redes') return <LimpiezaRedesPage />

  if (path === '/productos') return <ProductosPage query={query} />
  if (path.startsWith('/productos/')) {
    return (
      <ProductosPage
        categorySlug={path.slice('/productos/'.length)}
        query={query}
      />
    )
  }
  if (path.startsWith('/producto/')) {
    const product = productBySlug(path.slice('/producto/'.length))
    if (product) return <ProductoDetallePage product={product} />
  }

  return <HomePage />
}

export default function App() {
  const { route, navigate } = useHistoryRoute()

  const qIndex = route.indexOf('?')
  const path = qIndex === -1 ? route : route.slice(0, qIndex)
  const query =
    qIndex === -1
      ? ''
      : (new URLSearchParams(route.slice(qIndex)).get('q') ?? '')

  return (
    <>
      <TopBar />
      <Navbar path={path} query={query} navigate={navigate} />
      <main>{renderRoute(path, query)}</main>
      <Footer />
      <FloatingActions />
    </>
  )
}
