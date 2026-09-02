import HelpAside from '../components/HelpAside'
import type { AsideBenefit } from '../components/HelpAside'
import Icon from '../components/Icon'
import type { IconName } from '../components/Icon'
import './page-shared.css'
import './LimpiezaRedesPage.css'

const benefits: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Mayor Eficiencia',
    text: 'Mejora el rendimiento de tu sistema y reduce el consumo de energía.',
    icon: 'trending-up',
  },
  {
    title: 'Más Vida Útil',
    text: 'Protege tu caldera, radiadores y componentes del sistema.',
    icon: 'shield',
  },
  {
    title: 'Mejor Calefacción',
    text: 'Calor más uniforme en todos los ambientes de tu hogar o negocio.',
    icon: 'thermometer',
  },
  {
    title: 'Menos Fallas',
    text: 'Previene obstrucciones, ruidos y averías costosas.',
    icon: 'droplet',
  },
]

const steps: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Diagnóstico',
    text: 'Evaluamos el estado de tu sistema de calefacción.',
    icon: 'clipboard',
  },
  {
    title: 'Preparación',
    text: 'Conectamos nuestro equipo profesional al circuito.',
    icon: 'gear',
  },
  {
    title: 'Limpieza',
    text: 'Eliminamos lodos, óxido y sedimentos con productos especializados.',
    icon: 'droplet',
  },
  {
    title: 'Protección',
    text: 'Aplicamos inhibidores para proteger tu sistema contra la corrosión.',
    icon: 'shield',
  },
  {
    title: 'Verificación',
    text: 'Comprobamos el correcto funcionamiento y entregamos recomendaciones.',
    icon: 'check',
  },
]

const asideBenefits: AsideBenefit[] = [
  {
    title: 'Equipos Profesionales',
    text: 'Utilizamos tecnología avanzada y productos de alta calidad.',
    icon: 'shield',
  },
  {
    title: 'Técnicos Certificados',
    text: 'Personal capacitado y certificado para un servicio seguro y eficaz.',
    icon: 'star',
  },
  {
    title: 'Servicio Rápido',
    text: 'Atención oportuna y eficiente con mínimo tiempo de espera.',
    icon: 'clock',
  },
  {
    title: 'Cobertura en Todo Chile',
    text: 'Llegamos a tu hogar o negocio en todo el país.',
    icon: 'truck',
  },
]

export default function LimpiezaRedesPage() {
  return (
    <div className="lr">
      <div className="container page-layout">
        <div className="lr-main">
          <nav className="page-crumb" aria-label="Ruta de navegación">
            <a href="/">Inicio</a>
            <span className="page-crumb__sep">/</span>
            <a href="/#categorias">Categorías</a>
            <span className="page-crumb__sep">/</span>
            <span className="page-crumb__current">Limpieza de redes</span>
          </nav>

          <div className="page-head has-img">
            <div>
              <h1 className="page-title">Limpieza de Redes</h1>
              <p className="page-intro">
                Mantén tu sistema de calefacción eficiente y seguro. Eliminamos
                lodos, óxido y sedimentos que reducen el rendimiento y aumentan
                el consumo de energía.
              </p>
            </div>
            <div className="page-head__img page-head__img--pair">
              <img
                src="/images/servicios/limpieza-de-redes/hero.jpg"
                alt="Equipo de limpieza de redes de calefacción conectado a la instalación"
              />
              <img
                src="/images/servicios/limpieza-de-redes/proceso.jpg"
                alt="Proceso de limpieza y purga de la red de calefacción"
              />
            </div>
          </div>

          <section className="lr-section">
            <div className="page-h">
              <span className="page-h__icon">
                <Icon name="droplet" size={18} />
              </span>
              <h2>Beneficios de limpiar tu red de calefacción</h2>
            </div>

            <div className="lr-benefits">
              {benefits.map((b) => (
                <article key={b.title} className="lr-benefit">
                  <span className="lr-benefit__icon">
                    <Icon name={b.icon} size={24} />
                  </span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="lr-section">
            <div className="page-h">
              <span className="page-h__icon">
                <Icon name="gear" size={18} />
              </span>
              <h2>Nuestro proceso de limpieza</h2>
            </div>

            <ol className="lr-steps">
              {steps.map((s, i) => (
                <li key={s.title} className="lr-step">
                  <span className="lr-step__badge">{i + 1}</span>
                  <span className="lr-step__icon">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <div className="lr-callout">
            <span className="lr-callout__icon">
              <Icon name="radiator" size={30} />
            </span>
            <div>
              <h3>¿Cada cuánto debo limpiar mi red?</h3>
              <p>
                Recomendamos realizar la limpieza cada 2 a 3 años, o antes si
                notas ruidos en los radiadores, pérdida de eficiencia o aumento
                en el consumo de gas.
              </p>
            </div>
          </div>
        </div>

        <HelpAside benefits={asideBenefits} ctaLabel="Solicitar servicio" />
      </div>
    </div>
  )
}
