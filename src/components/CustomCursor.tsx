'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  const requestRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);

    const animateTrail = () => {
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;

      const currentX = trailRef.current.x;
      const currentY = trailRef.current.y;

      const nextX = currentX + (targetX - currentX) * 0.15;
      const nextY = currentY + (targetY - currentY) * 0.15;

      trailRef.current = { x: nextX, y: nextY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animateTrail);
    };

    requestRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={dotRef}
      className="custom-cursor-dot"
      style={{
        transform: `translate3d(-100px, -100px, 0) translate(-50%, -50%)`,
      }}
    />
  );
}
