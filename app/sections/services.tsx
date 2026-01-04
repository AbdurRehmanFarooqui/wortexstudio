"use client";



import { motion, Variants } from "framer-motion";
import { FC } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* =====================================================
    VARIANTS (UNTOUCHED LOGIC)
===================================================== */
const servicesWrapperVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const horizontalLineVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 0.8, ease: "circOut" },
  },
};

const verticalLinesContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const serviceItemVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5 } },
};

const lineElementVariant: Variants = {
  hidden: { height: 0 },
  visible: (height: number) => ({
    height,
    transition: { duration: 0.5, ease: "circOut" },
  }),
};

const titleElementVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

/* =====================================================
    REFINED SERVICE ITEM
===================================================== */

const Service: FC<{ title: string; height: number }> = ({ title, height }) => {
  return (
    <motion.span
      className="flex flex-col items-center justify-start flex-1 group"
      variants={serviceItemVariant}
    >
      {/* The Vertical Line with a "Node" dot at the top */}
      <div className="relative flex flex-col items-center">
        {/* Connection Dot */}
        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mb-[-3px] z-10 shadow-[0_0_10px_#6366f1]" />
        
        <motion.div
          className="w-[1px] bg-gradient-to-b from-indigo-500 to-zinc-800"
          variants={lineElementVariant}
          custom={height}
        />
      </div>

      {/* Title with improved spacing and hover state */}
      <motion.div
        className="mt-6 px-4 text-center"
        variants={titleElementVariant}
      >
        <h4 className="font-quantico text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white group-hover:cursor-pointer     transition-colors duration-300 leading-relaxed">
          {title}
        </h4>
      </motion.div>
    </motion.span>
  );
};

/* =====================================================
    MAIN SERVICES COMPONENT
===================================================== */

export default function Services() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-start max-w-7xl mx-auto pt-40 px-6 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.6 }}
    >
      {/* Header Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
        <h2 className="font-orbitron text-5xl md:text-7xl font-black tracking-tighter text-white">
          CORE<span className="text-[#a600ff]"> SERVICES</span>
        </h2>
        
        <Link 
          href="/" 
          className="group flex items-center gap-2 font-quantico text-zinc-500 hover:text-white transition-colors"
        >
          <span className="text-sm uppercase tracking-widest">Explore Full Stack</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      {/* The "Schematic" Wrapper */}
      <motion.div
        className="w-full max-w-5xl relative"
      viewport={{ amount: 0.1 }}
        variants={servicesWrapperVariants}
      >
        {/* Horizontal Line with Glow */}
        <div className="relative">
          <motion.div
            className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"
            variants={horizontalLineVariants}
          />
          {/* Central Glow Point */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-4 bg-indigo-500/20 blur-xl rounded-full" />
        </div>

        {/* Vertical Lines Grid */}
        <motion.div
          className="flex w-full mt-[-0.5px]"
          variants={verticalLinesContainerVariants}
        >
          <Service title="Web Development" height={100} />
          <Service title="Mobile Apps" height={180} />
          <Service title="Graphic Design" height={100} />
          <Service title="UI UX Experience" height={180} />
          <Service title="Artificial Intelligence" height={100} />
        </motion.div>
      </motion.div>

      {/* Decorative Blueprint Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />
    </motion.div>
  );
}