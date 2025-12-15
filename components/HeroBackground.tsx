"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AbstractMesh() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(( state, delta ) => {
    if (!mesh.current) return;

    // smooth subtle parallax
    // mesh.current.rotation.y += (pointer.x * 0.6 - mesh.current.rotation.y) * 0.05;
    // mesh.current.rotation.x += (pointer.y * 0.6 - mesh.current.rotation.x) * 0.05;
    // mesh.current.rotation.x += 0.01;
    // mesh.current.rotation.y += 0.01;
    
  });
  return (
    <mesh ref={mesh} rotation={[0.4, 0.6, 0]}>
      <sphereGeometry args={[1.7, 10, 10]}  />
      {/* <meshStandardMaterial
        color="#6366f1"
        roughness={0.25}
        metalness={0.85}
        wireframe
      /> */}
      <MeshWobbleMaterial attach="material" factor={10} speed={2.0} wireframe />
    </mesh>
  );
}

export default function HeroBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{
        position: "absolute",
      //   inset: 0,
        // zIndex: -1,
      }}
      // dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 6, 6]} intensity={1.2} />
      {/* <pointLight position={[-6, -6, -6]} intensity={0.6} /> */}
      <AbstractMesh />
      <OrbitControls/>
    </Canvas>
  );
}
