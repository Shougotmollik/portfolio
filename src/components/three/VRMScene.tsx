"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import VRMCharacter from "./VRMCharacter";

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-accent/20 animate-pulse" />
    </div>
  );
}

export default function VRMScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0.3, 1.3, 3.8], fov: 42, near: 0.1, far: 10 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <VRMCharacter />
      </Suspense>
    </Canvas>
  );
}
