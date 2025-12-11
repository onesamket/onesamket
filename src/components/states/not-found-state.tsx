import { ArrowLeft, FolderX } from "lucide-react"

interface NotFoundStateProps {
    title?: string
    message?: string
    showHomeButton?: boolean
    showBackButton?: boolean
    className?: string
}

export function NotFoundState({ }: NotFoundStateProps) {

    return (
        <div className="p-8 rounded-3xl h-screen border border-dashed border-gray-300 bg-gray-50/50 flex flex-col items-center justify-center min-h-[320px] text-center group hover:bg-gray-100 transition-colors duration-300">
            <div className="w-20 h-20 rounded-2xl bg-white border-2 border-dashed border-gray-200 flex items-center justify-center mb-6 text-gray-300 transform -rotate-6 group-hover:rotate-0 transition-transform">
                <FolderX size={36} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-gray-400 text-lg mb-1">Project Not Found</h3>
            <p className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded mb-4">ERR_404_RESOURCE_MISSING</p>
            <p className="text-sm text-gray-500 max-w-[240px] mb-6 leading-relaxed">
                This project timeline may have been deleted, moved, or you might have followed a broken link.
            </p>
            <button className="text-sm font-bold text-charcoal hover:underline flex items-center gap-2">
                <ArrowLeft size={16} /> Return Home
            </button>
        </div>

    )
}
