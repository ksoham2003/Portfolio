'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#________';

interface ScrambleLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function ScrambleLink({ href, text, onClick, className = '' }: ScrambleLinkProps) {
  const [displayText, setDisplayText] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let iteration = 0;

    intervalRef.current = setInterval(() => {
      setDisplayText(text
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('')
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 70);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  // External / hash links use a plain anchor; internal page routes use Next.js Link
  const isExternal = href.startsWith('http') || href.startsWith('#');

  if (isExternal) {
    return (
      <a
        href={href}
        className={`menu-link ${className}`}
        onClick={onClick}
      >
        {displayText || text}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`menu-link ${className}`}
      onClick={onClick}
    >
      {displayText || text}
    </Link>
  );
}
