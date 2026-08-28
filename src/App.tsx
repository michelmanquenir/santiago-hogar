import Brands from './components/Brands'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import Features from './components/Features'
import FloatingActions from './components/FloatingActions'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Reviews from './components/Reviews'
import TopBar from './components/TopBar'

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Features />
        <Brands />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
