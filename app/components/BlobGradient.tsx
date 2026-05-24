"use client"; // <--- MUST HAVE THIS LINE AT THE VERY TOP

import React from 'react';
const BlobGradient = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative w-full overflow-hidden bg-black group">
      {/* 1. The Moving Mesh Layer */}
      <div className="absolute inset-0 z-0">
        {/* Purple Blob */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[#a600ff]/16 blur-[120px] animate-mesh-drift" />
        
        {/* Indigo Blob */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 blur-[120px] animate-mesh-drift [animation-delay:1s]" />
        
        {/* Pink Accent */}
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-pink-500/10 blur-[100px] animate-mesh-drift [animation-delay:4s]" />
      </div>

      {/* 2. The Tech Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* 3. Horizontal Scanline (Animated on Hover) */}
      {/* <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#a600ff]/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scanline transition-opacity pointer-events-none" /> */}

      {/* 4. Content Content */}
      <div className="relative z-20 w-full h-full ">
        {children}
      </div>

      {/* CSS for Scanline (Standard CSS needed for keyframes not in tailwind config) */}
      <style jsx>{`
        @keyframes scanline {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        .group:hover .group-hover\:animate-scanline {
          animation: scanline 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BlobGradient;