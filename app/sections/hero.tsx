// import Link from "next/link";
// import HeroBackground from "@/components/HeroBackground";
// import ParticleBackground from "@/components/ParticleBackground";
// import SpheresBackground from "@/components/SpheresBackground";
// import LongCubesBackground from "@/components/LongCubesBackground";
// import TestCanvas from "@/components/TestCanvas";
// import TestCanvas2 from "@/components/TestCanvas2";


// export default function Hero() {
//   return (
//     <main className="relative h-screen overflow-hidden flex flex-col bg-black">

//       {/* 3D background */}
//       {/* <HeroBackground /> */}
//       {/* <SpheresBackground /> */}
//       <LongCubesBackground/>
//       {/* <ParticleBackground /> */}
//       {/* <TestCanvas/> */}
//       {/* <TestCanvas2/> */}

//       {/* <div className="w-full h-full bg-black/50 absolute top-1 left-0"></div> */}
//       {/* Center content */}
//       <div className="flex-1 flex items-center justify-center pointer-events-none z-1">
//         {/* <h1 className="text-9xl font-bold flex flex-col text-center font-orbitron text-white select-none 
//         backdrop-blur-sm p-8 border bg-black/10 border-white/10 rounded-xl
//         "> */}
//         <h1 className="text-9xl font-black flex flex-col text-center font-orbitron text-white select-none p-8">
//           WORTEX
//           <span className="text-4xl tracking-[24px] mt-4">STUDIO</span>
//         </h1>
//       </div>

//       {/* Bottom bar */}
//       <div className="absolute bottom-0 left-0 px-24 py-16 w-full font-quantico flex text-white">
//         <span className="w-full flex justify-center">
//           <Link
//             href="#"
//             className="border px-8 py-4 pointer-events-auto"
//           >
//             Let's Build Together
//           </Link>
//         </span>

//         <span className="w-full flex justify-center items-center text-xl backdrop-blur-sm bg-black/10">
//           Where Imagination Meets Innovation
//         </span>

//         <span className="w-full" />
//       </div>
//     </main>
//   );
// }


"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import LongCubesBackground from "@/app/components/LongCubesBackground";
import About from "@/app/sections/about"

export default function Hero() {
  const containerRef = useRef(null);

  // 1. Track scroll progress of this specific section
  // target: the element to track
  // offset: ["start start", "end start"] means from when top of div hits top of screen 
  // until bottom of div hits top of screen.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 2. Map scroll progress to scale and opacity
  // As scroll goes from 0 to 1, scale goes from 1 to 10 and opacity from 1 to 0
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 20, 200]);
  const opacityAbout = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const scaleAbout = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "0%"]);


  return (
    // containerRef must be on a wrapper that allows for scrolling context
    <main ref={containerRef} className="relative h-[250vh] bg-black ">

      {/* Sticky wrapper: keeps the background and text fixed while we scroll the 200vh */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden flex flex-col">

        {/* 3D background */}
        <LongCubesBackground scrollYProgress={scrollYProgress} />



        {/* Center content */}
        <div className="flex-1 flex items-center justify-center pointer-events-none z-10">
          <motion.h1
            style={{ scale, y: textY }}
            className="text-9xl font-black flex flex-col text-center font-orbitron text-white select-none p-8"
          >
            WORTEX
            <span className="text-4xl tracking-[24px] mt-4">STUDIO</span>
          </motion.h1>
        </div>

        {/* Bottom bar */}
        <motion.div
          style={{ opacity }} // Bottom bar fades out as we scroll
          className="absolute bottom-0 left-0 px-24 py-16 w-full font-quantico flex text-white"
        >
          <span className="w-full flex justify-center">
            <Link href="#" className="border px-8 py-4 pointer-events-auto hover:bg-white hover:text-black transition-colors">
              Let's Build Together
            </Link>
          </span>
          <span className="w-full flex justify-center items-center text-xl backdrop-blur-sm bg-black/10">
            Where Imagination Meets Innovation
          </span>
          <span className="w-full" />
        </motion.div>
        <motion.div style={{ opacity: opacityAbout, scale: scaleAbout}} className="pointer-events-none z-11 absolute top-0 left-0 w-full h-full">
          <About />
        </motion.div>
      </div>
    </main>
  );
}