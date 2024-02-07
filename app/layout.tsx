import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Toggle from "@/components/shared/Toggle";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: "300",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Welcome to the World of Tewodros Birhanu | Explore My Journey
        </title>
        <meta
          name="description"
          content="Embark on a journey through my personal website, where I showcase my experiences and passions. Join me as I share my story with the world."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://x.com@onesamket" />
        <meta
          name="twitter:title"
          content="Welcome to the World of Tewodros Birhanu | Explore My Journey"
        />
        <meta
          name="twitter:description"
          content="Embark on a journey through my personal website, where I showcase my experiences and passions. Join me as I share my story with the world."
        />
        <meta name="twitter:image" content="profile.jpg" />

        <meta
          property="og:title"
          content="Welcome to the World of Tewodros Birhanu | Explore My Journey"
        />
        <meta
          property="og:description"
          content="Embark on a journey through my personal website, where I showcase my experiences and passions. Join me as I share my story with the world."
        />
        <meta property="og:image" content="profile.jpg" />
        <meta property="og:url" content="https://onesamket.vercel.app" />

        {/* LinkedIn metadata */}
        <meta name="author" content="Tewodros Birhanu" />
        <meta property="og:author" content="Tewodros Birhanu" />
        <meta
          property="og:site_name"
          content="Tewodros Birhanu's Personal Website"
        />
        <meta name="linkedin:card" content="summary_large_image" />
        <meta
          name="linkedin:title"
          content="Welcome to the World of Tewodros Birhanu | Explore My Journey"
        />
        <meta
          name="linkedin:description"
          content="Embark on a journey through my personal website, where I showcase my experiences and passions. Join me as I share my story with the world."
        />
        <meta name="linkedin:image" content="profile.jpg" />

        <link rel="icon" href="profile.jpg" type="image/png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Toggle />
        <Footer />
      </body>
    </html>
  );
}
