"use client";

import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
      triggerOnce: false, // Trigger the animation only once when the section comes into view
      threshold: 0.5, // Percentage of the section that needs to be visible
  });
  
  return (
    <section 
    ref={ref} 
    className={`relative flex flex-col items-center justify-center h-[90vh] md:h-[60vh] mx-10 bg-black rounded-[2rem] overflow-hidden transition-transform duration-500 ${inView ? 'scale-100' : 'scale-95'}`}
    >        
      <div className="container mx-auto px-20 text-white mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <img
              src="pfp.png"
              alt="Your Photo"
              className="w-30 h-30 sm:w-60 sm:h-60 lg:w-[40vh] lg:h-[40vh] rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center text-lg font-medium tracking-tight md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-right mb-4 sm:mb-8">about me</h2>
            <p className="text-sm md:text-lg mb-4 font-medium tracking-tight">
            hey! i'm marc bernardino, an undergraduate student at stanford university majoring in computer science. my passions lie in creating experiences that bring real-world value to others. whether it be through projects, research, or the industry, i strive to make an impact through my work.
            </p>
            <p className="text-sm md:text-lg font-medium tracking-tight mb-4">
            currently, i've been working on full-stack web development, generative ai, and machine learning projects. i have also worked with blockchain technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}