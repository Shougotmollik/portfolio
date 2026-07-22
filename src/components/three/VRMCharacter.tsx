"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  VRMLoaderPlugin,
  VRMUtils,
  VRMHumanBoneName,
} from "@pixiv/three-vrm";
import * as THREE from "three";

function VRMModel() {
  const groupRef = useRef<THREE.Group>(null);
  const vrmRef = useRef<any>(null);
  const headRef = useRef<THREE.Bone | null>(null);
  const rightUpperArmRef = useRef<THREE.Bone | null>(null);
  const rightLowerArmRef = useRef<THREE.Bone | null>(null);
  const rightHandRef = useRef<THREE.Bone | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { pointer, clock, scene, camera } = useThree();

  const greetingRef = useRef(false);
  const greetingTimeRef = useRef(0);
  const blinkTimerRef = useRef(0);
  const cooldownRef = useRef(0);
  const waveTimeRef = useRef(0);
  const smileTargetRef = useRef(0);
  const smileCurrentRef = useRef(0);
  const isWavingRef = useRef(false);
  const headTiltRef = useRef(new THREE.Quaternion());
  const initialHeadRotRef = useRef(new THREE.Quaternion());

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));
    loader.loadAsync("/models/character.vrm").then((gltf) => {
      const vrm = gltf.userData.vrm;
      if (!vrm) return;

      VRMUtils.rotateVRM0(vrm);

      // Log bounding box to verify model height
      const box = new THREE.Box3().setFromObject(vrm.scene);
      console.log("VRM bounding box:", { min: box.min.y, max: box.max.y, size: box.max.y - box.min.y });

      vrm.scene.scale.set(1.2, 1.2, 1.2);
      vrm.scene.position.set(0.6, 0, 0);

      if (groupRef.current) {
        groupRef.current.add(vrm.scene);
      }
      vrmRef.current = vrm;

      camera.lookAt(0.6, 0.9, 0);

      headRef.current = vrm.humanoid?.getNormalizedBoneNode?.(
        VRMHumanBoneName.Head,
      );
      if (headRef.current) {
        initialHeadRotRef.current.copy(headRef.current.quaternion);
      }

      rightUpperArmRef.current = vrm.humanoid?.getNormalizedBoneNode?.(
        VRMHumanBoneName.RightUpperArm,
      );
      rightLowerArmRef.current = vrm.humanoid?.getNormalizedBoneNode?.(
        VRMHumanBoneName.RightLowerArm,
      );
      rightHandRef.current = vrm.humanoid?.getNormalizedBoneNode?.(
        VRMHumanBoneName.RightHand,
      );

      // Log expression names for debugging
      if (vrm.expressionManager) {
        console.log(
          "VRM expressions:",
          Object.keys(vrm.expressionManager.expressionMap),
        );
      }

      // Start greeting on mount
      greetingRef.current = true;
      greetingTimeRef.current = 0;
      isWavingRef.current = true;
      waveTimeRef.current = 0;
      smileTargetRef.current = 0.8;
      setLoaded(true);
    });

    return () => {
      if (vrmRef.current) {
        if (groupRef.current) {
          groupRef.current.remove(vrmRef.current.scene);
        }
        vrmRef.current.dispose();
      }
    };
  }, []);

  // Trigger wave on hover (with cooldown)
  useEffect(() => {
    if (!loaded) return;
    if (hovered && cooldownRef.current <= 0) {
      isWavingRef.current = true;
      waveTimeRef.current = 0;
      smileTargetRef.current = 0.8;
      cooldownRef.current = 4;
    }
  }, [hovered, loaded]);

  useFrame((_, delta) => {
    const vrm = vrmRef.current;
    if (!vrm) return;

    const t = clock.elapsedTime;

    // --- Idle body sway ---
    vrm.scene.position.y = Math.sin(t * 0.5) * 0.015;

    // --- Blink loop ---
    blinkTimerRef.current += delta;
    if (blinkTimerRef.current > 3 + Math.random() * 2) {
      blinkTimerRef.current = -0.1;
    }
    const blinkPhase = blinkTimerRef.current;
    let blinkValue = 0;
    if (blinkPhase >= -0.1 && blinkPhase < 0) {
      blinkValue = (blinkPhase + 0.1) / 0.1;
    } else if (blinkPhase >= 0 && blinkPhase < 0.05) {
      blinkValue = 1;
    } else if (blinkPhase >= 0.05 && blinkPhase < 0.15) {
      blinkValue = 1 - (blinkPhase - 0.05) / 0.1;
    }

    // --- Greeting sequence ---
    if (greetingRef.current) {
      greetingTimeRef.current += delta;
      if (greetingTimeRef.current > 4) {
        greetingRef.current = false;
        isWavingRef.current = false;
        smileTargetRef.current = 0.25;
      }
    }

    // --- Cooldown ---
    if (cooldownRef.current > 0) {
      cooldownRef.current -= delta;
    }

    // --- Wave animation ---
    if (isWavingRef.current && rightUpperArmRef.current) {
      waveTimeRef.current += delta;
      const waveDuration = 2.5;
      if (waveTimeRef.current > waveDuration) {
        isWavingRef.current = false;
      } else {
        const progress = waveTimeRef.current / waveDuration;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const armRaise = Math.sin(easeOut * Math.PI) * 0.6;
        rightUpperArmRef.current.rotation.z = -armRaise;
        rightUpperArmRef.current.rotation.x =
          Math.sin(t * 5) * 0.25 * (1 - progress);
        if (rightLowerArmRef.current) {
          rightLowerArmRef.current.rotation.x = -armRaise * 0.3;
        }
        if (rightHandRef.current) {
          rightHandRef.current.rotation.z = Math.sin(t * 5) * 0.3 * (1 - progress);
        }
      }
    } else if (!isWavingRef.current && rightUpperArmRef.current) {
      rightUpperArmRef.current.rotation.z *= 0.92;
      rightUpperArmRef.current.rotation.x *= 0.92;
      if (rightLowerArmRef.current) {
        rightLowerArmRef.current.rotation.x *= 0.92;
      }
      if (rightHandRef.current) {
        rightHandRef.current.rotation.z *= 0.92;
      }
    }

    // --- Smile ---
    smileCurrentRef.current +=
      (smileTargetRef.current - smileCurrentRef.current) * 0.03;
    if (vrm.expressionManager) {
      const expMap = vrm.expressionManager.expressionMap;
      if (expMap.happy) {
        vrm.expressionManager.setValue("happy", smileCurrentRef.current);
      }
      // Apply blink
      if (expMap.blink && blinkValue > 0) {
        vrm.expressionManager.setValue("blink", blinkValue);
      }
    }

    // --- Head tracking (after greeting) ---
    if (!greetingRef.current && headRef.current) {
      const targetQ = new THREE.Quaternion();
      const euler = new THREE.Euler(0, 0, 0, "YXZ");
      const yaw = THREE.MathUtils.clamp(pointer.x * 0.3, -0.25, 0.25);
      const pitch = THREE.MathUtils.clamp(-pointer.y * 0.2, -0.15, 0.15);
      euler.set(pitch, yaw, 0);
      targetQ.setFromEuler(euler);
      targetQ.multiply(initialHeadRotRef.current);
      headRef.current.quaternion.slerp(targetQ, 0.06);
    }

    vrm.update(delta);
  });

  return (
    <group ref={groupRef}>
      {loaded && (
        <mesh
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          visible={false}
        >
          <sphereGeometry args={[0.8, 8, 8]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      )}
    </group>
  );
}

export default function VRMCharacter() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[2, 2, 3]}
        intensity={2}
        color="#FFE0C0"
      />
      <directionalLight
        position={[-1.5, 1, 2]}
        intensity={0.8}
        color="#E8834D"
      />
      <hemisphereLight
        args={["#FFE0C0", "#120D0A", 0.5]}
      />
      <VRMModel />
    </>
  );
}
