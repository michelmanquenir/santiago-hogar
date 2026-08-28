import type { IconName } from './components/Icon'

export const contact = {
  phone: '(2) 288 812 93',
  whatsapp: '+56 9 8898 8811',
  whatsappHref: 'https://wa.me/56988988811',
  email: 'serviciossantiagohogar@gmail.com',
  address: 'Santiago, Región Metropolitana',
}

export type NavItem = {
  label: string
  children?: string[]
}

export const navItems: NavItem[] = [
  { label: 'Inicio' },
  {
    label: 'Productos',
    children: ['Calderas', 'Calefont', 'Radiadores', 'Aire acondicionado', 'Repuestos'],
  },
  {
    label: 'Servicios',
    children: ['Instalación', 'Mantención', 'Reparación', 'Limpieza de redes', 'Servicio técnico'],
  },
  { label: 'Marcas' },
  { label: 'Nosotros' },
  { label: 'Contacto' },
]

export type Category = {
  name: string
  description: string
  icon: IconName
  image: string
}

export const categories: Category[] = [
  {
    name: 'Calefacción',
    description: 'Calderas, calefont, radiadores y más.',
    icon: 'flame',
    image: 'https://picsum.photos/seed/calefaccion/480/320',
  },
  {
    name: 'Aire Acondicionado',
    description: 'Equipos split, multisplit, inverter y más.',
    icon: 'snowflake',
    image: 'https://picsum.photos/seed/aire/480/320',
  },
  {
    name: 'Radiadores',
    description: 'Radiadores, toalleros y accesorios.',
    icon: 'radiator',
    image: 'https://picsum.photos/seed/radiadores/480/320',
  },
  {
    name: 'Repuestos',
    description: 'Repuestos y accesorios para tus equipos.',
    icon: 'gear',
    image: 'https://picsum.photos/seed/repuestos/480/320',
  },
  {
    name: 'Artefactos',
    description: 'Venta de calderas, calefont y más.',
    icon: 'store',
    image: 'https://picsum.photos/seed/artefactos/480/320',
  },
  {
    name: 'Servicios Técnicos',
    description: 'Instalación, mantención y reparación.',
    icon: 'wrench',
    image: 'https://picsum.photos/seed/servicios/480/320',
  },
]

export type Product = {
  name: string
  spec: string
  price: number
  image: string
  installIncluded: boolean
}

export const products: Product[] = [
  {
    name: 'Caldera Mural Anwo',
    spec: 'AE 24 KW',
    price: 1249990,
    image: 'https://picsum.photos/seed/caldera/360/360',
    installIncluded: true,
  },
  {
    name: 'Calefont Anwo',
    spec: '14 Litros GN',
    price: 299990,
    image: 'https://picsum.photos/seed/calefont/360/360',
    installIncluded: true,
  },
  {
    name: 'Aire Acondicionado Inverter',
    spec: '12000 BTU',
    price: 429990,
    image: 'https://picsum.photos/seed/split/360/360',
    installIncluded: true,
  },
  {
    name: 'Radiador Acero',
    spec: '600 x 1000',
    price: 89990,
    image: 'https://picsum.photos/seed/radiador/360/360',
    installIncluded: true,
  },
  {
    name: 'Termo Eléctrico',
    spec: '80 Litros',
    price: 179990,
    image: 'https://picsum.photos/seed/termo/360/360',
    installIncluded: true,
  },
  {
    name: 'Caldera a Gas Junkers',
    spec: 'Cerapur 30 KW',
    price: 1599990,
    image: 'https://picsum.photos/seed/junkers/360/360',
    installIncluded: true,
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
    'Calefacción',
    'Aire Acondicionado',
    'Aire Acond. Solar',
    'Energía Solar',
    'Termos Eléctricos',
    'Tratamiento de Agua',
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
