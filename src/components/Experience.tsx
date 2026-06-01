'use client';

import ScrollReveal from "./ScrollReveal";
import LineSplitReveal from "./LineSplitReveal";

interface JobData {
  company: string;
  role: string;
  timeline: string;
  description: string;
}

const JOBS: JobData[] = [
  {
    company: "CLAVMEN STUDIO",
    role: "SENIOR UX DESIGNER",
    timeline: "2022 - PRESENT",
    description: "Clavmen inspires creativity and makes learning piano fun. The sleek, lightweight body fits easily into gig bags for portability."
  },
  {
    company: "LOSIFY",
    role: "LEAD PRODUCT DESIGNER",
    timeline: "2013 - 2022",
    description: "Fitness and well-being with personalized coaching and innovative wellness solutions."
  },
  {
    company: "GAMADIAS",
    role: "JUNIOR UX DESIGNER",
    timeline: "2012 - 2013",
    description: "Gaming Experiences with Innovative Technology and Unparalleled Performance."
  },
  {
    company: "FREELANCE",
    role: "WEB DESIGNER",
    timeline: "2010 - 2012",
    description: "Bringing creativity, technical expertise, and a passion for design to every project."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <ScrollReveal animation="fade">
        <div className="section-meta">
          <span>04</span>
          <span className="section-label">//EXPERIENCE</span>
          <span>HISTORY</span>
        </div>
      </ScrollReveal>

      <div className="experience-layout-grid">
        <div className="experience-left">
          <LineSplitReveal as="h2" className="experience-main-title" stagger={0.08} duration={1}>
            EXPERIENCE
          </LineSplitReveal>
        </div>

        <div className="experience-right">
          <div className="experience-list">
            {JOBS.map((job, idx) => (
              <ScrollReveal key={job.company} animation="up" delay={idx + 1}>
                <div className="experience-item">
                  <div className="experience-item-header">
                    <h3 className="experience-company">{job.company}</h3>
                  </div>
                  <div className="experience-item-meta">
                    <span className="experience-role">{job.role}</span>
                    <span className="experience-timeline">{job.timeline}</span>
                  </div>
                  <p className="experience-description">{job.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
