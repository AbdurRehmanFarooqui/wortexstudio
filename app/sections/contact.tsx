"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden pb-60">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-4xl md:text-8xl font-black font-orbitron mb-6 tracking-tighter italic">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-[#a600ff] to-pink-500">
              CONNECT
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg max-w-xl mx-auto font-quantico uppercase tracking-widest">
            Ready to breach the digital frontier? Let&apos;s build the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xs font-black mb-8 font-quantico uppercase tracking-[0.4em] text-[#a600ff]">
                System Information
              </h3>
              
              <div className="space-y-4">
                {/* Email Item */}
                <a href="mailto:hello@wortex.studio" className="flex items-center gap-4 md:gap-6 group p-2 md:p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <div className="p-4 bg-zinc-950 border border-indigo-500/30 rounded-lg group-hover:border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:shadow-indigo-500/40 transition-all">
                    <Mail className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Send Data</p>
                    <p className="md:text-xl font-orbitron group-hover:text-indigo-400 transition-colors">hello@wortex.studio</p>
                  </div>
                </a>

                {/* Phone Item */}
                <div className="flex items-center gap-4 md:gap-6 group p-2 md:p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <div className="p-4 bg-zinc-950 border border-[#a600ff]/30 rounded-lg group-hover:border-[#a600ff] shadow-[0_0_15px_rgba(166,0,255,0.2)] group-hover:shadow-[#a600ff]/40 transition-all">
                    <Phone className="w-6 h-6 text-[#a600ff]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Direct Line</p>
                    <p className="md:text-xl font-orbitron group-hover:text-[#a600ff] transition-colors">+1 (555) WORTEX</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4 md:gap-6 group p-2 md:p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <div className="p-4 bg-zinc-950 border border-pink-500/30 rounded-lg group-hover:border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.2)] group-hover:shadow-pink-500/40 transition-all">
                    <MapPin className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">HQ Coordinates</p>
                    <p className="md:text-xl font-orbitron group-hover:text-pink-400 transition-colors">Digital Nomad, Metaverse 101</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-[10px] font-black mb-6 font-quantico uppercase tracking-[0.4em] text-zinc-500">Nodes</h3>
              <div className="flex gap-4">
                {[
                    { Icon: Github, color: 'hover:text-indigo-500' },
                    { Icon: Linkedin, color: 'hover:text-[#a600ff]' },
                    { Icon: Twitter, color: 'hover:text-pink-500' }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className={`p-4 bg-zinc-950 border border-zinc-800 rounded-full text-zinc-400 ${item.color} hover:border-current hover:scale-110 transition-all duration-300 shadow-xl`}
                  >
                    <item.Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative p-[1px] rounded-2xl overflow-hidden group"
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-[#a600ff] to-pink-500 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-zinc-950 p-4 md:p-8 md:p-10 rounded-2xl backdrop-blur-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full text-sm md:text-md bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-[#a600ff] focus:ring-1 focus:ring-[#a600ff]/20 transition-all"
                      placeholder="USER_ID"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full text-sm md:text-md bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                      placeholder="MAIL_ADR"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Service Module</label>
                  <select className="w-full text-sm md:text-md bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-pink-500 transition-all appearance-none text-zinc-400">
                    <option>3D Development</option>
                    <option>Web Design</option>
                    <option>Brand Identity</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Message Packet</label>
                  <textarea 
                    rows={4}
                    className="w-full text-sm md:text-md bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-[#a600ff] transition-all resize-none"
                    placeholder="Describe the objective..."
                  />
                </div>

                <button className="w-full relative group py-4 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-[#a600ff] to-pink-600 transition-transform duration-500 group-hover:scale-105" />
                  <span className="relative flex items-center justify-center gap-2 font-black font-orbitron text-xs tracking-widest px-6 md:px-0">
                    INITIALIZE TRANSMISSION <Send className="w-6 h-6" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}