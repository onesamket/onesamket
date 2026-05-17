interface LoadingStateProps {
  message?: string
  className?: string
  showSkeleton?: boolean
}

export function LoadingState({
  message = 'Loading Profile...',
  className = '',
}: LoadingStateProps) {
  return (
    <div
      className={`flex min-h-[320px] flex-col items-center justify-center border border-[#0759bd]/35 bg-[#f4f0e8] p-10 text-center text-[#073f8f] ${className}`}
    >
      <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
        Please Wait
      </p>
      <h3 className="mt-3 text-2xl font-black text-[#0759bd]">{message}</h3>
    </div>
  )
}
