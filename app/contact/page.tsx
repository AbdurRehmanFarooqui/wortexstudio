// import ProjectCards from "@/components/ProjectCards"
// import Contact from "@/sections/contact"

// export default function ContactPage(){
//     return(
//         <div className="w-full pt-32 ">
//             <h2 className="text-center text-4xl">Contact</h2>
//             <div className="flex flex-wrap max-w-7xl mx-auto justify-center py-10 ">
                
//                 <Contact/>

//             </div>
//         </div>
//     )
// }





"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, Globe } from 'lucide-react';

export default function ContactPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="w-full min-h-screen bg-white text-zinc-900 pt-32 pb-20 selection:bg-[#a600ff]/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HEADER SECTION */}
        <header className="mb-20">
          <motion.div {...fadeUp}>
            <span className="font-quantico text-[#a600ff] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Transmission Portal
            </span>
            <h1 className="text-6xl md:text-8xl font-black font-orbitron tracking-tighter italic mb-6">
              CONTACT<span className="text-[#a600ff]">_</span>
            </h1>
            <p className="max-w-xl text-zinc-500 font-medium leading-relaxed">
              Have a high-performance project in mind? Initialize a connection with our core engineering team below.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 2. CONTACT INFO (4 Cols) */}
          <motion.div 
            {...fadeUp}
            className="lg:col-span-4 space-y-12"
          >
            {/* Availability Status */}
            <div className="p-6 border border-zinc-100 rounded-[2rem] bg-zinc-50/50">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                 <span className="font-quantico text-[10px] uppercase tracking-widest font-bold text-zinc-400">Status: Accepting Projects</span>
               </div>
               <p className="text-xs text-zinc-500 font-medium">Our current response latency is &lt; 24 hours.</p>
            </div>

            {/* Direct Lines */}
            <div className="space-y-8 px-2">
              <div className="group flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-[#a600ff] transition-colors border border-zinc-100">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-orbitron text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Email Terminal</h4>
                  <p className="font-quantico text-sm font-bold text-zinc-900">hello@wortex.studio</p>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-[#a600ff] transition-colors border border-zinc-100">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-orbitron text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">HQ Location</h4>
                  <p className="font-quantico text-sm font-bold text-zinc-900">San Francisco, CA // Global Ops</p>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-[#a600ff] transition-colors border border-zinc-100">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-orbitron text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Timezone</h4>
                  <p className="font-quantico text-sm font-bold text-zinc-900">PST (UTC -8)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. CONTACT FORM (8 Cols) */}
          <motion.div 
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 bg-white border border-zinc-100 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-zinc-100/50"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="space-y-2">
                <label className="font-quantico text-[10px] uppercase tracking-widest text-zinc-400 ml-2">Identified Name</label>
                <input 
                  type="text" 
                  placeholder="USER_NAME"
                  className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-2xl font-quantico text-xs focus:outline-none focus:border-[#a600ff] focus:ring-4 focus:ring-[#a600ff]/5 transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="font-quantico text-[10px] uppercase tracking-widest text-zinc-400 ml-2">Return Path (Email)</label>
                <input 
                  type="email" 
                  placeholder="USER@ACCESS.COM"
                  className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-2xl font-quantico text-xs focus:outline-none focus:border-[#a600ff] focus:ring-4 focus:ring-[#a600ff]/5 transition-all"
                />
              </div>

              {/* Project Type */}
              <div className="md:col-span-2 space-y-2">
                <label className="font-quantico text-[10px] uppercase tracking-widest text-zinc-400 ml-2">Inquiry Module</label>
                <select className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-2xl font-quantico text-xs focus:outline-none focus:border-[#a600ff] transition-all appearance-none cursor-pointer">
                  <option>Web Engineering</option>
                  <option>3D / Immersive Experience</option>
                  <option>UI/UX Architecture</option>
                  <option>Other / Custom</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2 space-y-2">
                <label className="font-quantico text-[10px] uppercase tracking-widest text-zinc-400 ml-2">Mission Briefing (Message)</label>
                <textarea 
                  rows={5}
                  placeholder="DESCRIBE_PROJECT_GOALS..."
                  className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-2xl font-quantico text-xs focus:outline-none focus:border-[#a600ff] focus:ring-4 focus:ring-[#a600ff]/5 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <button className="group w-full py-5 bg-zinc-900 hover:bg-[#a600ff] text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-500">
                  <span className="font-quantico font-bold uppercase tracking-[0.3em] text-xs">Execute Transmission</span>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Subtle background decorative element */}
      <div className="fixed bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-zinc-50 to-transparent pointer-events-none -z-10" />
    </div>
  );
}