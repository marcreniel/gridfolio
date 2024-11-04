"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import React from 'react';
import { Lights } from "@/components/ui/bg-lights";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Intro from "./sections/intro";
import About from "./sections/about";
import Skills from "./sections/skills";
import { CanvasRevealEffectDemo } from "@/components/ui/canvas-cards";

export default function Home() {
  return (
    <ParallaxProvider>
      {/* Intro Page */}
      <Parallax speed={-20}>
        <Intro />
      </Parallax>

      {/* Background Lights */}
      <div className="absolute bottom-[-1rem] left-0 w-screen h-screen z-20 animate-appear opacity-0 pointer-events-none">
        <Lights />
      </div>
      <section className="relative bg-gradient-to-b from-white to-gray-100 rounded-lg">
        <DotPattern
          className={cn(
            "[mask-image:linear-gradient(to_bottom,transparent,black)]",
          )}
        />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills/>
      </section>
      <section className="relative h-[90vh] bg-gradient-to-b from-gray-100 to-white pt-20">
        <DotPattern
          className={cn(
            "[mask-image:linear-gradient(to_bottom,black, white)] pt-2",
          )}
        />

        <div className="relative flex justify-center items-center pb-6">
          <div className="relative z-10">
            <h1 className="font-bold font-sys tracking-tighter text-black drop-shadow-[0_0px_8px_rgba(0,0,0,0.3)] text-5xl">experieces</h1>
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent filter blur-lg"/>
          </div>
        </div>

        <CanvasRevealEffectDemo/>


      </section>


    </ParallaxProvider>
  );
}