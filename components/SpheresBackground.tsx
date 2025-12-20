"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useControls } from 'leva'


function CameraRig() {
    useFrame((state, delta) => {
        // state.pointer.x: -1 (left) to 1 (right)
        // state.pointer.y: -1 (bottom) to 1 (top)

        // Calculate target position
        // We keep Z fixed (e.g., 5) and move X and Y slightly
        // const targetX = state.pointer.x * 0.1; // Sensitivity factor
        // const targetY = state.pointer.y * 0.1;

        const targetX = state.pointer.x * 0.5; // Multiply to increase range
        const targetY = -5 + state.pointer.y * 0.5;
        // Smoothly interpolate current camera position to the target
        // 0.1 is the "smoothing" factor (lower is slower/smoother)
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, -targetX, 0.2);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -targetY, 0.2);

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
function AbstractMesh({ position, color }: { position: [number, number, number], color: string }) {
    const mesh = useRef<THREE.Mesh>(null);
    const [x, y, z] = position;
    useFrame((state) => {
        if (!mesh.current) return;

        // smooth subtle parallax
        // mesh.current.rotation.y += (pointer.x * 0.6 - mesh.current.rotation.y) * 0.05;
        // mesh.current.rotation.x += (pointer.y * 0.6 - mesh.current.rotation.x) * 0.05;
        // mesh.current.position.y = y + (Math.sin(state.clock.elapsedTime + x) * 0.2);
        // mesh.current.position.y = y + (Math.sin(state.clock.elapsedTime + x+z) * 0.2);

        mesh.current.position.y = 0.1 * Math.sin(state.clock.elapsedTime + z)
    });
    // console.log(position);
    return (
        <mesh ref={mesh} position={position}>
            <sphereGeometry args={[0.15, 12, 12]} />
            <meshStandardMaterial
                // color="#181818"
                // color="#ffffff"
                // color="#1ecd84"
                // color="#c0bfff"
                color={color}
                roughness={0.9}
            // metalness={0.1}
            // wireframe
            />
            {/* <MeshWobbleMaterial attach="material" factor={3} speed={1.0} wireframe /> */}
        </mesh>
    );
}

const environmentMap = (color: string) => {
    const gridZstart = 4;
    const gridZend = -16;
    var key = 1
    var gridX = 4

    const components: React.ReactNode[] = [];
    for (let j = gridZstart; j >= gridZend; j--) {

        if (j % 2 == 0) {
            for (let i = -gridX; i <= gridX; i++) {
                key++;
                components.push(<AbstractMesh key={key} position={[i, -1, j]} color={color} />);
            }
        }
        else {
            for (let i = -gridX + 1; i <= gridX; i++) {
                key++;
                components.push(<AbstractMesh key={key} position={[i, -1, j]} color={color} />);
            }
        }
        gridX <= 9 ? gridX += 0.5 : gridX = 9;

    }
    return components;
}
// spacing += { index - Math.floor(gridSize / 2)
export default function HeroBackground() {
    const { meshColor, lightColor } = useControls({ meshColor: '#ffffff', lightColor: '#ffffff' })
    const components = environmentMap(meshColor);
    return (
        <Canvas
            camera={{ position: [0, 2, 6], fov: 50, rotation: [0, 0, 0] }}
            style={{
                position: "absolute",
                inset: 0,
            }}
            dpr={[1, 1.5]}
        >
            <CameraRig />
            {/* <ambientLight intensity={1} /> */}
            {/* <directionalLight position={[6, 6, 6]} intensity={3} /> */}
            {/* <pointLight position={[0, 2, 6]} intensity={100} /> */}
            <spotLight position={[0, 2, 6]} intensity={25}
                angle={Math.PI / 4}
                penumbra={1}
                decay={2}
                color={lightColor}
            />

            {components}

            {/* <OrbitControls enableZoom={false} /> */}
        </Canvas>
    );
}
