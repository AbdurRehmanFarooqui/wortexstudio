

"use client";

import React, { useRef, useState, useLayoutEffect } from 'react';
import Link from 'next/link';
import ProjectCards from '@/app/components/ProjectCards';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectData {
  title: string;
  tags: string[];
  category: string;
  imageUrl?: string;
}

const Projects: React.FC = () => {
  const targetRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [scrollRange, setScrollRange] = useState(0);

  useLayoutEffect(() => {
    const calculateScrollRange = () => {
      if (scrollRef.current) {
        const totalWidth = scrollRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollRange(totalWidth - viewportWidth + 100); 
      }
    };

    calculateScrollRange();
    window.addEventListener("resize", calculateScrollRange);
    return () => window.removeEventListener("resize", calculateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  const projectData: ProjectData[] = [
    { title: "Quantum Render", tags: ["Next.js", "Three.js"], category: "3D Visualization" },
    { title: "Neuro Sync", tags: ["React", "Python"], category: "AI Dashboard" },
    { title: "Cyber Shell", tags: ["Rust", "Wasm"], category: "Security" },
    { title: "Neon Pulse", tags: ["Framer", "React"], category: "Brand Design" },
    { title: "Astra Engine", tags: ["C++", "Vulkan"], category: "Game Dev" },
  ];

  return (
    <motion.section 
      ref={targetRef} 
      className="relative h-[400vh] bg-black overflow-clip"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] font-orbitron select-none pointer-events-none">
          WORKS
        </div>

        {/* Header */}
        <div className="relative z-10 mb-12 px-20">
          <motion.h2 initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{amount: 1}} transition={{ duration: 1 }} className="font-orbitron text-5xl md:text-8xl font-black tracking-tighter text-white">
            PROJECTS<span className="text-[#a600ff]">.</span>
          </motion.h2>
          <motion.p initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{amount: 1}} transition={{ duration: 1 }} className="font-quantico text-indigo-400 uppercase tracking-[0.3em] text-sm ml-2">
            Selected Digital Artifacts
          </motion.p>
        </div>

        {/* Horizontal Track */}
        <motion.div 
          ref={scrollRef} 
          className="flex items-center px-10" 
          style={{ x }}
        >
          {projectData.map((project, i) => (
            <ProjectCards key={i} {...project} />
          ))}
          <ProjectCards title="Vortex Core" category="Web Design" tags={["Typescript"]} />
        </motion.div>

        {/* Bottom UI Elements */}
        <div className="absolute bottom-12 md:bottom-20 left-10 right-10 flex justify-between items-end px-20">
          
          {/* Progress Bar Container */}
          <div className="flex flex-col gap-2">
            <p className="font-quantico text-[10px] text-zinc-500 uppercase tracking-widest">Scroll Progress</p>
            <div className="w-48 md:w-64 h-[2px] bg-white/10 overflow-hidden">
                <motion.div 
                    className="h-full bg-gradient-to-r from-indigo-500 via-[#a600ff] to-pink-500" 
                    style={{ scaleX: scrollYProgress, transformOrigin: "left" }} 
                />
            </div>
          </div>

          {/* NEW: Navigation Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className=''
          >
            <Link href="/projects" className="group relative flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-[#a600ff] uppercase tracking-[0.3em] leading-none mb-1">Explore</span>
                <span className="text-sm font-orbitron text-white group-hover:text-pink-500 transition-colors">ALL PROJECTS</span>
              </div>
              
              {/* Animated Button Circle */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-white/10 bg-zinc-900 group-hover:border-[#a600ff] transition-all duration-500">
                {/* Internal Glow */}
                <div className="absolute inset-0 rounded-full bg-[#a600ff]/0 group-hover:bg-[#a600ff]/10 blur-md transition-all" />
                
                <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:text-[#a600ff] transition-all" />
                
                {/* Rotating Border Detail */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity">
                  <circle 
                    cx="50%" cy="50%" r="48%" 
                    className="stroke-[#a600ff] stroke-[1px] fill-none"
                    strokeDasharray="20 10"
                  />
                </svg>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Projects;