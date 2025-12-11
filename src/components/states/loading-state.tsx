import { Loader2 } from "lucide-react"

interface LoadingStateProps {
    message?: string
    className?: string
    showSkeleton?: boolean
}

export function LoadingState({
    message = "Loading...",
}: LoadingStateProps) {
    return (
        <div className="col-span-1 relative group h-[320px] bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-20"></div>
                <div className="w-20 h-20 bg-white rounded-full border-2 border-blue-50 flex items-center justify-center relative z-10 shadow-inner">
                    <Loader2 size={32} className="text-blue-600 animate-spin" strokeWidth={2} />
                </div>
            </div>
            <h3 className="font-bold text-charcoal mb-2 relative z-10">{message}</h3>
            <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden relative z-10">
                <div className="h-full bg-blue-500 w-1/2 animate-progress-indeterminate rounded-full"></div>
            </div>
        </div>
    )
}
