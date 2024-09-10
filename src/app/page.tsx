import GridPattern from "@/components/magicui/animated-grid-pattern";
import BlurIn from "@/components/magicui/blur-in";
import BlurInComponent from "@/components/magicui/blur-in-component";
import SocialIcons from "@/components/ui/socialIcons";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    // Intro
    <div className="relative flex h-screen w-full items-center justify-left overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
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
        "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        "skew-y-[-10deg] skew-x-[5deg] overflow-clip",
      )}/>
    </div>

    // About
  );
}
