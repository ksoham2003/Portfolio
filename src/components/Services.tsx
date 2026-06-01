'use client';

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import LineSplitReveal from "./LineSplitReveal";

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

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setActiveService(prev => (prev === serviceId ? null : serviceId));
  };

  return (
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
  );
}
