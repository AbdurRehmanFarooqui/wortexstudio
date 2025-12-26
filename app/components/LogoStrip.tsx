// import {
//   SiBlender, SiFigma, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiNodedotjs, SiMongodb, SiPostgresql, SiThreedotjs, SiCanva, SiAdobephotoshop, SiAdobeillustrator
// } from 'react-icons/si';
// import { LogoLoop } from "./LogoLoop";

// export default function LogoStrip() {
//   const logos = [
//     { node: <SiBlender size={68} color="#F5792A" />, title: "Blender", href: "https://www.blender.org" },
//     { node: <SiFigma size={68} color="#F24E1E" />, title: "Figma", href: "https://www.figma.com" },
//     { node: <SiReact size={68} color="#61DAFB" />, title: "React", href: "https://reactjs.org" },
//     { node: <SiNextdotjs size={68} color="#000000" />, title: "Next.js", href: "https://nextjs.org" },
//     { node: <SiTypescript size={68} color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//     { node: <SiTailwindcss size={68} color="#06B6D4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
//     { node: <SiPython size={68} color="#3776AB" />, title: "Python", href: "https://www.python.org" },
//     { node: <SiNodedotjs size={68} color="#339933" />, title: "Node.js", href: "https://nodejs.org" },
//     { node: <SiMongodb size={68} color="#47A248" />, title: "MongoDB", href: "https://www.mongodb.com" },
//     { node: <SiPostgresql size={68} color="#4169E1" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
//     { node: <SiThreedotjs size={68} color="#000000" />, title: "Three.js", href: "https://threejs.org" },
//     { node: <SiCanva size={68} color="#00C4CC" />, title: "Canva", href: "https://www.canva.com" },
//     { node: <SiAdobephotoshop size={68} color="#31A8FF" />, title: "Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
//     { node: <SiAdobeillustrator size={68} color="#FF9A00" />, title: "Illustrator", href: "https://www.adobe.com/products/illustrator.html" },
//   ];
//   return (
//     <div className='w-full '>

//       <h2 className='text-4xl pb-12 m-auto text-center'>Technologies We Use</h2>
//       <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
//         {/* Basic horizontal loop */}
//         <LogoLoop
//           logos={logos}
//           speed={120}
//           direction="left"
//           logoHeight={48}
//           gap={40}
//           hoverSpeed={0}
//           scaleOnHover
//           fadeOut
//           fadeOutColor="#ffffff"
//           ariaLabel="Technology partners"
//         />
//       </div>
//     </div>
//   );
// }


"use client";

import React from 'react';
import {
  SiBlender, SiFigma, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiPython, SiNodedotjs, SiMongodb, SiPostgresql, SiThreedotjs, 
  SiCanva, SiAdobephotoshop, SiAdobeillustrator
} from 'react-icons/si';
import { LogoLoop } from "./LogoLoop";
import {motion} from "framer-motion"

export default function LogoStrip() {
  // We wrap the icons in a styled div to control their "State" (Inactive vs Active)
  const logos = [
    { 
        node: <div className="p-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <SiBlender size={50} color="#F5792A" />
              </div>, 
        title: "Blender" 
    },
    { 
        node: <div className="p-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <SiFigma size={50} color="#F24E1E" />
              </div>, 
        title: "Figma" 
    },
    { 
        node: <div className="p-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <SiReact size={50} color="#61DAFB" />
              </div>, 
        title: "React" 
    },
    { 
        node: <div className="p-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <SiNextdotjs size={50} color="#ffffff" />
              </div>, 
        title: "Next.js" 
    },
    { 
        node: <div className="p-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <SiTypescript size={50} color="#3178C6" />
              </div>, 
        title: "TypeScript" 
    },
    { 
        node: <div className="p-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <SiTailwindcss size={50} color="#06B6D4" />
              </div>, 
        title: "Tailwind" 
    },
    { 
        node: <div className="p-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <SiPython size={50} color="#3776AB" />
              </div>, 
        title: "Python" 
    },
    { 
        node: <div className="p-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <SiThreedotjs size={50} color="#ffffff" />
              </div>, 
        title: "Three.js" 
    },
    { 
        node: <div className="p-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <SiAdobephotoshop size={50} color="#31A8FF" />
              </div>, 
        title: "Photoshop" 
    },
  ];

  return (
    <div className='w-full bg-black py-20 overflow-hidden'>
      {/* Header Section */}
      <div className="flex flex-col items-center mb-16 px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{amount: 1}} className='font-orbitron text-4xl md:text-5xl font-black text-white tracking-tighter text-center'>
            TECH <span className="text-[#a600ff]">STACK</span>
        </motion.h2>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mt-4" />
        <p className="font-quantico text-[10px] uppercase tracking-[0.5em] text-zinc-500 mt-4">
            Powering the Digital Frontier
        </p>
      </div>

      {/* Logo Loop Container */}
      <div className='relative flex items-center h-32 border-y border-white/[0.03] bg-zinc-950/20 backdrop-blur-sm'>
        
        {/* Decorative Scanner Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#a600ff]/50 to-transparent animate-pulse" />

        <LogoLoop
          logos={logos}
          speed={80} // Slightly slower for a more premium feel
          direction="left"
          logoHeight={80}
          gap={60}
          hoverSpeed={0}
          scaleOnHover={false} // Handled by our custom wrapper above
          fadeOut
          fadeOutColor="#000000" // MUST be black to match the theme
          ariaLabel="Technology partners"
        />

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent animate-pulse delay-700" />
      </div>
    </div>
  );
}