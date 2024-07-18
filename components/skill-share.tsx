"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";
import {
  backend,
  black_img,
  code_in_lab,
  database,
  design,
  smart_phone,
  version_control,
  website,
  with_computer,
} from "@/assets";
import { ToolTipWrapper } from "./tooltip-component";
import { useTheme } from "next-themes";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 sm:size-16 md:size-20 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function SkillShare() {
  const { theme, setTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] sm:h-[400px] md:h-[450px] w-full items-center justify-center overflow-hidden rounded-lg  bg-background p-10"
      ref={containerRef}
    >
      <div className="flex size-full flex-col w-full md:max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <ToolTipWrapper content="UI/UX designer">
              <Image
                src={design}
                alt="design"
                className="w-[70px] h-[70px] shrink-0 "
              />
            </ToolTipWrapper>
          </Circle>
          <Circle ref={div5Ref}>
            <ToolTipWrapper content="Mobile Developer">
              <Image
                src={smart_phone}
                alt="Smart phone"
                className="w-[70px] h-[70px] shrink-0 "
              />
            </ToolTipWrapper>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <ToolTipWrapper content="Web Developer ">
              <Image
                src={website}
                alt="website"
                className="w-[70px] h-[70px] shrink-0 "
              />
            </ToolTipWrapper>
          </Circle>
          <div ref={div4Ref}>
            <ToolTipWrapper content="It's me Teddy">
              <Image
                onClick={() =>
                  theme === "dark" ? setTheme("light") : setTheme("dark")
                }
                src={theme === "dark" ? code_in_lab : with_computer}
                alt="with computer "
                className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] z-50 rounded-full shrink-0 object-contain "
              />
            </ToolTipWrapper>
          </div>
          <Circle ref={div6Ref}>
            <ToolTipWrapper content="Collaboration with Others">
              <Image
                src={version_control}
                alt="Version control"
                className="w-[70px] h-[70px] shrink-0 "
              />
            </ToolTipWrapper>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <ToolTipWrapper content="Backend Developer">
              <Image
                src={backend}
                alt="backend"
                className="w-[70px] h-[70px] shrink-0 "
              />
            </ToolTipWrapper>
          </Circle>
          <Circle ref={div7Ref}>
            <ToolTipWrapper content="Database Design">
              <Image
                src={database}
                alt="Database"
                className="w-[70px] h-[70px] shrink-0 "
              />
            </ToolTipWrapper>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
