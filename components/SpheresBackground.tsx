"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function CameraRig() {
    useFrame((state, delta) => {
        // state.pointer.x: -1 (left) to 1 (right)
        // state.pointer.y: -1 (bottom) to 1 (top)

        // Calculate target position
        // We keep Z fixed (e.g., 5) and move X and Y slightly
        // const targetX = state.pointer.x * 0.1; // Sensitivity factor
        // const targetY = state.pointer.y * 0.1;

        const targetX = state.pointer.x * 0.5; // Multiply to increase range
        const targetY = -1.2 + state.pointer.y * 0.5;
        // Smoothly interpolate current camera position to the target
        // 0.1 is the "smoothing" factor (lower is slower/smoother)
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, -targetX, 0.1);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -targetY, 0.1);

        // Optional: Always look at the center (0,0,0) or a specific object
        state.camera.lookAt(0, 0, 0);

    });

    return null; // This component renders nothing visually
}
function AbstractMesh1({ position }: { position: [number, number, number] }) {
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
function AbstractMesh({ position }: { position: [number, number, number] }) {
    const mesh = useRef<THREE.Mesh>(null);
    const [x, y, z] = position;
    useFrame((state) => {
        if (!mesh.current) return;

        // smooth subtle parallax
        // mesh.current.rotation.y += (pointer.x * 0.6 - mesh.current.rotation.y) * 0.05;
        // mesh.current.rotation.x += (pointer.y * 0.6 - mesh.current.rotation.x) * 0.05;
        mesh.current.position.y = y + (Math.sin(state.clock.elapsedTime + x) * 0.2);
        // mesh.current.position.y = y + (Math.sin(state.clock.elapsedTime + x+z) * 0.2);

        // mesh.current.position.y = 0.1 * Math.sin(state.clock.elapsedTime + position[0])
    });
    console.log(position);
    return (
        <mesh ref={mesh} position={position}>
            <sphereGeometry args={[0.15, 2, 2]} />
            <meshStandardMaterial
                color="#6366f1"
            // roughness={0.25}
            // metalness={0.85}
            // wireframe
            />
            <MeshWobbleMaterial attach="material" factor={3} speed={1.0} wireframe />
        </mesh>
    );
}
const gridXstart = 20;
const gridXend = -20;
const gridZstart = 3;
const gridZend = -30;
var key = 1
// const spacing = 0.8;
const components: React.ReactNode[] = [];
for (let i = gridXend; i <= gridXstart; i++) {
    for (let j = gridZend; j <= gridZstart; j++) {
        key++;
        components.push(<AbstractMesh key={key} position={[i, -1, j]} />);
    }
}
// spacing += { index - Math.floor(gridSize / 2)
export default function HeroBackground() {
    return (
        <Canvas
            camera={{ position: [0, 1.2, 6], fov: 50, rotation: [0, 0, 0] }}
            style={{
                position: "absolute",
                inset: 0,
                // zIndex: -1,
            }}
            dpr={[1, 1.5]}
        >
            <CameraRig />
            <ambientLight intensity={0.6} />
            <directionalLight position={[6, 6, 6]} intensity={1.2} />
            {/* <pointLight position={[-6, -6, -6]} intensity={0.6} /> */}

            {components}

            {/* 
            {Array.from({ length: gridSize }, (_, index) => (

                Array.from({ length: gridSize }, (_, index) => (
                    <AbstractMesh position={[ index-gridSize/2, -1, -0.8]} />
                ))

            ))} */}
            {/* <AbstractMesh position={[0, -1, -0.8]} />
            <AbstractMesh position={[0, -1, -1.6]} />
            <AbstractMesh position={[0, -1, -2.4]} />
            <AbstractMesh position={[0, -1, -3.2]} />
            <AbstractMesh position={[0, -1, 0]} />
            <AbstractMesh position={[0, -1, 0.8]} />
            <AbstractMesh position={[0, -1, 1.6]} />
            <AbstractMesh position={[0, -1, 2.4]} />
            <AbstractMesh position={[0, -1, 3.2]} />

            <AbstractMesh position={[1, -1, -0.8]} />
            <AbstractMesh position={[1, -1, -1.6]} />
            <AbstractMesh position={[1, -1, -2.4]} />
            <AbstractMesh position={[1, -1, -3.2]} />
            <AbstractMesh position={[1, -1, 0]} />
            <AbstractMesh position={[1, -1, 0.8]} />
            <AbstractMesh position={[1, -1, 1.6]} />
            <AbstractMesh position={[1, -1, 2.4]} />
            <AbstractMesh position={[1, -1, 3.2]} />

            <AbstractMesh position={[2, -1, -0.8]} />
            <AbstractMesh position={[2, -1, -1.6]} />
            <AbstractMesh position={[2, -1, -2.4]} />
            <AbstractMesh position={[2, -1, -3.2]} />
            <AbstractMesh position={[2, -1, 0]} />
            <AbstractMesh position={[2, -1, 0.8]} />
            <AbstractMesh position={[2, -1, 1.6]} />
            <AbstractMesh position={[2, -1, 2.4]} />
            <AbstractMesh position={[2, -1, 3.2]} />

            <AbstractMesh position={[-1, -1, -0.8]} />
            <AbstractMesh position={[-1, -1, -1.6]} />
            <AbstractMesh position={[-1, -1, -2.4]} />
            <AbstractMesh position={[-1, -1, -3.2]} />
            <AbstractMesh position={[-1, -1, 0]} />
            <AbstractMesh position={[-1, -1, 0.8]} />
            <AbstractMesh position={[-1, -1, 1.6]} />
            <AbstractMesh position={[-1, -1, 2.4]} />
            <AbstractMesh position={[-1, -1, 3.2]} />

            <AbstractMesh position={[-2, -1, -0.8]} />
            <AbstractMesh position={[-2, -1, -1.6]} />
            <AbstractMesh position={[-2, -1, -2.4]} />
            <AbstractMesh position={[-2, -1, -3.2]} />
            <AbstractMesh position={[-2, -1, 0]} />
            <AbstractMesh position={[-2, -1, 0.8]} />
            <AbstractMesh position={[-2, -1, 1.6]} />
            <AbstractMesh position={[-2, -1, 2.4]} />
            <AbstractMesh position={[-2, -1, 3.2]} /> */}

            {/* <OrbitControls enableZoom={false} /> */}
        </Canvas>
    );
}
