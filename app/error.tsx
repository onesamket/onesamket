'use client'

import { TriangleAlert } from "lucide-react"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body className="w-full h-screen flex items-center justify-center">
                <TriangleAlert className="text-red-600 text-4xl " />
                <h2 className="text-red-600 text-2xl">Something went wrong!</h2>
                <button className="btn btn-primary" onClick={() => reset()}>Refresh </button>
            </body>
        </html>
    )
}