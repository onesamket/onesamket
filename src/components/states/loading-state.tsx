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
      className={`flex min-h-[320px] flex-col items-center justify-center bg-[#f5f0e0] p-10 text-center ${className}`}
    >
      {/* Dot loader */}
      <div className="dot-loader mb-6">
        <span />
        <span />
        <span />
      </div>
      <p
        className="text-[10.5px] font-black uppercase tracking-[0.28em]"
        style={{ color: '#8b7d60', fontFamily: "'Lato', sans-serif" }}
      >
        Please wait
      </p>
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          fontWeight: 800,
          color: '#1a1208',
          marginTop: 8,
        }}
      >
        {message}
      </p>
    </div>
  )
}
