"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
// import { useControls } from 'leva'
import { useTransform, useSpring, MotionValue } from "framer-motion";
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
        const gridZend = -6;
        let gridX = 2;

        for (let j = gridZstart; j >= gridZend; j=j-0.2) {
            // Stagger logic from your original code
            const isEven = j % 2 === 0;
            const startX = isEven ? -gridX : -gridX + 1;
            const endX = Math.floor(gridX);

            for (let i = startX; i <= endX; i++) {
                data.push({ x: i, z: j });
            }
            // Increment width as it goes deeper
            gridX <= 4 ? (gridX += 0.5) : (gridX = 4);
        }
        return data;
    }, []);

    const count = gridData.length;

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.elapsedTime;

        gridData.forEach((pos, i) => {
            // 2. Apply the animation (Sine wave)
            // const yAnim = 1 * Math.sin(time + pos.z);

            // 3. Set position for this specific instance
            // tempObject.position.set(pos.x, 0, pos.z);
            tempObject.position.set(pos.x, pos.z, 0);
            tempObject.updateMatrix();

            // 4. Update the matrix at index 'i'
            meshRef.current!.setMatrixAt(i, tempObject.matrix);
        });

        // 5. Tell Three.js that the instance matrix has changed
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <boxGeometry args={[0.15, 0.15, 5]} />
            {/* <boxGeometry args={[0.15, 5, ]} /> */}
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
    // const { meshColor, lightColor, lightColor2 } = useControls({
    //     meshColor: '#ffffff',
    //     // lightColor: '#ffffff',
    //     lightColor: '#a600ff',
    //     lightColor2: '#ffffff'
    // });

    return (
        <Canvas
            // frameloop="demand"
            camera={{ position: [0, 2, 6], fov: 50 }}
            style={{ position: "absolute", inset: 0 }}
            dpr={[1, 1.5]} // Support high-res screens
        >

            <CameraRig scrollYProgress={scrollYProgress} />

            <fog attach="fog" args={["black", 0, 15]} />
            {/* Replaces the point lights for that high-performance look */}
            <spotLight
                position={[0, -3, 6]}
                intensity={25}
                color='#a600ff'
                // angle={0.5}
                angle={Math.PI / 4}
                penumbra={1}
                decay={2}
            />


            {/* The high-performance grid */}
            <InstancedGrid color='#ffffff' />

        </Canvas>
    );
}
