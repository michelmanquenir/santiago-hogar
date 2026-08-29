import Brands from '../components/Brands'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Reviews from '../components/Reviews'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <Brands />
      <Reviews />
      <Newsletter />
    </>
  )
}
