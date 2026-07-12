"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  ContactShadows,
  Text,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

function OrbitShape({
  radius = 1.8,
  speed = 0.5,
  phase = 0,
  size = 0.12,
  color = "#D9491F",
  shape = "box",
}: {
  radius?: number;
  speed?: number;
  phase?: number;
  size?: number;
  color?: string;
  shape?: "box" | "icosahedron" | "octahedron";
}) {
  const ref = useRef<THREE.Mesh>(null);
  const angle = useRef(phase);

  useFrame((_, delta) => {
    angle.current += delta * speed;
    const a = angle.current;
    if (ref.current) {
      ref.current.position.set(
        Math.cos(a) * radius,
        Math.sin(a * 0.7 + phase) * radius * 0.25,
        Math.sin(a) * radius,
      );
      ref.current.rotation.x += delta * 0.5;
      ref.current.rotation.y += delta * 0.8;
    }
  });

  const geo =
    shape === "icosahedron" ? (
      <icosahedronGeometry args={[size, 0]} />
    ) : shape === "octahedron" ? (
      <octahedronGeometry args={[size, 0]} />
    ) : (
      <boxGeometry args={[size, size, size]} />
    );

  return (
    <mesh ref={ref}>
      {geo}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

function CodeBracket({
  radius = 2.2,
  speed = -0.4,
  phase = 2,
}: {
  radius?: number;
  speed?: number;
  phase?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const angle = useRef(phase);
  const textRef = useRef<any>(null);

  useFrame((_, delta) => {
    angle.current += delta * speed;
    const a = angle.current;
    if (ref.current) {
      ref.current.position.set(
        Math.cos(a) * radius,
        Math.sin(a * 0.6 + phase) * radius * 0.3,
        Math.sin(a) * radius,
      );
      ref.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={ref}>
      <Text
        ref={textRef}
        fontSize={0.22}
        color="#E8834D"
        anchorX="center"
        anchorY="middle"
      >
        {"</>"}
      </Text>
    </group>
  );
}

function TerminalShape({
  radius = 1.6,
  speed = 0.6,
  phase = 4,
}: {
  radius?: number;
  speed?: number;
  phase?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const angle = useRef(phase);
  const yOff = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    angle.current += delta * speed;
    const a = angle.current;
    if (ref.current) {
      ref.current.position.set(
        Math.cos(a) * radius,
        Math.sin(a * 0.5 + phase + yOff.current) * radius * 0.2,
        Math.sin(a) * radius,
      );
      ref.current.rotation.x += delta * 0.3;
    }
  });

  const lineLengths = [0.18, 0.12, 0.15];

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[0.32, 0.22, 0.02]} />
        <meshStandardMaterial color="#1a1a2e" emissive="#1a1a2e" emissiveIntensity={0.1} />
      </mesh>
      <mesh position={[0, 0.09, 0.015]}>
        <boxGeometry args={[0.28, 0.04, 0.001]} />
        <meshStandardMaterial color="#2d2d4e" />
      </mesh>
      {[-0.12, 0, 0.12].map((x, i) => (
        <mesh key={`dot-${i}`} position={[x, 0.09, 0.025]}>
          <sphereGeometry args={[0.014, 6, 6]} />
          <meshStandardMaterial
            color={i === 0 ? "#ff5f56" : i === 1 ? "#ffbd2e" : "#27c93f"}
          />
        </mesh>
      ))}
      {lineLengths.map((len, i) => (
        <mesh
          key={`line-${i}`}
          position={[-0.1, 0.04 - i * 0.06, 0.015]}
        >
          <boxGeometry args={[len, 0.012, 0.001]} />
          <meshStandardMaterial color="#4aec7c" opacity={0.8} transparent />
        </mesh>
      ))}
      <mesh position={[0.1, -0.02, 0.015]}>
        <boxGeometry args={[0.008, 0.022, 0.001]} />
        <meshStandardMaterial
          color="#4aec7c"
          opacity={0.6}
          transparent
        />
      </mesh>
    </group>
  );
}

function CharacterCore() {
  return (
    <group>
      <mesh castShadow>
        <sphereGeometry args={[1, 48, 48]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.5}
          thickness={0.8}
          chromaticAberration={0.06}
          distortion={0.08}
          color="#D9491F"
          roughness={0.15}
          metalness={0.05}
          ior={1.5}
          transmission={1}
          opacity={0.9}
          transparent
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          color="#D9491F"
          emissive="#D9491F"
          emissiveIntensity={0.2}
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}

function Eyes() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;
    const targetX = THREE.MathUtils.clamp(pointer.x * 0.4, -0.3, 0.3);
    const targetY = THREE.MathUtils.clamp(pointer.y * 0.3, -0.2, 0.2);
    groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.08;
    groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, 0.15, 0.95]}>
      <mesh position={[-0.28, 0, 0]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={2}
        />
      </mesh>
      <mesh position={[0.28, 0, 0]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={2}
        />
      </mesh>
      <mesh position={[-0.28, 0, 0.06]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial
          color="#D9491F"
          emissive="#D9491F"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0.28, 0, 0.06]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial
          color="#D9491F"
          emissive="#D9491F"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

function Character({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer, clock } = useThree();
  const tilt = useRef({ x: 0, z: 0 });

  useFrame(() => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.06;
    groupRef.current.rotation.y += 0.006;

    const tiltX = THREE.MathUtils.clamp(pointer.y * 0.15, -0.08, 0.08);
    const tiltZ = THREE.MathUtils.clamp(-pointer.x * 0.15, -0.08, 0.08);
    tilt.current.x += (tiltX - tilt.current.x) * 0.04;
    tilt.current.z += (tiltZ - tilt.current.z) * 0.04;
    groupRef.current.rotation.x = tilt.current.x;
    groupRef.current.rotation.z = tilt.current.z;
  });

  return (
    <group ref={groupRef}>
      <CharacterCore />
      <Eyes />
      {!isMobile && (
        <>
          <OrbitShape
            radius={1.6}
            speed={0.4}
            phase={0}
            size={0.14}
            color="#D9491F"
            shape="icosahedron"
          />
          <OrbitShape
            radius={2.0}
            speed={-0.3}
            phase={1.5}
            size={0.1}
            color="#E8834D"
            shape="box"
          />
          <OrbitShape
            radius={1.4}
            speed={0.6}
            phase={3}
            size={0.11}
            color="#FBF6F1"
            shape="octahedron"
          />
          <CodeBracket radius={2.2} speed={-0.35} phase={2} />
          <TerminalShape radius={1.8} speed={0.5} phase={4} />
        </>
      )}
    </group>
  );
}

function SceneContent({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 4]} intensity={2.5} color="#D9491F" />
      <pointLight position={[-3, 1, 2]} intensity={1.2} color="#E8834D" />
      <pointLight position={[0, -2, 3]} intensity={0.5} color="#D9491F" />
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.35}
        scale={5}
        blur={2.5}
        far={3}
        color="#120D0A"
      />
      <Character isMobile={isMobile} />
      <Sparkles
        count={isMobile ? 10 : 25}
        scale={4}
        size={0.4}
        speed={0.2}
        color="#D9491F"
        opacity={0.4}
      />
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-accent/20 animate-pulse" />
    </div>
  );
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!mounted) return <LoadingFallback />;

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4], fov: 45, near: 0.1, far: 10 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <SceneContent isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
}
