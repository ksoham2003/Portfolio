'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

interface LineSplitRevealProps {
  children: React.ReactNode;
  /** HTML tag to render, defaults to 'div' */
  as?: keyof React.JSX.IntrinsicElements;
  /** Additional class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Stagger delay between lines in seconds (default: 0.08) */
  stagger?: number;
  /** Animation duration in seconds (default: 1) */
  duration?: number;
  /** ScrollTrigger start position (default: 'top 90%') */
  start?: string;
  /** How far each line slides up from, as a percentage (default: 100) */
  yPercent?: number;
  /** Additional GSAP "from" vars to merge */
  fromVars?: gsap.TweenVars;
  /** ScrollTrigger toggleActions parameter (default: 'play reverse play reverse') */
  toggleActions?: string;
}

const DEFAULT_FROM_VARS = {};

export default function LineSplitReveal({
  children,
  as: Tag = 'div',
  className = '',
  style = {},
  stagger = 0.08,
  duration = 1,
  start = 'top 90%',
  yPercent = 100,
  fromVars = DEFAULT_FROM_VARS,
  toggleActions = 'play reverse play reverse',
}: LineSplitRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // SplitText.create with autoSplit handles resize + font loading.
    // onSplit fires on every (re-)split and must return the animation
    // so GSAP can automatically kill/recreate it.
    const split = SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit: (self) => {
        // Build the scroll-triggered reveal for each batch of lines
        return gsap.from(self.lines, {
          yPercent,
          opacity: 0,
          duration,
          stagger,
          ease: 'power4.out',
          ...fromVars,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: toggleActions,
          },
        });
      },
    });

    return () => {
      split.revert();
    };
  }, [stagger, duration, start, yPercent, fromVars, toggleActions]);

  // We need to render with the correct tag. Using React.createElement
  // because the generic Tag JSX approach doesn't play perfectly with refs.
  return React.createElement(
    Tag as string,
    {
      ref: wrapperRef,
      className: `line-split-reveal ${className}`.trim(),
      style,
    },
    children
  );
}
