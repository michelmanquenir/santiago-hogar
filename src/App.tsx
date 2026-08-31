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

function renderRoute(path: string): ReactNode {
  if (path === '/servicio-tecnico-de-gas') return <ServicioGasPage />
  if (path === '/radiadores-y-calefaccion') return <RadiadoresPage />
  if (path === '/limpieza-de-redes') return <LimpiezaRedesPage />

  if (path === '/productos') return <ProductosPage />
  if (path.startsWith('/productos/')) {
    return <ProductosPage categorySlug={path.slice('/productos/'.length)} />
  }
  if (path.startsWith('/producto/')) {
    const product = productBySlug(path.slice('/producto/'.length))
    if (product) return <ProductoDetallePage product={product} />
  }

  return <HomePage />
}

export default function App() {
  const path = useHistoryRoute()

  return (
    <>
      <TopBar />
      <Navbar path={path} />
      <main>{renderRoute(path)}</main>
      <Footer />
      <FloatingActions />
    </>
  )
}
