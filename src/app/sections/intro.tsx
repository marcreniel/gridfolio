"use client";

import GridPattern from "@/components/magicui/animated-grid-pattern";
import BlurIn from "@/components/magicui/blur-in";
import BlurInComponent from "@/components/magicui/blur-in-component";
import SocialIcons from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";

export default function Intro() {
  return (
    <div className="relative flex h-screen w-full items-center justify-left overflow-hidden rounded-lg bg-background p-20 ">
      <div className="flex flex-col space-y-1">
        <div className="relative z-10">
          <BlurIn
            word="hey! my name is marc."
            className="whitespace-pre-wrap text-left font-medium tracking-tighter text-black drop-shadow-[0_0px_8px_rgba(0,0,0,0.3)] text-5xl md:text-6xl"
            duration={1}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent filter blur-lg"/>
        </div>
        <BlurIn
          word="im a software engineer, computer scientist, and student."
          className="whitespace-pre-wrap text-left font-medium tracking-tight text-gray-800 drop-shadow-[0_0px_8px_rgba(0,0,0,0.3)] text-xl md:text-2xl"
          duration={1.375}
        />
        <BlurInComponent 
          component={<SocialIcons/>}
          duration={1.75}
          className="relative z-20"
        />  
      </div>
      <GridPattern className={cn(
        "[mask-image:radial-gradient(750px_circle_at_center,white,transparent)]",
        "skew-y-[-10deg] skew-x-[5deg] overflow-clip",
      )} />
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center z-0 animate-appear pb-5 opacity-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#1F2937" d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
        </svg>
      </div>
    </div>
  )
}