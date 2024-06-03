"use client";
import Link from "next/link"
import { TriangleAlert } from 'lucide-react';
export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 py-16 text-center">
            <div className="max-w-md space-y-4">
                <div className="flex items-center justify-center">
                    <TriangleAlert className="w-16 h-16 text-red-500" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Oops! Page not found.</h1>
                <p className="text-gray-500 dark:text-gray-400">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center h-10 px-6 font-medium text-gray-50 bg-gray-900 rounded-md shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                >
                    Go back home
                </Link>
            </div>
        </div>
    )
}
