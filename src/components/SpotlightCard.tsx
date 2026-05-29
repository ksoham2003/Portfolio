'use client';

import React, { useRef } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export default function SpotlightCard({ children, className = '', onClick, ...props }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`spotlight-card ${className}`}
      {...props}
    >
      <div className="spotlight-card-content">{children}</div>
    </div>
  );
}
