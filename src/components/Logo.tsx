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
      <img
        className="logo__mark"
        src="/images/image.png"
        alt=""
        width="42"
        height="42"
      />
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
