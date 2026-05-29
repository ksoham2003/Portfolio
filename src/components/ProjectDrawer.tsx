'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  role: string;
  timeline: string;
  tags: string[];
  image: string;
  slides: string[];
  metrics: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  features: string[];
  architecture: string;
  demoUrl: string;
  codeUrl: string;
}

interface ProjectDrawerProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animateMetrics, setAnimateMetrics] = useState(false);

  // SVG circle calculations
  const radius = 28;
  const circumference = 2 * Math.PI * radius; // ~175.93

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Trigger metric animation after a slight delay to let drawer slide in
      const timer = setTimeout(() => {
        setAnimateMetrics(true);
      }, 400);
      return () => {
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflow = '';
      setAnimateMetrics(false);
      setActiveSlide(0);
    }
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % project.slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + project.slides.length) % project.slides.length);
  };

  const getMetricColor = (val: number) => {
    if (val >= 90) return 'metric-green';
    return 'metric-blue';
  };

  return (
    <div className={`drawer-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div 
        className="drawer-panel" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="drawer-header">
          <h2 className="drawer-title">{project.title}</h2>
          <button 
            className="drawer-close-btn" 
            onClick={onClose}
            aria-label="Close details"
            data-cursor="pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="drawer-body">
          {/* Slideshow Carousel */}
          {project.slides && project.slides.length > 0 && (
            <div className="drawer-carousel">
              <Image
                src={project.slides[activeSlide]}
                alt={`${project.title} screenshot ${activeSlide + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              {project.slides.length > 1 && (
                <>
                  <button 
                    onClick={prevSlide}
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      color: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3
                    }}
                    data-cursor="pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6"/>
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide}
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      color: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3
                    }}
                    data-cursor="pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '16px',
                    background: 'rgba(0,0,0,0.6)',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    zIndex: 3
                  }}>
                    {activeSlide + 1} / {project.slides.length}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Description */}
          <p className="drawer-desc">{project.description}</p>

          {/* Core Web Vitals Panel */}
          <div className="metrics-section">
            <div className="metrics-title">// LIGHTHOUSE AUDIT METRICS</div>
            <div className="metrics-grid">
              {/* Performance */}
              <div className="metric-circle-wrapper">
                <div className="metric-svg-container">
                  <svg width="72" height="72">
                    <circle className="metric-circle-bg" cx="36" cy="36" r={radius}/>
                    <circle 
                      className={`metric-circle-fill ${getMetricColor(project.metrics.performance)}`}
                      cx="36" 
                      cy="36" 
                      r={radius}
                      strokeDasharray={circumference}
                      strokeDashoffset={animateMetrics ? circumference - (project.metrics.performance / 100) * circumference : circumference}
                    />
                  </svg>
                  <div className="metric-value">{project.metrics.performance}</div>
                </div>
                <div className="metric-label">PERFORMANCE</div>
              </div>

              {/* Accessibility */}
              <div className="metric-circle-wrapper">
                <div className="metric-svg-container">
                  <svg width="72" height="72">
                    <circle className="metric-circle-bg" cx="36" cy="36" r={radius}/>
                    <circle 
                      className={`metric-circle-fill ${getMetricColor(project.metrics.accessibility)}`}
                      cx="36" 
                      cy="36" 
                      r={radius}
                      strokeDasharray={circumference}
                      strokeDashoffset={animateMetrics ? circumference - (project.metrics.accessibility / 100) * circumference : circumference}
                    />
                  </svg>
                  <div className="metric-value">{project.metrics.accessibility}</div>
                </div>
                <div className="metric-label">ACCESSIBILITY</div>
              </div>

              {/* Best Practices */}
              <div className="metric-circle-wrapper">
                <div className="metric-svg-container">
                  <svg width="72" height="72">
                    <circle className="metric-circle-bg" cx="36" cy="36" r={radius}/>
                    <circle 
                      className={`metric-circle-fill ${getMetricColor(project.metrics.bestPractices)}`}
                      cx="36" 
                      cy="36" 
                      r={radius}
                      strokeDasharray={circumference}
                      strokeDashoffset={animateMetrics ? circumference - (project.metrics.bestPractices / 100) * circumference : circumference}
                    />
                  </svg>
                  <div className="metric-value">{project.metrics.bestPractices}</div>
                </div>
                <div className="metric-label">BEST PRACTICES</div>
              </div>

              {/* SEO */}
              <div className="metric-circle-wrapper">
                <div className="metric-svg-container">
                  <svg width="72" height="72">
                    <circle className="metric-circle-bg" cx="36" cy="36" r={radius}/>
                    <circle 
                      className={`metric-circle-fill ${getMetricColor(project.metrics.seo)}`}
                      cx="36" 
                      cy="36" 
                      r={radius}
                      strokeDasharray={circumference}
                      strokeDashoffset={animateMetrics ? circumference - (project.metrics.seo / 100) * circumference : circumference}
                    />
                  </svg>
                  <div className="metric-value">{project.metrics.seo}</div>
                </div>
                <div className="metric-label">SEO</div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--foreground)' }}>Key Features</h3>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.features.map((feat, i) => (
                <li key={i} style={{ fontSize: '14px', color: 'var(--foreground-muted)', lineHeight: '1.5' }}>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '10px', color: 'var(--foreground)' }}>System Architecture</h3>
            <p style={{ fontSize: '14px', color: 'var(--foreground-muted)', lineHeight: '1.6' }}>
              {project.architecture}
            </p>
          </div>

          {/* Meta Info */}
          <div className="drawer-meta-list">
            <div className="drawer-meta-item">
              <span className="drawer-meta-label">Role</span>
              <span className="drawer-meta-val">{project.role}</span>
            </div>
            <div className="drawer-meta-item">
              <span className="drawer-meta-label">Timeline</span>
              <span className="drawer-meta-val">{project.timeline}</span>
            </div>
            <div className="drawer-meta-item">
              <span className="drawer-meta-label">Technologies</span>
              <span className="drawer-meta-val" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: '300px' }}>
                {project.tags.map((t) => (
                  <span 
                    key={t} 
                    style={{ 
                      fontSize: '10px', 
                      background: 'rgba(255,255,255,0.05)', 
                      padding: '2px 8px', 
                      borderRadius: '8px', 
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 700 
                    }}
                  >
                    {t.toUpperCase()}
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '30px' }}>
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', padding: '12px 28px' }}
              data-cursor-label="GO"
            >
              Live Demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', padding: '12px 28px', border: '1px solid var(--border-color)', color: 'var(--foreground-muted)' }}
              data-cursor-label="CODE"
            >
              Source Code
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
