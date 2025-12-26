// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
// import { useRef, useEffect, useState } from "react";
// import * as THREE from "three";
// import { useControls } from 'leva'


// function CameraRig() {
//     useFrame((state, delta) => {
//         // state.pointer.x: -1 (left) to 1 (right)
//         // state.pointer.y: -1 (bottom) to 1 (top)

//         // Calculate target position
//         // We keep Z fixed (e.g., 5) and move X and Y slightly
//         // const targetX = state.pointer.x * 0.1; // Sensitivity factor
//         // const targetY = state.pointer.y * 0.1;

//         const targetX = state.pointer.x * 0.5; // Multiply to increase range
//         const targetY = -5 + state.pointer.y * 0.5;
//         // Smoothly interpolate current camera position to the target
//         // 0.1 is the "smoothing" factor (lower is slower/smoother)
//         state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, -targetX, 0.2);
//         state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -targetY, 0.2);

//         // Optional: Always look at the center (0,0,0) or a specific object
//         state.camera.lookAt(0, 0, 0);

//     });

//     return null; // This component renders nothing visually
// }

// function AbstractMesh({ position, color }: { position: [number, number, number], color: string }) {
//     const mesh = useRef<THREE.Mesh>(null);
//     const [x, y, z] = position;
//     useFrame((state) => {
//         if (!mesh.current) return;

//         // smooth subtle parallax
//         // mesh.current.rotation.y += (pointer.x * 0.6 - mesh.current.rotation.y) * 0.05;
//         // mesh.current.rotation.x += (pointer.y * 0.6 - mesh.current.rotation.x) * 0.05;
//         // mesh.current.position.y = y + (Math.sin(state.clock.elapsedTime + x) * 0.2);
//         // mesh.current.position.y = y + (Math.sin(state.clock.elapsedTime + x+z) * 0.2);

//         mesh.current.position.y = 0.1 * Math.sin(state.clock.elapsedTime + z)
//     });
//     // console.log(position);
//     return (
//         <mesh ref={mesh} position={position}>
//             <boxGeometry args={[0.15, 50]} />
//             <meshStandardMaterial
//                 // color="#181818"
//                 // color="#ffffff"
//                 // color="#1ecd84"
//                 // color="#c0bfff"
//                 color={color}
//                 roughness={0.9}
//             // metalness={0.1}
//             // wireframe
//             />
//             {/* <MeshWobbleMaterial attach="material" factor={3} speed={1.0} wireframe /> */}
//         </mesh>
//     );
// }

// const environmentMap = (color: string) => {
//     const gridZstart = 4;
//     const gridZend = -16;
//     var key = 1
//     var gridX = 4

//     const components: React.ReactNode[] = [];
//     for (let j = gridZstart; j >= gridZend; j--) {

//         if (j % 2 == 0) {
//             for (let i = -gridX; i <= gridX; i++) {
//                 key++;
//                 components.push(<AbstractMesh key={key} position={[i, -1, j]} color={color} />);
//             }
//         }
//         else {
//             for (let i = -gridX + 1; i <= gridX; i++) {
//                 key++;
//                 components.push(<AbstractMesh key={key} position={[i, -1, j]} color={color} />);
//             }
//         }
//         gridX <= 9 ? gridX += 0.5 : gridX = 9;

//     }
//     return components;
// }

// // #8000ff, 604d72
// export default function HeroBackground() {
//     const { meshColor, lightColor } = useControls({ meshColor: '#ffffff', lightColor: '#ffffff'})
//     const components = environmentMap(meshColor);
//     return (
//         <Canvas
//             camera={{ position: [0, 2, 6], fov: 50, rotation: [0, 0, 0] }}
//             style={{
//                 position: "absolute",
//                 inset: 0,
//             }}
//             dpr={[1, 1.5]}
//         >
//             <CameraRig />
//             {/* <ambientLight intensity={1} /> */}
//             {/* <directionalLight position={[6, 6, 6]} intensity={3} /> */}
//             {/* <pointLight position={[0, 2, 6]} intensity={100} /> */}
//             <spotLight position={[0, 2, 6]} intensity={25}
//                 angle={Math.PI / 4}
//                 penumbra={1}
//                 decay={2}
//                 color={lightColor}
//             />
//             <spotLight position={[0, -10, -10]} intensity={0}
//                 // angle={Math.PI / 4}
//                 // penumbra={1}
//                 // decay={2}
//                 // color={}
//             />
//             {components}

//             {/* <OrbitControls enableZoom={false} /> */}
//         </Canvas>
//     );
// }

























"use client";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from 'leva'
import { useTransform, useSpring, MotionValue} from "framer-motion";
const tempObject = new THREE.Object3D();
interface ScrollProps {
  scrollYProgress: MotionValue<number>;
}

function InstancedGrid({ color }: { color: string }) {
    const meshRef = useRef<THREE.InstancedMesh>(null);

    // 1. Pre-calculate the static grid positions once
    const gridData = useMemo(() => {
        const data = [];
        const gridZstart = 4;
        const gridZend = -16;
        let gridX = 4;

        for (let j = gridZstart; j >= gridZend; j--) {
            // Stagger logic from your original code
            const isEven = j % 2 === 0;
            const startX = isEven ? -gridX : -gridX + 1;
            const endX = Math.floor(gridX);

            for (let i = startX; i <= endX; i++) {
                data.push({ x: i, z: j });
            }
            // Increment width as it goes deeper
            gridX <= 9 ? (gridX += 0.5) : (gridX = 9);
        }
        return data;
    }, []);

    const count = gridData.length;

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.elapsedTime;

        gridData.forEach((pos, i) => {
            // 2. Apply the animation (Sine wave)
            const yAnim = 0.1 * Math.sin(time + pos.z);

            // 3. Set position for this specific instance
            tempObject.position.set(pos.x, -1 + yAnim, pos.z);
            tempObject.updateMatrix();

            // 4. Update the matrix at index 'i'
            meshRef.current!.setMatrixAt(i, tempObject.matrix);
        });

        // 5. Tell Three.js that the instance matrix has changed
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <boxGeometry args={[0.15, 50,]} />
            <meshStandardMaterial color={color} roughness={0.9} />
        </instancedMesh>
    );
}

function CameraRig({ scrollYProgress }: ScrollProps) {
  // 1. Smooth the scroll input
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 2. Map scroll to Z position and FOV
  const zPos = useTransform<number, number>(smoothScroll, [0, 1], [3, -50]);
  const fovScale = useTransform<number, number>(smoothScroll, [0, 1], [50, 35]);
    useFrame((state, delta) => {
    const cam = state.camera;
    
    // Check if PerspectiveCamera to avoid TS error on 'fov'
    if (cam instanceof THREE.PerspectiveCamera) {
      // Mouse Parallax
      const targetX = state.pointer.x * 0.5;
      const targetY = state.pointer.y * 0.5;

      cam.position.x = THREE.MathUtils.lerp(cam.position.x, -targetX, 0.1);
    //   cam.position.y = THREE.MathUtils.lerp(cam.position.y, 1.5 - targetY, 0.1); // Keep height around 1.5
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -targetY, 0.2);
      // 3. Apply Scroll-based Zoom
      cam.position.y = zPos.get();
      cam.fov = fovScale.get();
      cam.updateProjectionMatrix();
    
    }
    state.camera.lookAt(0, 0, 0);
    });

    return null; // This component renders nothing visually
}

export default function HeroBackground({ scrollYProgress }: { scrollYProgress?: any }) {
    const { meshColor, lightColor, lightColor2 } = useControls({
        meshColor: '#ffffff',
        // lightColor: '#ffffff',
        lightColor: '#a600ff',
        lightColor2: '#ffffff'
    });

    return (
        <Canvas
            camera={{ position: [0, 2, 6], fov: 50 }}
            style={{ position: "absolute", inset: 0 }}
            dpr={[1, 2]} // Support high-res screens
        >

            <CameraRig scrollYProgress={scrollYProgress} />

            <fog attach="fog" args={["black", 0, 15]} />
            {/* Replaces the point lights for that high-performance look */}
            <spotLight
                position={[0, -3, 6]}
                intensity={25}
                color={lightColor}
                // angle={0.5}
                angle={Math.PI / 4}
                penumbra={1}
                decay={2}
            />
            {/* <spotLight
                position={[-10, 5, 10]}
                intensity={25}
                color={lightColor2}
                angle={0.5}
            />
            <spotLight
                position={[10, 5, 10]}
                intensity={25}
                color={lightColor2}
                angle={0.5}
            /> */}

            {/* The high-performance grid */}
             <InstancedGrid color={meshColor} />

        </Canvas>
    );
}



// "use client";

// import React, { useRef, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, ContactShadows } from "@react-three/drei";
// import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
// import { useTransform, useSpring, MotionValue } from "framer-motion";
// import * as THREE from "three";

// // --- Types ---
// interface ScrollProps {
//   scrollYProgress: MotionValue<number>;
// }

// // --- Instanced Grid Component ---
// const tempObject = new THREE.Object3D();

// function InstancedGrid({ color }: { color: string }) {
//   const meshRef = useRef<THREE.InstancedMesh>(null);

//   // Pre-calculate grid positions
//   const gridData = useMemo(() => {
//     const data = [];
//     const gridZstart = 4;
//     const gridZend = -16;
//     let gridX = 4;

//     for (let j = gridZstart; j >= gridZend; j--) {
//       const isEven = j % 2 === 0;
//       const startX = isEven ? -gridX : -gridX + 1;
//       const endX = Math.floor(gridX);

//       for (let i = startX; i <= endX; i++) {
//         data.push({ x: i, z: j });
//       }
//       gridX <= 9 ? (gridX += 0.5) : (gridX = 9);
//     }
//     return data;
//   }, []);

//   const count = gridData.length;

//   useFrame((state) => {
//     if (!meshRef.current) return;
//     const time = state.clock.elapsedTime;

//     gridData.forEach((pos, i) => {
//       // Subtle sine wave animation
//       const yAnim = 0.1 * Math.sin(time + pos.z);
//       tempObject.position.set(pos.x, -1 + yAnim, pos.z);
//       tempObject.updateMatrix();
//       meshRef.current!.setMatrixAt(i, tempObject.matrix);
//     });

//     meshRef.current.instanceMatrix.needsUpdate = true;
//   });

//   return (
//     <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
//       <boxGeometry args={[0.15, 50]} />
//       <meshStandardMaterial
//         color={color}
//         roughness={0.1}
//         metalness={0.9}
//         emissive={color}
//         emissiveIntensity={2} // Triggers Bloom
//       />
//     </instancedMesh>
//   );
// }

// // --- Camera Rig Component ---
// function CameraRig({ scrollYProgress }: ScrollProps) {
//   // 1. Smooth the scroll input
//   const smoothScroll = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   // 2. Map scroll to Z position and FOV
//   const zPos = useTransform<number, number>(smoothScroll, [0, 1], [6, -4]);
//   const fovScale = useTransform<number, number>(smoothScroll, [0, 1], [50, 35]);

//   useFrame((state) => {
//     const cam = state.camera;
    
//     // Check if PerspectiveCamera to avoid TS error on 'fov'
//     if (cam instanceof THREE.PerspectiveCamera) {
//       // Mouse Parallax
//       const targetX = state.pointer.x * 0.5;
//       const targetY = state.pointer.y * 0.5;

//       cam.position.x = THREE.MathUtils.lerp(cam.position.x, -targetX, 0.1);
//       cam.position.y = THREE.MathUtils.lerp(cam.position.y, 1.5 - targetY, 0.1); // Keep height around 1.5
      
//       // 3. Apply Scroll-based Zoom
//       cam.position.z = zPos.get();
//       cam.fov = fovScale.get();
//       cam.updateProjectionMatrix();
//     }

//     state.camera.lookAt(0, 0, 0);
//   });

//   return null;
// }

// // --- Main Background Component ---
// export default function HeroBackground({ scrollYProgress }: ScrollProps) {
//   return (
//     <Canvas
//       camera={{ position: [0, 2, 6], fov: 50 }}
//       style={{ position: "absolute", inset: 0, background: "black" }}
//       dpr={[1, 2]}
//     >
//       {/* Logic components */}
//       <CameraRig scrollYProgress={scrollYProgress} />

//       <fog attach="fog" args={["black", 0, 15]} />

//       {/* Lighting */}
//       {/* <spotLight 
//         position={[0, 10, 10]} 
//         intensity={0.1} 
//         angle={0.6} 
//         penumbra={1} 
//         color="#6366f1" 
//       /> */}
//       {/* <directionalLight position={[0, 5, -5]} intensity={0.1} color="#ffffff" /> */}

//       {/* Scene Content */}
//       <InstancedGrid color="#ffffff" />

//       {/* Post Processing */}
//       {/* <EffectComposer disableNormalPass>
//         <Bloom
//           luminanceThreshold={1}
//           mipmapBlur
//           intensity={0.5}
//           radius={0.3}
//         />
//         <Noise opacity={0.04} />
//         <Vignette eskil={false} offset={0.1} darkness={1.1} />
//       </EffectComposer> */}
//     </Canvas>
//   );
// }