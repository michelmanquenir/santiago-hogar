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
  from: number
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
  'calderas-y-calefont': {
    crumb: 'Calderas y calefont',
    title: 'Calderas y Calefont',
    intro:
      'Encuentra el equipo ideal para calefacción y agua caliente. Alta eficiencia, seguridad y respaldo garantizado.',
    splits: [
      {
        accent: 'red',
        icon: 'flame',
        title: 'Calderas',
        description:
          'Equipos de calefacción de alta eficiencia para tu hogar o negocio.',
        bullets: [
          'Calderas murales',
          'Calderas de piso',
          'Mixtas (calefacción y ACS)',
        ],
        cta: 'Ver calderas',
        image: '/images/servicios/calderas-y-calefont/calderas.jpg',
      },
      {
        accent: 'blue',
        icon: 'droplet',
        title: 'Calefont',
        description: 'Agua caliente inmediata y constante para tu día a día.',
        bullets: ['Tiro natural', 'Tiro forzado', 'Distintas capacidades'],
        cta: 'Ver calefont',
        image: '/images/servicios/calderas-y-calefont/calefont.jpg',
      },
    ],
    featured: [
      {
        name: 'Caldera ANWO Aqua Plus 2.0',
        spec: '24 kW · Mural · Mixta',
        from: 1290000,
        image: '/images/servicios/calderas-y-calefont/destacados/caldera-anwo-aqua-plus.jpg',
      },
      {
        name: 'Caldera ANWO Aqua Premium 30',
        spec: '30 kW · Mural · Mixta',
        from: 1590000,
        image: '/images/servicios/calderas-y-calefont/destacados/caldera-anwo-aqua-plus.jpg',
      },
      {
        name: 'Calefont ANWO Hydro 18',
        spec: '18 Litros · Tiro Natural',
        from: 319990,
        image: '/images/servicios/calderas-y-calefont/destacados/calefont-anwo-hydro-18.jpg',
      },
      {
        name: 'Calefont ANWO Hydro 26',
        spec: '26 Litros · Tiro Forzado',
        from: 389990,
        image: '/images/servicios/calderas-y-calefont/destacados/calefont-anwo-hydro-18.jpg',
      },
    ],
    featuredCta: 'Consultar disponibilidad',
    benefits: [
      {
        title: 'Marcas Líderes',
        text: 'Trabajamos con las mejores marcas del mercado.',
        icon: 'shield',
      },
      {
        title: 'Garantía Oficial',
        text: 'Todos nuestros productos cuentan con garantía oficial.',
        icon: 'star',
      },
      {
        title: 'Envío a Todo Chile',
        text: 'Despacho a domicilio a todo el país.',
        icon: 'truck',
      },
      {
        title: 'Asesoría Especializada',
        text: 'Te ayudamos a elegir el equipo ideal para ti.',
        icon: 'headset',
      },
    ],
  },

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
        from: 89990,
        image: '/images/servicios/radiadores-y-calefaccion/destacados/radiador-simple-ek.jpg',
      },
      {
        name: 'Radiador Acero 600/1000',
        from: 119990,
        image: '/images/servicios/radiadores-y-calefaccion/destacados/radiador-doble-dk.jpg',
      },
      {
        name: 'Radiador Toallero Blanco',
        from: 129990,
        image: '/images/servicios/radiadores-y-calefaccion/destacados/secatoallas.jpg',
      },
      {
        name: 'Termostato Digital Programable',
        from: 49990,
        image: '/images/servicios/radiadores-y-calefaccion/termostatos.jpg',
      },
      {
        name: 'Válvula Termostática Universal',
        from: 24990,
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
