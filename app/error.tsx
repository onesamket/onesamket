'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AlertTriangle,
  Bug,
  Coffee,
  RefreshCw,
  Server,
  Wifi,
  WifiOff,
  Wrench,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const errorMessages = [
  {
    title: 'Oops! Something went wrong',
    description:
      "Looks like our code is having a coffee break. Don't worry, even the best developers need their caffeine fix!",
    icon: Coffee,
    color: 'text-amber-500',
  },
  {
    title: 'Error 500: Server Overload',
    description:
      "Our servers are working overtime. They're probably just taking a well-deserved coffee break!",
    icon: Server,
    color: 'text-blue-500',
  },
  {
    title: 'Technical Difficulties',
    description:
      'Even the best code needs debugging. Tewodros is probably fixing this with a fresh cup of coffee in hand!',
    icon: Wrench,
    color: 'text-orange-500',
  },
  {
    title: 'System Malfunction',
    description:
      "Something's not quite right. But hey, at least you found this beautiful error page!",
    icon: Zap,
    color: 'text-yellow-500',
  },
];

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const [isOnline, setIsOnline] = useState(true);
  const [isRetrying, setIsRetrying] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(errorMessages[0]);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Check online status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Set initial online status
    setIsOnline(navigator.onLine);

    // Rotate error messages
    const interval = setInterval(() => {
      setCurrentMessage(
        errorMessages[Math.floor(Math.random() * errorMessages.length)]
      );
    }, 8000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, []);

  const handleRetry = async () => {
    setIsRetrying(true);
    setRetryCount(prev => prev + 1);

    // Simulate retry delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      reset();
    } catch (err) {
      console.error('Retry failed:', err);
    } finally {
      setIsRetrying(false);
    }
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const IconComponent = currentMessage.icon;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <div className="w-full max-w-2xl">
        {/* Connection Status */}
        <div className="mb-6 flex justify-center">
          <Badge
            variant={isOnline ? 'default' : 'destructive'}
            className="flex items-center gap-2"
          >
            {isOnline ? (
              <>
                <Wifi className="h-3 w-3" />
                Online
              </>
            ) : (
              <>
                <WifiOff className="h-3 w-3" />
                Offline
              </>
            )}
          </Badge>
        </div>

        {/* Main Error Card */}
        <Card className="border-2 border-destructive/20">
          <CardHeader className="pb-4 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-10 w-10 text-destructive" />
            </div>
            <CardTitle className="text-3xl font-bold text-destructive">
              {currentMessage.title}
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              {currentMessage.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="rounded-lg bg-muted/50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Bug className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Development Error Details:
                  </span>
                </div>
                <pre className="overflow-auto text-xs text-muted-foreground">
                  {error.message}
                  {error.digest && `\nDigest: ${error.digest}`}
                </pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={handleRetry}
                disabled={isRetrying || !isOnline}
                className="mx-auto flex w-1/2 items-center justify-center gap-2"
                size="lg"
              >
                {isRetrying ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Retrying... ({retryCount})
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4" />
                    Try Again
                  </>
                )}
              </Button>
            </div>

            {/* Additional Help */}
            <div className="text-center text-sm text-muted-foreground">
              <p>
                If this problem persists, please{' '}
                <a
                  href="mailto:onesamket@gmail.com"
                  className="text-primary hover:underline"
                >
                  contact support
                </a>{' '}
                or try refreshing the page.
              </p>
            </div>

            {/* Fun Fact with Icon */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <IconComponent className={`h-5 w-5 ${currentMessage.color}`} />
                <span>
                  Fun fact: This error page is also a PWA! Try installing it on
                  your device.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>
            Error ID: {error.digest || 'unknown'} • Retry Count: {retryCount} •
            Status: {isOnline ? 'Connected' : 'Offline'}
          </p>
        </div>
      </div>
    </div>
  );
}
