import { AlertTriangle, RefreshCcw } from "lucide-react"

interface ErrorStateProps {
    title?: string
    message?: string
    className?: string
}

export function ErrorState({
    title = "Something went wrong",
    message = "An unexpected error occurred. Please try again later.",
}: ErrorStateProps) {
    return (
        <div className="col-span-1  h-screen bg-white rounded-[2rem] border border-red-100 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-red-100/50 transition-all duration-500 group">
            <div className="w-20 h-20 bg-red-50 rounded-2xl rotate-6 flex items-center justify-center mb-8 group-hover:rotate-0 transition-transform duration-500">
                <AlertTriangle size={32} className="text-red-500" />
            </div>
            <h3 className="font-bold text-charcoal mb-2">{title}</h3>
            <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed mb-6">
                {message}
            </p>
            <button className="text-xs font-bold text-red-600 flex items-center gap-2 hover:underline">
                <RefreshCcw size={12} /> Retry
            </button>
        </div>
    )
}
