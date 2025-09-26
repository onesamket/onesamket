'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="mb-8 text-9xl font-bold"
      >
        404
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 max-w-md text-center text-xl md:text-2xl"
      >
        {funnyText}
      </motion.div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          onClick={handleRefresh}
          disabled={isLoading}
          className="flex items-center justify-center"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="mr-2 h-4 w-4" />
          )}
          Try again
        </Button>
        <Link href="/" passHref>
          <Button
            variant="outline"
            className="flex items-center justify-center"
          >
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-sm"
      >
        Pro tip: If you&apos;re looking for coffee or Tewodros latest code, this
        might not be the place. ☕
      </motion.div>
    </div>
  );
}
