"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import LongCubesBackground from "@/app/components/LongCubesBackground";
import About from "@/app/sections/about"

export default function Hero() {
  const containerRef = useRef(null);
  const windowwidth = typeof window !== "undefined" ? window.innerWidth:1;
  // 1. Track scroll progress of this specific section
  // target: the element to track
  // offset: ["start start", "end start"] means from when top of div hits top of screen 
  // until bottom of div hits top of screen.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 2. Map scroll progress to scale and opacity
  // As scroll goes from 0 to 1, scale goes from 1 to 10 and opacity from 1 to 0
  // const scale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 20, 200]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 20, 500]);
  const opacityAbout = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const scaleAbout = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
 
  if(windowwidth > 800){
    var textY = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 1]);
  }else{
    textY = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 500, 4000]);
  }

  return (
    // containerRef must be on a wrapper that allows for scrolling context
    <main ref={containerRef} className="relative h-[400vh] bg-black overflow-clip">
      {/* Sticky wrapper: keeps the background and text fixed while we scroll the 200vh */}
      <div className="sticky top-0 h-dvh w-full flex flex-col overflow-clip">

        {/* 3D background */}
        <LongCubesBackground scrollYProgress={scrollYProgress} />

        {/* Center content */}
        <div className="flex-1 flex items-center justify-center pointer-events-none z-10 overflow-clip">
          <motion.h1
            style={{ scale, y: textY }}
            className="text-5xl md:text-7xl lg:text-9xl font-black flex flex-col text-center font-orbitron text-white select-none p-8"
            >
            WORTEX
            <span className="text-xl md:text-2xl lg:text-4xl tracking-[12px] md:tracking-[24px] mt-4 pl-6">STUDIO</span>
          </motion.h1>
        </div>

        {/* Bottom bar */}
        <motion.div
          style={{ opacity }} // Bottom bar fades out as we scroll
          className="absolute bottom-0 p-4 md:px-24 md:py-14 w-full font-quantico flex flex-col-reverse md:flex-col  text-white backdrop-blur-sm border-t border-white/16 bg-linear-to-tr from-black/10 to-white/8 overflow-clip"
        >
          <div className="w-full flex justify-center items-center gap-2 md:gap-4 text-xs md:text-base uppercase tracking-widest">
          <span className="flex justify-center">
            <Link href="#projects" className="border border-white/50 px-3 md:px-8 py-4 pointer-events-auto hover:bg-white hover:text-black transition-colors flex items-center justify-center text-center rounded-sm bg-transparent ">
              View Selected Work
            </Link>
          </span>
          <span className="flex justify-center">
            <Link href="/contact" className="border border-white/50 px-3 md:px-8 py-4 pointer-events-auto
            bg-white text-black hover:text-white hover:bg-transparent transition-colors flex items-center justify-center text-center rounded-sm backdrop-blur-sm">
              Start a Project
            </Link>
          </span>
          </div>
          {/* <span className="w-full flex justify-center items-center text-md py-4 md:text-xl">
            Where Imagination Meets Innovation
          </span> */}
          <span className="w-full flex justify-center text-center items-center text-md py-4 md:text-xl">
            Web Engineering and 3D Visualization for Brands That Want More Than a Website
          </span>
          <span className="w-full" />
        </motion.div>
        <motion.div style={{ opacity: opacityAbout, scale: scaleAbout}} className="pointer-events-none z-11 absolute top-0 left-0 w-full h-full">
          <About />
        </motion.div>
      </div>
    </main>
  );
}