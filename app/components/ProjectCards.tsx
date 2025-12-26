

// import React from 'react'

// const ProjectCards = () => {
//   return (
//     <div className='bg-white rounded-sm p-2 m-4 h-full border-2 border-neutral-400/60 aspect-[10/6] flex flex-col justify-end shadow-md  backdrop-blur-xl transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-lg hover:shadow-black/10 hover:scale-105 hover:cursor-pointer'>
      
//       {/* <img src='../public/logo.png' alt="a" /> */}
      
//       <div className='flex justify-between pt-2 '>
//       <p className=''>Project Name</p>
//       <p className=''></p>
//       </div>
//     </div>
//   )
// }


// export default ProjectCards


// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { ExternalLink, Github } from 'lucide-react';

// // 1. Define the TypeScript Interface for the Project
// interface ProjectCardProps {
//   title?: string;
//   category?: string;
//   imageUrl?: string;
//   tags?: string[];
//   githubUrl?: string;
//   liveUrl?: string;
// }

// const ProjectCards: React.FC<ProjectCardProps> = ({
//   title = "Project Name",
//   category = "3D Development",
//   imageUrl = "/logo.png", // Replace with your actual images
//   tags = ["Next.js", "Three.js", "Tailwind"],
//   githubUrl = "#",
//   liveUrl = "#"
// }) => {
//   return (
//     <div className='group relative flex-shrink-0 w-[350px] md:w-[450px] lg:w-[550px] aspect-[16/10] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] mx-4'>
      
//       {/* Image Container with Zoom Effect */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
//         <Image 
//           src={imageUrl} 
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
//         />
//       </div>

//       {/* Top Badges */}
//       <div className="absolute top-4 left-4 z-20 flex gap-2">
//         {tags.map((tag, index) => (
//           <span 
//             key={index} 
//             className="text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300 px-2 py-1 rounded-md"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* Project Content */}
//       <div className='relative z-20 h-full p-6 flex flex-col justify-end'>
//         <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//           <p className="text-indigo-400 font-quantico text-xs uppercase tracking-[0.2em] mb-1">
//             {category}
//           </p>
//           <h3 className="text-2xl font-bold font-orbitron text-white mb-4">
//             {title}
//           </h3>
          
//           {/* Action Buttons: Visible on Hover */}
//           <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
//             <a 
//               href={liveUrl} 
//               className="flex items-center gap-2 text-sm font-bold bg-white text-black px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-white transition-colors"
//             >
//               View Project <ExternalLink size={14} />
//             </a>
//             <a 
//               href={githubUrl} 
//               className="flex items-center gap-2 text-sm font-bold bg-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 transition-colors"
//             >
//               <Github size={16} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Corner Accent Detail */}
//       <div className="absolute bottom-0 right-0 w-12 h-12 bg-indigo-500/10 rounded-tl-full blur-2xl group-hover:bg-indigo-500/30 transition-colors duration-500" />
//     </div>
//   );
// };

// export default ProjectCards;


"use client";

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title?: string;
  category?: string;
  imageUrl?: string;
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCards: React.FC<ProjectCardProps> = ({
  title = "Project Name",
  category = "3D Development",
  imageUrl = "/logo.png", 
  tags = ["Next.js", "Three.js", "Tailwind"],
  githubUrl = "#",
  liveUrl = "#"
}) => {
  return (
    <div className='group relative flex-shrink-0 w-[380px] md:w-[500px] lg:w-[600px] aspect-[16/10] bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#a600ff]/50 hover:shadow-[0_0_40px_-15px_rgba(166,0,255,0.4)] mx-6'>
      
      {/* Background Image with Theme Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
        />
      </div>

      {/* Tags with Neon Borders */}
      <div className="absolute top-6 left-6 z-20 flex gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-[9px] font-bold uppercase tracking-widest bg-black/80 backdrop-blur-md border border-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content Section */}
      <div className='relative z-20 h-full p-8 flex flex-col justify-end'>
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-pink-500 font-quantico text-xs uppercase tracking-[0.3em] mb-2 font-bold">
            {category}
          </p>
          <h3 className="text-3xl md:text-4xl font-black font-orbitron text-white mb-6 tracking-tighter">
            {title}
          </h3>
          
          {/* Action Buttons with Gradient Hover */}
          <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <a 
              href={liveUrl} 
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-indigo-500 hover:to-[#a600ff] hover:text-white transition-all"
            >
              Launch <ExternalLink size={14} />
            </a>
            <a 
              href={githubUrl} 
              className="flex items-center gap-2 text-xs font-black bg-zinc-900 text-white p-3 rounded-full border border-zinc-800 hover:border-pink-500 transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle bottom-right glow based on theme */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#a600ff]/20 rounded-full blur-3xl group-hover:bg-pink-500/30 transition-colors duration-700" />
    </div>
  );
};

export default ProjectCards;














// import React, { useState } from 'react';
// import { FaExternalLinkAlt, FaGithub, FaRegHeart, FaHeart, FaCode, FaPalette } from 'react-icons/fa';

// interface ProjectCardProps {
//   title: string;
//   description?: string;
//   imageUrl?: string;
//   techStack?: string[];
//   liveUrl?: string;
//   githubUrl?: string;
//   tags?: string[];
//   isFeatured?: boolean;
//   likes?: number;
//   onLike?: () => void;
// }

// const ProjectCards: React.FC<ProjectCardProps> = ({
//   title = 'Project Name',
//   description = 'A brief description of the project goes here. This could be 2-3 lines about what the project does.',
//   imageUrl = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//   techStack = ['React', 'TypeScript', 'Tailwind'],
//   liveUrl,
//   githubUrl,
//   tags = ['Web App', 'UI/UX'],
//   isFeatured = false,
//   likes = 24,
//   onLike
// }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleLike = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setIsLiked(!isLiked);
//     onLike?.();
//   };

//   return (
//     <div
//       className="relative group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 h-full 
//                  border border-gray-200 shadow-lg hover:shadow-2xl 
//                  transition-all duration-500 ease-out 
//                  hover:scale-[1.02] hover:border-blue-300/50 
//                  hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30
//                  cursor-pointer overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Featured Badge */}
//       {isFeatured && (
//         <div className="absolute top-4 right-4 z-10">
//           <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-md">
//             FEATURED
//           </span>
//         </div>
//       )}

//       {/* Project Image */}
//       <div className="relative mb-6 rounded-xl overflow-hidden aspect-[16/9] bg-gradient-to-br from-blue-100 to-purple-100">
//         <img
//           src={imageUrl}
//           alt={title}
//           className={`w-full h-full object-cover transition-transform duration-700 
//                      ${isHovered ? 'scale-110' : 'scale-100'}`}
//         />
        
//         {/* Overlay Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
//         {/* Hover Links */}
//         <div className={`absolute top-4 left-4 flex gap-2 transition-all duration-300 
//                         ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
//           {liveUrl && (
//             <a
//               href={liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors shadow-md"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <FaExternalLinkAlt className="text-gray-700" />
//             </a>
//           )}
//           {githubUrl && (
//             <a
//               href={githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors shadow-md"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <FaGithub className="text-gray-700" />
//             </a>
//           )}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="space-y-4">
//         {/* Title and Like Button */}
//         <div className="flex justify-between items-start">
//           <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-1">
//             {title}
//           </h3>
//           <button
//             onClick={handleLike}
//             className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors"
//           >
//             {isLiked ? (
//               <FaHeart className="text-red-500 fill-red-500" />
//             ) : (
//               <FaRegHeart className="group-hover:fill-red-500/50" />
//             )}
//             <span className="text-sm font-medium">{likes + (isLiked ? 1 : 0)}</span>
//           </button>
//         </div>

//         {/* Description */}
//         <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
//           {description}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 
//                          text-blue-600 text-xs font-medium rounded-full border border-blue-200 
//                          hover:border-blue-300 transition-colors"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Tech Stack */}
//         <div className="pt-4 border-t border-gray-100">
//           <div className="flex items-center gap-2 mb-3">
//             <FaCode className="text-blue-500" />
//             <span className="text-sm font-semibold text-gray-700">Tech Stack</span>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {techStack.map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 
//                            text-gray-700 text-xs font-medium rounded-lg border border-gray-200
//                            hover:border-gray-300 hover:shadow-sm transition-all"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Hover View Details */}
//         <div className={`pt-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//           <div className="flex items-center justify-between text-blue-600 font-medium text-sm">
//             <span>View Details →</span>
//             <FaPalette className="text-blue-500" />
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
//         <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCards;