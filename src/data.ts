import type { IconName } from './components/Icon'

export const contact = {
  phone: '+56 9 5528 1193',
  phoneHref: 'tel:+56955281193',
  whatsapp: '+56 9 5528 1193',
  whatsappHref: 'https://wa.me/56955281193',
  email: 'serviciossantiagohogar@gmail.com',
  address: 'Santiago, Región Metropolitana',
  /** Número dedicado a consultas de productos / disponibilidad. */
  productsWhatsapp: '+56 9 5528 1193',
  productsWhatsappHref: 'https://wa.me/56955281193',
}

export type NavChild = {
  label: string
  href: string
}

export type NavItem = {
  label: string
  href: string
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos' },
  {
    label: 'Servicios',
    href: '/servicio-tecnico-de-gas',
    children: [
      {
        label: 'Servicio Técnico de Calderas y Calefont',
        href: '/servicio-tecnico-de-gas',
      },
      { label: 'Radiadores y Calefacción', href: '/radiadores-y-calefaccion' },
      { label: 'Limpieza de Redes', href: '/limpieza-de-redes' },
    ],
  },
  { label: 'Marcas', href: '/#marcas' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
]

export type Category = {
  name: string
  description: string
  icon: IconName
  image: string
}

export const categories: Category[] = [
  {
    name: 'Servicio Técnico de Calderas y Calefont',
    description:
      'Instalación, mantención y reparación certificada de calderas y calefont.',
    icon: 'wrench',
    image: '/images/inicio/categorias/calderas-y-calefont.jpg',
  },
  {
    name: 'Radiadores y Calefacción',
    description: 'Radiadores, toalleros y sistemas de calefacción central.',
    icon: 'radiator',
    image: '/images/inicio/categorias/radiadores-y-calefaccion.jpg',
  },
  {
    name: 'Limpieza de Redes',
    description: 'Limpieza y purga de redes de agua y calefacción.',
    icon: 'droplet',
    image: '/images/inicio/categorias/limpieza-de-redes.jpg',
  },
]

export type Feature = {
  title: string
  description: string
  icon: IconName
}

export const features: Feature[] = [
  {
    title: 'Técnicos Especializados',
    description: 'Personal certificado y capacitado.',
    icon: 'users',
  },
  {
    title: 'Atención Rápida',
    description: 'Respondemos rápido cuando más lo necesitas.',
    icon: 'clock',
  },
  {
    title: 'Garantía',
    description: 'Garantía en todos nuestros trabajos y productos.',
    icon: 'shield',
  },
  {
    title: 'Servicio a Domicilio',
    description: 'Atendemos en toda la Región Metropolitana.',
    icon: 'truck',
  },
  {
    title: 'Calidad y Confianza',
    description: 'Más de 20 años entregando soluciones eficientes.',
    icon: 'check',
  },
]

export const brands = [
  'ANWO',
  'BOSCH',
  'Rinnai',
  'BAXI',
  'JUNKERS',
  'NAVIEN',
  'SPLENDID',
  'RHEEM',
]

export type Review = {
  name: string
  time: string
  rating: number
  text: string
  avatar: string
}

export const reviews: Review[] = [
  {
    name: 'Carlos M.',
    time: 'Hace 1 semana',
    rating: 5,
    text: 'Excelente servicio, llegaron el mismo día que solicité. El técnico muy profesional y amable, dejó todo funcionando perfecto. 100% recomendados.',
    avatar: 'https://i.pravatar.cc/96?img=12',
  },
  {
    name: 'María José R.',
    time: 'Hace 2 semanas',
    rating: 5,
    text: 'Muy buena experiencia, instalaron mi caldera y explicaron todo claramente. Se nota la experiencia y el compromiso con el cliente.',
    avatar: 'https://i.pravatar.cc/96?img=32',
  },
  {
    name: 'Felipe A.',
    time: 'Hace 3 semanas',
    rating: 5,
    text: 'Realizaron la mantención de mi caldera, trabajo limpio y ordenado. Precios justos y atención muy cordial. Volveré a contratar.',
    avatar: 'https://i.pravatar.cc/96?img=15',
  },
  {
    name: 'Andrea L.',
    time: 'Hace 1 mes',
    rating: 5,
    text: 'Compré un calefont con instalación incluida, todo muy rápido y eficiente. Los recomiendo totalmente. Buen servicio.',
    avatar: 'https://i.pravatar.cc/96?img=45',
  },
]

export const footerLinks = {
  'Enlaces Rápidos': ['Inicio', 'Productos', 'Servicios', 'Marcas', 'Nosotros', 'Contacto'],
  Categorías: [
    'Servicio Técnico de Calderas y Calefont',
    'Radiadores y Calefacción',
    'Limpieza de Redes',
  ],
  Servicios: [
    'Instalación',
    'Mantención',
    'Reparación',
    'Limpieza de redes',
    'Venta de artefactos',
    'Servicio técnico',
  ],
}

export const paymentMethods = ['Mercado Pago', 'VISA', 'Mastercard', 'Magna', 'Redcompra']

export function formatCLP(value: number): string {
  return '$' + value.toLocaleString('es-CL')
}

/** Categorías que ya tienen página propia maquetada. */
export const categoryRoutes: Record<string, string> = {
  'Servicio Técnico de Calderas y Calefont': '/servicio-tecnico-de-gas',
  'Radiadores y Calefacción': '/radiadores-y-calefaccion',
  'Limpieza de Redes': '/limpieza-de-redes',
}

/** Devuelve el href para una categoría o servicio del menú. */
export function categoryHref(name: string): string {
  return categoryRoutes[name] ?? '/#categorias'
}
