'use client'
import React from 'react';
import { motion } from 'framer-motion'
import { Zap, Boxes, Cpu, Crosshair } from 'lucide-react'; 
interface PointData {
    title: string;
    text: string;
    icon?: React.ReactNode;
}
// const Point: React.FC<{ data: PointData }> = ({ data }) => {
//     return (
//         <div className='md:h-[60vh] flex items-center justify-center px-12 py-12 md:py-0 element pb-25'>
//             <h6 className="text-2xl text-gray-400 tracking-tigh " >{data.text}</h6>
//             {data.icon}
//         </div>
//     );
// };
const Point: React.FC<{ data: PointData }> = ({ data }) => {
    return (
        <div className='md:h-[60vh] flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 py-20 md:py-0 element'>
            {/* Icon Container with Glow */}
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-[0_0_30px_rgba(166,0,255,0.1)]">
                {data.icon}
            </div>
            
            {/* Text Content */}
            <div className="max-w-xl text-center md:text-left">
                <h3 className="text-xl md:text-4xl font-bold font-orbitron text-white mb-4 tracking-tight">
                    {data.title}
                </h3>
                <p className="text-base text-zinc-400 font-medium leading-relaxed">
                    {data.text}
                </p>
            </div>
        </div>
    );
};
const WhyChooseUs: React.FC = () => {
    const pointData: PointData[] = [
        { 
            title: "Sub-Second Performance", 
            text: "We engineer systems optimized for edge computing. Our lightweight codebases guarantee maximum rendering speed and near-zero latency.", 
            icon: <Zap className="text-[#a600ff] w-8 h-8" /> 
        },
        { 
            title: "Immersive 3D Integration", 
            text: "Bridging the gap between flat interfaces and interactive digital worlds using Three.js, WebGL, and custom shader logic.", 
            icon: <Boxes className="text-pink-500 w-8 h-8" /> 
        },
        { 
            title: "Bulletproof Architecture", 
            text: "Future-proof data structures and scalable React systems designed to handle massive traffic loads securely and seamlessly.", 
            icon: <Cpu className="text-indigo-500 w-8 h-8" /> 
        },
        { 
            title: "Precision UI Logic", 
            text: "Every pixel is calculated. We merge human psychology with striking cyberpunk aesthetics to maximize user engagement and conversion.", 
            icon: <Crosshair className="text-white w-8 h-8" /> 
        }
    ];

    return (
        <section className="relative bg-background my-12 md:my-32 md:flex  justify-center overflow-clip max-w-7xl mx-auto bg-black">

            <div className="pt-22 pb-25 text-center md:text-right md:h-screen flex items-center justify-center sticky top-0 w-half z-20 ">

                {/* <h2 className="text-4xl font-bold text-gray-800 uppercase">Why Choose Us?</h2> */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='px-8 md:px-12 z-10'
                >
                    <span className="font-quantico text-[#a600ff] text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-2 md:mb-4 block">
                        Some Text
                    </span>
                    <h2 className="text-2xl md:text-3xl md:text-7xl/20 font-black font-orbitron text-white md:mb-6 tracking-tighter ">
                        Why   <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Choose Us?</span>
                    </h2>
                </motion.div>
                <div className="absolute bottom-0 left-0 w-full h-25 bg-gradient-to-b from-black to-transparent pointer-events-none" />
                <div className="absolute top-0 bottom-25 left-0 w-full bg-gradient-to-b from-black to-black pointer-events-none " />
            </div>

            <div className='pt-20 md:py-[20vh] w-full'>
                {pointData.map((point, index) =>
                    <Point data={point} />
                )}
            </div>
        </section>
    );
};

export default WhyChooseUs;



// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Zap, Boxes, Cpu, Crosshair } from 'lucide-react'; // Import high-tech icons

// // 1. Upgraded Interface for better visual hierarchy
// interface PointData {
//     title: string;
//     text: string;
//     icon?: React.ReactNode;
// }

// // 2. Polished Point Component
// const Point: React.FC<{ data: PointData }> = ({ data }) => {
//     return (
//         <div className='md:h-[60vh] flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 py-20 md:py-0'>
//             {/* Icon Container with Glow */}
//             <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-[0_0_30px_rgba(166,0,255,0.1)]">
//                 {data.icon}
//             </div>
            
//             {/* Text Content */}
//             <div className="max-w-xl text-center md:text-left">
//                 <h3 className="text-2xl md:text-4xl font-bold font-orbitron text-white mb-4 tracking-tight">
//                     {data.title}
//                 </h3>
//                 <p className="text-lg text-zinc-400 font-medium leading-relaxed">
//                     {data.text}
//                 </p>
//             </div>
//         </div>
//     );
// };

// const WhyChooseUs: React.FC = () => {
//     // 3. High-End Studio Data Points
//     const pointData: PointData[] = [
//         { 
//             title: "Sub-Second Performance", 
//             text: "We engineer systems optimized for edge computing. Our lightweight codebases guarantee maximum rendering speed and near-zero latency.", 
//             icon: <Zap className="text-[#a600ff] w-8 h-8" /> 
//         },
//         { 
//             title: "Immersive 3D Integration", 
//             text: "Bridging the gap between flat interfaces and interactive digital worlds using Three.js, WebGL, and custom shader logic.", 
//             icon: <Boxes className="text-pink-500 w-8 h-8" /> 
//         },
//         { 
//             title: "Bulletproof Architecture", 
//             text: "Future-proof data structures and scalable React systems designed to handle massive traffic loads securely and seamlessly.", 
//             icon: <Cpu className="text-indigo-500 w-8 h-8" /> 
//         },
//         { 
//             title: "Precision UI Logic", 
//             text: "Every pixel is calculated. We merge human psychology with striking cyberpunk aesthetics to maximize user engagement and conversion.", 
//             icon: <Crosshair className="text-white w-8 h-8" /> 
//         }
//     ];

//     return (
//         <section className="relative md:h-[250vh] bg-black my-12 md:my-32 overflow-clip max-w-7xl mx-auto">

//             {/* Sticky Header Container */}
//             <div className="pt-20 pb-10 text-center md:h-screen flex items-center justify-center md:sticky top-0 w-full z-20 pointer-events-none">
                
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className='px-8 md:px-12 z-10 pointer-events-auto'
//                 >
//                     <span className="font-quantico text-[#a600ff] text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
//                         System Advantages
//                     </span>
//                     <h2 className="text-4xl md:text-7xl font-black font-orbitron text-white tracking-tighter italic">
//                         WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-[#a600ff] to-pink-500">CHOOSE US?</span>
//                     </h2>
//                 </motion.div>

//                 {/* Fade masks so scrolling text disappears smoothly behind the header */}
//                 <div className="hidden md:block absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
//                 <div className="hidden md:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
//             </div>

//             {/* Scrolling Content Container */}
//             <div className='relative z-10 w-full pb-20'>
//                 {pointData.map((point, index) =>
//                     <Point key={index} data={point} />
//                 )}
//             </div>
//         </section>
//     );
// };

// export default WhyChooseUs;