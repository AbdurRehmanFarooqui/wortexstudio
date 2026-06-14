"use client";

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github} from 'lucide-react';

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

const ProjectCards: React.FC<Project> = ({
  id,
  title = "Project Name",
  category = "3D Development",
  portfolio_images = [{ url: "/logo.png", index: 0 }],
  tags = ["Next.js", "Three.js"],
  github = "#",
  link = "#"
}) => {
  return (
    <div className='group relative flex-shrink-0 w-[320px] md:w-[500px] lg:h-[40vh] lg:w-auto aspect-[16/10] bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#a600ff]/50 hover:shadow-[0_0_40px_-15px_rgba(166,0,255,0.4)] mx-6 cursor-pointer'>
      
      {/* Background Image with Theme Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />
        <Image 
          src={portfolio_images[0]?.url || '/logo.png'} 
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
        />
      </div>

      {/* Tags with Neon Borders */}
      <div className="absolute top-2 left-2 md:top-6 md:left-6 z-20 flex gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-[9px] font-bold uppercase tracking-widest bg-black/80 backdrop-blur-md border border-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content Section */}
      <div className='relative z-20 h-full p-4 md:p-8 flex flex-col justify-end'>
        <div className="md:translate-y-18 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-pink-500 font-quantico text-xs uppercase tracking-[0.3em] md:mb-2 font-bold">
            {category}
          </p>
          <h3 className="text-2xl md:text-4xl font-black font-orbitron text-white mb-0 md:mb-6 tracking-tighter">
            {title}
          </h3>
          {/* Action Buttons with Gradient Hover */}
          <div className="hidden md:flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {link !== null && (
              <a 
              href={link} 
              target="_blank"
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-indigo-500 hover:to-[#a600ff] hover:text-white transition-all"
            >
              Launch <ExternalLink size={14} />
            </a>)}
            {github !== null && (
              <a 
              href={github} 
              target="_blank"
              className="flex items-center gap-2 text-xs font-black bg-zinc-900 text-white p-3 rounded-full border border-zinc-800 hover:border-pink-500 transition-colors"
            >
              <Github size={18} />
            </a>)}
              <a 
              href={`portfolio/${id}`} 
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-indigo-500 hover:to-[#a600ff] hover:text-white transition-all"
            >
              Details 
            </a>
          </div>
        </div>
      </div>

      {/* Subtle bottom-right glow based on theme */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#a600ff]/20 rounded-full blur-3xl group-hover:bg-pink-500/30 transition-colors duration-700" />
    </div>
  );
};

export default ProjectCards;