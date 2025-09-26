'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Loader2, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const funnyTexts: string[] = [
    'Oops! Page not found. Did you try turning it off and on again?',
    "404: Page is playing hide and seek. It's winning.",
    "This page is on a coffee break. ☕ Try again after it's recharged.",
    'Looks like this page took a coffee break and forgot to come back.',
    'Our barista ran out of beans... and this page.',
    'This page is brewing something strong. Please be patient ☕.',
    "Error 404: Page not found. But hey, you found Tewodros' awesome 404 page!",
    'Whoops! Tewodros might be brewing more code with coffee ☕. Check back soon!',
];

export default function NotFoundSection(): JSX.Element {
    const [isLoading, setIsLoading] = useState(false);
    const [funnyText, setFunnyText] = useState<string>(funnyTexts[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFunnyText(funnyTexts[Math.floor(Math.random() * funnyTexts.length)]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleRefresh = (): void => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setFunnyText(funnyTexts[Math.floor(Math.random() * funnyTexts.length)]);
        }, 1500);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (!isLoading) {
                handleRefresh();
            }
        }
    };

    return (
        <main
            className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b px-4"
            role="main"
            aria-labelledby="error-heading"
        >
            {/* Skip to main content link for keyboard users */}
            <a
                href="#error-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
                Skip to error content
            </a>

            <div id="error-content" className="text-center">
                <div
                    className="mb-8 text-9xl font-bold"
                    aria-hidden="true"
                >
                    404
                </div>

                <h1
                    id="error-heading"
                    className="sr-only"
                >
                    Page Not Found - Error 404
                </h1>

                <div

                    className="mb-8 max-w-md text-center text-xl md:text-2xl"
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <p>{funnyText}</p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row" role="group" aria-label="Navigation options">
                    <Button
                        onClick={handleRefresh}
                        onKeyDown={handleKeyDown}
                        disabled={isLoading}
                        className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        aria-describedby="refresh-description"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                                <span>Loading...</span>
                            </>
                        ) : (
                            <>
                                <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
                                <span>Try again</span>
                            </>
                        )}
                    </Button>

                    <Link href="/" passHref>
                        <Button
                            variant="outline"
                            className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            aria-label="Go back to homepage"
                        >
                            <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                            <span>Go Home</span>
                        </Button>
                    </Link>
                </div>

                <div id="refresh-description" className="sr-only">
                    Click to get a new random message and try refreshing the page
                </div>

                <div

                    className="mt-12 text-sm"
                    role="complementary"
                    aria-label="Additional information"
                >
                    <p>
                        Pro tip: If you&apos;re looking for coffee or Tewodros latest code, this
                        might not be the place. ☕
                    </p>
                </div>
            </div>
        </main>
    );
}
