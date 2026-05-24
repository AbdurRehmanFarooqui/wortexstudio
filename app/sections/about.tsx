"use client";

import React, { useRef } from "react";
import MagnetLines from "../components/MagnetLines";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Subtle parallax effect for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-white flex items-center overflow-hidden py-24 px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-7 gap-12 items-center">
        
        {/* Left Side: Interaction (The Magnet) */}
        <motion.div 
          style={{ y }}
          className="lg:col-span-3 flex justify-center items-center relative"
        >
          {/* Decorative Background Glow for MagnetLines */}
          {/* <div className="absolute w-[40vmin] h-[40vmin] bg-indigo-600/50 blur-[100px] rounded-full" /> */}
          
          {/* <div className="relative z-10 p-8 border border-black/5 rounded-3xl bg-white backdrop-blur-3xl hidden md:block"> */}
          <div className="relative z-10 p-8 rounded-3xl  md:block">
            {/* <MagnetLines
              rows={9}
              columns={9}
              containerSize="35vmin"
              lineColor="#6366f1" // Indigo to match your theme
              lineWidth="0.4vmin"
              lineHeight="3.5vmin"
              baseAngle={0}
              style={{ margin: "0rem auto" }}
            /> */}
            <h2 className="text-7xl tracking-tighter leading-none" style={{  letterSpacing: "-1px"}}><span className="text-5xl tracking-normal leading-none">CREATIVE &</span> SOFTWARE <span className="text-7xl tracking-normal leading-none">AGENCY</span> </h2>
          </div>
        </motion.div>

        {/* Right Side: Narrative */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 font-quantico">
              Our Philosophy
            </h4>
            
            <h3 className="font-quantico text-3xl md:text-5xl font-medium text-black tracking-tight leading-[1.3] text-left">
              At our core, we blend{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-black italic">
                imagination
              </span>{" "}
              with technology. 
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl"
          >
            From stunning visuals to powerful software, we create digital 
            solutions that don't just function—they make an impact. We don't 
            just build products; we craft experiences.
          </motion.p>

          {/* Experience Counter / Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex gap-12 pt-8 border-t border-zinc-900"
          >
            <div>
              <p className="text-3xl font-black font-orbitron text-black">100%</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Innovation</p>
            </div>
            <div>
              <p className="text-3xl font-black font-orbitron text-black">24/7</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Creativity</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Section Label (Watermark) */}
      {/* <div className="absolute -bottom-10 -right-10 text-[20rem] font-black text-black/[0.2] select-none pointer-events-none font-orbitron">
        ABOUT
      </div> */}
    </section>
  );
}
