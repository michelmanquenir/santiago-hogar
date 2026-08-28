import { features } from '../data'
import Icon from './Icon'
import './Features.css'

export default function Features() {
  return (
    <section className="features">
      <div className="container features__grid">
        {features.map((f) => (
          <div key={f.title} className="feature">
            <span className="feature__icon">
              <Icon name={f.icon} size={24} />
            </span>
            <div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
