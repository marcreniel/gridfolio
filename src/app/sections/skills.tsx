"use client";

import { Monitor, Server, Settings, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import HyperText from "@/components/magicui/hyper-text";
import ShineBorder from '@/components/magicui/shine-border';
import { useRef, useEffect, useState } from 'react';

export default function Skills() {
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const sectionRef = useRef(null);
  const itemRefs = useRef<Record<string, HTMLDivElement>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-id');
          if (id && entry.isIntersecting) {
            setVisibleItems(prev => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all skill cards
    Object.entries(itemRefs.current).forEach(([id, ref]) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    "Languages": {
      icon: <Monitor className="w-6 h-6" />,
      items: ["JavaScript", "TypeScript", "Python", "C++", "Rust", "Java", "Bash", "HTML/CSS"],
      gradient: "from-blue-500 to-cyan-400",
      shineColors: ["#3B82F6", "#22D3EE", "#60A5FA"], // blue-500, cyan-400, blue-400
      shadowColor: "rgba(59, 130, 246, 0.2)" // blue-500 with opacity
    },
    "Web Devlopment": {
      icon: <Server className="w-6 h-6" />,
      items: ["Node.js", "React", "Next.js", "Tailwind CSS", "Express", "Flask", "NestJS", "FastAPI", "Redis", "PostgreSQL", "MongoDB", "DynamoDB", "Firebase"],
      gradient: "from-purple-500 to-pink-400",
      shineColors: ["#A855F7", "#F472B6", "#C084FC"], // purple-500, pink-400, purple-400
      shadowColor: "rgba(168, 85, 247, 0.2)" // purple-500 with opacity
    },
    "AI/ML": {
      icon: <Settings className="w-6 h-6" />,
      items: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "Pandas", "LangChain", "OpenSearch"],
      gradient: "from-orange-500 to-yellow-400",
      shineColors: ["#F97316", "#FACC15", "#FB923C"], // orange-500, yellow-400, orange-400
      shadowColor: "rgba(249, 115, 22, 0.2)" // orange-500 with opacity
    },
    "Tools": {
      icon: <Users className="w-6 h-6" />,
      items: ["Git", "Docker", "Jira", "Kubernetes", "AWS", "GCP", "DigitalOcean", "Oracle Cloud"],
      gradient: "from-green-500 to-emerald-400",
      shineColors: ["#22C55E", "#34D399", "#4ADE80"], // green-500, emerald-400, green-400
      shadowColor: "rgba(34, 197, 94, 0.2)" // green-500 with opacity
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="max-w-[90vw] mx-auto p-6 space-y-8 relative pt-[10vh] "
    >
      
      <div className="flex justify-center items-center pb-6">
        <HyperText
          className="text-4xl font-bold text-gray-900 font-sys lowercase"
          text="skills"
          animateOnLoad={visibleItems['title']}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, { items, icon, gradient, shineColors, shadowColor }], index) => (
          <div 
            key={category}
            ref={el => {
              if (el) itemRefs.current[category] = el;
            }}
            data-id={category}
            className={`group relative rounded-lg overflow-hidden transition-all duration-700
                      ${visibleItems[category] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{
              boxShadow: `0 4px 20px ${shadowColor}`,
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-15 transition-opacity duration-300`} />
            
            <ShineBorder 
              className="relative flex h-auto w-full flex-col bg-white/80 backdrop-blur-sm overflow-hidden rounded-lg pt-8 px-6 pb-8"
              color={shineColors}
            >
              <div className="flex items-center gap-3 mb-6 justify-start w-full tracking-tighter">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient} text-white`}>
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-start w-full tracking-tighter">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-medium 
                             bg-white/80 backdrop-blur-sm border border-gray-200 
                             hover:bg-white"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </ShineBorder>
          </div>
        ))}
      </div>
    </section>
  );
}