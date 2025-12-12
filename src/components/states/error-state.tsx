import { AlertTriangle, RefreshCcw } from "lucide-react"

interface ErrorStateProps {
    title?: string
    message?: string
    className?: string
    onRetry?: () => void
}

export function ErrorState({
    title = "Oops! Something went wrong",
    message = "We encountered an unexpected issue. Don't worry, it happens to the best of us.",
    className = "",
    onRetry,
}: ErrorStateProps) {
    return (
        <div className={`col-span-1 h-screen bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-gray-800 p-12 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-500 group overflow-hidden relative ${className}`}>
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 dark:from-red-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/10 rounded-3xl rotate-6 flex items-center justify-center mb-8 group-hover:rotate-0 transition-transform duration-500 shadow-inner">
                    <AlertTriangle size={40} className="text-red-500 dark:text-red-400" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-brand-black dark:text-white mb-3 tracking-tight">
                    {title}
                </h3>

                <p className="text-sm text-brand-textGray dark:text-gray-400 max-w-[280px] leading-relaxed mb-8">
                    {message}
                </p>

                {onRetry && (
                    <button
                        onClick={onRetry}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-black dark:bg-white text-white dark:text-brand-black rounded-full font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                        <RefreshCcw size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                        Try Again
                    </button>
                )}
            </div>
        </div>
    )
}
