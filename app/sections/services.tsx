// "use client";

// import { motion, Variants } from "framer-motion";
// import { FC } from "react";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
// /* =====================================================
//     VARIANTS (UNTOUCHED LOGIC)
// ===================================================== */
// const servicesWrapperVariants: Variants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.2 } },
// };

// // const horizontalLineVariants: Variants = {
// //   hidden: { width: 0 },
// //   visible: {
// //     width: "100%",
// //     transition: { duration: 0.8, ease: "circOut" },
// //   },
// // };
// const horizontalLineVariants: Variants = {
//   hidden: {
//     height: 0,
//     width: 0
//   },
//   visible: (custom: { isMobile: boolean }) => ({
//     // If mobile, animate width. If desktop, animate height.
//     height: custom.isMobile ? "100%" : "1px",
//     width: custom.isMobile ? "1px" : "100%",
//     transition: { duration: 0.5, ease: "circOut" },
//   }),
// };
// const verticalLinesContainerVariants: Variants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } },
// };

// const serviceItemVariant: Variants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.5 } },
// };

// // const lineElementVariant: Variants = {
// //   hidden: { height: 0 },
// //   visible: (height: number) => ({
// //     height,
// //     transition: { duration: 0.5, ease: "circOut" },
// //   }),
// // };
// const lineElementVariant: Variants = {
//   hidden: {
//     height: 0,
//     width: 0
//   },
//   visible: (custom: { value: number; isMobile: boolean }) => ({
//     // If mobile, animate width. If desktop, animate height.
//     height: custom.isMobile ? "1px" : custom.value,
//     width: custom.isMobile ? "80px" : "1px",
//     transition: { duration: 0.5, ease: "circOut" },
//   }),
// };

// const titleElementVariant: Variants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4 },
//   },
// };

// /* =====================================================
//     REFINED SERVICE ITEM
// ===================================================== */

// const Service: FC<{ title: string; height: number }> = ({ title, height }) => {
//   return (
//     <motion.span
//       className="py-2 md:py-0 flex md:flex-col items-center justify-start flex-1 group"
//       variants={serviceItemVariant}
//     >
//       {/* The Vertical Line with a "Node" dot at the top */}
//       <div className="relative flex flex-col md:items-center">
//         {/* Connection Dot */}
//         <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mb-[-3px] z-10 shadow-[0_0_10px_#6366f1]" />

//         {/* <motion.div
//           className="w-[1px] bg-gradient-to-b from-indigo-500 to-zinc-800"
//           variants={lineElementVariant}
//           custom={height}
//         /> */}
//         <motion.div
//           className="bg-gradient-to-r md:bg-gradient-to-b from-indigo-500 to-zinc-800"
//           variants={lineElementVariant}
//           // Pass both the desired dimension and the mobile state
//           custom={{ value: height, isMobile: isMobile }}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         />
//       </div>

//       {/* Title with improved spacing and hover state */}
//       <motion.div
//         className="md:mt-6 px-4 text-center"
//         variants={titleElementVariant}
//       >
//         <h4 className="font-quantico text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white group-hover:cursor-pointer transition-colors duration-300 leading-relaxed">
//           {title}
//         </h4>
//       </motion.div>
//     </motion.span>
//   );
// };

// /* =====================================================
//     MAIN SERVICES COMPONENT
// ===================================================== */

// export default function Services() {
//   return (
//     <motion.div
//       className="relative flex flex-col items-center justify-start max-w-7xl mx-auto pt-40 px-6 bg-black"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ amount: 0.6 }}
//     >
//       {/* Header Section */}
//       <div className="w-full max-w-5xl flex flex-col md:flex-row items-baseline justify-between mb-8 md:mb-16 gap-4">
//         <h2 className="font-orbitron text-4xl md:text-7xl font-black tracking-tighter text-white">
//           CORE<span className="text-[#a600ff]"> SERVICES</span>
//         </h2>

//         <Link
//           href="/services"
//           className="group flex items-center gap-2 font-quantico text-zinc-500 hover:text-white transition-colors"
//         >
//           <span className="text-sm uppercase tracking-widest">Explore Full Stack</span>
//           <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//         </Link>
//       </div>

//       {/* The "Schematic" Wrapper */}
//       <motion.div
//         className="w-full max-w-5xl relative"
//         viewport={{ amount: 0.1 }}
//         variants={servicesWrapperVariants}
//       >
//         <div className="w-full flex md:block">
//           {/* Horizontal Line with Glow */}
//           <div className="relative">
//             <motion.div
//               className="md:h-[1px] bg-gradient-to-b md:bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"
//               variants={horizontalLineVariants}
//               custom={{ isMobile: isMobile }}
//             />
//             {/* Central Glow Point */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-4 bg-indigo-500/20 blur-xl rounded-full" />
//           </div>

//           {/* Vertical Lines Grid */}
//           <motion.div
//             className="flex w-full mt-[-0.5px] flex-col md:flex-row"
//             variants={verticalLinesContainerVariants}
//           >
//             <Service title="Web Development" height={100} />
//             <Service title="Mobile Apps" height={180} />
//             <Service title="Graphic Design" height={100} />
//             <Service title="UI UX Experience" height={180} />
//             <Service title="Artificial Intelligence" height={100} />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Decorative Blueprint Background Element */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />
//     </motion.div >
//   );
// }



"use client";

import { motion, Variants } from "framer-motion";
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* =====================================================
    VARIANTS (FIXED LOGIC)
===================================================== */
const horizontalLineVariants: Variants = {
  hidden: { height: 0, width: 0 },
  visible: (isMobile: boolean) => ({
    height: isMobile ? "100%" : "1px",
    width: isMobile ? "1px" : "100%",
    transition: { duration: 0.8, ease: "circOut" },
  }),
};

const lineElementVariant: Variants = {
  hidden: { height: 0, width: 0 },
  visible: ({ height, isMobile }: { height: number; isMobile: boolean }) => ({
    height: isMobile ? "1px" : height,
    width: isMobile ? "80px" : "1px",
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

const serviceItemVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5 } },
};
// ... keep other variants (servicesWrapperVariants, titleElementVariant, etc.)

/* =====================================================
    REFINED SERVICE ITEM
===================================================== */
const Service: FC<{ title: string; height: number; isMobile: boolean }> = ({ title, height, isMobile }) => {
  return (
    <motion.span
      className="py-2 md:py-0 flex md:flex-col items-center justify-start flex-1 group"
      variants={serviceItemVariant}// Service doesn't need its own initial/whileInView; it inherits from parent
    >
      <div className="relative flex flex-col md:items-center">
        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mb-[-3px] z-10 shadow-[0_0_10px_#6366f1]" />
        
        <motion.div
          className="bg-gradient-to-r md:bg-gradient-to-b from-indigo-500 to-zinc-800"
          variants={lineElementVariant}
          custom={{ height, isMobile }}
          // REMOVED: initial="hidden" and whileInView="visible"
        />
      </div>

      <motion.div className="md:mt-6 px-4 text-center" variants={titleElementVariant}>
        <h4 className="font-quantico text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white leading-relaxed">
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
  const [isMobile, setIsMobile] = useState(false);

  // Reliable way to check for mobile in Next.js
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-start max-w-7xl mx-auto pt-40 px-6 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }} // Trigger earlier for better UX
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-baseline justify-between mb-8 md:mb-16 gap-4">
        <h2 className="font-orbitron text-4xl md:text-7xl font-black tracking-tighter text-white">
          CORE<span className="text-[#a600ff]"> SERVICES</span>
        </h2>
        <Link href="/services" className="group flex items-center gap-2 font-quantico text-zinc-500 hover:text-white transition-colors">
          <span className="text-sm uppercase tracking-widest">Explore Full Stack</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      <motion.div className="w-full max-w-5xl relative">
        <div className="w-full flex md:block">
          <div className="relative">
            <motion.div
              className="md:h-[1px] bg-gradient-to-b md:bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"
              variants={horizontalLineVariants}
              custom={isMobile}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-4 bg-indigo-500/20 blur-xl rounded-full" />
          </div>

          <motion.div
            className="flex w-full mt-[-0.5px] flex-col md:flex-row"
            // Parent controls the children's animation timing
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <Service title="Web Development" height={100} isMobile={isMobile} />
            <Service title="Mobile Apps" height={180} isMobile={isMobile} />
            <Service title="Graphic Design" height={100} isMobile={isMobile} />
            <Service title="UI UX Experience" height={180} isMobile={isMobile} />
            <Service title="Artificial Intelligence" height={100} isMobile={isMobile} />
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />
    </motion.div>
  );
}