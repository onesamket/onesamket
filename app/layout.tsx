import { Patrick_Hand } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/shared/site-header";
import SiteFooter from "@/components/shared/site-footer";
import ThemeToggle from "@/components/shared/theme-toggle";
import { Metadata } from "next";
const font = Patrick_Hand({
  subsets: ["vietnamese"],
  preload: true,
  display: "swap",
  style: "normal",
  weight: "400",
});


export const metadata: Metadata = {
  title: "Welcome to the World of Tewodros Birhanu | Explore My Journey",
  description: "Embark on a journey through my personal website, where I showcase my experiences and passions. Join me as I share my story with the world.",
};

export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <body className={font.className}>
      <SiteHeader />
      <main>{children}</main>
      <ThemeToggle />
      <SiteFooter />
    </body>
  );
}