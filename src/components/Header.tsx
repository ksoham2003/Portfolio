'use client';

import { useState, useEffect, useRef } from "react";
import Clock from "./Clock";
import ScrambleLink from "./ScrambleLink";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 80 && currentY > lastScrollY.current) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* HEADER NAVBAR */}
      <header className={`header${headerHidden ? ' header-hidden' : ''}`}>
        <Clock />
        
        <div 
          className="logo-matrix" 
          title="Soham Dev" 
          data-cursor-label="MENU"
          onClick={() => setMenuOpen(true)}
        >
          <div className="logo-dot"></div>
          <div className="logo-dot"></div>
          <div className="logo-dot"></div>
          <div className="logo-dot"></div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="/contact" className="contact-btn" data-cursor-label="HIRE">
            Contact Now
          </a>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-header">
            <Clock />
            
            <button 
              className="menu-close-btn" 
              onClick={() => setMenuOpen(false)}
              data-cursor-label="CLOSE"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <a href="/contact" className="contact-btn" onClick={() => setMenuOpen(false)} data-cursor-label="HIRE">
              Contact Now
            </a>
          </div>

          <div className="menu-content">
            <nav className="menu-nav">
              <ScrambleLink href="#top" className="active-item" onClick={() => setMenuOpen(false)} text="HOME" />
              <ScrambleLink href="#approach" onClick={() => setMenuOpen(false)} text="APPROACH" />
              <ScrambleLink href="#portfolio" onClick={() => setMenuOpen(false)} text="WORK" />
              <ScrambleLink href="#services" onClick={() => setMenuOpen(false)} text="SERVICES" />
              <ScrambleLink href="#about" onClick={() => setMenuOpen(false)} text="ABOUT" />
              <ScrambleLink href="/contact" onClick={() => setMenuOpen(false)} text="CONTACT" />
            </nav>
          </div>

          <div className="menu-footer">
            <span>&copy; {new Date().getFullYear()} SOHAM. ALL RIGHTS RESERVED.</span>
            <div className="menu-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-cursor-label="OPEN">INSTAGRAM ↗</a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" data-cursor-label="OPEN">DRIBBBLE ↗</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-cursor-label="OPEN">TWITTER ↗</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
