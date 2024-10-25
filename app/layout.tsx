import { Container } from "@/components/container";
import { cn } from "@/libs/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FooterSection from "@/components/sections/footer-section";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  metadataBase: new URL('https://onesamket.vercel.app'),
  title: "Welcome to the World of Tewodros Birhanu | Explore My Journey",
  description: "Embark on a journey through my personal website, where I showcase my experiences and passions. Join me as I share my story with the world.",
  openGraph: {
    title: "Welcome to the World of Tewodros Birhanu | Explore My Journey",
    description: "Embark on a journey through my personal website, where I showcase my experiences and passions. Join me as I share my story with the world.",
    images: [{ url: "/profile.png", width: 1200, height: 630, alt: "Tewodros Birhanu" }],
    url: "https://onesamket.vercel.app",
    siteName: "Tewodros Birhanu's Personal Website",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@onesamket",
    title: "Welcome to the World of Tewodros Birhanu | Explore My Journey",
    description: "Embark on a journey through my personal website, where I showcase my experiences and passions. Join me as I share my story with the world.",
    images: ["/profile.png"],
  },
  authors: [{ name: "Tewodros Birhanu" }],
  icons: {
    icon: "/profile.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("min-h-screen bg-background font-sans antialiased", interFont.variable)}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Container className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <main className="w-full p-5 md:p-12 lg:p-24 text-center">
              {children}
            </main>
            <FooterSection />

          </Container>
        </ThemeProvider>
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tewodros Birhanu",
              "url": "https://onesamket.vercel.app",
              "sameAs": [
                "https://github.com/onesamket",
                "https://x.com/onesamket_ig",
                "https://www.linkedin.com/in/ln-onesamket",
                "https://instagram.com/onesamket_ig",
                "https://t.me/onesamket"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}