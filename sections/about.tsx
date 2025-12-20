"use client"
import MagnetLines from '../components/MagnetLines';
import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  // const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({ target: containerRef })

  // const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1;
  // const x = useTransform(scrollYProgress, [0, 0.8], [`-${windowHeight}px`, '0px']);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], ['0', '1']);
  // const scale = useTransform(scrollYProgress, [0, 0.5], ['0.5', '1']);

  return (
    // <motion.section className="h-[140vh] border" ref={containerRef}>
    /* <motion.div className=' max-w-full mx-auto border sticky top-0 h-[100vh] flex items-center justify center' style={{ opacity: opacity, scale: scale, x }}> */

    <div className='m-auto h-full max-w-7xl flex items-center justify-around py-32 border border-red text-black' >
      <div className="flex-1 flex items-center justify-center pl-12" >
        <MagnetLines
          rows={7}
          columns={7}
          containerSize="36vmin"
          lineColor="black"
          lineWidth="0.4vmin"
          lineHeight="3vmin"
          baseAngle={0}
          style={{ margin: "0rem auto" }}
        />
      </div>
      <div className="flex-2 p-12"><h3 className="font-quantico text-3xl font-regular text-black tracking-[8px] leading-[2] text-justify">At our core, we blend imagination with technology. From stunning visuals to powerful software, we create solutions that make an impact.</h3></div>
    </div >

    // </motion.div>
    // </motion.section>
  );
}