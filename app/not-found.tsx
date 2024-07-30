"use client";
import { dark_polygon_star, polygon_star, with_glass } from "@/assets";
import SparklesText from "@/components/magicui/sparkles-text";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Loading() {
  const { theme } = useTheme();
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <div className="relative flex items-center justify-center">
        <Image
          src={theme == "light" ? polygon_star : dark_polygon_star}
          alt="polygon"
          className="w-80 h-80 animate-slow-spin"
          layout="fixed"
          width={400}
          height={400}
        />
        <Image
          src={with_glass}
          alt="classic"
          className="absolute w-40 h-40 rounded-full"
        />
      </div>
      <SparklesText
        className="text-2xl md:text-4xl"
      text="You lost! Page Not found!"
      />
    </main>
  );
}
