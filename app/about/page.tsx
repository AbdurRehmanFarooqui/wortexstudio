// import About from "@/sections/about";

// export default function AboutPage(){
//     return(
//         <div className="w-full pt-32">
//             <h2 className="text-center text-6xl">About</h2>
//             <div className="flex flex-wrap  mx-auto justify-center py-10">

//                 <About/>


//             </div>
//         </div>
//     )
// }

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Zap, Shield, Globe } from 'lucide-react';

const AboutPage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="w-full bg-white text-zinc-900 pt-32 pb-20 font-sans selection:bg-[#a600ff]/20">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-32">
        <motion.div {...fadeUp}>
          <span className="font-quantico text-[#a600ff] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
            Studio Profile
          </span>
          <h1 className="text-7xl md:text-9xl font-black font-orbitron tracking-tighter mb-8 italic">
            ABOUT<span className="text-[#a600ff]">.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
            Wortex is a digital construction studio at the intersection of 
            <span className="text-zinc-900 font-bold"> high-performance engineering </span> 
            and immersive visual art.
          </p>
        </motion.div>
      </section>

      {/* 2. MISSION & VISION (System Cards) */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        
        {/* Mission */}
        <motion.div 
          {...fadeUp}
          className="group relative p-10 border border-zinc-100 rounded-[2rem] bg-zinc-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#a600ff]/5 hover:border-[#a600ff]/20 transition-all duration-500"
        >
          <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#a600ff]">
            <Target size={24} />
          </div>
          <h3 className="font-orbitron text-2xl font-bold mb-4 tracking-tight">Our Mission</h3>
          <p className="text-zinc-500 leading-relaxed font-medium">
            To empower forward-thinking brands by constructing digital artifacts that are not just seen, but experienced. We bridge the gap between complex logic and human emotion through precision design and scalable code.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div 
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="group relative p-10 border border-zinc-100 rounded-[2rem] bg-zinc-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#a600ff]/5 hover:border-[#a600ff]/20 transition-all duration-500"
        >
          <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-indigo-500">
            <Eye size={24} />
          </div>
          <h3 className="font-orbitron text-2xl font-bold mb-4 tracking-tight">Our Vision</h3>
          <p className="text-zinc-500 leading-relaxed font-medium">
            To redefine the standards of the modern web. We envision a future where digital interfaces are fluid, three-dimensional, and as intuitive as the world around us. Wortex aims to be the core engine behind this evolution.
          </p>
        </motion.div>
      </section>

      {/* 3. CORE VALUES (Horizontal Grid) */}
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-orbitron text-3xl font-bold tracking-tighter italic">CORE PHILOSOPHY<span className="text-[#a600ff]">_</span></h2>
            <div className="w-12 h-1 bg-[#a600ff] mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap size={20}/>, title: "Extreme Performance", desc: "Speed is our baseline. We build for the edge, ensuring sub-second interactions." },
              { icon: <Shield size={20}/>, title: "Architectural Integrity", desc: "Clean code is non-negotiable. Our systems are built to scale and endure." },
              { icon: <Globe size={20}/>, title: "Global Perspective", desc: "We design for everyone, everywhere. Accessibility is woven into our DNA." }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="text-[#a600ff]">{value.icon}</div>
                <h4 className="font-orbitron text-sm font-bold uppercase tracking-widest">{value.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div 
          {...fadeUp}
          className="bg-white border-2 border-zinc-900 rounded-[3rem] p-16 md:p-24 relative overflow-hidden"
        >
          {/* Decorative Purple Blobs */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#a600ff]/5 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full" />

          <h2 className="text-4xl md:text-6xl font-black font-orbitron tracking-tighter mb-8 italic">
            READY TO START THE <br/> <span className="text-[#a600ff]">CONSTRUCTION?</span>
          </h2>
          <button className="px-12 py-5 bg-zinc-900 text-white font-quantico font-bold rounded-2xl hover:bg-[#a600ff] transition-all duration-300 uppercase tracking-widest text-xs">
            Initiate Contact
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutPage;