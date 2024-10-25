"use client";
import Icons from "@/assets/icons/icons";
import Image from "next/image";
import { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { BorderBeam } from "../anim/border-beam";
import OrbitingCircles from "../anim/circular-orbit";

export function HeroSection() {
  const audioRef = useRef(null);

  const handleImageClick = () => {
    if (audioRef.current) {
      // @ts-ignore
      if (audioRef.current.audio.current.paused) {
        // @ts-ignore
        audioRef.current.audio.current.play();
      } else {
        // @ts-ignore
        audioRef.current.audio.current.pause();
      }
    }
  };

  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <div className="relative w-32 rounded-full">

        <Image
          src={"https://github.com/onesamket.png"}
          width={100}
          height={100}
          alt="profile"
          onClick={handleImageClick}
          className="w-32 h-32 rounded-full  cursor-pointer"
        />

        <BorderBeam />
      </div>

      {/* fun audio  */}
      <div className="hidden">
        <AudioPlayer
          ref={audioRef}
          autoPlay={false}
          src="/developers-song.m4a"
        />
      </div>

      {/* Inner Circles */}
      <OrbitingCircles
        className="flex size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.tailwindcss />
      </OrbitingCircles>
      <OrbitingCircles
        className="flex size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.nextjs />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="hidden md:flex size-[40px] border-none bg-transparent"
        radius={140}
        duration={20}
        reverse
        shown={false}
      >
        <Icons.react />
      </OrbitingCircles>
      <OrbitingCircles
        className="hidden md:flex size-[40px] border-none bg-transparent"
        radius={140}
        duration={20}
        delay={20}
        reverse
        shown={false}
      >
        <Icons.typescript />
      </OrbitingCircles>
    </div>
  );
}
