"use client";

import { useRef, useState, useCallback, ReactNode } from "react";
import { motion, useSpring } from "framer-motion";

interface MouseParallaxProps {
  children: ReactNode;
  className?: string;
  maxRotate?: number;
}

export default function MouseParallax({
  children,
  className = "",
  maxRotate = 4,
}: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const springX = useSpring(0, { stiffness: 200, damping: 25 });
  const springY = useSpring(0, { stiffness: 200, damping: 25 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      springX.set(deltaY * maxRotate);
      springY.set(deltaX * maxRotate);
    },
    [maxRotate, springX, springY]
  );

  const handleMouseLeave = useCallback(() => {
    springX.set(0);
    springY.set(0);
  }, [springX, springY]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformPerspective: 800,
        rotateX: springX,
        rotateY: springY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
