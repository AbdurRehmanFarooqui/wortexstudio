// import ProjectCards from "@/components/ProjectCards"


// export default function PortfolioPage(){
//     return(
//         <div className="w-full pt-32">
//             <h2 className="text-center text-4xl">Portfolio</h2>
//             <div className="flex flex-wrap max-w-7xl mx-auto justify-center py-10">
//                 <ProjectCards/>
//                 <ProjectCards/>
//                 <ProjectCards/>
//                 <ProjectCards/>
//                 <ProjectCards/>
                

//             </div>
//         </div>
//     )
// }



"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  repo: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Neuro-Visual Engine",
    category: "Web Engineering",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    link: "#",
    repo: "#",
    tags: ["React", "Three.js", "GSAP"]
  },
  {
    id: 2,
    title: "Cyber-Commerce UI",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    link: "#",
    repo: "#",
    tags: ["Next.js", "Tailwind", "Framer"]
  },
  {
    id: 3,
    title: "Data-Stream Dashboard",
    category: "UI Architecture",
    image: "https://images.unsplash.com/photo-1551288049-bbda4865cda1?auto=format&fit=crop&w=800&q=80",
    link: "#",
    repo: "#",
    tags: ["TypeScript", "D3.js", "Node"]
  },
  {
    id: 4,
    title: "Vortex Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    link: "#",
    repo: "#",
    tags: ["Logo", "Motion", "Print"]
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-full lg:w-[calc(50%-1rem)] xl:w-[calc(33.33%-1.5rem)] mb-12"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-zinc-100 bg-zinc-50">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
        />
        
        {/* Overlay Hover State */}
        <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <a href={project.link} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:bg-[#a600ff] hover:text-white transition-all transform hover:scale-110 translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
            <ArrowUpRight size={20} />
          </a>
          <a href={project.repo} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:bg-[#a600ff] hover:text-white transition-all transform hover:scale-110 translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* Project Details */}
      <div className="mt-6 px-2">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="font-quantico text-[10px] uppercase tracking-[0.2em] text-[#a600ff] font-bold">
              // {project.category}
            </span>
            <h3 className="font-orbitron text-xl font-bold text-zinc-900 tracking-tight mt-1">
              {project.title}
            </h3>
          </div>
        </div>

        {/* The "Cyber Dash" Progress Line */}
        <div className="w-full h-[1px] bg-zinc-100 my-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-0 bg-[#a600ff] group-hover:w-full transition-all duration-700 ease-in-out" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="font-quantico text-[9px] uppercase tracking-widest text-zinc-400 group-hover:text-zinc-600 transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Engineering', 'Product Design', 'UI Architecture', 'Branding'];

  return (
    <div className="w-full min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-quantico text-[#a600ff] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Work Archive
            </span>
            <h2 className="text-6xl md:text-8xl font-black font-orbitron tracking-tighter italic text-zinc-900">
              PORTFOLIO<span className="text-[#a600ff]">.</span>
            </h2>
          </motion.div>

          {/* Filtering System */}
          <div className="flex flex-wrap gap-4 border-b border-zinc-100 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-quantico text-[10px] uppercase tracking-widest pb-2 transition-all relative ${
                  filter === cat ? 'text-[#a600ff]' : 'text-zinc-400 hover:text-zinc-900'
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div layoutId="activeFilter" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#a600ff]" />
                )}
              </button>
            ))}
          </div>
        </header>

        {/* Portfolio Grid */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-start">
          <AnimatePresence mode='popLayout'>
            {projects
              .filter(p => filter === 'All' || p.category === filter)
              .map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
          </AnimatePresence>
        </div>

        {/* Load More / CTA */}
        <div className="mt-20 text-center">
          <button className="group relative px-8 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl overflow-hidden transition-all hover:border-[#a600ff]">
            <span className="relative z-10 font-quantico text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900 group-hover:text-[#a600ff] transition-colors">
              Initialize More Data
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}