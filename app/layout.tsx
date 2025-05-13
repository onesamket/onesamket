import { Container } from "@/components/container";
import FooterSection from "@/components/sections/footer-section";
import { cn } from "@/libs/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import Script from "next/script";
import { ReactNode, Suspense } from 'react';
import './globals.css';
import Loading from "./loading";
type Props = {
  children: ReactNode;
  params: { locale: string };
};



export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {

  return {
    title: "Tewodros Birhanu",
    description: "Tewodros Birhanu's personal website.",
    openGraph: {
      title: "Tewodros Birhanu",
      description: "Tewodros Birhanu's personal website.",
      images: [{ url: "/profile.png", width: 1200, height: 630, alt: "Tewodros Birhanu" }],
      url: "https://onesamket.com",
      siteName: "Tewodros Birhanu",
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@onesamket",
      title: "Tewodros Birhanu",
      description: "Tewodros Birhanu's personal website.",
      images: ["/profile.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {


  return (
    <html lang={locale} dir={'ltr'} className={cn("min-h-screen bg-background font-sans antialiased")}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>
          <Container className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
              <main className="w-full p-5 md:p-12 lg:p-24 text-center">
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
