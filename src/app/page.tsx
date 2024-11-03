"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import React from 'react';
import { Lights } from "@/components/ui/bg-lights";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Intro from "./sections/intro";
import About from "./sections/about";
import Skills from "./sections/skills";

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
      <section className="relative">
        <DotPattern
          className={cn(
            "[mask-image:linear-gradient(to_bottom,transparent,black,transparent)]",
          )}
        />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills/>
      </section>


    </ParallaxProvider>
  );
}