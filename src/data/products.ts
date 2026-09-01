export type ProductCategory =
  | 'Calefont'
  | 'Calderas'
  | 'Radiadores'
  | 'Termostatos'

export const productCategories: ProductCategory[] = [
  'Calefont',
  'Calderas',
  'Radiadores',
  'Termostatos',
]

export type ProductSpec = {
  label: string
  value: string
}

export type Product = {
  slug: string
  name: string
  category: ProductCategory
  brand: string
  image: string
  installIncluded?: boolean
  /** Frase corta para la tarjeta. */
  tagline: string
  /** Descripción / características (uno o más párrafos). */
  summary: string[]
  /** Lista de características puntuales. */
  features: string[]
  /** Filas de la tabla de especificaciones. */
  specs: ProductSpec[]
}

export const products: Product[] = [
  {
    slug: 'calefont-anwo-hitech-hydro-18',
    name: 'Calefón Mural ANWO Hitech Hydro 18 Tiro Forzado',
    category: 'Calefont',
    brand: 'ANWO',
    image: '/images/productos/calefont-anwo-hitech-hydro-18.jpg',
    installIncluded: true,
    tagline: 'Disponible en múltiples capacidades: 10L / 13L / 16L / 18L / 21L.',
    summary: [
      'Calefón mural de tiro forzado con pantalla LED multifuncional y sistema de control para combustión inteligente.',
      'Función memoria con tres niveles de consigna de temperatura para tres tipos de usuarios y auto-inspección de mal funcionamiento.',
    ],
    features: [
      'Pantalla LED multifuncional',
      'Sistema de control para combustión inteligente',
      'Botones sensibles al tacto',
      'Sistema de ignición electrónico con ionización de llama',
      'Función memoria con tres niveles de consigna de temperatura',
      'Auto-inspección de mal funcionamiento',
      'Protección para sobre-temperatura',
      'Protección para sobre-presión de humo',
      'Dispositivo de sobre-presión hidráulica',
      'Ventilación forzada previa a la ignición',
    ],
    specs: [
      { label: 'Tipo', value: 'Mural, tiro forzado' },
      { label: 'Caudal', value: '18 L/min' },
      { label: 'Encendido', value: 'Ignición electrónica con ionización de llama' },
      { label: 'Control', value: 'Combustión inteligente' },
      { label: 'Pantalla', value: 'LED multifuncional' },
    ],
  },
  {
    slug: 'caldera-anwo-aqua-plus-2-0',
    name: 'Caldera Mural ANWO Aqua Plus 2.0',
    category: 'Calderas',
    brand: 'ANWO',
    image: '/images/productos/caldera-anwo-aqua-plus-2-0.jpg',
    installIncluded: true,
    tagline: 'Disponible en múltiples capacidades: 20/22 kW · 30/32 kW.',
    summary: [
      'Caldera mural convencional mixta (calefacción y agua caliente) de tiro forzado / balanceado.',
      'Componentes internos con certificación Europea CE y nueva normativa Chilena. Posee dos intercambiadores de calor en acero inoxidable, contacto auxiliar para bomba de circulación adicional, control proporcional de potencia sin escalamientos y sistema de aceleración de ACS.',
      'La calidad del agua no debe exceder los parámetros establecidos por el fabricante. Si los exceden, se debe instalar un sistema de tratamiento de agua para proteger el equipo.',
    ],
    features: [
      'Funcionamiento mixto: calefacción y agua caliente sanitaria',
      'Tiro forzado / balanceado',
      'Dos intercambiadores de calor en acero inoxidable',
      'Contacto auxiliar para bomba de circulación adicional',
      'Control proporcional de potencia sin escalamientos',
      'Sistema de aceleración de ACS',
      'Certificación Europea CE y normativa Chilena',
    ],
    specs: [
      { label: 'Tipo', value: 'Mural convencional mixta' },
      { label: 'Tiro', value: 'Forzado / Balanceado' },
      { label: 'Intercambiadores', value: '2, en acero inoxidable' },
      { label: 'Certificación', value: 'CE (Europa) + normativa Chilena' },
    ],
  },
  {
    slug: 'radiador-simple-anwo-ek',
    name: 'Radiador Simple ANWO EK',
    category: 'Radiadores',
    brand: 'ANWO',
    image: '/images/productos/radiador-simple-anwo-ek.jpg',
    tagline:
      'Disponible en múltiples tamaños: 400x600 · 400x800 · 600x1000 · 600x1200 · 600x1400 · 600x1600 mm.',
    summary: [
      'EK es un radiador simple formado por una placa y un convector.',
      'Fabricado bajo calidad total ISO 9001, con placas convectoras de acero y tratamiento anticorrosivo: decapado, fosfatizado, pintura antióxido por inmersión a 180 °C y pintura epóxica pulverizada a 200 °C. Presión de trabajo de 10 bar. Embalaje especial para máxima protección en bodega, transporte e instalación. Certificación Europea CE (EN 442, RAL, DIN).',
    ],
    features: [
      'Una placa y un convector',
      'Placas convectoras de acero',
      'Tratamiento anticorrosivo (decapado, fosfatizado, antióxido, epóxico)',
      'Presión de trabajo: 10 bar',
      'Calidad total ISO 9001',
      'Certificación Europea CE (EN 442, RAL, DIN)',
    ],
    specs: [
      { label: 'Modelo', value: 'EK 300.0500' },
      { label: 'Largo', value: '500 mm' },
      { label: 'Altura', value: '300 mm' },
      { label: 'Potencia', value: '0,731 kW' },
      { label: 'Rendimiento', value: '629 Kcal/h' },
      { label: 'Capacidad', value: '1,9 lt' },
    ],
  },
  {
    slug: 'radiador-doble-anwo-dk',
    name: 'Radiador Doble ANWO DK',
    category: 'Radiadores',
    brand: 'ANWO',
    image: '/images/productos/radiador-doble-anwo-dk.jpg',
    tagline: 'Radiador doble de acero: dos placas y dos convectores.',
    summary: [
      'DK es un radiador doble formado por dos placas y dos convectores.',
      'Fabricado bajo calidad total ISO 9001, con placas convectoras de acero y tratamiento anticorrosivo: decapado, fosfatizado, pintura antióxido por inmersión a 180 °C y pintura epóxica pulverizada a 200 °C. Presión de trabajo de 10 bar. Embalaje especial para máxima protección en bodega, transporte e instalación. Certificación Europea CE (EN 442, RAL, DIN).',
    ],
    features: [
      'Dos placas y dos convectores',
      'Placas convectoras de acero',
      'Tratamiento anticorrosivo (decapado, fosfatizado, antióxido, epóxico)',
      'Presión de trabajo: 10 bar',
      'Calidad total ISO 9001',
      'Certificación Europea CE (EN 442, RAL, DIN)',
    ],
    specs: [
      { label: 'Modelo', value: 'DK 500.0500' },
      { label: 'Largo', value: '500 mm' },
      { label: 'Altura', value: '500 mm' },
      { label: 'Potencia', value: '0,566 kW' },
      { label: 'Rendimiento', value: '487 Kcal/h' },
      { label: 'Capacidad', value: '1,4 lt' },
    ],
  },
  {
    slug: 'termostato-simple-anwo-ats-touch',
    name: 'Termostato Ambiental Simple ANWO ATS-Touch',
    category: 'Termostatos',
    brand: 'ANWO',
    image: '/images/productos/termostato-simple-anwo-ats-touch.jpg',
    tagline: 'Termostato digital simple con pantalla táctil, uso doméstico e industrial.',
    summary: [
      'Termostato digital simple con pantalla táctil (Touch Screen). Ofrece un rango de temperatura de 5 a 50 °C y un sensor electrónico para un óptimo control de la temperatura ambiente.',
      'El ATS-Touch es un termostato para uso doméstico e industrial.',
    ],
    features: [
      'Pantalla táctil (Touch Screen)',
      'Rango de temperatura de 5 a 50 °C',
      'Sensor electrónico de precisión',
      'Pantalla digital',
      'Uso doméstico e industrial',
    ],
    specs: [
      { label: 'Tipo', value: 'Digital simple, táctil' },
      { label: 'Rango de temperatura', value: '5 – 50 °C' },
      { label: 'Sensor', value: 'Electrónico' },
      { label: 'Uso', value: 'Doméstico e industrial' },
    ],
  },
  {
    slug: 'termostato-programable-anwo-atp-1',
    name: 'Termostato Ambiental Programable ANWO ATP-1',
    category: 'Termostatos',
    brand: 'ANWO',
    image: '/images/productos/termostato-programable-anwo-atp-1.png',
    tagline: 'Programación diaria y semanal. Control preciso y fácil de usar.',
    summary: [
      'Termostato con programación semanal que permite establecer el nivel de confort mediante distintos programas de configuración.',
      'Disminuye el consumo de energía en función de la necesidad de confort diaria y semanal.',
    ],
    features: [
      'Programación semanal (lunes a viernes) y diaria (sábado y domingo)',
      'Función stand-by (operación fija manual)',
      'Configuración de temperatura por selector (arriba y abajo)',
      'Reduce el consumo de energía según la necesidad de confort',
    ],
    specs: [
      { label: 'Rango de control', value: '7 °C – 35 °C' },
      { label: 'Rango de visualización', value: '0 – 37 °C' },
      { label: 'Ajuste de temperatura', value: 'Pasos de 1 °C' },
      { label: 'Resolución de muestreo', value: '1 minuto' },
      { label: 'Resolución de programación', value: '10 minutos' },
      { label: 'Tipo de salida', value: 'Relé doble contacto' },
      { label: 'Carga máxima', value: '5 A @ 220 V (carga resistiva)' },
      { label: 'Alimentación', value: '2 pilas AA 1,5 V' },
      { label: 'Dimensiones', value: '89 × 143 × 36 mm' },
    ],
  },
  {
    slug: 'valvula-motorizada-anwo',
    name: 'Válvula Motorizada ANWO',
    category: 'Termostatos',
    brand: 'ANWO',
    image: '/images/productos/valvula-motorizada.jpg',
    tagline:
      'Válvula motorizada para sistemas de agua fría/caliente con climatización central.',
    summary: [
      'Estas válvulas son ampliamente utilizadas en sistemas de agua fría/caliente con climatización central.',
    ],
    features: [
      'Protección adecuada contra el agua y el polvo (IP65)',
      'Reemplazo rápido y fácil del accionador',
      'Alta presión diferencial de hasta 1 MPa y cierre estricto',
      'Señal de retroalimentación al abrirse por completo mediante contacto auxiliar',
    ],
    specs: [
      {
        label: 'Aplicación',
        value: 'Sistemas de agua fría/caliente con climatización central',
      },
      { label: 'Protección', value: 'IP65 (agua y polvo)' },
      { label: 'Presión diferencial', value: 'Hasta 1 MPa' },
      { label: 'Cierre', value: 'Estricto' },
      { label: 'Accionador', value: 'De reemplazo rápido y fácil' },
      { label: 'Retroalimentación', value: 'Contacto auxiliar al abrir por completo' },
    ],
  },
  {
    slug: 'kit-valvula-termostatica-angular-ek',
    name: 'Kit Válvula Termostática Angular 1/2" PEX EK',
    category: 'Termostatos',
    brand: 'ANWO',
    image: '/images/productos/valvula-termostatica-angular.jpg',
    tagline:
      'Kit de válvulas angulares con cabezal termostático para regular la temperatura ambiente.',
    summary: [
      'Válvulas angulares, doble angulares y rectas con termostato para regulación de temperatura ambiente entre 16 y 24 °C.',
    ],
    features: [
      'Disponible en versión angular, doble angular y recta',
      'Cabezal termostático para regulación de temperatura ambiente',
      'Rango de regulación: 16 a 24 °C',
      'Conexión 1/2" PEX',
      'Línea EK',
    ],
    specs: [
      {
        label: 'Tipo',
        value: 'Kit de válvulas termostáticas (angular / doble angular / recta)',
      },
      { label: 'Conexión', value: '1/2" PEX' },
      { label: 'Regulación', value: 'Termostática, 16 – 24 °C' },
      { label: 'Línea', value: 'EK' },
    ],
  },
]

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function categorySlug(category: ProductCategory): string {
  return category.toLowerCase()
}

/** Minúsculas y sin acentos, para comparar texto de búsqueda. */
function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
}

/**
 * Busca productos por nombre, categoría, marca, descripción o características.
 * Todas las palabras de la consulta deben aparecer en el producto.
 */
export function searchProducts(query: string): Product[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean)
  if (terms.length === 0) return []

  return products.filter((product) => {
    const haystack = normalize(
      [
        product.name,
        product.category,
        product.brand,
        product.tagline,
        ...product.summary,
        ...product.features,
        ...product.specs.map((s) => `${s.label} ${s.value}`),
      ].join(' '),
    )
    return terms.every((term) => haystack.includes(term))
  })
}
