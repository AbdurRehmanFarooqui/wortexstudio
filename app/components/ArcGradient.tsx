// import React from 'react';

// const PurpleArcGradient = () => {
//   return (
//     <div className="relative w-full h-50 bg-black">
//       {/* 1. The Main Arc (Shallow Curve) */}
//       <div 
//         className="absolute top-8 left-1/2 -translate-x-1/2 w-[160%] h-[500%] rounded-[100%] border-t-[1px] border-[#a600ff]/80 pointer-events-none"
//         style={{
//           boxShadow: '0 -20px 50px -10px rgba(166,0,255,0.5)'
//         }}
//       />

//       {/* 2. The High-Intensity "Core" Glow (The bright center line) */}
//       {/* <div 
//         className="absolute top-8 left-1/2 -translate-x-1/2 w-[100%] h-[2px] bg-gradient-to-r from-transparent via-[#a600ff] to-transparent blur-[2px] opacity-80"
//       /> */}

//       {/* 3. Deep Blur (Provides the ambient purple light) */}
//       <div 
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-12 bg-[#a600ff]/20 blur-[60px] rounded-full border border-white"
//       />
//     </div>
//   );
// };

// export default PurpleArcGradient;

/* Ellipse 3 */

// import React from 'react';

// const PurpleArcGradient = () => {
//     return (
//         <div className="relative w-full h-80 bg-black overflow-visible py-20">

//         <svg className="absolute w-0 h-0 invisible">
//         <filter id="grainyNoise">
//            <feTurbulence
//             type="fractalNoise"
//             baseFrequency="0.60"
//             numOctaves="4"
//             stitchTiles="stitch"
//           />
//           {/* Contrast adjustment for the grain */}
//           <feColorMatrix type="saturate" values="0" />
//         </filter>
//         </svg>
//         <div className="relative w-96 h-96 ">
    
//          {/* 3. The Base Gradient (The Color) */}
//         <div 
//           className="absolute inset-0 rounded-full blur-[40px] opacity-80"
//           style={{
//             background: `radial-gradient(circle, rgba(236,72,153,0.6) 0%, rgba(166,0,255,0.3) 40%, transparent 70%)`
//           }}
//         />
//         {/* 4. The Grain Overlay */}
//         <div 
//           className="absolute inset-0 rounded-full opacity-100 mix-blend-overlay pointer-events-none"
//           style={{
//             filter: "url(#grainyNoise)"
//           }}
//         />
//       </div>
//     </div>
        
//     );
// };

// export default PurpleArcGradient;





import React from 'react';

const ArcGradient = () => {
    return (
        <div className="relative w-full bg-black overflow-hidden -scale-y-100">

        <svg className="absolute w-0 h-0 invisible">
        <filter id="grainyNoise">
           <feTurbulence
            type="fractalNoise"
            baseFrequency="0.60"
            numOctaves="4"
            stitchTiles="stitch"
          />
          {/* Contrast adjustment for the grain */}
          <feColorMatrix type="saturate" values="0" />
        </filter>
        </svg>
        <div className="relative w-full h-50 mx-auto">
    
         {/* 3. The Base Gradient (The Color) */}
        <div 
          className="absolute top-[40%] left-[50%] w-[120vw] h-[80vw] inset-0 rounded-[100%] blur-[8px] opacity-100 mx-auto bg-pink-400 -translate-x-1/2 "
        />
        <div 
          className="absolute top-[50%] left-[50%] w-[160vw] h-[80vw] inset-0 rounded-[100%] blur-[8px] opacity-100 mx-auto bg-black -translate-x-1/2"
        />
          <div 
          className="absolute inset-0 rounded-full opacity-100 mix-blend-overlay pointer-events-none"
          style={{
            filter: "url(#grainyNoise)"
          }}
        />
      </div>
    </div>
    );
};
export default ArcGradient;










// import React from 'react';

// const PurpleArcGradient = () => {
//     return (
//         <div className="relative w-full bg-black overflow-visible py-20">

//         <svg className="absolute w-0 h-0 invisible">
//         <filter id="grainyNoise">
//            <feTurbulence
//             type="fractalNoise"
//             baseFrequency="0.60"
//             numOctaves="4"
//             stitchTiles="stitch"
//           />
//           {/* Contrast adjustment for the grain */}
//           <feColorMatrix type="saturate" values="0" />
//         </filter>
//         </svg>
//         <div className="relative w-full h-50 mx-auto">
    
//          {/* 3. The Base Gradient (The Color) */}
//         <div 
//           className="absolute top-[40%] left-[50%] w-[120vw] h-[80vw] inset-0 rounded-[100%] blur-[10px] opacity-100 mx-auto bg-amber-200 -translate-x-1/2 "
//         />

//         {/* 4. The Grain Overlay */}
//         <div 
//           className="absolute inset-0 rounded-full opacity-100 mix-blend-overlay pointer-events-none"
//           style={{
//             filter: "url(#grainyNoise)"
//           }}
//         />
//         <div 
//           className="absolute top-[50%] left-[50%] w-[160vw] h-[80vw] inset-0 rounded-[100%] blur-[10px] opacity-100 mx-auto bg-black -translate-x-1/2 "
//         />
//       </div>
//     </div>
        
//     );
// };
// export default PurpleArcGradient;










// import React from 'react';

// const PurpleArcGradient = () => {
//     return (
//         <div className="relative w-full h-96 bg-black overflow-hidden py-0  flex items-center ">

//         <svg className="absolute w-0 h-0 invisible">
//         <filter id="grainyNoise">
//            <feTurbulence
//             type="fractalNoise"
//             baseFrequency="0.60"
//             numOctaves="4"
//             stitchTiles="stitch"
//           />
//           {/* Contrast adjustment for the grain */}
//           <feColorMatrix type="saturate" values="0" />
//         </filter>
//         </svg>
//         <div className="relative w-96 h-[80%]">
    
//          {/* 3. The Base Gradient (The Color) */}
//         <div 
//           className="absolute top-[50%] -left-[50%] w-[100%] h-[90%] inset-0 rounded-full blur-[20px] opacity-100 mx-auto bg-amber-200 -translate-y-1/2"
//         />

//         <div 
//           className="absolute top-[50%] w-70 h-70 inset-0 rounded-full mx-auto blur-[20px] opacity-100 bg-black -translate-y-1/2"
//         />
//                 {/* 4. The Grain Overlay */}
//         <div 
//           className="absolute inset-0 rounded-full opacity-100 mix-blend-overlay pointer-events-none"
//           style={{
//             filter: "url(#grainyNoise)"
//           }}
//         />
//       </div>
//     </div>
        
//     );
// };

// export default PurpleArcGradient;
     




// "use client";

// import React from "react";

// const PurpleArcGradient = () => {
//   // Your specific SVG path data
//   const arcPath = "path('M221 58.5C221 72.8594 171.527 21 110.5 21C49.4725 21 0 72.8594 0 58.5C0 44.1406 49.4725 0 110.5 0C171.527 0 221 44.1406 221 58.5Z')";

//   return (
//     <div className="relative w-full h-40 bg-black flex items-center justify-center overflow-visible">
      
//       {/* 1. The Hidden Noise Filter */}
//       <svg className="absolute w-0 h-0 invisible">
//         <filter id="grainyNoise">
//           <feTurbulence
//             type="fractalNoise"
//             baseFrequency="0.65"
//             numOctaves="3"
//             stitchTiles="stitch"
//           />
//           <feColorMatrix type="saturate" values="0" />
//         </filter>
//       </svg>

//       {/* 2. The Clipped Shape Container */}
//       <div 
//         className="relative w-[221px] h-[62px] overflow-hidden group"
//         style={{ clipPath: arcPath }}
//       >
        
//         {/* 3. The Base Gradient Layer */}
//         {/* We position the gradient at the top (50% 0%) to match the arc curve */}
//         <div 
//           className="absolute inset-0 transition-opacity duration-500"
//           style={{
//             background: `radial-gradient(ellipse at 50% 0%, rgba(236,72,153,0.9) 0%, rgba(166,0,255,0.5) 45%, transparent 80%)`
//           }}
//         />

//         {/* 4. The Grain Overlay Layer */}
//         <div 
//           className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
//           style={{
//             filter: "url(#grainyNoise)",
//           }}
//         />


//       </div>


//     </div>
//   );
// };

// export default PurpleArcGradient;





{/* <div 
  className="w-[221px] h-[62px] bg-white"
  style={{ 
    clipPath: "path('M221 58.5C221 72.8594 171.527 21 110.5 21C49.4725 21 0 72.8594 0 58.5C0 44.1406 49.4725 0 110.5 0C171.527 0 221 44.1406 221 58.5Z')" 
  }}
> */}

// "use client";

// import React from "react";

// const PurpleArcGradient = () => {
//   return (
//     <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
//       {/* 1. Define the Noise Filter (Hidden) */}
//       <svg className="absolute w-0 h-0 invisible">
//         <filter id="grainyNoise">
//           <feTurbulence
//             type="fractalNoise"
//             baseFrequency="0.60"
//             numOctaves="4"
//             stitchTiles="stitch"
//           />
//           {/* Contrast adjustment for the grain */}
//           <feColorMatrix type="saturate" values="0" />
//         </filter>
//       </svg>

//       {/* 2. The Container for the Orb */}
//       <div className="relative w-96 h-96">
        
//         {/* 3. The Base Gradient (The Color) */}
//         <div 
//           className="absolute inset-0 rounded-full blur-[40px] opacity-80"
//           style={{
//             background: `radial-gradient(circle, rgba(236,72,153,0.6) 0%, rgba(166,0,255,0.3) 40%, transparent 70%)`
//           }}
//         />

//         {/* 4. The Grain Overlay */}
//         <div 
//           className="absolute inset-0 rounded-full opacity-30 mix-blend-overlay pointer-events-none"
//           style={{
//             filter: "url(#grainyNoise)",
//           }}
//         />

//         {/* 5. Central High-Light (Optional: for extra depth) */}
//         <div className="absolute inset-0 rounded-full bg-radial from-white/10 to-transparent blur-xl" />
//       </div>
//     </div>
//   );
// };

// export default PurpleArcGradient;