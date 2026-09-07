import { ArrowLeft } from 'lucide-react'

interface NotFoundStateProps {
  title?: string
  message?: string
  showBackButton?: boolean
  className?: string
  onBackClick?: () => void
}

export function NotFoundState({
  title = 'Page Not Found',
  message = "The page you're looking for doesn't exist or has been moved.",
  showBackButton = false,
  className = '',
  onBackClick,
}: NotFoundStateProps) {
  return (
    <div
      className={`flex min-h-[320px] flex-col items-center justify-center bg-[#050814] p-10 text-center ${className}`}
    >
      <p
        style={{
          fontSize: 72,
          fontWeight: 600,
          color: 'rgba(255,255,255,0.08)',
          lineHeight: 1,
          marginBottom: 16,
          letterSpacing: '-0.04em',
        }}
      >
        404
      </p>

      <p
        className="mb-2 text-[12px] font-medium"
        style={{ color: 'rgba(160,178,204,0.62)' }}
      >
        Resource not found
      </p>

      <p
        style={{
          fontSize: 24,
          fontWeight: 600,
          color: '#f4f7fb',
          marginBottom: 12,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </p>

      <p
        className="max-w-sm text-sm leading-6"
        style={{ color: 'rgba(196,210,230,0.7)' }}
      >
        {message}
      </p>

      {showBackButton && (
        <button onClick={onBackClick} className="btn-outline mt-7">
          <ArrowLeft size={14} />
          Go home
        </button>
      )}
    </div>
  )
}
