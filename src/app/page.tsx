'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Clock from "@/components/Clock";
import SpotlightCard from "@/components/SpotlightCard";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectDrawer, { ProjectData } from "@/components/ProjectDrawer";
import ScrambleLink from "@/components/ScrambleLink";

const PROJECTS: ProjectData[] = [
  {
    id: "apex-analytics",
    title: "Apex Analytics Engine",
    description: "A high-performance real-time data ingestion and visualization platform built to monitor enterprise cloud operations.",
    role: "Lead Frontend Engineer",
    timeline: "Jan 2025 - Apr 2025 (4 Months)",
    tags: ["Next.js", "TypeScript", "Node.js", "D3.js"],
    image: "/project_dashboard.png",
    slides: ["/project_dashboard.png", "/project_mobile.png", "/developer_portrait.png"],
    metrics: { performance: 99, accessibility: 98, bestPractices: 100, seo: 100 },
    features: [
      "Custom WebRTC telemetry streamer parsing 50,000 events per second.",
      "Highly interactive canvas-based dashboards rendering hierarchical relationships.",
      "Optimized windowing layout utilizing React Virtual for displaying infinite tabular logs.",
      "Automated Lighthouse CI pipelines achieving perfect SEO and Best Practice indexes."
    ],
    architecture: "Server-side rendering (SSR) via Next.js 15, event streaming through WebSocket channels to a Node.js daemon, caching layout templates inside Redis cluster, structured PostgreSQL database with TimescaleDB for time-series analytics.",
    demoUrl: "https://apex-engine.example.com",
    codeUrl: "https://github.com/sohamdev/apex-analytics"
  },
  {
    id: "nova-wallet",
    title: "Nova Wallet UI",
    description: "An ultra-secure, micro-animation intensive crypto asset wallet UI supporting multiple blockchain nodes.",
    role: "Full Stack & Mobile Developer",
    timeline: "Sep 2024 - Dec 2024 (3 Months)",
    tags: ["React Native", "Expo", "CSS Modules"],
    image: "/project_mobile.png",
    slides: ["/project_mobile.png", "/project_dashboard.png", "/developer_portrait.png"],
    metrics: { performance: 98, accessibility: 100, bestPractices: 96, seo: 95 },
    features: [
      "Secure biometric authentication using LocalAuthentication modules.",
      "Dynamic real-time exchange pricing graphs leveraging SVG path interpolation.",
      "Sub-100ms cold start rendering through asset caching and tree-shaking native modules.",
      "Fully accessible WCAG AAA compliance supporting voiceover and high-contrast styling."
    ],
    architecture: "React Native frontend built over Expo SDK, leveraging custom native modules for crypto hash signing, communicating with decentralized JSON-RPC nodes, local state management using Zustand, offline-first storage via watermelondb.",
    demoUrl: "https://nova-wallet.example.com",
    codeUrl: "https://github.com/sohamdev/nova-wallet"
  }
];

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSkill = (skill: string) => {
    if (selectedSkill === skill) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  const openProject = (proj: ProjectData) => {
    setSelectedProject(proj);
    setIsDrawerOpen(true);
  };

  const projectUsesSkill = (proj: ProjectData, skill: string) => {
    const formattedSkill = skill.toLowerCase();
    
    // Check tags
    if (proj.tags.some(tag => tag.toLowerCase().includes(formattedSkill))) return true;
    
    // Fallback: React matches React Native
    if (formattedSkill === 'react' && proj.tags.some(tag => tag.toLowerCase().includes('react native'))) return true;
    
    // Check other descriptive fields
    if (proj.description.toLowerCase().includes(formattedSkill)) return true;
    if (proj.architecture.toLowerCase().includes(formattedSkill)) return true;
    if (proj.features.some(f => f.toLowerCase().includes(formattedSkill))) return true;

    return false;
  };

  return (
    <div>
      {/* HEADER NAVBAR */}
      <header className="header">
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
          <a href="#contact" className="contact-btn" data-cursor-label="HIRE">
            Contact Now
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <ScrollReveal animation="fade">
            <h1 className="hero-main-title">
              SOHAM<span className="accent-color terminal-blink">_</span>
            </h1>
          </ScrollReveal>

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
            <Image
              src="/developer_portrait.png"
              alt="Soham - Full Stack Developer"
              fill
              className="featured-media-image"
              priority
            />
          </ScrollReveal>
        </section>

        {/* SECTION 01: APPROACH */}
        <section id="approach" className="section-wrapper">
          <ScrollReveal animation="fade">
            <div className="section-meta">
              <span>01</span>
              <span className="section-label">//APPROACH</span>
              <span>THREE PHASES</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="up">
            <h2 className="section-title">
              I BUILD SLEEK <span className="accent-color">HIGH-PERFORMANCE</span> WEB EXPERIENCES.
            </h2>
          </ScrollReveal>

          <div className="grid-3">
            <ScrollReveal animation="up" delay={1} style={{ height: "100%" }}>
              <SpotlightCard className="phase-card" data-cursor-label="PHASE 1">
                <div>
                  <div className="phase-number">01 / DISCOVER</div>
                  <h3 className="phase-title">Discover &amp; Design</h3>
                  <p className="phase-desc">
                    Analyzing core project goals, mapping complex application states, and modeling robust database architectures for scale and performance.
                  </p>
                </div>
              </SpotlightCard>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={2} style={{ height: "100%" }}>
              <SpotlightCard className="phase-card" data-cursor-label="PHASE 2">
                <div>
                  <div className="phase-number">02 / BUILD</div>
                  <h3 className="phase-title">Design &amp; Implement</h3>
                  <p className="phase-desc">
                    Developing clean, accessible user interfaces with Next.js, and deploying high-throughput, secure API endpoints and server logic.
                  </p>
                </div>
              </SpotlightCard>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={3} style={{ height: "100%" }}>
              <SpotlightCard className="phase-card" data-cursor-label="PHASE 3">
                <div>
                  <div className="phase-number">03 / DEPLOY</div>
                  <h3 className="phase-title">Deliver &amp; Optimize</h3>
                  <p className="phase-desc">
                    Deploying production-ready modules with automated pipelines, optimizing Core Web Vitals, and continuously monitoring reliability.
                  </p>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 02: PORTFOLIO */}
        <section id="portfolio" className="section-wrapper">
          <ScrollReveal animation="fade">
            <div className="section-meta">
              <span>02</span>
              <span className="section-label">//PORTFOLIO</span>
              <span>2024 - 2026</span>
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ alignItems: "flex-end", marginBottom: "40px" }}>
            <ScrollReveal animation="up">
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                LATEST <span className="accent-color">PORTFOLIO</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="up" delay={1}>
              <p style={{ maxWidth: "420px", fontSize: "15px", lineHeight: "1.6" }}>
                My creative spirit comes alive in the digital realm. I combine design precision with technical engineering to craft premium web applications.
              </p>
            </ScrollReveal>
          </div>

          {selectedSkill && (
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--foreground-muted)' }}>Filtering by:</span>
              <span 
                className="skill-pill active" 
                onClick={() => setSelectedSkill(null)}
                style={{ fontSize: '11px', padding: '4px 12px' }}
                data-cursor-label="CLEAR"
              >
                {selectedSkill} &times;
              </span>
            </div>
          )}

          <div className={`portfolio-grid ${selectedSkill ? 'filtering' : ''}`}>
            {PROJECTS.map((proj, idx) => {
              const isHighlighted = selectedSkill ? projectUsesSkill(proj, selectedSkill) : false;
              return (
                <ScrollReveal 
                  key={proj.id}
                  animation="up"
                  delay={idx + 1}
                  style={{ height: '100%' }}
                >
                  <SpotlightCard 
                    className={`project-card ${isHighlighted ? 'highlighted' : ''}`}
                    onClick={() => openProject(proj)}
                    data-cursor-label="OPEN"
                  >
                    <div className="project-img-wrapper">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="project-img"
                      />
                    </div>
                    <div className="project-info">
                      <div className="project-name-wrapper">
                        <h3 className="project-name">{proj.title}</h3>
                        <div className="project-tags">
                          {proj.tags.map((tag) => (
                            <span key={tag} className="project-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="project-link-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"/>
                          <polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </div>
                    </div>
                  </SpotlightCard>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* SECTION 03: ABOUT */}
        <section id="about" className="section-wrapper">
          <ScrollReveal animation="fade">
            <div className="section-meta">
              <span>03</span>
              <span className="section-label">//WHO AM I</span>
              <span>SINCE 2018</span>
            </div>
          </ScrollReveal>

          <div className="about-grid">
            <ScrollReveal animation="up">
              <div>
                <h2 className="about-intro-title">
                  MORE ABOUT SOHAM<span className="accent-color">©</span>
                </h2>
                <p className="about-intro-text">
                  I am a passionate software engineer specializing in building high-fidelity web interfaces and robust, scalable backend infrastructures.
                  <br /><br />
                  Over the past several years, I have worked with modern web standards, focusing on rendering performance, state optimization, and clean architectural design patterns to deliver user experiences that feel fluid, responsive, and alive.
                </p>
              </div>
            </ScrollReveal>

            <div>
              {/* Core Technologies */}
              <ScrollReveal animation="up" delay={1} className="skills-wrapper">
                <h3 className="skills-title">Core Languages &amp; Frameworks <span style={{ fontSize: '10px', color: 'var(--foreground-muted)' }}>(Click to filter projects)</span></h3>
                <div className="skills-grid">
                  {["React", "Next.js", "TypeScript", "Node.js", "Express", "Python"].map((sk) => (
                    <span 
                      key={sk}
                      className={`skill-pill ${selectedSkill === sk ? 'active' : ''}`}
                      // onClick={() => toggleSkill(sk)}
                      data-cursor-label={selectedSkill === sk ? 'RESET' : 'FILTER'}
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              {/* Data & Infrastructure */}
              <ScrollReveal animation="up" delay={2} className="skills-wrapper">
                <h3 className="skills-title">Database &amp; Infrastructure <span style={{ fontSize: '10px', color: 'var(--foreground-muted)' }}>(Click to filter projects)</span></h3>
                <div className="skills-grid">
                  {["PostgreSQL", "MongoDB", "Redis", "GraphQL", "Docker", "Git / GitHub"].map((sk) => (
                    <span 
                      key={sk}
                      className={`skill-pill ${selectedSkill === sk ? 'active' : ''}`}
                      // onClick={() => toggleSkill(sk)}
                      data-cursor-label={selectedSkill === sk ? 'RESET' : 'FILTER'}
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <ScrollReveal animation="fade">
          <h2 className="footer-logo">SOHAM<span className="accent-color">.</span></h2>
        </ScrollReveal>
        <ScrollReveal animation="up" delay={1}>
          <p className="footer-contact-desc">
            Have an interesting project or position in mind? Let's build something exceptional together.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="up" delay={2} className="footer-btn-wrapper">
          <a href="mailto:soham@example.com" className="contact-btn" style={{ padding: "14px 36px" }} data-cursor-label="EMAIL">
            Get In Touch
          </a>
        </ScrollReveal>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} SOHAM. ALL RIGHTS RESERVED.</span>
          <span>DESIGN INSPIRED BY PORTFOLIO-THEME</span>
        </div>
      </footer>

      {/* Project Details Modal Drawer */}
      <ProjectDrawer 
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

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

            <a href="#contact" className="contact-btn" onClick={() => setMenuOpen(false)} data-cursor-label="HIRE">
              Contact Now
            </a>
          </div>

          <div className="menu-content">
            <nav className="menu-nav">
              <ScrambleLink href="#top" className="active-item" onClick={() => setMenuOpen(false)} text="HOME" />
              <ScrambleLink href="#approach" onClick={() => setMenuOpen(false)} text="APPROACH" />
              <ScrambleLink href="#portfolio" onClick={() => setMenuOpen(false)} text="WORK" />
              <ScrambleLink href="#about" onClick={() => setMenuOpen(false)} text="ABOUT" />
              <ScrambleLink href="#contact" onClick={() => setMenuOpen(false)} text="CONTACT" />
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
    </div>
  );
}
