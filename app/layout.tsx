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
        <title>Tewodros Birhanu |Personal website</title>
        <meta
          name="description"
          content="Personal website to showcase my experience for the people"
        />
        <link rel="shortcut icon" href="profile.jpg" type="image/png" />
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
