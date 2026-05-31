'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Clock from "@/components/Clock";
import SpotlightCard from "@/components/SpotlightCard";
import ScrollReveal from "@/components/ScrollReveal";
import LineSplitReveal from "@/components/LineSplitReveal";
import ProjectDrawer, { ProjectData } from "@/components/ProjectDrawer";
import ScrambleLink from "@/components/ScrambleLink";
import ParallaxImage from "@/components/ParallaxImage";
import SkillsMarquee from "@/components/SkillsMarquee";

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

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  dotsCount: number;
  description: string;
  deliverables: string[];
}

const SERVICES: ServiceData[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    subtitle: "RESPONSIVE UI, INTERACTION DESIGN",
    dotsCount: 1,
    description: "Crafting high-fidelity, responsive, and accessible user interfaces. Implementing fluid micro-animations, state optimizations, and modular frontend components using React, Next.js, and GSAP.",
    deliverables: ["Next.js Application Architecture", "Responsive Styling & Micro-interactions", "SEO & Core Web Vitals Optimization", "Accessible UI components (WCAG AAA)"]
  },
  {
    id: "backend-engineering",
    title: "Backend Engineering",
    subtitle: "SECURE APIS, DATABASE DESIGN",
    dotsCount: 2,
    description: "Designing robust and scalable server logic. Implementing RESTful and GraphQL APIs, database architecture, data validation pipelines, user authentication systems, and distributed caching structures.",
    deliverables: ["RESTful & GraphQL API Development", "PostgreSQL & MongoDB Database Design", "Token Authentication & Encryption", "Caching Layers & Query Optimization"]
  },
  {
    id: "full-stack-systems",
    title: "Full Stack Systems",
    subtitle: "END-TO-END DEPLOYMENT, SCALABILITY",
    dotsCount: 3,
    description: "Bridging the gap between server logic and client interfaces. Configuring automated CI/CD deployment pipelines, containerized environments, and high-performance real-time telemetry streaming.",
    deliverables: ["Docker & Containerization Setup", "CI/CD Pipeline Configurations", "Real-Time WebSocket Streams", "Monorepo & Microservices Layout"]
  }
];

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setActiveService(prev => (prev === serviceId ? null : serviceId));
  };


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
          <LineSplitReveal as="h1" className="hero-main-title" yPercent={120} stagger={0.12} duration={1.2} start="top 95%">
            SOHAM
            {/* SOHAM<span className="accent-color terminal-blink">_</span> */}
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

        {/* SECTION 01: APPROACH */}
        <section id="approach" className="section-wrapper">
          <ScrollReveal animation="fade">
            <div className="section-meta">
              <span>01</span>
              <span className="section-label">//APPROACH</span>
              <span>THREE PHASES</span>
            </div>
          </ScrollReveal>

          <LineSplitReveal as="h2" className="section-title" stagger={0.1} duration={1}>
            I BUILD SLEEK <span className="accent-color">HIGH-PERFORMANCE</span> WEB EXPERIENCES.
          </LineSplitReveal>

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
            <LineSplitReveal as="h2" className="section-title" style={{ marginBottom: 0 }} stagger={0.1} duration={1}>
              LATEST <span className="accent-color">PORTFOLIO</span>
            </LineSplitReveal>
            <LineSplitReveal as="p" style={{ maxWidth: "420px", fontSize: "15px", lineHeight: "1.6" }} stagger={0.06} duration={0.8}>
              My creative spirit comes alive in the digital realm. I combine design precision with technical engineering to craft premium web applications.
            </LineSplitReveal>
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
                  <div 
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
                      <div className="project-dots">
                        {proj.slides.map((_, i) => (
                          <span key={i} className={`project-dot${i === 0 ? ' active' : ''}`} />
                        ))}
                      </div>
                      <div className="project-name-wrapper">
                        <h3 className="project-name">{proj.title}</h3>
                        <span className="project-category">{proj.tags[0]}</span>
                      </div>
                      <div className="project-arrow">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* SECTION 03: SERVICES */}
        <section id="services" className="section-wrapper">
          <ScrollReveal animation="fade">
            <div className="section-meta">
              <span>03</span>
              <span className="section-label">//SERVICES</span>
              <span>PRO SERVICES</span>
            </div>
          </ScrollReveal>

          <div className="services-layout-grid">
            <div className="services-left">
              <LineSplitReveal as="h2" className="services-main-title" stagger={0.08} duration={1}>
                PRO<br />SERVICES
              </LineSplitReveal>
            </div>
            
            <div className="services-right">
              <div className="services-desc-wrapper">
                <p className="services-desc">
                  Discover our range of services designed to elevate your brand to next level.
                </p>
              </div>

              <div className="services-accordion">
                {SERVICES.map((service) => {
                  const isExpanded = activeService === service.id;
                  return (
                    <div key={service.id} className="service-accordion-item">
                      <button 
                        className="service-accordion-header"
                        onClick={() => toggleService(service.id)}
                      >
                        <div className="service-header-left">
                          {/* 5 dots progress indicator */}
                          <div className="service-dots-indicator">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <span 
                                key={idx} 
                                className={`service-dot ${idx < service.dotsCount ? 'active' : ''}`}
                              />
                            ))}
                          </div>
                          
                          <div className="service-info-text">
                            <h3 className="service-title">{service.title}</h3>
                            <span className="service-subtitle">{service.subtitle}</span>
                          </div>
                        </div>

                        <div className={`service-chevron ${isExpanded ? 'expanded' : ''}`}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </button>

                      <div className={`service-accordion-content ${isExpanded ? 'expanded' : ''}`}>
                        <div className="service-accordion-inner">
                          <div className="service-details-container">
                            <p className="service-details-text">{service.description}</p>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                              <h4 className="service-deliverables-title">Key Deliverables</h4>
                              <ul className="service-deliverables-list">
                                {service.deliverables.map((item, idx) => (
                                  <li key={idx} className="service-deliverable-item">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: ABOUT */}
        <section id="about" className="section-wrapper">
          <ScrollReveal animation="fade">
            <div className="section-meta">
              <span>04</span>
              <span className="section-label">//WHO AM I</span>
              <span>SINCE 2018</span>
            </div>
          </ScrollReveal>

          <div className="about-grid">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <LineSplitReveal as="h2" className="about-intro-title" stagger={0.1} duration={1}>
                  MORE ABOUT SOHAM<span className="accent-color">©</span>
                </LineSplitReveal>
                <LineSplitReveal as="p" className="about-intro-text" stagger={0.05} duration={0.8}>
                  I am a passionate software engineer specializing in building high-fidelity web interfaces and robust, scalable backend infrastructures.
                </LineSplitReveal>
                <LineSplitReveal as="p" className="about-intro-text" stagger={0.05} duration={0.8}>
                  Over the past several years, I have worked with modern web standards, focusing on rendering performance, state optimization, and clean architectural design patterns to deliver user experiences that feel fluid, responsive, and alive.
                </LineSplitReveal>
              </div>
              <ScrollReveal animation="up" delay={2}>
                <a href="/resume.pdf" className="contact-btn" style={{ width: 'fit-content' }} data-cursor-label="DOWNLOAD">
                  Download Resume
                </a>
              </ScrollReveal>
            </div>
          </div>

          {/* Skills Marquee */}
          <ScrollReveal animation="up" delay={1} style={{ marginTop: '60px' }}>
            <SkillsMarquee 
              skills={["React", "Next.js", "TypeScript", "Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "Docker", "Git / GitHub"]}
              title="EXPERTISE &amp; SKILLS"
            />
          </ScrollReveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <LineSplitReveal as="h2" className="footer-logo" yPercent={120} stagger={0.12} duration={1.2}>
          SOHAM<span className="accent-color">.</span>
        </LineSplitReveal>
        <LineSplitReveal as="p" className="footer-contact-desc" stagger={0.06} duration={0.8}>
          Have an interesting project or position in mind? Let&apos;s build something exceptional together.
        </LineSplitReveal>
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
              <ScrambleLink href="#services" onClick={() => setMenuOpen(false)} text="SERVICES" />
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
