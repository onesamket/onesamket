interface LoadingStateProps {
  message?: string
  className?: string
}

export function LoadingState({
  message = 'Loading...',
  className = '',
}: LoadingStateProps) {
  return (
    <div
      className={`flex min-h-[320px] flex-col items-center justify-center p-10 text-center ${className}`}
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="dot-loader mb-6">
        <span />
        <span />
        <span />
      </div>
      <p
        className="text-[12px] font-medium"
        style={{ color: 'var(--text-faint)' }}
      >
        Please wait
      </p>
      <p
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: 'var(--text)',
          marginTop: 8,
          letterSpacing: '-0.02em',
        }}
      >
        {message}
      </p>
    </div>
  )
}
