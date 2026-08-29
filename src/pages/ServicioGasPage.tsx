import HelpAside from '../components/HelpAside'
import Icon from '../components/Icon'
import type { IconName } from '../components/Icon'
import './page-shared.css'
import './ServicioGasPage.css'

type Service = {
  title: string
  description: string
  icon: IconName
}

const services: Service[] = [
  {
    title: 'Instalación',
    description:
      'Instalación profesional de calderas y calefont. Cumplimos con todas las normativas vigentes.',
    icon: 'flame',
  },
  {
    title: 'Mantención',
    description:
      'Mantención preventiva para un funcionamiento seguro, eficiente y de mayor durabilidad.',
    icon: 'wrench',
  },
  {
    title: 'Reparación',
    description:
      'Diagnóstico y reparación de fallas en calderas y calefont de todas las marcas.',
    icon: 'gear',
  },
  {
    title: 'Revisión de Gas',
    description:
      'Revisión de combustión, presión y seguridad de gas para tu tranquilidad.',
    icon: 'shield',
  },
]

const equipos: { label: string; image: string }[] = [
  { label: 'Calderas murales', image: 'https://picsum.photos/seed/caldera-mural/320/320' },
  { label: 'Calderas de piso', image: 'https://picsum.photos/seed/caldera-piso/320/320' },
  { label: 'Calefont', image: 'https://picsum.photos/seed/calefont-gas/320/320' },
  { label: 'Radiadores', image: 'https://picsum.photos/seed/radiador-gas/320/320' },
  { label: 'Sistemas de control', image: 'https://picsum.photos/seed/termostato/320/320' },
]

const trust: { label: string; icon: IconName }[] = [
  { label: 'Técnicos certificados', icon: 'check' },
  { label: 'Trabajo garantizado', icon: 'shield' },
  { label: 'Atención rápida y segura', icon: 'clock' },
  { label: 'Cobertura en todo Chile', icon: 'map-pin' },
]

export default function ServicioGasPage() {
  return (
    <div className="svc">
      <div className="container">
        <nav className="page-crumb" aria-label="Ruta de navegación">
          <a href="#/">Inicio</a>
          <span className="page-crumb__sep">/</span>
          <a href="#categorias">Categorías</a>
          <span className="page-crumb__sep">/</span>
          <span className="page-crumb__current">Servicio técnico de gas</span>
        </nav>

        <header className="svc-hero">
          <div className="svc-hero__text">
            <h1 className="page-title">Servicio Técnico de Gas</h1>
            <p>
              Instalación, mantención y reparación de equipos a gas. Contamos con
              técnicos certificados para asegurar el máximo rendimiento y
              seguridad de tus equipos.
            </p>
          </div>
          <div className="svc-hero__img">
            <img
              src="https://picsum.photos/seed/tecnico-gas-caldera/720/460"
              alt="Técnico realizando servicio a una caldera a gas"
              width={720}
              height={460}
            />
          </div>
        </header>

        <div className="page-layout">
          <div className="svc-main">
            <section>
              <div className="page-h">
                <span className="page-h__icon">
                  <Icon name="wrench" size={20} />
                </span>
                <h2>Nuestros servicios</h2>
              </div>

              <div className="svc-services-grid">
                {services.map((s) => (
                  <article key={s.title} className="svc-card">
                    <span className="svc-card__icon">
                      <Icon name={s.icon} size={24} />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                    <a className="svc-card__link" href="#/">
                      Solicitar servicio <Icon name="arrow-right" size={15} />
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section className="svc-equipos">
              <div className="page-h">
                <span className="page-h__icon">
                  <Icon name="star" size={18} />
                </span>
                <h2>Equipos que atendemos</h2>
              </div>

              <div className="svc-equipos-grid">
                {equipos.map((e) => (
                  <div key={e.label} className="svc-equipo">
                    <img src={e.image} alt={e.label} loading="lazy" />
                    <span>{e.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <HelpAside ctaLabel="Solicitar servicio" />
        </div>
      </div>

      <div className="svc-trust">
        <div className="container svc-trust__inner">
          {trust.map((t) => (
            <span key={t.label} className="svc-trust__item">
              <Icon name={t.icon} size={18} />
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
