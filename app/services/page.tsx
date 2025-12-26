

// function ServiceCard(){
//     return(
//         <div className="w-80 h-50 bg-black m-5 rounded-md">

//         </div>
//     )
// }

// export default function ServicesPage(){
//     return(
//         <div className="w-full pt-32">
//             <h2 className="text-center text-4xl">Services</h2>
//             <div className="flex flex-wrap max-w-7xl mx-auto justify-center py-10">
//                 <ServiceCard/>
//                 <ServiceCard/>
//                 <ServiceCard/>
//                 <ServiceCard/>
//                 <ServiceCard/>
//                 <ServiceCard/>

//             </div>
//         </div>
//     )
// }


"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Boxes, Fingerprint, Cpu, Globe, BarChart3 } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  index: number;
}

function ServiceCard({ title, description, icon, tags, index }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full md:w-[380px] bg-white border border-zinc-100 p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-[#a600ff]/10 transition-all duration-500 overflow-hidden"
    >
      {/* Background Decorative Number */}
      <span className="absolute -top-4 -right-2 text-9xl font-black text-zinc-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity font-orbitron">
        0{index + 1}
      </span>

      {/* Icon Container */}
      <div className="relative z-10 w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-900 group-hover:bg-[#a600ff] group-hover:text-white transition-colors duration-500 mb-8">
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-orbitron text-xl font-bold mb-4 tracking-tight group-hover:text-[#a600ff] transition-colors">
          {title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-medium">
          {description}
        </p>

        {/* System Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="font-quantico text-[9px] uppercase tracking-widest px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-full text-zinc-400">
              {tag}
            </span>
          ))}
        </div>

        {/* The "Cyber Dash" Progress Line */}
        <div className="w-full h-[1px] bg-zinc-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-0 bg-[#a600ff] group-hover:w-full transition-all duration-700 ease-in-out" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const services = [
    {
      title: "Web Engineering",
      description: "High-performance React & Next.js systems engineered for speed, scalability, and seamless user interaction.",
      icon: <Code2 size={24} />,
      tags: ["React", "Next.js", "TypeScript"]
    },
    {
      title: "Immersive 3D",
      description: "Bringing depth to the web using Three.js and WebGL. We build interactive worlds inside the browser.",
      icon: <Boxes size={24} />,
      tags: ["Three.js", "Blender", "WebGL"]
    },
    {
      title: "UI Architecture",
      description: "Logic-driven design systems that prioritize user psychology and aesthetic precision in Figma.",
      icon: <Fingerprint size={24} />,
      tags: ["Figma", "Design Systems", "UX"]
    },
    {
      title: "Backend Systems",
      description: "Robust API development and database architecture that powers complex digital applications.",
      icon: <Cpu size={24} />,
      tags: ["Node.js", "Postgres", "Python"]
    },
    {
      title: "Global SEO",
      description: "Data-driven optimization strategies to ensure your digital presence is discovered across the frontier.",
      icon: <Globe size={24} />,
      tags: ["Strategy", "Analytics", "Growth"]
    },
    {
      title: "Brand Logic",
      description: "Constructing visual identities that translate your mission into a recognizable digital artifact.",
      icon: <BarChart3 size={24} />,
      tags: ["Branding", "Strategy", "Identity"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-quantico text-[#a600ff] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Capabilities List
            </span>
            <h2 className="text-6xl md:text-8xl font-black font-orbitron tracking-tighter italic text-zinc-900">
              SERVICES<span className="text-[#a600ff]">_</span>
            </h2>
            <div className="w-24 h-1 bg-zinc-900 mx-auto mt-6" />
          </motion.div>
        </header>

        {/* Services Grid */}
        <div className="flex flex-wrap gap-8 justify-center">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              {...service}
            />
          ))}
        </div>

        {/* Capability Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="font-quantico text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#a600ff] animate-pulse" />
            All systems online and ready for deployment
          </div>
          <p className="font-orbitron text-xs font-bold text-zinc-900 uppercase">
            Custom requests available // contact@wortex.studio
          </p>
        </motion.div>
      </div>
    </div>
  );
}
