"use client";

import { useState, useEffect, useCallback } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

/* =====================================================
    TESTIMONIAL CARD COMPONENT
===================================================== */
function TestimonialCard({ 
  testimonial, 
  isActive, 
  handleSwipe 
}: { 
  testimonial: Testimonial; 
  isActive: boolean;
  handleSwipe?: (direction: number) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ 
        opacity: isActive ? 1 : 0.3, 
        scale: isActive ? 1 : 0.9,
        filter: isActive ? 'blur(0px)' : 'blur(4px)',
        y: 0
      }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      transition={{ 
        layout: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }}
      // Swipe Logic for Mobile
      drag={isActive ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (!handleSwipe) return;
        if (info.offset.x < -50) handleSwipe(1);
        if (info.offset.x > 50) handleSwipe(-1);
      }}
      className={`relative h-full transition-all duration-500 group cursor-grab active:cursor-grabbing`}
    >
      {/* The Glow Frame */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#a600ff] via-indigo-500 to-pink-500 rounded-3xl opacity-0 ${isActive ? 'opacity-20' : 'group-hover:opacity-10'} blur-xl transition-opacity`} />
      
      <div className={`relative h-full bg-zinc-950 border ${isActive ? 'border-[#a600ff]/50 shadow-[0_0_30px_rgba(166,0,255,0.1)]' : 'border-zinc-800'} rounded-3xl p-8 backdrop-blur-xl flex flex-col`}>
        
        {/* Quote Icon */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center text-[#a600ff] shadow-2xl">
          <FaQuoteLeft size={20} />
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${i < testimonial.rating ? 'text-pink-500 drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]' : 'text-zinc-800'}`}
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-zinc-300 text-md md:text-lg leading-relaxed font-medium italic mb-8 flex-grow">
          &quot;{testimonial.content}&quot;
        </p>

        {/* Author Footer */}
        <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/50">
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#a600ff] to-pink-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-zinc-900 overflow-hidden flex items-center justify-center">
                {testimonial.avatar ? (
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                ) : (
                  <FaUserCircle className="text-zinc-700 text-3xl" />
                )}
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-zinc-950"></div>
          </div>

          <div className="overflow-hidden text-left">
            <h4 className="text-lg font-bold text-white font-orbitron truncate">{testimonial.name}</h4>
            <div className="flex flex-col text-xs uppercase tracking-widest font-quantico">
              <span className="text-zinc-500">{testimonial.role}</span>
              <span className="text-indigo-400 font-bold">{testimonial.company}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =====================================================
    MAIN TESTIMONIALS SECTION
===================================================== */
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials: Testimonial[] = [
    { id: 1, name: "Sarah Johnson", role: "Product Manager", company: "TechCorp Inc.", content: "Working with WORTEX transformed our digital presence. Their attention to detail and innovative 3D solutions exceeded all expectations.", rating: 5, avatar: "https://i.pravatar.cc/150?u=sarah" },
    { id: 2, name: "Michael Chen", role: "CEO & Founder", company: "StartUpXYZ", content: "Exceptional code quality and design. They delivered a scalable solution ahead of schedule. Truly a partner in our growth.", rating: 5, avatar: "https://i.pravatar.cc/150?u=mike" },
    { id: 3, name: "Emma Rodriguez", role: "Art Director", company: "GlobalBrands", content: "Their technical expertise in WebGL and React is unmatched. They turned a vague concept into a stunning interactive reality.", rating: 5, avatar: "https://i.pravatar.cc/150?u=emma" },
    { id: 4, name: "David Kim", role: "CTO", company: "InnovateLabs", content: "The team's ability to create immersive experiences is remarkable. They delivered beyond our wildest expectations.", rating: 5, avatar: "https://i.pravatar.cc/150?u=david" },
  ];

  const paginate = useCallback((direction: number) => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + direction + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  return (
    <section className="relative py-32 md:py-60 md:px-6 bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a600ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
          >
            <span className="font-quantico text-[#a600ff] text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
              System Validation
            </span>
            <h2 className="text-4xl md:text-7xl font-black font-orbitron text-white mb-6 tracking-tighter italic">
              CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">FEEDBACK</span>
            </h2>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[450px]">
            <AnimatePresence mode="popLayout" initial={false}>
              {[-1, 0, 1].map((offset) => {
                const index = (currentIndex + offset + testimonials.length) % testimonials.length;
                const testimonial = testimonials[index];
                
                return (
                  <motion.div 
                    key={testimonial.id} // Use ID, not index, for stable animation
                    className={`${offset !== 0 ? 'hidden lg:block' : 'block'}`}
                    layout
                  >
                    <TestimonialCard 
                      testimonial={testimonial} 
                      isActive={offset === 0} 
                      handleSwipe={paginate}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 md:px-0">
            <button 
              onClick={() => paginate(-1)}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900/80 border border-zinc-800 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all pointer-events-auto backdrop-blur-sm shadow-2xl"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900/80 border border-zinc-800 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all pointer-events-auto backdrop-blur-sm shadow-2xl"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Progress & Auto-Cycle Controls */}
        <div className="mt-12 flex flex-col items-center gap-8">
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setAutoplay(false); }}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-12 bg-[#a600ff]' : 'w-4 bg-zinc-800 hover:bg-zinc-600'}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4 bg-zinc-900/50 p-2 px-4 rounded-full border border-zinc-800 backdrop-blur-md">
             <span className="text-[10px] font-bold font-quantico text-zinc-500 uppercase tracking-widest">Auto-Cycle</span>
             <button 
              onClick={() => setAutoplay(!autoplay)}
              className={`w-10 h-5 rounded-full relative transition-colors ${autoplay ? 'bg-[#a600ff]' : 'bg-zinc-700'}`}
             >
               <motion.div 
                animate={{ x: autoplay ? 22 : 2 }}
                className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-md"
               />
             </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 py-16 border-y border-zinc-800">
          {[
            { label: "Avg Rating", val: "4.9/5", color: "text-[#a600ff]" },
            { label: "Total Nodes", val: "250+", color: "text-indigo-400" },
            { label: "Uptime Support", val: "24/7", color: "text-pink-500" },
            { label: "Success Rate", val: "99%", color: "text-emerald-400" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`text-3xl md:text-4xl font-black font-orbitron ${stat.color} mb-2`}>{stat.val}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Blueprint Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-black to-transparent pointer-events-none" />

    </section>
  );
}