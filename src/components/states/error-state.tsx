import { AlertTriangle, RefreshCcw } from 'lucide-react'

interface ErrorStateProps {
  title?: string
  message?: string
  className?: string
  onRetry?: () => void
}

export function ErrorState({
  title = 'Something went wrong',
  message = "We hit an unexpected snag. Don't worry — refresh or try again.",
  className = '',
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      className={`flex min-h-[320px] flex-col items-center justify-center bg-[#f5f0e0] p-10 text-center ${className}`}
      style={{ borderTop: '3px solid rgba(201,135,62,0.4)' }}
    >
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm"
        style={{ border: '1.5px dashed rgba(26,18,8,0.25)', color: '#c9873e' }}
      >
        <AlertTriangle size={26} strokeWidth={1.8} />
      </div>

      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 24,
          fontWeight: 800,
          color: '#1a1208',
          marginBottom: 10,
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

      {onRetry && (
        <button onClick={onRetry} className="btn-ink mt-7">
          <RefreshCcw size={14} />
          Try Again
        </button>
      )}
    </div>
  )
}
