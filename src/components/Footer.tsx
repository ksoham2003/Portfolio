'use client';

import LineSplitReveal from "./LineSplitReveal";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <LineSplitReveal as="h2" className="footer-logo" yPercent={120} stagger={0.12} duration={1.2}>
        SOHAM<span className="accent-color">.</span>
      </LineSplitReveal>
      <LineSplitReveal as="p" className="footer-contact-desc" stagger={0.06} duration={0.8}>
        Have an interesting project or position in mind? Let&apos;s build something exceptional together.
      </LineSplitReveal>
      <ScrollReveal animation="up" delay={2} className="footer-btn-wrapper">
        <a href="/contact" className="contact-btn" style={{ padding: "14px 36px" }} data-cursor-label="EMAIL">
          Get In Touch
        </a>
      </ScrollReveal>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} SOHAM. ALL RIGHTS RESERVED.</span>
        <span>DESIGN INSPIRED BY PORTFOLIO-THEME</span>
      </div>
    </footer>
  );
}
