'use client';

import Image from "next/image";
import LineSplitReveal from "./LineSplitReveal";
import ScrollReveal from "./ScrollReveal";
import ParallaxImage from "./ParallaxImage";

export default function Hero() {
  return (
    <section className="hero">
      <LineSplitReveal as="h1" className="hero-main-title" yPercent={120} stagger={0.12} duration={1.2} start="top 95%">
        SOHAM
      </LineSplitReveal>

      <div className="hero-info-grid">
        {/* Location */}
        <ScrollReveal animation="up" delay={1} className="info-col">
          <div className="info-icon-wrapper green">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <span className="info-label">Based in</span>
          <span className="info-subtext">Maharashtra, India</span>
        </ScrollReveal>

        {/* Availability */}
        <ScrollReveal animation="up" delay={2} className="info-col">
          <div className="info-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <span className="info-label">Availability</span>
          <span className="info-subtext">Worldwide / Remote</span>
        </ScrollReveal>

        {/* Role */}
        <ScrollReveal animation="up" delay={3} className="info-col">
          <div className="info-icon-wrapper blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 11 2 2 4-4"/>
            </svg>
          </div>
          <span className="info-label">Full Stack Developer</span>
          <span className="info-subtext">+ Frontend Engineer</span>
        </ScrollReveal>
      </div>

      {/* Large Hero Portrait Image */}
      <ScrollReveal animation="fade" delay={4} className="featured-media-container" data-cursor-label="HI SOHAM">
        <ParallaxImage speed={2.5}>
          <Image
            src="/developer_portrait.png"
            alt="Soham - Full Stack Developer"
            fill
            className="featured-media-image"
            priority
          />
        </ParallaxImage>
      </ScrollReveal>
    </section>
  );
}
