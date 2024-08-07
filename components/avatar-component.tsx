"use client";
import { profile_black, profile_white } from "@/assets";
import Icons from "@/assets/icons/icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRef } from "react";
import { BorderBeam } from "./magicui/border-beam";
import OrbitingCircles from "./magicui/circular-orbit";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { ToolTipWrapper } from "./tooltip-component";

export function AvatarComponent() {
  const { theme, setTheme } = useTheme();
  const audioRef = useRef(null);

  const handleImageClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }

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
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="relative w-32 rounded-full">
        <ToolTipWrapper content="Click Avatar">
          <Image
            onClick={handleImageClick}
            src={theme === "dark" ? profile_black : profile_white}
            alt="profile"
            className="w-32 h-32 rounded-full  cursor-pointer"
          />
        </ToolTipWrapper>
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
