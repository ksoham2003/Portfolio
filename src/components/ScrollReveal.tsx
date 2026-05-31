'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'up' | 'down' | 'fade';
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  toggleActions?: string;
}

export default function ScrollReveal({
  children,
  animation = 'up',
  delay = 0,
  className = '',
  style = {},
  toggleActions = 'play reverse play reverse',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let fromVars: gsap.TweenVars = { opacity: 0 };
    if (animation === 'up') fromVars.y = 50;
    else if (animation === 'down') fromVars.y = -50;
    else if (animation === 'fade') fromVars.scale = 0.97;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        fromVars,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          delay: delay * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: toggleActions,
          },
        }
      );
    }, ref);

    return () => ctx.revert(); // clean up GSAP context
  }, [animation, delay, toggleActions]);

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
