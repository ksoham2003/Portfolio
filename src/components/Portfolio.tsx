'use client';

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import LineSplitReveal from "./LineSplitReveal";
import ProjectDrawer, { ProjectData } from "./ProjectDrawer";

// size: 'large' = 2-col, 'small' = 1-col, 'full' = 3-col
interface ProjectWithSize extends ProjectData {
  size: 'large' | 'small' | 'full';
  aspectRatio?: string;
}

const PROJECTS: ProjectWithSize[] = [
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
    codeUrl: "https://github.com/sohamdev/apex-analytics",
    size: 'large',
    aspectRatio: '16/9',
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
    codeUrl: "https://github.com/sohamdev/nova-wallet",
    size: 'small',
    aspectRatio: '3/4',
  },
  {
    id: "orbit-design",
    title: "Orbit Design System",
    description: "A comprehensive, fully documented design system built for enterprise-scale product teams to ship faster with consistency.",
    role: "Design Systems Engineer",
    timeline: "Mar 2024 - Jul 2024 (4 Months)",
    tags: ["React", "Storybook", "SCSS", "Figma"],
    image: "/developer_portrait.png",
    slides: ["/developer_portrait.png", "/project_dashboard.png", "/project_mobile.png"],
    metrics: { performance: 97, accessibility: 100, bestPractices: 98, seo: 96 },
    features: [
      "50+ reusable, accessible components built with ARIA compliance.",
      "Automated visual regression testing using Chromatic + Storybook.",
      "Multi-theme token system supporting dark, light and high-contrast modes.",
      "Live Figma-to-code sync via Tokens Studio plugin pipeline."
    ],
    architecture: "React component library published on npm, CSS custom properties for theming, Storybook for documentation, automated releases via semantic-release CI.",
    demoUrl: "https://orbit-design.example.com",
    codeUrl: "https://github.com/sohamdev/orbit-design",
    size: 'small',
    aspectRatio: '3/4',
  },
  {
    id: "flux-commerce",
    title: "Flux Commerce Platform",
    description: "A modern headless e-commerce storefront with edge-deployed product pages and AI-powered recommendation engine.",
    role: "Full Stack Developer",
    timeline: "Oct 2023 - Feb 2024 (4 Months)",
    tags: ["Next.js", "Shopify", "Tailwind", "OpenAI"],
    image: "/project_dashboard.png",
    slides: ["/project_dashboard.png", "/project_mobile.png", "/developer_portrait.png"],
    metrics: { performance: 100, accessibility: 97, bestPractices: 100, seo: 99 },
    features: [
      "Edge-rendered product pages achieving sub-200ms TTFB globally.",
      "AI recommendation engine boosting average order value by 24%.",
      "Real-time inventory synchronization with zero-downtime deployments.",
      "Headless Shopify Storefront API with Next.js App Router streaming."
    ],
    architecture: "Next.js App Router deployed on Vercel Edge Network, Shopify Storefront API for product data, OpenAI Embeddings for recommendations, Stripe for payments, Redis for cart sessions.",
    demoUrl: "https://flux-commerce.example.com",
    codeUrl: "https://github.com/sohamdev/flux-commerce",
    size: 'full',
    aspectRatio: '21/9',
  },
];

export default function Portfolio() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectWithSize | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openProject = (proj: ProjectWithSize) => {
    setSelectedProject(proj);
    setIsDrawerOpen(true);
  };

  const projectUsesSkill = (proj: ProjectWithSize, skill: string) => {
    const formattedSkill = skill.toLowerCase();
    if (proj.tags.some(tag => tag.toLowerCase().includes(formattedSkill))) return true;
    if (formattedSkill === 'react' && proj.tags.some(tag => tag.toLowerCase().includes('react native'))) return true;
    if (proj.description.toLowerCase().includes(formattedSkill)) return true;
    if (proj.architecture.toLowerCase().includes(formattedSkill)) return true;
    if (proj.features.some(f => f.toLowerCase().includes(formattedSkill))) return true;
    return false;
  };

  return (
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

      <div className={`portfolio-bento ${selectedSkill ? 'filtering' : ''}`}>
        {PROJECTS.map((proj, idx) => {
          const isHighlighted = selectedSkill ? projectUsesSkill(proj, selectedSkill) : false;
          const sizeClass = `bento-${proj.size}`;
          return (
            <ScrollReveal
              key={proj.id}
              animation="up"
              delay={idx + 1}
              className={`bento-item ${sizeClass} ${isHighlighted ? 'highlighted' : ''}`}
            >
              <div
                className="project-card"
                onClick={() => openProject(proj)}
                data-cursor-label="OPEN"
                style={{ height: '100%' }}
              >
                <div
                  className="project-img-wrapper"
                  style={{ aspectRatio: proj.aspectRatio || '16/10' }}
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="project-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
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

      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </section>
  );
}
