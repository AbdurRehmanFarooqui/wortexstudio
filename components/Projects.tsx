// "use client"
// import React, { useRef } from 'react';
// import ProjectCards from './ProjectCards';
// import { motion, useScroll, useTransform } from 'framer-motion';


// const Projects = () => {

//     const targetref = useRef(null)

//     const { scrollYProgress } = useScroll({ target: targetref })

//     const x = useTransform(scrollYProgress, [0, 1], ['50', '-200%']);
//     // const x3 = useTransform(scrollYProgress, [0, 1], ['20', '-50%']);

//     const z = useTransform(scrollYProgress, [0, 0.3], ['1', '1']);
//     const a = useTransform(scrollYProgress, [0, 0.3], ['1', '1']);
//     // const scaleX = useSpring(scrollYProgress, {
//     //     stiffness: 100,
//     //     damping: 30,
//     //     restDelta: 0.001
//     //   });
//     const projectData = [
//         { title: "Quantum Render", tags: ["Next.js", "Three.js"], category: "3D Visualization" },
//         { title: "Neuro Sync", tags: ["React", "Python"], category: "AI Dashboard" },
//         // ... more projects
//     ];
//     return (
//         <motion.section className='h-[350vh] color-[#E6E6E6]' ref={targetref} style={{ opacity: z, scale: a }}>

//             <div className='sticky h-[100vh] top-0 pt-52 pb-32 mx-auto'>

//                 <h2 className='font-orbitron text-7xl font-bold tracking-[8px] text-black text-center'>Projects</h2>
//                 <div>
//                     {/* <ul> */}
//                     {/* <li>WordPress Site</li> */}
//                     {/* <li>Webdesign</li> */}
//                     {/* <li>WebDevelopment</li> */}
//                     {/* <li>App Devlopment</li> */}
//                     {/* <li>Graphic Design</li> */}
//                     {/* </ul> */}
//                 </div>
//                 <motion.div className='flex items-center h-[60%] pt-20' style={{ x }}>
//                     <ProjectCards />
//                     <ProjectCards />
//                     <ProjectCards />
//                     <ProjectCards />
//                     <ProjectCards />
//                     <ProjectCards />
//                     <ProjectCards />
//                     {projectData.map((project, i) => (
//                         <ProjectCards key={i} {...project} />
//                     ))}
//                 </motion.div>
//                 {/* <motion.div className='bottom' style={{ x: x3 }}>
//                     <ProjectCards />
//                     <ProjectCards />
//                     <ProjectCards />
//                     <ProjectCards />
//                 </motion.div> */}
//             </div>

//         </motion.section>
//     )
// }

// export default Projects







// "use client"
// import React from 'react';
// import ProjectCards from './ProjectCards';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'E-Commerce Platform',
//       description: 'A full-featured online shopping platform with cart, payments, and admin dashboard.',
//       techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'MongoDB'],
//       tags: ['Full Stack', 'E-Commerce'],
//       isFeatured: true,
//       likes: 42,
//       imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       title: 'Health & Fitness App',
//       description: 'Mobile application for tracking workouts, nutrition, and health metrics.',
//       techStack: ['React Native', 'Firebase', 'Redux', 'Node.js'],
//       tags: ['Mobile', 'Health Tech'],
//       likes: 31,
//       imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'Modern portfolio website with 3D animations and interactive elements.',
//       techStack: ['React', 'Three.js', 'Framer Motion', 'GSAP'],
//       tags: ['Web Design', 'Animation'],
//       isFeatured: true,
//       likes: 56,
//       imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       title: 'Task Management Tool',
//       description: 'Collaborative project management application with real-time updates.',
//       techStack: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL'],
//       tags: ['SaaS', 'Productivity'],
//       likes: 28,
//       imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
//       {projects.map((project, index) => (
//         <ProjectCards
//           key={index}
//           {...project}
//           liveUrl="https://example.com"
//           githubUrl="https://github.com/example"
//           onLike={() => console.log(`Liked ${project.title}`)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Projects;




// "use client";

// import React, { useRef } from 'react';
// import ProjectCards from './ProjectCards';
// import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// // Define the Project Interface
// interface ProjectData {
//   title: string;
//   tags: string[];
//   category: string;
//   imageUrl?: string;
// }

// const Projects: React.FC = () => {
//   const targetRef = useRef<HTMLElement>(null);

//   // Offset ensures the scroll starts and ends exactly when the section is in view
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   // FIX: Added units ('0%' and '-200%') to ensure mobile compatibility
//   const x: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['0%', '-65%']);

//   const projectData: ProjectData[] = [
//     { title: "Quantum Render", tags: ["Next.js", "Three.js"], category: "3D Visualization" },
//     { title: "Neuro Sync", tags: ["React", "Python"], category: "AI Dashboard" },
//     { title: "Cyber Shell", tags: ["Rust", "Wasm"], category: "Security" },
//     { title: "Neon Pulse", tags: ["Framer", "React"], category: "Brand Design" },
//     { title: "Astra Engine", tags: ["C++", "Vulkan"], category: "Game Dev" },
//   ];

//   return (
//     <motion.section 
//       ref={targetRef} 
//       className="relative h-[400vh] bg-black overflow-clip"
//     >
//       {/* Sticky Container */}
//       <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
//         {/* Background Text Watermark */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] font-orbitron select-none pointer-events-none">
//           WORKS
//         </div>

//         {/* Section Header */}
//         <div className="relative z-10 mb-12 px-10">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="font-orbitron text-5xl md:text-8xl font-black tracking-tighter text-white text-left"
//           >
//             PROJECTS<span className="text-[#a600ff]">.</span>
//           </motion.h2>
//           <p className="font-quantico text-indigo-400 uppercase tracking-[0.3em] text-sm ml-2">
//             Selected Digital Artifacts
//           </p>
//         </div>

//         {/* Horizontal Scrolling Track */}
//         <motion.div className="flex items-center" style={{ x }}>
//           {/* Mapping through real data */}
//           {projectData.map((project, i) => (
//             <ProjectCards key={i} {...project} />
//           ))}
          
//           {/* Static placeholders if needed */}
//           <ProjectCards title="Vortex Core" category="Web Design" tags={["Typescript"]} />
//           <ProjectCards title="Shadow Wire" category="Mobile" tags={["Flutter"]} />
//         </motion.div>

//         {/* Progress Bar Detail */}
//         <div className="absolute bottom-20 left-10 w-64 h-[1px] bg-white/10">
//             <motion.div 
//                 className="h-full bg-gradient-to-r from-indigo-500 via-[#a600ff] to-pink-500" 
//                 style={{ scaleX: scrollYProgress, transformOrigin: "left" }} 
//             />
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Projects;

// "use client";

// import React, { useRef, useState, useLayoutEffect } from 'react';
// import ProjectCards from './ProjectCards';
// import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// interface ProjectData {
//   title: string;
//   tags: string[];
//   category: string;
//   imageUrl?: string;
// }

// const Projects: React.FC = () => {
//   const targetRef = useRef<HTMLElement>(null);
//   const scrollRef = useRef<HTMLDivElement>(null); // Ref for the actual moving track
  
//   const [scrollRange, setScrollRange] = useState(0);

//   // 1. Calculate the dynamic width
//   useLayoutEffect(() => {
//     const calculateScrollRange = () => {
//       if (scrollRef.current) {
//         // Total width of all cards minus the viewport width
//         // We add a bit of padding (e.g., 100px) so the last card doesn't hit the edge
//         const totalWidth = scrollRef.current.scrollWidth;
//         const viewportWidth = window.innerWidth;
//         setScrollRange(totalWidth - viewportWidth + 100); 
//       }
//     };

//     calculateScrollRange();

//     // Re-calculate if the window is resized
//     window.addEventListener("resize", calculateScrollRange);
//     return () => window.removeEventListener("resize", calculateScrollRange);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   // 2. Use the dynamic range instead of a hardcoded percentage
//   // We move it from 0 to negative scrollRange
//   const x: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

//   const projectData: ProjectData[] = [
//     { title: "Quantum Render", tags: ["Next.js", "Three.js"], category: "3D Visualization" },
//     { title: "Neuro Sync", tags: ["React", "Python"], category: "AI Dashboard" },
//     { title: "Cyber Shell", tags: ["Rust", "Wasm"], category: "Security" },
//     { title: "Neon Pulse", tags: ["Framer", "React"], category: "Brand Design" },
//     { title: "Astra Engine", tags: ["C++", "Vulkan"], category: "Game Dev" },
//   ];

//   return (
//     <motion.section 
//       ref={targetRef} 
//       className="relative h-[400vh] bg-black overflow-clip"
//     >
//       <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] font-orbitron select-none pointer-events-none">
//           WORKS
//         </div>

//         <div className="relative z-10 mb-12 px-10">
//           <motion.h2 className="font-orbitron text-5xl md:text-8xl font-black tracking-tighter text-white">
//             PROJECTS<span className="text-[#a600ff]">.</span>
//           </motion.h2>
//           <p className="font-quantico text-indigo-400 uppercase tracking-[0.3em] text-sm ml-2">
//             Selected Digital Artifacts
//           </p>
//         </div>

//         {/* 3. Attach scrollRef here */}
//         <motion.div 
//           ref={scrollRef} 
//           className="flex items-center px-10" 
//           style={{ x }}
//         >
//           {projectData.map((project, i) => (
//             <ProjectCards key={i} {...project} />
//           ))}
          
//           <ProjectCards title="Vortex Core" category="Web Design" tags={["Typescript"]} />
//           <ProjectCards title="Shadow Wire" category="Mobile" tags={["Flutter"]} />
//           <ProjectCards title="Shadow Wire" category="Mobile" tags={["Flutter"]} />
//         </motion.div>

//         <div className="absolute bottom-20 left-10 w-64 h-[1px] bg-white/10">
//             <motion.div 
//                 className="h-full bg-gradient-to-r from-indigo-500 via-[#a600ff] to-pink-500" 
//                 style={{ scaleX: scrollYProgress, transformOrigin: "left" }} 
//             />
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Projects;

















"use client";

import React, { useRef, useState, useLayoutEffect } from 'react';
import Link from 'next/link';
import ProjectCards from './ProjectCards';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectData {
  title: string;
  tags: string[];
  category: string;
  imageUrl?: string;
}

const Projects: React.FC = () => {
  const targetRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [scrollRange, setScrollRange] = useState(0);

  useLayoutEffect(() => {
    const calculateScrollRange = () => {
      if (scrollRef.current) {
        const totalWidth = scrollRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollRange(totalWidth - viewportWidth + 100); 
      }
    };

    calculateScrollRange();
    window.addEventListener("resize", calculateScrollRange);
    return () => window.removeEventListener("resize", calculateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  const projectData: ProjectData[] = [
    { title: "Quantum Render", tags: ["Next.js", "Three.js"], category: "3D Visualization" },
    { title: "Neuro Sync", tags: ["React", "Python"], category: "AI Dashboard" },
    { title: "Cyber Shell", tags: ["Rust", "Wasm"], category: "Security" },
    { title: "Neon Pulse", tags: ["Framer", "React"], category: "Brand Design" },
    { title: "Astra Engine", tags: ["C++", "Vulkan"], category: "Game Dev" },
  ];

  return (
    <motion.section 
      ref={targetRef} 
      className="relative h-[400vh] bg-black overflow-clip"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] font-orbitron select-none pointer-events-none">
          WORKS
        </div>

        {/* Header */}
        <div className="relative z-10 mb-12 px-20">
          <motion.h2 className="font-orbitron text-5xl md:text-8xl font-black tracking-tighter text-white">
            PROJECTS<span className="text-[#a600ff]">.</span>
          </motion.h2>
          <p className="font-quantico text-indigo-400 uppercase tracking-[0.3em] text-sm ml-2">
            Selected Digital Artifacts
          </p>
        </div>

        {/* Horizontal Track */}
        <motion.div 
          ref={scrollRef} 
          className="flex items-center px-10" 
          style={{ x }}
        >
          {projectData.map((project, i) => (
            <ProjectCards key={i} {...project} />
          ))}
          <ProjectCards title="Vortex Core" category="Web Design" tags={["Typescript"]} />
        </motion.div>

        {/* Bottom UI Elements */}
        <div className="absolute bottom-12 md:bottom-20 left-10 right-10 flex justify-between items-end px-20">
          
          {/* Progress Bar Container */}
          <div className="flex flex-col gap-2">
            <p className="font-quantico text-[10px] text-zinc-500 uppercase tracking-widest">Scroll Progress</p>
            <div className="w-48 md:w-64 h-[2px] bg-white/10 overflow-hidden">
                <motion.div 
                    className="h-full bg-gradient-to-r from-indigo-500 via-[#a600ff] to-pink-500" 
                    style={{ scaleX: scrollYProgress, transformOrigin: "left" }} 
                />
            </div>
          </div>

          {/* NEW: Navigation Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className=''
          >
            <Link href="/projects" className="group relative flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-[#a600ff] uppercase tracking-[0.3em] leading-none mb-1">Explore</span>
                <span className="text-sm font-orbitron text-white group-hover:text-pink-500 transition-colors">ALL PROJECTS</span>
              </div>
              
              {/* Animated Button Circle */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-white/10 bg-zinc-900 group-hover:border-[#a600ff] transition-all duration-500">
                {/* Internal Glow */}
                <div className="absolute inset-0 rounded-full bg-[#a600ff]/0 group-hover:bg-[#a600ff]/10 blur-md transition-all" />
                
                <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:text-[#a600ff] transition-all" />
                
                {/* Rotating Border Detail */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity">
                  <circle 
                    cx="50%" cy="50%" r="48%" 
                    className="stroke-[#a600ff] stroke-[1px] fill-none"
                    strokeDasharray="20 10"
                  />
                </svg>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Projects;