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
  message = "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
  showBackButton = false,
  className = '',
  onBackClick,
}: NotFoundStateProps) {
  return (
    <div
      className={`flex min-h-[320px] flex-col items-center justify-center border border-dashed border-[#0759bd]/45 bg-[#f4f0e8] p-10 text-center text-[#073f8f] ${className}`}
    >
      <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#527db4]">
        ERR_404_RESOURCE_MISSING
      </p>

      <h3 className="mt-3 text-2xl font-black text-[#0759bd]">{title}</h3>

      <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-[#244f8f]">
        {message}
      </p>

      {showBackButton && (
        <button
          onClick={onBackClick}
          className="mt-7 inline-flex items-center gap-2 rounded-md border-2 border-[#0759bd] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#0759bd] hover:bg-[#e8e1d5]"
        >
          <ArrowLeft size={16} />
          Home
        </button>
      )}
    </div>
  )
}
