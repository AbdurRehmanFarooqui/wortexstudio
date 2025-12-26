// "use client"
// import MagnetLines from '../components/MagnetLines';
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function About() {
//   // const containerRef = useRef(null);
//   // const { scrollYProgress } = useScroll({ target: containerRef })

//   // const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1;
//   // const x = useTransform(scrollYProgress, [0, 0.8], [`-${windowHeight}px`, '0px']);
//   // const opacity = useTransform(scrollYProgress, [0, 0.5], ['0', '1']);
//   // const scale = useTransform(scrollYProgress, [0, 0.5], ['0.5', '1']);

//   return (
//     // <motion.section className="h-[140vh] border" ref={containerRef}>
//     /* <motion.div className=' max-w-full mx-auto border sticky top-0 h-[100vh] flex items-center justify center' style={{ opacity: opacity, scale: scale, x }}> */

//     <div className='m-auto h-full max-w-7xl flex items-center justify-around py-32 border border-red text-black' >
//       <div className="flex-1 flex items-center justify-center pl-12" >
//         <MagnetLines
//           rows={7}
//           columns={7}
//           containerSize="36vmin"
//           lineColor="black"
//           lineWidth="0.4vmin"
//           lineHeight="3vmin"
//           baseAngle={0}
//           style={{ margin: "0rem auto" }}
//         />
//       </div>
//       <div className="flex-2 p-12"><h3 className="font-quantico text-3xl font-regular text-black tracking-[8px] leading-[2] text-justify">At our core, we blend imagination with technology. From stunning visuals to powerful software, we create solutions that make an impact.</h3></div>
//     </div >

//     // </motion.div>
//     // </motion.section>
//   );
// }




// ========================================= Gemini =======================================//
"use client";

import React, { useRef } from "react";
import MagnetLines from "../components/MagnetLines";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Subtle parallax effect for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-white flex items-center overflow-hidden py-24 px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        
        {/* Left Side: Interaction (The Magnet) */}
        <motion.div 
          style={{ y }}
          className="lg:col-span-2 flex justify-center items-center relative"
        >
          {/* Decorative Background Glow for MagnetLines */}
          <div className="absolute w-[40vmin] h-[40vmin] bg-indigo-600/50 blur-[100px] rounded-full" />
          
          <div className="relative z-10 p-8 border border-black/5 rounded-3xl bg-white backdrop-blur-3xl">
            <MagnetLines
              rows={9}
              columns={9}
              containerSize="35vmin"
              lineColor="#6366f1" // Indigo to match your theme
              lineWidth="0.4vmin"
              lineHeight="3.5vmin"
              baseAngle={0}
              style={{ margin: "0rem auto" }}
            />
          </div>
        </motion.div>

        {/* Right Side: Narrative */}
        <div className="lg:col-span-3 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 font-quantico">
              Our Philosophy
            </h4>
            
            <h3 className="font-quantico text-3xl md:text-5xl font-medium text-black tracking-tight leading-[1.3] text-left">
              At our core, we blend{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-black italic">
                imagination
              </span>{" "}
              with technology. 
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-2xl"
          >
            From stunning visuals to powerful software, we create digital 
            solutions that don't just function—they make an impact. We don't 
            just build products; we craft experiences.
          </motion.p>

          {/* Experience Counter / Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex gap-12 pt-8 border-t border-zinc-900"
          >
            <div>
              <p className="text-3xl font-black font-orbitron text-black">100%</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Innovation</p>
            </div>
            <div>
              <p className="text-3xl font-black font-orbitron text-black">24/7</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Creativity</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Section Label (Watermark) */}
      {/* <div className="absolute -bottom-10 -right-10 text-[20rem] font-black text-black/[0.2] select-none pointer-events-none font-orbitron">
        ABOUT
      </div> */}
    </section>
  );
}


// ========================================= Gpt =======================================//

// "use client";

// import MagnetLines from "../components/MagnetLines";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section className="border max-w-7xl mx-auto px-6 py-32">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
//         {/* ================= LEFT: VISUAL ================= */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="flex justify-center"
//         >
//           <MagnetLines
//             rows={7}
//             columns={7}
//             containerSize="36vmin"
//             lineColor="black"
//             lineWidth="0.4vmin"
//             lineHeight="3vmin"
//             baseAngle={0}
//           />
//         </motion.div>

//         {/* ================= RIGHT: CONTENT ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="space-y-8"
//         >
//           <h2 className="font-orbitron text-5xl tracking-[6px]">
//             About Us
//           </h2>

//           <p className="font-quantico text-lg leading-loose text-gray-700">
//             At our core, we blend imagination with technology.
//             From stunning visuals to powerful software,
//             we craft digital solutions that are not only beautiful
//             but engineered to perform.
//           </p>

//           <p className="font-quantico text-lg leading-loose text-gray-700">
//             Whether it’s design, development, or intelligent systems,
//             we focus on clarity, precision, and long-term value.
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// }




// ========================================= Deepseek =======================================//

// "use client"
// import MagnetLines from '../components/MagnetLines';
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { FaRocket, FaLightbulb, FaCode, FaPaintBrush } from 'react-icons/fa';

// export default function About() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // Transform values for animations
//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 1]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

//   const values = [
//     {
//       icon: <FaLightbulb />,
//       title: "Innovation",
//       description: "Pushing boundaries with creative solutions"
//     },
//     {
//       icon: <FaCode />,
//       title: "Excellence",
//       description: "Clean, efficient, and scalable code"
//     },
//     {
//       icon: <FaPaintBrush />,
//       title: "Design",
//       description: "Beautiful, user-centered interfaces"
//     },
//     {
//       icon: <FaRocket />,
//       title: "Growth",
//       description: "Scalable solutions for your success"
//     }
//   ];

//   return (
//     <motion.section 
//       ref={containerRef} 
//       className="relative min-h-screen py-20 overflow-hidden"
//       style={{ opacity }}
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4">
//             WHO WE ARE
//           </span>
//           <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             We Create <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Magic</span>
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Transforming ideas into exceptional digital experiences
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Visual Element */}
//           <motion.div 
//             className="relative"
//             style={{ y, scale }}
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative">
//               {/* Main MagnetLines Container */}
//               <div className="relative z-10">
//                 <MagnetLines
//                   rows={9}
//                   columns={9}
//                   containerSize="min(500px, 80vw)"
//                   lineColor="linear-gradient(45deg, #3B82F6, #8B5CF6)"
//                   lineWidth="0.3vmin"
//                   lineHeight="2.5vmin"
//                   baseAngle={45}
//                   style={{ margin: "0 auto" }}
//                 />
//               </div>
              
//               {/* Decorative Circles */}
//               <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-500/30 rounded-full animate-spin-slow"></div>
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-purple-500/30 rounded-full animate-spin-slow-reverse"></div>
              
//               {/* Floating Element */}
//               <motion.div 
//                 className="absolute top-1/4 -right-8 bg-white p-4 rounded-xl shadow-2xl border border-gray-100"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 <div className="text-blue-600 font-bold text-2xl">100+</div>
//                 <div className="text-gray-600 text-sm">Projects</div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right Column - Content */}
//           <motion.div 
//             className="space-y-8"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             {/* Main Description */}
//             <div className="relative">
//               <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
//               <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                 Where <span className="text-blue-600">Imagination</span> Meets <span className="text-purple-600">Technology</span>
//               </h3>
//               <p className="text-xl text-gray-600 leading-relaxed mb-8">
//                 We are a passionate team of innovators, designers, and developers dedicated to 
//                 crafting exceptional digital experiences. From stunning visuals to powerful software, 
//                 we create solutions that not only look beautiful but also drive real impact.
//               </p>
//             </div>

//             {/* Values Grid */}
//             <div className="grid grid-cols-2 gap-6">
//               {values.map((value, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <div className="text-3xl mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                     {value.icon}
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
//                   <p className="text-gray-600">{value.description}</p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 1 }}
//               viewport={{ once: true }}
//             >
//               <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
//                 <span className="relative z-10">Explore Our Work</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Stats Bar */}
//         <motion.div 
//           className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           {[
//             { number: "5+", label: "Years Experience" },
//             { number: "100+", label: "Projects Completed" },
//             { number: "50+", label: "Happy Clients" },
//             { number: "24/7", label: "Support" }
//           ].map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 {stat.number}
//               </div>
//               <div className="text-gray-600 mt-2">{stat.label}</div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }