"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    return positions;
  }, []);

  useFrame(({ mouse }) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y +=
      (mouse.x * 0.2 - pointsRef.current.rotation.y) * 0.05;
    pointsRef.current.rotation.x +=
      (mouse.y * 0.2 - pointsRef.current.rotation.x) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="black"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function ParticleBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
      }}
      dpr={[1, 1.5]}
    >
      <Particles />
    </Canvas>
  );
}
