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
        image: 'https://picsum.photos/seed/caldera-mural-anwo/560/560',
      },
      {
        accent: 'blue',
        icon: 'droplet',
        title: 'Calefont',
        description: 'Agua caliente inmediata y constante para tu día a día.',
        bullets: ['Tiro natural', 'Tiro forzado', 'Distintas capacidades'],
        cta: 'Ver calefont',
        image: 'https://picsum.photos/seed/calefont-anwo/560/560',
      },
    ],
    featured: [
      {
        name: 'Caldera ANWO Aqua Plus 2.0',
        spec: '24 kW · Mural · Mixta',
        from: 1290000,
        image: 'https://picsum.photos/seed/aqua-plus/320/360',
      },
      {
        name: 'Caldera ANWO Aqua Premium 30',
        spec: '30 kW · Mural · Mixta',
        from: 1590000,
        image: 'https://picsum.photos/seed/aqua-premium/320/360',
      },
      {
        name: 'Calefont ANWO Hydro 18',
        spec: '18 Litros · Tiro Natural',
        from: 319990,
        image: 'https://picsum.photos/seed/hydro-18/320/360',
      },
      {
        name: 'Calefont ANWO Hydro 26',
        spec: '26 Litros · Tiro Forzado',
        from: 389990,
        image: 'https://picsum.photos/seed/hydro-26/320/360',
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
    heroImage: 'https://picsum.photos/seed/radiador-pared-hogar/900/520',
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
        image: 'https://picsum.photos/seed/radiador-aluminio-blanco/560/560',
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
        image: 'https://picsum.photos/seed/termostato-digital-pared/560/560',
      },
    ],
    featured: [
      {
        name: 'Radiador Aluminio 500/100',
        from: 89990,
        image: 'https://picsum.photos/seed/rad-aluminio-500/320/360',
      },
      {
        name: 'Radiador Acero 600/1000',
        from: 119990,
        image: 'https://picsum.photos/seed/rad-acero-600/320/360',
      },
      {
        name: 'Radiador Toallero Blanco',
        from: 129990,
        image: 'https://picsum.photos/seed/rad-toallero/320/360',
      },
      {
        name: 'Termostato Digital Programable',
        from: 49990,
        image: 'https://picsum.photos/seed/termostato-prog/320/360',
      },
      {
        name: 'Válvula Termostática Universal',
        from: 24990,
        image: 'https://picsum.photos/seed/valvula-termostatica/320/360',
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
