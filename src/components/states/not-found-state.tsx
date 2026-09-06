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
      className={`flex min-h-[320px] flex-col items-center justify-center bg-[#f5f0e0] p-10 text-center ${className}`}
    >
      {/* Big serif 404 */}
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 72,
          fontWeight: 900,
          color: 'rgba(26,18,8,0.08)',
          lineHeight: 1,
          marginBottom: 16,
          letterSpacing: '-0.04em',
        }}
      >
        404
      </p>

      <p
        className="mb-2 text-[10.5px] font-black uppercase tracking-[0.28em]"
        style={{ color: '#8b7d60', fontFamily: "'Lato', sans-serif" }}
      >
        ERR · RESOURCE NOT FOUND
      </p>

      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 24,
          fontWeight: 800,
          color: '#1a1208',
          marginBottom: 12,
        }}
      >
        {title}
      </p>

      <p
        className="max-w-sm text-sm leading-6"
        style={{ color: '#4a3f28', fontFamily: "'Lato', sans-serif" }}
      >
        {message}
      </p>

      {showBackButton && (
        <button onClick={onBackClick} className="btn-outline mt-7">
          <ArrowLeft size={14} />
          Go Home
        </button>
      )}
    </div>
  )
}
