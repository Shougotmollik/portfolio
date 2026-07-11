"use client";

import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  z: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  floatSpeed: number;
  floatOffset: number;
  type: "hexagon" | "triangle" | "circle";
  opacity: number;
}

const TYPES: Shape["type"][] = ["hexagon", "triangle", "circle"];

export default function FloatingShapes3D({ count = 8 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (isTouch || mq.matches) return;

    const container = containerRef.current;
    if (!container) return;

    const shapes: Shape[] = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 60 + 20,
      size: 12 + Math.random() * 20,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.3,
      floatSpeed: 0.2 + Math.random() * 0.4,
      floatOffset: Math.random() * Math.PI * 2,
      type: TYPES[Math.floor(Math.random() * TYPES.length)],
      opacity: 0.03 + Math.random() * 0.05,
    }));

    const elements: HTMLDivElement[] = [];
    let startTime = performance.now();

    for (const shape of shapes) {
      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.pointerEvents = "none";
      el.style.willChange = "transform";
      el.style.left = `${shape.x}%`;
      el.style.top = `${shape.y}%`;
      el.style.width = `${shape.size}px`;
      el.style.height = `${shape.size}px`;
      el.style.opacity = `${shape.opacity}`;

      if (shape.type === "hexagon") {
        el.style.clipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
        el.style.background = "rgba(91, 127, 222, 0.15)";
        el.style.border = "1px solid rgba(91, 127, 222, 0.1)";
      } else if (shape.type === "triangle") {
        el.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
        el.style.background = "rgba(201, 139, 94, 0.12)";
        el.style.border = "1px solid rgba(201, 139, 94, 0.08)";
      } else {
        el.style.borderRadius = "50%";
        el.style.background = "rgba(128, 90, 213, 0.08)";
        el.style.border = "1px solid rgba(128, 90, 213, 0.06)";
      }

      container.appendChild(el);
      elements.push(el);
    }

    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;

      for (let i = 0; i < shapes.length; i++) {
        const s = shapes[i];
        const el = elements[i];
        const floatY = Math.sin(elapsed * s.floatSpeed + s.floatOffset) * 15;
        const floatX = Math.cos(elapsed * s.floatSpeed * 0.7 + s.floatOffset) * 8;
        const rot = s.rotation + elapsed * s.rotationSpeed;

        const scale = 1 + (s.z - 20) / 80 * 0.5;
        el.style.transform = `translate3d(${floatX}px, ${floatY}px, 0) rotate(${rot}deg) scale(${scale})`;
      }

      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      elements.forEach((el) => el.remove());
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0, perspective: "800px" }}
    />
  );
}
