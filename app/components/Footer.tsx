// ========================== GPT =========================== //
// export default function Footer() {
//   return (
//     <footer className="border-t">
//       <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
//         {/* Left */}
//         <div className="text-sm text-gray-600">
//           © {new Date().getFullYear()}{" "}
//           <span className="font-medium text-black">Wortex Studio</span>.  
//           All rights reserved.
//         </div>

//         {/* Center */}
//         <div className="flex gap-6 text-sm">
//           <a href="#" className="hover:opacity-70 transition">
//             Privacy
//           </a>
//           <a href="#" className="hover:opacity-70 transition">
//             Terms
//           </a>
//           <a href="#contact" className="hover:opacity-70 transition">
//             Contact
//           </a>
//         </div>

//         {/* Right */}
//         <div className="flex gap-5 text-sm">
//           <a
//             href="#"
//             className="hover:opacity-70 transition"
//             aria-label="LinkedIn"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="#"
//             className="hover:opacity-70 transition"
//             aria-label="GitHub"
//           >
//             GitHub
//           </a>
//           <a
//             href="#"
//             className="hover:opacity-70 transition"
//             aria-label="Instagram"
//           >
//             Instagram
//           </a>
//         </div>

//       </div>
//     </footer>
//   );
// }




// ========================== Gemini =========================== //

// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Github, Twitter, Linkedin, ArrowUpRight, Cpu } from "lucide-react";

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-black text-white border-t border-zinc-900 pt-20 pb-10 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
//           {/* Brand Section */}
//           <div className="md:col-span-2 space-y-6">
//             <div className="flex items-center gap-2 group cursor-default">
//               <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
//                 <Cpu size={24} />
//               </div>
//               <span className="text-3xl font-black font-orbitron tracking-tighter">
//                 WORTEX<span className="text-indigo-500">.</span>
//               </span>
//             </div>
//             <p className="text-zinc-500 max-w-sm text-lg font-quantico">
//               Pushing the boundaries of the digital frontier through 3D experiences and high-performance engineering.
//             </p>
//           </div>

//           {/* Navigation */}
//           <div>
//             <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-500 mb-6">Navigation</h4>
//             <ul className="space-y-4">
//               {['Projects', 'Services', 'About', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <Link 
//                     href={`#${item.toLowerCase()}`} 
//                     className="group flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
//                   >
//                     {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Socials */}
//           <div>
//             <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-500 mb-6">Connect</h4>
//             <div className="flex gap-4">
//               {[
//                 { Icon: Github, href: "#" },
//                 { Icon: Twitter, href: "#" },
//                 { Icon: Linkedin, href: "#" }
//               ].map(({ Icon, href }, i) => (
//                 <Link 
//                   key={i} 
//                   href={href} 
//                   className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
//                 >
//                   <Icon size={20} />
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="text-zinc-600 text-sm font-quantico">
//             © {currentYear} WORTEX STUDIO. ALL RIGHTS RESERVED.
//           </div>
          
//           <div className="flex items-center gap-8">
//              <button 
//                 onClick={scrollToTop}
//                 className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-indigo-500 transition-colors flex items-center gap-2"
//               >
//                 Back to Top ↑
//               </button>
//           </div>
//         </div>
//       </div>

//       {/* Subtle Background Glow */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-indigo-900/10 blur-[120px] pointer-events-none" />
//     </footer>
//   );
// }










// ========================== DeepSeek =========================== //
// "use client"
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaHeart, FaArrowUp } from 'react-icons/fa';
// import { SiGmail } from 'react-icons/si';
// import { useState, useEffect } from 'react';

// export default function Footer() {
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   // Handle scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   // Show/hide scroll to top button
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const socialLinks = [
//     {
//       icon: <FaFacebookF />,
//       href: "https://facebook.com/wortexstudio",
//       color: "hover:bg-blue-600 hover:text-white",
//       name: "Facebook"
//     },
//     {
//       icon: <FaTwitter />,
//       href: "https://twitter.com/wortexstudio",
//       color: "hover:bg-sky-500 hover:text-white",
//       name: "Twitter"
//     },
//     {
//       icon: <FaInstagram />,
//       href: "https://instagram.com/wortexstudio",
//       color: "hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white",
//       name: "Instagram"
//     },
//     {
//       icon: <FaLinkedinIn />,
//       href: "https://linkedin.com/company/wortexstudio",
//       color: "hover:bg-blue-700 hover:text-white",
//       name: "LinkedIn"
//     },
//     {
//       icon: <FaGithub />,
//       href: "https://github.com/wortexstudio",
//       color: "hover:bg-gray-800 hover:text-white",
//       name: "GitHub"
//     },
//     {
//       icon: <SiGmail />,
//       href: "mailto:contact@wortexstudio.com",
//       color: "hover:bg-red-600 hover:text-white",
//       name: "Gmail"
//     }
//   ];

//   const quickLinks = [
//     { name: "Home", href: "#home" },
//     { name: "Projects", href: "#projects" },
//     { name: "Services", href: "#services" },
//     { name: "About", href: "#about" },
//     { name: "Contact", href: "#contact" }
//   ];

//   const services = [
//     { name: "Web Development", href: "#services" },
//     { name: "UI/UX Design", href: "#services" },
//     { name: "Mobile Apps", href: "#services" },
//     { name: "Branding", href: "#services" },
//     { name: "Consulting", href: "#services" }
//   ];

//   return (
//     <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative">
//       {/* Scroll to top button */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transform transition-all duration-300 animate-bounce-slow"
//           aria-label="Scroll to top"
//         >
//           <FaArrowUp className="text-xl" />
//         </button>
//       )}

//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Brand Section */}
//           <div className="space-y-6">
//             <div>
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                 Wortex Studio
//               </h2>
//               <p className="text-gray-400 mt-2 text-lg">
//                 Crafting Digital Excellence
//               </p>
//             </div>
//             <p className="text-gray-400 leading-relaxed">
//               We create stunning digital experiences that drive results and exceed expectations.
//             </p>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
//                   <span className="font-bold">24/7</span>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400">Support Available</p>
//                   <p className="font-medium">contact@wortexstudio.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 text-white border-l-4 border-blue-500 pl-3">
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-xl font-semibold mb-6 text-white border-l-4 border-purple-500 pl-3">
//               Our Services
//             </h3>
//             <ul className="space-y-3">
//               {services.map((service, index) => (
//                 <li key={index}>
//                   <a
//                     href={service.href}
//                     className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
//                     {service.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social & Newsletter */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-xl font-semibold mb-6 text-white border-l-4 border-pink-500 pl-3">
//                 Connect With Us
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
//                     aria-label={social.name}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div>
//               <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
//               <form className="space-y-3">
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="Your email"
//                     className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                   />
//                   <button
//                     type="submit"
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-md hover:opacity-90 transition-all duration-300"
//                   >
//                     Subscribe
//                   </button>
//                 </div>
//                 <p className="text-xs text-gray-500">
//                   Subscribe to our newsletter for updates
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="my-12 border-t border-gray-800"></div>

//         {/* Bottom Footer */}
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
//           <div className="text-center md:text-left">
//             <p className="text-gray-400">
//               © {year} Wortex Studio. All rights reserved.
//             </p>
//             <p className="text-gray-500 text-sm mt-1">
//               Crafted with <FaHeart className="inline text-red-500 animate-pulse" /> in San Francisco
//             </p>
//           </div>

//           <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
//             <a href="/privacy" className="hover:text-white transition-colors duration-300">
//               Privacy Policy
//             </a>
//             <a href="/terms" className="hover:text-white transition-colors duration-300">
//               Terms of Service
//             </a>
//             <a href="/cookies" className="hover:text-white transition-colors duration-300">
//               Cookie Policy
//             </a>
//             <a href="/sitemap" className="hover:text-white transition-colors duration-300">
//               Sitemap
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Wave Pattern */}
//       <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
//         <svg
//           className="relative block w-full h-12"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="rgba(59, 130, 246, 0.1)"
//             d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           ></path>
//         </svg>
//       </div>
//     </footer>
//   );
// }















// "use client";

// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaHeart, FaArrowUp } from 'react-icons/fa';
// import { SiGmail } from 'react-icons/si';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Footer() {
//   const [year] = useState(new Date().getFullYear());
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setShowScrollTop(window.scrollY > 300);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const socialLinks = [
//     { icon: <FaFacebookF />, href: "#", name: "Facebook" },
//     { icon: <FaTwitter />, href: "#", name: "Twitter" },
//     { icon: <FaInstagram />, href: "#", name: "Instagram" },
//     { icon: <FaLinkedinIn />, href: "#", name: "LinkedIn" },
//     { icon: <FaGithub />, href: "#", name: "GitHub" },
//     { icon: <SiGmail />, href: "#", name: "Gmail" }
//   ];

//   return (
//     <footer className="bg-black text-white relative border-t border-white/5 pt-20 overflow-hidden">
//       {/* Background Decorative Element */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#a600ff]/50 to-transparent" />
      
//       {/* Scroll to top button - Cyber Version */}
//       <AnimatePresence>
//         {showScrollTop && (
//           <motion.button
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             onClick={scrollToTop}
//             className="fixed bottom-10 right-10 z-50 w-12 h-12 bg-zinc-900 border border-zinc-700 text-[#a600ff] flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(166,0,255,0.2)] hover:border-[#a600ff] transition-all group"
//           >
//             <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
//           </motion.button>
//         )}
//       </AnimatePresence>

//       <div className="max-w-7xl mx-auto px-6 pb-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
//           {/* Brand Identity (4 cols) */}
//           <div className="lg:col-span-4 space-y-8">
//             <div>
//               <h2 className="text-4xl font-black font-orbitron tracking-tighter italic">
//                 WORTEX<span className="text-[#a600ff]">.</span>
//               </h2>
//               <p className="font-quantico text-[10px] uppercase tracking-[0.4em] text-indigo-400 mt-2">
//                 Digital Artifact Construction
//               </p>
//             </div>
            
//             <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
//               Engineered to push the boundaries of digital interaction. We specialize in high-performance web systems and immersive visual experiences.
//             </p>

//             <div className="flex gap-3">
//               {socialLinks.map((social, i) => (
//                 <a
//                   key={i}
//                   href={social.href}
//                   className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#a600ff] hover:shadow-[0_0_15px_rgba(166,0,255,0.3)] transition-all duration-300"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation (2 cols) */}
//           <div className="lg:col-span-2 space-y-6">
//             <h3 className="font-orbitron text-xs font-bold uppercase tracking-widest text-white">Navigation</h3>
//             <ul className="space-y-4">
//               {['Projects', 'Services', 'Process', 'About', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item.toLowerCase()}`} className="text-zinc-500 hover:text-[#a600ff] font-quantico text-xs uppercase tracking-tighter transition-colors">
//                     // {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services (2 cols) */}
//           <div className="lg:col-span-2 space-y-6">
//             <h3 className="font-orbitron text-xs font-bold uppercase tracking-widest text-white">Expertise</h3>
//             <ul className="space-y-4">
//               {['3D Visualization', 'React Systems', 'UI Architecture', 'Brand Design'].map((item) => (
//                 <li key={item} className="text-zinc-500 font-quantico text-xs uppercase tracking-tighter">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter (4 cols) */}
//           <div className="lg:col-span-4 space-y-6">
//             <h3 className="font-orbitron text-xs font-bold uppercase tracking-widest text-white">Join the Network</h3>
//             <p className="text-zinc-500 text-sm">Subscribe for system updates and tech insights.</p>
//             <form className="relative">
//               <input
//                 type="email"
//                 placeholder="ACCESS@EMAIL.COM"
//                 className="w-full bg-zinc-950 border border-zinc-800 px-4 py-4 rounded-xl text-xs font-quantico focus:outline-none focus:border-[#a600ff] transition-all"
//               />
//               <button className="absolute right-2 top-2 bottom-2 bg-[#a600ff] text-white px-4 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
//                 Submit
//               </button>
//             </form>
//             <div className="flex items-center gap-2">
//                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//                <span className="text-[10px] font-quantico text-zinc-600 uppercase tracking-widest">System Status: Optimal</span>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="flex flex-col items-center md:items-start gap-2">
//             <p className="font-quantico text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
//               © {year} WORTEX STUDIO / ALL CORE RIGHTS RESERVED
//             </p>
//             <p className="text-[10px] text-zinc-700 flex items-center gap-1 uppercase font-bold">
//               Built with <FaHeart size={8} className="text-pink-600" /> by 
//               <span className="text-zinc-500"> Wortex Engineering</span>
//             </p>
//           </div>

//           <div className="flex gap-8">
//             {['Privacy', 'Terms', 'Security'].map((item) => (
//               <a key={item} href="#" className="font-quantico text-[10px] text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Subtle Bottom Glow */}
//       <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#a600ff]/10 blur-[100px] rounded-full pointer-events-none" />
//     </footer>
//   );
// }























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
            className="fixed bottom-10 right-10 z-50 w-12 h-12 bg-zinc-900 border border-zinc-700 text-[#a600ff] flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(166,0,255,0.2)] hover:border-[#a600ff] transition-all group"
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
              <AnimatedFooterLink name="Projects" href="#projects" />
              <AnimatedFooterLink name="Services" href="#services" />
              <AnimatedFooterLink name="Process" href="#process" />
              <AnimatedFooterLink name="About" href="#about" />
              <AnimatedFooterLink name="Contact" href="#contact" />
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