import { Loader2 } from "lucide-react"

interface LoadingStateProps {
    message?: string
    className?: string
    showSkeleton?: boolean
}

export function LoadingState({
    message = "Loading Profile...",
    className = "",
}: LoadingStateProps) {
    return (
        <div className={`col-span-1 relative group h-[320px] bg-white dark:bg-brand-darkCard rounded-[2rem] border border-gray-100 dark:border-gray-800 p-12 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-500 overflow-hidden ${className}`}>
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 dark:from-brand-orange/10 via-transparent to-transparent opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="relative mb-8">
                    {/* Outer pulsing ring */}
                    <div className="absolute inset-0 bg-brand-orange/20 dark:bg-brand-orange/30 rounded-full animate-ping opacity-30"></div>
                    {/* Middle ring */}
                    <div className="absolute inset-0 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-full animate-pulse"></div>
                    {/* Inner container */}
                    <div className="w-24 h-24 bg-white dark:bg-brand-darkBg rounded-full border-2 border-brand-gray dark:border-gray-800 flex items-center justify-center relative z-10 shadow-inner">
                        <Loader2 size={36} className="text-brand-orange dark:text-brand-orange animate-spin" strokeWidth={2.5} />
                    </div>
                </div>

                <h3 className="text-lg font-semibold text-brand-black dark:text-white mb-4 tracking-tight">
                    {message}
                </h3>

                {/* Enhanced progress bar */}
                <div className="w-40 h-1.5 bg-brand-gray dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-brand-orange to-brand-orange/80 w-1/2 animate-progress-indeterminate rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
