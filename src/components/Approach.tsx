'use client';

import LineSplitReveal from "./LineSplitReveal";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";

export default function Approach() {
  return (
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
  );
}
