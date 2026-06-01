'use client';

import ScrollReveal from "./ScrollReveal";
import LineSplitReveal from "./LineSplitReveal";

interface ToolData {
  name: string;
  category: string;
  percentage?: string;
  description: string;
}

const TOOLS: ToolData[] = [
  {
    name: "FIGMA",
    category: "DESIGN TOOL",
    percentage: "98%",
    description: "Figma is a collaborative web application for design with additional offline features for macOS and Windows."
  },
  {
    name: "JAVASCRIPT",
    category: "FRONT END DEVELOPMENT",
    percentage: "92%",
    description: "JavaScript, often abbreviated as JS, is a programming language and technology alongside HTML and CSS."
  },
  {
    name: "APPLE",
    category: "MACBOOK PRO",
    description: "Apple Inc. is an American multinational tech company headquartered in California, in Silicon Valley."
  }
];

export default function Stack() {
  return (
    <section id="stack" className="section-wrapper">
      <ScrollReveal animation="fade">
        <div className="section-meta">
          <span>05</span>
          <span className="section-label">//STACK &amp; TOOLS</span>
          <span>TECH STACK</span>
        </div>
      </ScrollReveal>

      <div className="experience-layout-grid">
        <div className="experience-left">
          <LineSplitReveal as="h2" className="experience-main-title" stagger={0.08} duration={1}>
            STACK &amp;<br />TOOLS
          </LineSplitReveal>
        </div>

        <div className="experience-right">
          <div className="experience-list">
            {TOOLS.map((tool, idx) => (
              <ScrollReveal key={tool.name} animation="up" delay={idx + 1}>
                <div className="experience-item">
                  <div className="experience-item-header">
                    <h3 className="experience-company">{tool.name}</h3>
                  </div>
                  <div className="experience-item-meta">
                    <span className="experience-role">{tool.category}</span>
                    {tool.percentage && (
                      <span className="experience-timeline">{tool.percentage}</span>
                    )}
                  </div>
                  <p className="experience-description">{tool.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
