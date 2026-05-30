"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description?: string;
  link?: string;
  github?: string;
  tags: string[];
  portfolio_images: PortfolioImage[];
}

interface PortfolioImage {
  url: string;
  index: number;
}
function ProjectCard({ project, index }: { project: Project; index: number }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-full lg:w-[calc(50%-1rem)] xl:w-[calc(33.33%-1.5rem)] mb-12"
    >
      <a href={`/portfolio/${project.id}`} className="cursor-pointer group" >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-zinc-100 bg-zinc-50">
        <img
          src={project.portfolio_images[0]?.url || '/logo.png'} // Fallback to placeholder if no images
          alt={project.title}
          className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
        />

        {/* Overlay Hover State */}
        <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start justify-end gap-4 p-4">
          {project.link && (<a href={project.link} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:bg-[#a600ff] hover:text-white transition-all transform hover:scale-110 translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
            <ArrowUpRight size={20} />
          </a>)}
          {project.github && (<a href={project.github} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:bg-[#a600ff] hover:text-white transition-all transform hover:scale-110 translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
            <Github size={20} />
          </a>)}
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
        <div className="w-full h-[1px] bg-zinc-100 my-2 relative overflow-hidden">
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
      </a>
    </motion.div>
  );
}

export default function PortfolioGrid({ initialProjects }: { initialProjects: any[] }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', '3D Visualization', 'AI Integration', 'Motion Design'];

  return (
    <>
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
           <span className="font-quantico text-[#a600ff] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">Work Archive</span>
           <h3 className="text-4xl md:text-8xl font-black font-orbitron italic text-zinc-900">PORTFOLIO<span className="text-[#a600ff]">.</span></h3>
        </motion.div>

        <div className="flex flex-wrap gap-4 border-b border-zinc-100 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-quantico text-[10px] uppercase cursor-pointer tracking-widest pb-2 relative ${filter === cat ? 'text-[#a600ff]' : 'text-zinc-400'}`}
            >
              {cat}
              {filter === cat && <motion.div layoutId="activeFilter" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#a600ff]" />}
            </button>
          ))}
        </div>
      </header>

      <div className="flex flex-wrap gap-x-6 gap-y-2 justify-start">
        <AnimatePresence mode='popLayout'>
          {initialProjects
            ?.filter(p => filter === 'All' || p.category === filter)
            .map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </AnimatePresence>
      </div>
    </>
  );
}