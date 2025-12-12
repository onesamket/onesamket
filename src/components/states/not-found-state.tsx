import { ArrowLeft } from "lucide-react"

interface NotFoundStateProps {
    title?: string
    message?: string
    showBackButton?: boolean
    className?: string
    onBackClick?: () => void
}

export function NotFoundState({
    title = "Page Not Found",
    message = "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
    showBackButton = false,
    className = "",
    onBackClick,
}: NotFoundStateProps) {

    return (
        <div className={`p-12 rounded-3xl h-screen border border-dashed border-gray-200 dark:border-gray-800 bg-gradient-to-br from-brand-gray/30 dark:from-brand-darkBg/30 to-white dark:to-brand-darkCard/50 flex flex-col items-center justify-center min-h-[320px] text-center group hover:from-brand-gray/50 dark:hover:from-brand-darkBg/50 transition-all duration-500 overflow-hidden relative ${className}`}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`,
                }}></div>
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-brand-black dark:text-white mb-2 tracking-tight">
                    {title}
                </h3>

                <p className="text-xs font-mono text-brand-textGray dark:text-gray-500 bg-white/80 dark:bg-brand-darkCard/80 backdrop-blur-sm px-3 py-1.5 rounded-full mb-6 inline-block border border-gray-200 dark:border-gray-800">
                    ERR_404_RESOURCE_MISSING
                </p>

                <p className="text-sm text-brand-textGray dark:text-gray-400 max-w-[300px] mb-8 leading-relaxed">
                    {message}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {showBackButton && (
                        <button
                            onClick={onBackClick}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-brand-darkCard text-brand-black dark:text-white border-2 border-gray-200 dark:border-gray-800 rounded-full font-semibold text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <ArrowLeft size={16} />
                            Home
                        </button>
                    )}
                </div>
            </div>
        </div>

    )
}
