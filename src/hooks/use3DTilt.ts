"use client";

import { useRef, useCallback, useEffect } from "react";

interface TiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
}

export function use3DTilt<T extends HTMLElement>({
  maxTilt = 6,
  perspective = 800,
  scale = 1.02,
  glare = true,
}: TiltOptions = {}) {
  const ref = useRef<T>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  }, [perspective, glare]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`;

      if (glare && glareRef.current) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glareRef.current.style.background = `
          radial-gradient(circle at ${glareX}% ${glareY}%, rgba(217,73,31,0.08) 0%, transparent 50%),
          radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.06) 0%, transparent 60%)
        `;
        glareRef.current.style.opacity = "1";
      }
    },
    [maxTilt, perspective, scale, glare]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    el.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
    el.style.transformStyle = "preserve-3d";
    el.style.willChange = "transform";

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [handleMouseMove, reset]);

  return { ref, glareRef };
}
