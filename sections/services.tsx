"use client";

import { motion, Variants } from "framer-motion";
import { FC } from "react";
import Link from "next/link";

/* =====================================================
   VARIANTS
===================================================== */

// Controls horizontal line → vertical container order
const servicesWrapperVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Horizontal line animation
const horizontalLineVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Vertical container starts AFTER horizontal finishes
const verticalLinesContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0, // ⏱ waits for horizontal line
      staggerChildren: 0.1,
    },
  },
};

// Service column orchestrator
const serviceItemVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

// Vertical line animation (dynamic height)
const lineElementVariant: Variants = {
  hidden: { height: 0 },
  visible: (height: number) => ({
    height,
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
};

// Title animation
const titleElementVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

/* =====================================================
   SERVICE COMPONENT
===================================================== */

const MotionService = motion.span;

const Service: FC<{ title: string; height: number }> = ({ title, height }) => {
  return (
    <MotionService
      className="flex flex-col items-center justify-start flex-1"
      variants={serviceItemVariant}
    >
      {/* Vertical Line */}
      <motion.div
        className="w-1 bg-black"
        variants={lineElementVariant}
        custom={height}
      />

      {/* Title */}
      <motion.div
        className="mt-4"
        variants={titleElementVariant}
      >
        <h4 className="text-center font-quantico text-lg">
          {title}
        </h4>
      </motion.div>
    </MotionService>
  );
};

/* =====================================================
   MAIN SERVICES COMPONENT
===================================================== */

export default function Services() {
  return (
    <motion.div
      className="flex flex-col items-center justify-start border max-w-7xl mx-auto py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
    >
      <div className="w-full max-w-5xl flex items-end justify-between mb-8">
        <h2 className="font-orbitron text-7xl font-bold tracking-[8px]">
          Core Services
        </h2>
        <div className="text-2xl font-quantico px-0 " >
          and much <Link className="underline underline-offset-10" href={'/'}>More</Link>
        </div>

      </div>
      {/* Wrapper that controls animation order */}
      <motion.div
        className="w-full max-w-5xl"
        variants={servicesWrapperVariants}
      >
        {/* Horizontal Line */}
        <motion.div
          className="bg-black h-1 bg-black"
          variants={horizontalLineVariants}
        />

        {/* Vertical Lines */}
        <motion.div
          className="flex w-full"
          variants={verticalLinesContainerVariants}
        >
          <Service title="Web Development" height={120} />
          <Service title="Mobile Apps" height={220} />
          <Service title="Graphic Design" height={120} />
          <Service title="UI UX" height={220} />
          <Service title="AI (Artificial Intelligence)" height={120} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
