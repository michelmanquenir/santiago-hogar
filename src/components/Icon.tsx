import type { ReactNode } from 'react'

type IconProps = {
  name: IconName
  size?: number
  className?: string
}

export type IconName =
  | 'phone'
  | 'whatsapp'
  | 'mail'
  | 'facebook'
  | 'instagram'
  | 'youtube'
  | 'search'
  | 'cart'
  | 'menu'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'arrow-right'
  | 'flame'
  | 'snowflake'
  | 'radiator'
  | 'droplet'
  | 'gear'
  | 'trending-up'
  | 'thermometer'
  | 'clipboard'
  | 'store'
  | 'wrench'
  | 'shield'
  | 'truck'
  | 'clock'
  | 'users'
  | 'headset'
  | 'star'
  | 'check'
  | 'map-pin'

const paths: Record<IconName, ReactNode> = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.05.36 2.07.7 3.06a2 2 0 0 1-.45 2.11L8.09 10.9a16 16 0 0 0 6 6l1.55-1.28a2 2 0 0 1 2.11-.45c.99.34 2.01.57 3.06.7A2 2 0 0 1 22 16.92Z" />
  ),
  whatsapp: (
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.3 4.7 4.83-1.27A9.9 9.9 0 1 0 12.04 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-2.87.75.77-2.8-.19-.3A8 8 0 1 1 12.04 20Zm4.5-5.87c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12s-.64.8-.79.97c-.14.16-.29.18-.54.06a6.5 6.5 0 0 1-3.26-2.85c-.25-.42.25-.39.7-1.3a.44.44 0 0 0-.02-.42c-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.48a.92.92 0 0 0-.67.31A2.8 2.8 0 0 0 6.5 9.9c0 1.26.92 2.48 1.05 2.65.13.17 1.8 2.76 4.37 3.87 1.62.7 2.26.76 3.07.64.5-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3Z" fill="currentColor" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="21" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="18" cy="21" r="1.6" fill="currentColor" stroke="none" />
      <path d="M2 3h2l2.4 12.4a2 2 0 0 0 2 1.6h9.2a2 2 0 0 0 2-1.6L23 6H6" />
    </>
  ),
  menu: (
    <>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </>
  ),
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  'chevron-left': <path d="m15 18-6-6 6-6" />,
  'chevron-right': <path d="m9 18 6-6-6-6" />,
  'arrow-right': (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  flame: (
    <path d="M12 2c1 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1 .3-1.8.7-2.5C9 9 9.5 10 10.5 10 9.8 7.5 10.5 4.5 12 2Zm0 20a6 6 0 0 0 6-6c0-3-2-5-3-7 .3 3-1.5 5-3 5s-2.2-1.3-2-3c-1.2 1.2-2 3-2 5a6 6 0 0 0 6 6Z" />
  ),
  snowflake: (
    <>
      <path d="M12 2v20M4 6l16 12M20 6 4 18" />
      <path d="M9 4h6M9 20h6M2 9l2 3-2 3M22 9l-2 3 2 3" />
    </>
  ),
  radiator: (
    <>
      <rect x="4" y="5" width="16" height="12" rx="2" />
      <path d="M8 5v12M12 5v12M16 5v12M7 20v-1M12 20v-1M17 20v-1" />
    </>
  ),
  droplet: (
    <path d="M12 2.5c3.5 4.2 7 7.8 7 12a7 7 0 0 1-14 0c0-4.2 3.5-7.8 7-12Z" />
  ),
  'trending-up': (
    <>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M16 7h5v5" />
    </>
  ),
  thermometer: (
    <path d="M14 14.76V4a2 2 0 0 0-4 0v10.76a4 4 0 1 0 4 0Z" />
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1H9Z" />
      <path d="m9 13 2 2 4-4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 6.8 19l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 12.6H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 6L4.5 6a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 2.6V2a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H22a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" />
    </>
  ),
  store: (
    <>
      <path d="M3 9 4.5 4h15L21 9M4 9v11h16V9M4 9h16M9 20v-6h6v6" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5L3 17.6 6.4 21l6.3-6.3a4 4 0 0 0 5-5.4l-2.8 2.8-2.1-2.1Z" />
  ),
  shield: <path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5Z" />,
  truck: (
    <>
      <path d="M2 6h11v10H2zM13 9h4l4 4v3h-8" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 5.5a3.5 3.5 0 0 1 0 6.9M17 20a6.5 6.5 0 0 0-2.5-5.1" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13" width="4" height="7" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="7" rx="1.5" />
      <path d="M20 19.5v.5a3 3 0 0 1-3 3h-3" />
    </>
  ),
  star: (
    <path
      d="m12 2 3 6.3 6.9.9-5 4.8 1.2 6.9L12 17.6 5.9 20.9l1.2-6.9-5-4.8 6.9-.9Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  check: <path d="m20 6-11 11-5-5" />,
  'map-pin': (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
}

export default function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
