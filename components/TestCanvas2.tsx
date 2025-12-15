"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// 1. The Camera Rig Component
// This tracks the mouse and moves the camera smoothly
function CameraRig() {
  useFrame((state) => {
    // state.pointer.x and .y are normalized coordinates (-1 to 1)
    
    // Calculate target position based on mouse
    // We keep the original Z (6) and Y (1.2) roughly the same, adding the mouse offset
    const targetX = state.pointer.x * 5; // Multiply to increase range
    const targetY = 1.2 + state.pointer.y * 2; 

    // Smoothly interpolate (lerp) current camera position to the target
    // 0.05 is the "damping" factor (lower = smoother/slower)
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);

    // Optional: Make camera always look at the center of the scene
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

function AbstractMesh({ position }: { position: [number, number, number] }) {
    const mesh = useRef<THREE.Mesh>(null);
    // Destructure position to get the initial values
    const [x, y, z] = position; 

    useFrame((state) => {
        if (!mesh.current) return;

        // ANIMATION:
        // We add the sine wave to the INITIAL 'y' (-1), 
        // otherwise it snaps to 0 and jumps up.
        mesh.current.position.y = y + (Math.sin(state.clock.elapsedTime + x) * 0.2);
    });

    return (
        <mesh ref={mesh} position={position}>
            {/* Reduced polygon count (args) for better performance on large grids */}
            <sphereGeometry args={[0.15, 8, 8]} /> 
            <MeshWobbleMaterial 
                color="#6366f1"
                factor={1} 
                speed={2} 
                wireframe 
            />
        </mesh>
    );
}

// Grid Configuration
const gridXstart = 20;
const gridXend = -20;
const gridZstart = 3;
const gridZend = -15; // Shortened slightly for performance

const components: React.ReactNode[] = [];
let keyCounter = 0;

// Generate Grid
for (let i = gridXend; i <= gridXstart; i += 2) { // Increased step to 2 for spacing
    for (let j = gridZend; j <= gridZstart; j += 2) {
        keyCounter++;
        components.push(
            <AbstractMesh key={keyCounter} position={[i, -1, j]} />
        );
    }
}

export default function HeroBackground() {
    return (
        <Canvas
            // Initial camera position
            camera={{ position: [0, 1.2, 6], fov: 50 }}
            style={{
                position: "absolute",
                inset: 0,
                background: "#000" // Added dark background to see wireframes better
            }}
            dpr={[1, 1.5]}
        >
            {/* 2. Add the Camera Rig inside the Canvas */}
            <CameraRig />

            <ambientLight intensity={0.6} />
            <directionalLight position={[6, 6, 6]} intensity={1.2} />

            {components}
        </Canvas>
    );
}