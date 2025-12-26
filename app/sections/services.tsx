// "use client";

// import { motion, Variants } from "framer-motion";
// import { FC } from "react";
// import Link from "next/link";

// /* =====================================================
//    VARIANTS
// ===================================================== */

// // Controls horizontal line → vertical container order
// const servicesWrapperVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Horizontal line animation
// const horizontalLineVariants: Variants = {
//   hidden: { width: 0 },
//   visible: {
//     width: "100%",
//     transition: { duration: 0.5, ease: "easeInOut" },
//   },
// };

// // Vertical container starts AFTER horizontal finishes
// const verticalLinesContainerVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       delayChildren: 0, // ⏱ waits for horizontal line
//       staggerChildren: 0.1,
//     },
//   },
// };

// // Service column orchestrator
// const serviceItemVariant: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.5,
//     },
//   },
// };

// // Vertical line animation (dynamic height)
// const lineElementVariant: Variants = {
//   hidden: { height: 0 },
//   visible: (height: number) => ({
//     height,
//     transition: { duration: 0.3, ease: "easeInOut" },
//   }),
// };

// // Title animation
// const titleElementVariant: Variants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.3 },
//   },
// };

// /* =====================================================
//    SERVICE COMPONENT
// ===================================================== */

// const MotionService = motion.span;

// const Service: FC<{ title: string; height: number }> = ({ title, height }) => {
//   return (
//     <MotionService
//       className="flex flex-col items-center justify-start flex-1"
//       variants={serviceItemVariant}
//     >
//       {/* Vertical Line */}
//       <motion.div
//         className="w-1 bg-black"
//         variants={lineElementVariant}
//         custom={height}
//       />

//       {/* Title */}
//       <motion.div
//         className="mt-4"
//         variants={titleElementVariant}
//       >
//         <h4 className="text-center font-quantico text-lg">
//           {title}
//         </h4>
//       </motion.div>
//     </MotionService>
//   );
// };

// /* =====================================================
//    MAIN SERVICES COMPONENT
// ===================================================== */

// export default function Services() {
//   return (
//     <motion.div
//       className="flex flex-col items-center justify-start max-w-7xl mx-auto py-32"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 1 }}
//     >
//       <div className="w-full max-w-5xl flex items-end justify-between mb-8">
//         <h2 className="font-orbitron text-7xl font-bold tracking-[8px]">
//           Core Services
//         </h2>
//         <div className="text-2xl font-quantico px-0 " >
//           and much <Link className="underline underline-offset-10" href={'/'}>More</Link>
//         </div>

//       </div>
//       {/* Wrapper that controls animation order */}
//       <motion.div
//         className="w-full max-w-5xl"
//         variants={servicesWrapperVariants}
//       >
//         {/* Horizontal Line */}
//         <motion.div
//           className="bg-black h-1 bg-black"
//           variants={horizontalLineVariants}
//         />

//         {/* Vertical Lines */}
//         <motion.div
//           className="flex w-full"
//           variants={verticalLinesContainerVariants}
//         >
//           <Service title="Web Development" height={120} />
//           <Service title="Mobile Apps" height={220} />
//           <Service title="Graphic Design" height={120} />
//           <Service title="UI UX" height={220} />
//           <Service title="AI (Artificial Intelligence)" height={120} />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }


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
      viewport={{ amount: 1 }}
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
      viewport={{ amount: 1 }}
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

// 8F70FD
// 622A89
// E61E62
// 650024
// 0A0021

// "use client";

// import { motion, Variants } from "framer-motion";
// import { FC } from "react";
// import Link from "next/link";
// import { 
//   FaCode, 
//   FaMobileAlt, 
//   FaPalette, 
//   FaUserCircle, 
//   FaRobot,
//   FaArrowRight 
// } from "react-icons/fa";

// /* =====================================================
//    VARIANTS (preserved exactly)
// ===================================================== */

// // Controls horizontal line → vertical container order
// const servicesWrapperVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Horizontal line animation
// const horizontalLineVariants: Variants = {
//   hidden: { width: 0 },
//   visible: {
//     width: "100%",
//     transition: { duration: 0.5, ease: "easeInOut" },
//   },
// };

// // Vertical container starts AFTER horizontal finishes
// const verticalLinesContainerVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       delayChildren: 0, // ⏱ waits for horizontal line
//       staggerChildren: 0.1,
//     },
//   },
// };

// // Service column orchestrator
// const serviceItemVariant: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.5,
//     },
//   },
// };

// // Vertical line animation (dynamic height)
// const lineElementVariant: Variants = {
//   hidden: { height: 0 },
//   visible: (height: number) => ({
//     height,
//     transition: { duration: 0.3, ease: "easeInOut" },
//   }),
// };

// // Title animation
// const titleElementVariant: Variants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.3 },
//   },
// };

// // Icon animation
// const iconElementVariant: Variants = {
//   hidden: { opacity: 0, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.4, delay: 0.2 },
//   },
// };

// /* =====================================================
//    SERVICE COMPONENT (enhanced)
// ===================================================== */

// const MotionService = motion.span;

// interface ServiceProps {
//   title: string;
//   height: number;
//   description?: string;
//   icon?: React.ReactNode;
//   color?: string;
// }

// const Service: FC<ServiceProps> = ({ 
//   title, 
//   height, 
//   description = "Expert solutions tailored to your needs",
//   icon,
//   color = "bg-gradient-to-b from-blue-500 to-purple-600"
// }) => {
//   const icons = {
//     "Web Development": <FaCode className="text-2xl" />,
//     "Mobile Apps": <FaMobileAlt className="text-2xl" />,
//     "Graphic Design": <FaPalette className="text-2xl" />,
//     "UI UX": <FaUserCircle className="text-2xl" />,
//     "AI (Artificial Intelligence)": <FaRobot className="text-2xl" />
//   };

//   const defaultIcon = icons[title as keyof typeof icons] || <FaCode className="text-2xl" />;

//   return (
//     <MotionService
//       className="flex flex-col items-center justify-start flex-1 relative group cursor-pointer"
//       variants={serviceItemVariant}
//       whileHover={{ y: -5 }}
//       transition={{ duration: 0.2 }}
//     >
//       {/* Service Card - appears on hover */}
//       <motion.div 
//         className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-64 p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//         initial={{ y: 20, opacity: 0 }}
//         whileHover={{ y: 0, opacity: 1 }}
//       >
//         <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
//           <motion.div variants={iconElementVariant}>
//             {icon || defaultIcon}
//           </motion.div>
//         </div>
//         <h4 className="text-xl font-bold text-gray-900 text-center mb-2">{title}</h4>
//         <p className="text-gray-600 text-sm text-center leading-relaxed">
//           {description}
//         </p>
//       </motion.div>

//       {/* Vertical Line Container */}
//       <div className="relative w-full flex flex-col items-center">
//         {/* Glowing Dot at top */}
//         <motion.div 
//           className={`w-4 h-4 ${color} rounded-full mb-2 shadow-lg group-hover:shadow-xl group-hover:scale-125 transition-all duration-300`}
//           variants={iconElementVariant}
//         >
//           <div className="absolute inset-0 animate-ping opacity-20 rounded-full bg-current"></div>
//         </motion.div>

//         {/* Vertical Line */}
//         <motion.div
//           className="w-1.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-400 rounded-full shadow-inner"
//           variants={lineElementVariant}
//           custom={height}
//         />

//         {/* Base Circle */}
//         <div className="w-6 h-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full border-2 border-gray-300 mt-4"></div>
//       </div>

//       {/* Title Container */}
//       <motion.div
//         className="mt-6 relative group"
//         variants={titleElementVariant}
//       >
//         {/* Background highlight on hover */}
//         <div className="absolute -inset-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
//         {/* Title */}
//         <h4 className="text-center font-quantico text-lg font-semibold text-gray-900 relative z-10 px-3 py-2">
//           {title}
//         </h4>

//         {/* Subtle indicator */}
//         <motion.div 
//           className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
//         />
//       </motion.div>

//       {/* Subtle floating particles */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none">
//         {[...Array(3)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
//             initial={{ y: 0, opacity: 0 }}
//             animate={{ 
//               y: [-20, -height-20], 
//               opacity: [0, 1, 0]
//             }}
//             transition={{
//               duration: 2,
//               delay: i * 0.3,
//               repeat: Infinity,
//               repeatDelay: 2
//             }}
//             style={{
//               left: `${50 + (i - 1) * 10}%`
//             }}
//           />
//         ))}
//       </div>
//     </MotionService>
//   );
// };

// /* =====================================================
//    MAIN SERVICES COMPONENT (enhanced)
// ===================================================== */

// export default function Services() {
//   const services = [
//     { 
//       title: "Web Development", 
//       height: 120, 
//       color: "bg-gradient-to-b from-blue-500 to-cyan-500",
//       description: "Modern, responsive web applications with cutting-edge technologies"
//     },
//     { 
//       title: "Mobile Apps", 
//       height: 220, 
//       color: "bg-gradient-to-b from-emerald-500 to-teal-600",
//       description: "Native & cross-platform mobile solutions for iOS and Android"
//     },
//     { 
//       title: "Graphic Design", 
//       height: 120, 
//       color: "bg-gradient-to-b from-orange-500 to-pink-500",
//       description: "Visual storytelling through stunning graphics and brand identity"
//     },
//     { 
//       title: "UI UX", 
//       height: 220, 
//       color: "bg-gradient-to-b from-purple-500 to-violet-600",
//       description: "User-centered designs that create seamless digital experiences"
//     },
//     { 
//       title: "AI (Artificial Intelligence)", 
//       height: 120, 
//       color: "bg-gradient-to-b from-rose-500 to-red-600",
//       description: "Intelligent solutions powered by machine learning and AI"
//     }
//   ];

//   return (
//     <motion.div
//       className="flex flex-col items-center justify-start max-w-7xl mx-auto py-32 px-4"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {/* Background Effects */}
//       <div className="absolute left-0 top-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
//       <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

//       {/* Header Section */}
//       <div className="w-full max-w-5xl flex items-end justify-between mb-12 relative z-10">
//         <div>
//           <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4">
//             WHAT WE DO
//           </span>
//           <h2 className="font-orbitron text-5xl md:text-7xl font-bold tracking-[4px] md:tracking-[8px] bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//             Core Services
//           </h2>
//         </div>
        
//         <div className="hidden md:flex items-center gap-3">
//           <span className="text-xl font-quantico text-gray-600 px-0">
//             and much
//           </span>
//           <Link 
//             className="group flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
//             href={'/services'}
//           >
//             <span className="underline underline-offset-4 decoration-2 decoration-purple-300 group-hover:decoration-purple-500">
//               More
//             </span>
//             <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
//           </Link>
//         </div>
//       </div>

//       {/* Services Line Diagram */}
//       <motion.div
//         className="w-full max-w-5xl relative"
//         variants={servicesWrapperVariants}
//       >
//         {/* Decorative connecting lines */}
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"></div>
        
//         {/* Main Horizontal Line */}
//         <motion.div
//           className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 h-1.5 rounded-full shadow-lg"
//           variants={horizontalLineVariants}
//         />

//         {/* Services Container */}
//         <motion.div
//           className="flex w-full relative mt-8"
//           variants={verticalLinesContainerVariants}
//         >
//           {services.map((service, index) => (
//             <Service
//               key={index}
//               {...service}
//             />
//           ))}

//           {/* Connecting Dots */}
//           <div className="absolute top-0 left-0 w-full h-1 flex justify-between pointer-events-none">
//             {services.map((_, index) => (
//               <motion.div
//                 key={index}
//                 className="w-4 h-4 bg-white border-4 border-purple-500 rounded-full shadow-lg -translate-y-1.5"
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Mobile CTA (hidden on desktop) */}
//       <div className="md:hidden mt-12 flex items-center gap-3">
//         <span className="text-lg font-quantico text-gray-600">
//           and much
//         </span>
//         <Link 
//           className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
//           href={'/services'}
//         >
//           <span className="underline underline-offset-4">
//             More Services
//           </span>
//           <FaArrowRight />
//         </Link>
//       </div>

//       {/* Bottom Description */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8 }}
//         className="mt-20 max-w-3xl text-center"
//       >
//         <p className="text-gray-600 text-lg leading-relaxed">
//           Each service is meticulously crafted to deliver exceptional results. 
//           Hover over any point to learn more about what we can do for your project.
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// }





// "use client";
// import { motion, Variants } from "framer-motion";
// import { FC } from "react";
// import Link from "next/link";

// /* =====================================================
//    VARIANTS (UNCHANGED – EXACTLY AS BEFORE)
// ===================================================== */
// const servicesWrapperVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const horizontalLineVariants: Variants = {
//   hidden: { width: 0 },
//   visible: {
//     width: "100%",
//     transition: { duration: 0.5, ease: "easeInOut" },
//   },
// };

// const verticalLinesContainerVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       delayChildren: 0,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const serviceItemVariant: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.5,
//     },
//   },
// };

// const lineElementVariant: Variants = {
//   hidden: { height: 0 },
//   visible: (height: number) => ({
//     height,
//     transition: { duration: 0.3, ease: "easeInOut" },
//   }),
// };

// const titleElementVariant: Variants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.3 },
//   },
// };

// /* =====================================================
//    SERVICE COMPONENT (ENHANCED VISUALLY)
// ===================================================== */
// const MotionService = motion.span;

// const Service: FC<{ title: string; height: number }> = ({ title, height }) => {
//   return (
//     <MotionService
//       className="flex flex-col items-center justify-start flex-1"
//       variants={serviceItemVariant}
//     >
//       {/* Vertical Line – Now with gradient and subtle glow */}
//       <motion.div
//         className="w-1 bg-gradient-to-b from-transparent via-purple-600 to-transparent relative"
//         variants={lineElementVariant}
//         custom={height}
//       >
//         {/* Inner solid core line */}
//         <div className="absolute inset-0 w-full h-full bg-purple-600/30 blur-md" />
//         <div className="relative w-full h-full bg-purple-500" />
//       </motion.div>

//       {/* Title – Enhanced typography and hover effect */}
//       <motion.div
//         className="mt-6" // Slightly more breathing room
//         variants={titleElementVariant}
//         whileHover={{ y: -4 }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         <h4 className="text-center font-quantico text-lg tracking-wider text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
//           {title}
//         </h4>
//       </motion.div>
//     </MotionService>
//   );
// };

// /* =====================================================
//    MAIN SERVICES COMPONENT (VISUAL UPGRADES ONLY)
// ===================================================== */
// export default function Services() {
//   return (
//     <motion.div
//       className="flex flex-col items-center justify-start max-w-7xl mx-auto py-32 px-6"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.8 }}
//     >
//       {/* Header Section – More elegant and balanced */}
//       <div className="w-full max-w-5xl flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
//         <h2 className="font-orbitron text-6xl md:text-7xl lg:text-8xl font-bold tracking-[10px] bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent leading-tight">
//           Core Services
//         </h2>

//         <div className="text-xl md:text-2xl font-quantico text-gray-600">
//           and much{" "}
//           <Link
//             href="/"
//             className="inline-block text-purple-600 hover:text-purple-800 underline underline-offset-8 hover:underline-offset-12 decoration-purple-400/50 transition-all duration-300 font-medium"
//           >
//             More
//           </Link>
//         </div>
//       </div>

//       {/* Animation Wrapper */}
//       <motion.div className="w-full max-w-5xl" variants={servicesWrapperVariants}>
//         {/* Horizontal Line – Now with gradient */}
//         <motion.div
//           className="h-1 relative overflow-hidden rounded-full"
//           variants={horizontalLineVariants}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
//           <div className="absolute inset-0 bg-purple-500 blur-md" />
//         </motion.div>

//         {/* Vertical Lines Container */}
//         <motion.div
//           className="flex w-full justify-between mt-8" // Better spacing
//           variants={verticalLinesContainerVariants}
//         >
//           <Service title="Web Development" height={120} />
//           <Service title="Mobile Apps" height={220} />
//           <Service title="Graphic Design" height={120} />
//           <Service title="UI / UX" height={220} />
//           <Service title="AI Solutions" height={120} />
//         </motion.div>
//       </motion.div>

//       {/* Optional subtle background accent */}
//       <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-purple-500/5 rounded-full blur-3xl" />
//       </div>
//     </motion.div>
//   );
// }