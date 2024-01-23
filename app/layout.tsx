import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Toggle from "@/components/shared/Toggle";

const inter = Inter({
  subsets: ["latin"],
  preload: true
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Tewodros Birhanu personal website</title>
        <meta
          name="description"
          content="Personal website to showcase my experience for the people"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Toggle />
        <Footer />
      </body>
    </html>
  );
}
