import type { IconName } from '../components/Icon'

export type CategorySplit = {
  accent: 'red' | 'blue'
  icon: IconName
  title: string
  description: string
  bullets: string[]
  cta: string
  image: string
}

export type CategoryFeatured = {
  name: string
  spec?: string
  image: string
}

export type CategoryBenefit = {
  title: string
  text: string
  icon: IconName
}

export type CategoryPageConfig = {
  crumb: string
  title: string
  intro: string
  /** Imagen opcional junto al título (arriba de la página). */
  heroImage?: string
  splits: CategorySplit[]
  featured: CategoryFeatured[]
  featuredCta: string
  benefits: CategoryBenefit[]
}

export const categoryPages: Record<string, CategoryPageConfig> = {
  'radiadores-y-calefaccion': {
    crumb: 'Radiadores y calefacción',
    title: 'Radiadores y Calefacción',
    intro:
      'Soluciones eficientes y confiables para mantener tu hogar o negocio siempre cálido. Venta e instalación de radiadores, accesorios y sistemas de calefacción.',
    heroImage: '/images/servicios/radiadores-y-calefaccion/hero.jpg',
    splits: [
      {
        accent: 'red',
        icon: 'radiator',
        title: 'Radiadores',
        description:
          'Amplia variedad de radiadores de alta calidad y eficiencia térmica.',
        bullets: [
          'Radiadores de aluminio',
          'Radiadores de acero',
          'Radiadores toalleros',
          'Accesorios de instalación',
        ],
        cta: 'Ver radiadores',
        image: '/images/servicios/radiadores-y-calefaccion/radiadores.jpg',
      },
      {
        accent: 'blue',
        icon: 'gear',
        title: 'Termostatos',
        description: 'Controla la temperatura y optimiza el consumo de energía.',
        bullets: [
          'Termostatos digitales',
          'Termostatos programables',
          'Termostatos inalámbricos',
          'Válvulas termostáticas',
        ],
        cta: 'Ver termostatos',
        image: '/images/servicios/radiadores-y-calefaccion/termostatos.jpg',
      },
    ],
    featured: [
      {
        name: 'Radiador Aluminio 500/100',
        image: '/images/servicios/radiadores-y-calefaccion/destacados/radiador-simple-ek.jpg',
      },
      {
        name: 'Radiador Acero 600/1000',
        image: '/images/servicios/radiadores-y-calefaccion/destacados/radiador-doble-dk.jpg',
      },
      {
        name: 'Radiador Toallero Blanco',
        image: '/images/servicios/radiadores-y-calefaccion/destacados/secatoallas.jpg',
      },
      {
        name: 'Termostato Digital Programable',
        image: '/images/servicios/radiadores-y-calefaccion/termostatos.jpg',
      },
      {
        name: 'Válvula Termostática Universal',
        image: '/images/servicios/radiadores-y-calefaccion/destacados/valvulas-termostaticas.jpg',
      },
    ],
    featuredCta: 'Ver producto',
    benefits: [
      {
        title: 'Calidad Garantizada',
        text: 'Productos de las mejores marcas y con garantía oficial.',
        icon: 'shield',
      },
      {
        title: 'Instalación Profesional',
        text: 'Instalación segura y certificada por técnicos especializados.',
        icon: 'wrench',
      },
      {
        title: 'Envío a Todo Chile',
        text: 'Despacho a domicilio a todo el país.',
        icon: 'truck',
      },
      {
        title: 'Asesoría Personalizada',
        text: 'Te ayudamos a elegir la mejor solución para tu espacio.',
        icon: 'headset',
      },
    ],
  },
}
