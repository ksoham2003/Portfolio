'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function ParallaxImage({ 
  children, 
  className = '',
  speed = 2
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;

      const scrollAmount = windowHeight - elementTop;
      const parallaxOffset = -(scrollAmount * speed * 0.02);
      
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`parallax-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        ref={innerRef}
        style={{
          transform: `translateY(${offset}px) scale(1.20)`,
          transition: 'transform 0.05s linear',
          width: '100%',
          height: '100%',
          position: 'relative',
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  );
}
