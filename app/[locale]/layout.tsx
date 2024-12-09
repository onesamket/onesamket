import { Container } from "@/components/container";
import LanguageSwitcher from "@/components/language-switcher";
import FooterSection from "@/components/sections/footer-section";
import { routing } from '@/i18n/routing';
import { cn } from "@/libs/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Inter } from "next/font/google";
import { notFound } from 'next/navigation';
import Script from "next/script";
import { ReactNode } from 'react';

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [{ url: "/profile.png", width: 1200, height: 630, alt: "Tewodros Birhanu" }],
      url: "https://onesamket.com",
      siteName: t('siteName'),
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@onesamket",
      title: t('title'),
      description: t('description'),
      images: ["/profile.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={'ltr'} className={cn("min-h-screen bg-background font-sans antialiased", interFont.variable)}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Container className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
              <LanguageSwitcher />
              <main className="w-full p-5 md:p-12 lg:p-24 text-center">
                {children}
              </main>
              <FooterSection />
            </Container>
          </NextIntlClientProvider>
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
