"use client"
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 1. Create the Rig Component
function CameraRig() {
  useFrame((state, delta) => {
    // state.pointer.x: -1 (left) to 1 (right)
    // state.pointer.y: -1 (bottom) to 1 (top)

    // Calculate target position
    // We keep Z fixed (e.g., 5) and move X and Y slightly
    const targetX = state.pointer.x * 2; // Sensitivity factor
    const targetY = state.pointer.y * 2;

    // Smoothly interpolate current camera position to the target
    // 0.1 is the "smoothing" factor (lower is slower/smoother)
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, -targetX, 0.1);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -targetY, 0.1);

    // Optional: Always look at the center (0,0,0) or a specific object
    state.camera.lookAt(0, 0, 0);
  });

  return null; // This component renders nothing visually
}

// 2. Usage inside Canvas
export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ position: 'absolute' }}>
      <CameraRig />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}