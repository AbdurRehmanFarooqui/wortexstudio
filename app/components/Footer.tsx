"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaHeart, FaArrowUp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", name: "Facebook" },
    { icon: <FaTwitter />, href: "#", name: "Twitter" },
    { icon: <FaInstagram />, href: "#", name: "Instagram" },
    { icon: <FaLinkedinIn />, href: "#", name: "LinkedIn" },
    { icon: <FaGithub />, href: "#", name: "GitHub" },
    { icon: <SiGmail />, href: "#", name: "Gmail" }
  ];

  // Helper component for the animated links
  const AnimatedFooterLink = ({ name, href }: { name: string, href: string }) => (
    <li>
      <a 
        href={href} 
        className="group flex items-center text-zinc-500 hover:text-white transition-colors duration-300 py-1"
      >
        {/* The "Cyber Dash" - Grows from 0 to 16px */}
        <span className="w-0 h-[2px] bg-[#a600ff] transition-all duration-300 ease-out group-hover:w-4 group-hover:mr-3 opacity-0 group-hover:opacity-100" />
        
        <span className="font-quantico text-xs uppercase tracking-tighter group-hover:tracking-[0.1em] transition-all duration-300">
          <span className="text-zinc-800 group-hover:text-[#a600ff] transition-colors mr-1">//</span>
          {name}
        </span>
      </a>
    </li>
  );

  return (
    <footer className="bg-black text-white relative border-t border-white/5 pt-20 overflow-hidden">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#a600ff]/50 to-transparent" />
      
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 md:w-10 md:h-10 w-8 h-8 bg-zinc-900 border border-zinc-700 text-[#a600ff] flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(166,0,255,0.2)] hover:border-[#a600ff] transition-all group"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-4xl font-black font-orbitron tracking-tighter italic">
                WORTEX<span className="text-[#a600ff]">.</span>
              </h2>
              <p className="font-quantico text-[10px] uppercase tracking-[0.4em] text-indigo-400 mt-2">
                Digital Artifact Construction
              </p>
            </div>
            
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Pushing the boundaries of digital interaction through high-performance web systems and immersive design.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#a600ff] hover:shadow-[0_0_15px_rgba(166,0,255,0.3)] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation with Hover Animation */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-orbitron text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Navigation</h3>
            <ul className="space-y-2">
              <AnimatedFooterLink name="Projects" href="portfolio" />
              <AnimatedFooterLink name="Services" href="services" />
              {/* <AnimatedFooterLink name="Process" href="#process" /> */}
              <AnimatedFooterLink name="About" href="about" />
              <AnimatedFooterLink name="Contact" href="contact" />
            </ul>
          </div>

          {/* Expertise with Hover Animation */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-orbitron text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Expertise</h3>
            <ul className="space-y-2">
              <AnimatedFooterLink name="3D Visualization" href="#" />
              <AnimatedFooterLink name="React Systems" href="#" />
              <AnimatedFooterLink name="UI Architecture" href="#" />
              <AnimatedFooterLink name="Motion Design" href="#" />
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-orbitron text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Newsletter</h3>
            <form className="relative group">
              <input
                type="email"
                placeholder="SYSTEM@ACCESS.COM"
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-4 rounded-xl text-[10px] font-quantico focus:outline-none focus:border-[#a600ff] transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#a600ff] text-white px-4 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Join
              </button>
            </form>
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
               <span className="text-[9px] font-quantico text-zinc-600 uppercase tracking-widest">Status: Connected</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-quantico text-[9px] text-zinc-600 uppercase tracking-[0.2em]">
              © {year} WORTEX STUDIO / ENGINE VERSION 2.0.5
            </p>
            <p className="text-[9px] text-zinc-700 flex items-center gap-1 uppercase font-bold tracking-tighter">
              Initialised with <FaHeart size={8} className="text-[#a600ff] animate-pulse" /> by 
              <span className="text-zinc-500"> Wortex Core Team</span>
            </p>
          </div>

          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Archive'].map((item) => (
              <a key={item} href="#" className="font-quantico text-[9px] text-zinc-600 hover:text-[#a600ff] uppercase tracking-widest transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#a600ff]/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
}