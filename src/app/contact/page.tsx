'use client';

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import LineSplitReveal from "@/components/LineSplitReveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div>
      <Header />
      <main className="contact-page-wrapper">
        <section className="contact-hero-section">
          <div className="contact-grid-layout">
            <div className="contact-form-side">
              <ScrollReveal animation="fade">
                <LineSplitReveal as="h1" className="contact-main-title" stagger={0.08} duration={1}>
                  RING A BELL!
                </LineSplitReveal>
                <p className="contact-subtitle">
                  Reach out and let's create something amazing together. Let's achieve greatness.
                </p>
              </ScrollReveal>

              <div className="contact-form-container">
                <h2 className="contact-form-heading">FILL THIS FORM OUT</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-group">
                    <input 
                      type="text" 
                      placeholder="Name*" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <input 
                      type="email" 
                      placeholder="Email*" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <textarea 
                      placeholder="Message*" 
                      required 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="contact-input textarea"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="contact-submit-btn"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Submitting..." : status === "success" ? "Submitted!" : "Submit Now"}
                  </button>
                </form>
              </div>
            </div>

            <div className="contact-image-side">
              <div className="contact-image-wrapper">
                <Image 
                  src="/contact_portrait.png" 
                  alt="Contact Portrait" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Footer Info */}
        <section className="contact-info-footer">
          <div className="contact-info-grid">
            <div className="contact-info-col">
              <span className="contact-info-label">FOLLOW ME</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-info-link">INSTAGRAM ↗</a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="contact-info-link">DRIBBBLE ↗</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-info-link">TWITTER ↗</a>
            </div>

            <div className="contact-info-col">
              <span className="contact-info-label">CURRENT LOCATION</span>
              <span className="contact-info-text">MAHARASHTRA,</span>
              <span className="contact-info-text">INDIA</span>
            </div>

            <div className="contact-info-col">
              <span className="contact-info-label">PHONE</span>
              <span className="contact-info-text">IND +91 98765 43210</span>
              <span className="contact-info-text">ALT +91 98765 43211</span>
            </div>

            <div className="contact-info-col">
              <span className="contact-info-label">EMAIL ME</span>
              <a href="mailto:soham@example.com" className="contact-info-link">SOHAM@EXAMPLE.COM</a>
              <a href="mailto:contact@soham.com" className="contact-info-link">CONTACT@SOHAM.COM</a>
            </div>
          </div>

          <div className="contact-giant-footer-title">
            SOHAM
          </div>

          <div className="contact-footer-bottom">
            <span>&copy; {new Date().getFullYear()} SOHAM DESIGN</span>
            <a href="#top" className="back-to-top">BACK TO TOP</a>
          </div>
        </section>
      </main>
    </div>
  );
}
