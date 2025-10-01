import { Container } from '@/components/container';
import FooterSection from '@/components/sections/footer-section';
import { cn } from '@/libs/utils';
import { ThemeProvider } from '@/providers/theme-provider';
import Script from 'next/script';
import { ReactNode, Suspense } from 'react';
import './globals.css';
import Loading from './loading';
import type { Metadata } from 'next';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>): Promise<Metadata> {
  const commonTitle = 'Tewodros Birhanu';
  const commonDescription = "Tewodros Birhanu's personal website.";
  const commonUrl = 'https://onesamket.com';

  return {
    title: commonTitle,
    description: commonDescription,
    manifest: '/manifest.json',
    themeColor: '#3b82f6',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
      userScalable: false,
      viewportFit: 'cover',
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: commonTitle,
      startupImage: ['/splash.png'],
    },
    formatDetection: {
      telephone: false,
    },
    applicationName: commonTitle,
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: [
        { url: '/icon-180x180.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
    },
    openGraph: {
      title: commonTitle,
      description: commonDescription,
      images: [
        {
          url: '/profile.png',
          width: 1200,
          height: 630,
          alt: commonTitle,
        },
      ],
      url: commonUrl,
      siteName: commonTitle,
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@onesamket',
      title: commonTitle,
      description: commonDescription,
      images: ['/profile.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <html
      lang={locale}
      dir={'ltr'}
      className={cn('min-h-screen bg-background font-sans antialiased')}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>
            <Container className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
              <main className="w-full p-5 text-center md:p-12 lg:p-24">
                {children}
              </main>
              <FooterSection />
            </Container>
          </Suspense>
        </ThemeProvider>

        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tewodros Birhanu",
              "url": "https://onesamket.com",
              "sameAs": [
                "https://github.com/onesamket",
                "https://x.com/onesamket",
                "https://www.linkedin.com/in/ln-onesamket",
                "https://instagram.com/onesamket_",
                "https://t.me/onesamket"
              ] 
            }
          `}
        </Script>
      </body>
    </html>
  );
}
