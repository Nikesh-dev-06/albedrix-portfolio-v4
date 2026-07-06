import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero/Hero';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const statNumbers = el.querySelectorAll('.stat-number[data-count]');
    const triggers = [];

    statNumbers.forEach((numEl) => {
      const target = parseInt(numEl.getAttribute('data-count'), 10);
      const suffix = numEl.getAttribute('data-suffix') || '';
      
      const st = ScrollTrigger.create({
        trigger: numEl,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          const counter = { val: 0 };
          gsap.to(counter, {
            val: target,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => {
              numEl.textContent = Math.round(counter.val) + suffix;
            },
          });
        },
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Hero />

      {/* STATS SECTION */}
      <section ref={statsRef} className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" data-count="50" data-suffix="+">0</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="15" data-suffix="+">0</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="5" data-suffix="+">0</div>
              <div className="stat-label">Research Domains</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW SECTION */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">ABOUT ALBEDRIX</span>
            <h2 className="section-title">Engineering Intelligent Systems for the Future</h2>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <p>
                ALBEDRIX SYSTEMS is an engineering studio focused on embedded
                intelligence, Edge AI systems, IoT infrastructure, signal
                processing, and intelligent automation.
              </p>
              <br />
              <p>
                We combine hardware engineering, artificial intelligence, and
                scalable software ecosystems to build next-generation intelligent
                platforms — for startups, SMEs, and research-driven teams.
              </p>
              <br />
              <div style={{ marginTop: '20px' }}>
                <Link to="/about" className="secondary-btn magnetic">
                  <span>Our Full Story</span>
                </Link>
              </div>
            </div>
            <div className="about-cards">
              <div className="about-card">
                <i className="fas fa-microchip"></i>
                <h3>Embedded Intelligence</h3>
                <p>High-performance embedded architectures optimized for intelligent computing.</p>
              </div>
              <div className="about-card">
                <i className="fas fa-brain"></i>
                <h3>AI Integration</h3>
                <p>Seamless AI deployment for real-world engineering systems.</p>
              </div>
              <div className="about-card">
                <i className="fas fa-network-wired"></i>
                <h3>IoT Ecosystems</h3>
                <p>Secure and scalable connected infrastructure solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES SECTION */}
      <section className="services-section section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">FEATURED SERVICES</span>
            <h2 className="section-title">Core Engineering Capabilities</h2>
          </div>
          <div className="services-grid">
            <div className="service-panel">
              <div className="service-panel-header">
                <div className="service-icon"><i className="fas fa-microchip"></i></div>
                <h3>Embedded Systems</h3>
              </div>
              <p>Intelligent firmware and embedded architecture for advanced electronic products.</p>
              <div className="service-tags">
                <span>STM32</span><span>ESP32</span><span>RTOS</span>
              </div>
              <Link to="/services" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="service-panel">
              <div className="service-panel-header">
                <div className="service-icon"><i className="fas fa-robot"></i></div>
                <h3>Edge AI</h3>
              </div>
              <p>Real-time AI deployment on embedded and edge hardware infrastructure.</p>
              <div className="service-tags">
                <span>YOLO</span><span>TensorFlow</span><span>PyTorch</span>
              </div>
              <Link to="/services" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="service-panel">
              <div className="service-panel-header">
                <div className="service-icon"><i className="fas fa-wifi"></i></div>
                <h3>IoT Platforms</h3>
              </div>
              <p>Smart, secure, connected ecosystems for industrial and consumer applications.</p>
              <div className="service-tags">
                <span>MQTT</span><span>Cloud</span><span>AWS</span>
              </div>
              <Link to="/services" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/services" className="primary-btn magnetic">
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="projects-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">FEATURED PRODUCTS</span>
            <h2 className="section-title">Engineering Showcase</h2>
          </div>
          <div className="projects-wrapper">
            <div className="project-card">
              <div className="project-content">
                <div className="project-status">
                  <span className="status-dot"></span>
                  <span className="status-text">Active Research & Study</span>
                </div>
                <div className="project-tags">
                  <span>Healthcare Technology</span>
                  <span>ECG Analysis</span>
                  <span>Embedded Intelligence</span>
                </div>
                <h3>ECG Emotion Analysis System</h3>
                <p>AI-powered ECG analytics system for emotion detection and biomedical signal interpretation.</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-content">
                <div className="project-status">
                  <span className="status-dot"></span>
                  <span className="status-text">Design Phase</span>
                </div>
                <div className="project-tags">
                  <span>Embedded</span>
                  <span>Power Systems</span>
                  <span>Portable Tech</span>
                </div>
                <h3>Portable Laptop Powerbank</h3>
                <p>Portable high-capacity power solution designed for laptops and mobile engineering workflows.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/products" className="secondary-btn magnetic">
              <span>Explore All Products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
        <div className="contact-network" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="section-subtitle">COLLABORATE WITH US</span>
          <h2 className="section-title" style={{ marginBottom: '20px' }}>Have an engineering challenge?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.8 }}>
            Whether you need a proof-of-concept prototype, hardware debugging, high-performance Edge AI models, or full-stack software dashboards, Albedrix Systems is ready to deploy.
          </p>
          <Link to="/contact" className="primary-btn magnetic">
            <span>Book Consultation</span>
          </Link>
        </div>
      </section>
    </>
  );
}
