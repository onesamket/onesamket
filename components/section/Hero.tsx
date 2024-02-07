"use client";
import { profile } from "@/assets/profile";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Background from "../shared/background-animation";
const Hero = () => {
  return (
    <main id="" className="hero min-h-screen">
      <Background />
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Image
            src={profile}
            alt="profile"
            className="h-56 w-56 mx-auto rounded-full "
          />
          <h1 className="text-3xl md:text-4xl py-2 font-bold">
            Hi 👋 I&apos;m Tewodros{" "}
          </h1>
          <h3></h3>
          <TypeAnimation
            sequence={[
              "I'm  Tewodros  Birhanu",
              1000,
              "Self-taught Developer",
              1000,
              "Full-stack Developer",
              1000,
              "React-native Developer",
              1000,
              "ExpressJS NestJS Developer",
              1000,
              "Loves Typescript ❤️ ",
              1000,
              "Loves Prisma & Remix💿 ",
              1000,
              "Loves NextJs &😘  Vercel  ",
              1000,
              "Loves Tailwind css 🎉",
              1000,
              "Open for Work",
              1000,
              "Let's Collaborate 🤝.",
              5000,
            ]}
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text p-2"
            cursor={true}
            repeat={Infinity}
          />
          <p className="py-6">
            React-based Full-stack engineer, React-native developer MERN-stack
            Developer{" "}
          </p>
          <Link href={"/resume"} className="btn btn-primary">
            <FileText /> View Resume
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
