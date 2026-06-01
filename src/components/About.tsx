'use client';

import ScrollReveal from "./ScrollReveal";
import LineSplitReveal from "./LineSplitReveal";
import SkillsMarquee from "./SkillsMarquee";

export default function About() {
  return (
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
  );
}
