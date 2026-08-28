import { brands } from '../data'
import './Brands.css'

export default function Brands() {
  return (
    <section className="section brands" id="marcas">
      <div className="container">
        <div className="section-head">
          <h2>Trabajamos con las mejores marcas</h2>
        </div>
        <div className="brands__row">
          {brands.map((b) => (
            <span key={b} className="brands__item">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
