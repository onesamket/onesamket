import { AlertTriangle, RefreshCcw } from 'lucide-react'

interface ErrorStateProps {
  title?: string
  message?: string
  className?: string
  onRetry?: () => void
}

export function ErrorState({
  title = 'Oops! Something went wrong',
  message = "We encountered an unexpected issue. Don't worry, it happens to the best of us.",
  className = '',
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      className={`flex min-h-[320px] flex-col items-center justify-center border border-[#0759bd]/35 bg-[#f4f0e8] p-10 text-center text-[#073f8f] ${className}`}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md border border-[#0759bd]/35 text-[#0759bd]">
        <AlertTriangle size={28} strokeWidth={2} />
      </div>

      <h3 className="text-2xl font-black text-[#0759bd]">{title}</h3>

      <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-[#244f8f]">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#0759bd] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#f4f0e8] hover:bg-[#073f8f]"
        >
          <RefreshCcw size={16} />
          Try Again
        </button>
      )}
    </div>
  )
}
