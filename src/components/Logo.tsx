type LogoProps = {
  variant?: 'dark' | 'light'
  showTagline?: boolean
}

export default function Logo({
  variant = 'dark',
  showTagline = true,
}: LogoProps) {
  const santiago = variant === 'light' ? '#ffffff' : 'var(--navy)'
  const tagline = variant === 'light' ? 'rgba(255,255,255,.75)' : 'var(--muted)'

  return (
    <span className={`logo logo--${variant}`}>
      <svg
        className="logo__mark"
        width="42"
        height="42"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="M24 3C15 14 9 20 9 29a15 15 0 0 0 30 0c0-9-6-15-15-26Z"
          fill="#1749b3"
        />
        <path
          d="M24 16c-5 6-8 9-8 14a8 8 0 0 0 16 0c0-5-3-8-8-14Z"
          fill="#e11020"
        />
      </svg>
      <span className="logo__text">
        <strong>
          <span style={{ color: santiago }}>Santiago</span>{' '}
          <span style={{ color: '#e11020' }}>Hogar</span>
        </strong>
        {showTagline && (
          <small style={{ color: tagline }}>ESPECIALISTAS EN CALEFACCIÓN</small>
        )}
      </span>
    </span>
  )
}
