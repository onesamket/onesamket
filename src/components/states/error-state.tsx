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
      className={`flex min-h-[320px] flex-col items-center justify-center bg-[#050814] p-10 text-center ${className}`}
    >
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
        style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#b7d4ff' }}
      >
        <AlertTriangle size={26} strokeWidth={1.8} />
      </div>

      <p
        style={{
          fontSize: 24,
          fontWeight: 600,
          color: '#f4f7fb',
          marginBottom: 10,
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

      {onRetry && (
        <button onClick={onRetry} className="btn-ink mt-7">
          <RefreshCcw size={14} />
          Try again
        </button>
      )}
    </div>
  )
}
