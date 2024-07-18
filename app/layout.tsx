import DotPattern from "@/components/magicui/dot-pattern";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeSwitcher } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import "./globals.css";
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          interFont.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex min-h-screen  w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
            <div className="w-full  p-5 md:p-12 lg:p-24 text-center ">
              {children}
            </div>
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />

            <footer className="w-full flex justify-between  items-center p-10">
              <div className=" flex space-x-1 items-center">
                <p className="text-2xl"> &copy; </p>
                <p className="hidden md:flex">All Right Is Reserved 2023</p>
              </div>
              <div className="flex space-x-5">
                <Link href="https://github.com/onesamket">
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/ln-onesamket">
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <Link href="https://onesamket.vercel.app">
                  <FaLink className="w-5 h-5" />
                </Link>
              </div>
              <ThemeSwitcher />
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
