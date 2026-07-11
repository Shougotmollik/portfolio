"use client";

import { useEffect, useRef } from "react";

const TRAIL_COUNT = 6;

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -100, y: -100, px: -100, py: -100 });
  const trailRef = useRef<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
  );

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (isTouch || mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current.px = mouseRef.current.x;
      mouseRef.current.py = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouse);

    const trail = trailRef.current;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail[0] = { x: mouseRef.current.x, y: mouseRef.current.y };
      const speed = Math.hypot(
        mouseRef.current.x - mouseRef.current.px,
        mouseRef.current.y - mouseRef.current.py
      );
      const scale = Math.min(1.8, Math.max(0.6, 1 + speed * 0.02));

      for (let i = 0; i < TRAIL_COUNT; i++) {
        const target = i === 0 ? mouseRef.current : trail[i - 1];
        const lerp = 0.12 + (1 - i / TRAIL_COUNT) * 0.06;
        trail[i].x += (target.x - trail[i].x) * lerp;
        trail[i].y += (target.y - trail[i].y) * lerp;

        const t = 1 - i / TRAIL_COUNT;
        const radius = (1.5 + t * 3.5) * (i === 0 ? scale : 1);
        const alpha = 0.5 + t * 0.5;

        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, radius, 0, Math.PI * 2);

        if (i === 0) {
          const glow = ctx.createRadialGradient(
            trail[i].x, trail[i].y, 0,
            trail[i].x, trail[i].y, radius * 8
          );
          glow.addColorStop(0, `rgba(91, 127, 222, ${0.15 * alpha})`);
          glow.addColorStop(1, "rgba(91, 127, 222, 0)");
          ctx.fillStyle = glow;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(trail[i].x, trail[i].y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(91, 127, 222, ${0.7 * alpha})`;
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(91, 127, 222, ${0.25 * alpha})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ cursor: "none" }}
    />
  );
}
