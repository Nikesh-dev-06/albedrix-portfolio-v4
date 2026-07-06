import React from 'react';
import Timeline from '../components/Timeline/Timeline';

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <span className="section-subtitle">WHO WE ARE</span>
          <h1>ABOUT ALBEDRIX</h1>
          <p>
            Bridging bare-metal electrical engineering, high-performance edge intelligence, 
            and scalable software ecosystems.
          </p>
        </div>
      </div>

      {/* STORY & PHILOSOPHY */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Our Story</h2>
              <p>
                Albedrix Systems was founded by a team of engineers who recognized a critical disconnect: 
                hardware and software development were operating in separate silos. Startups and mature 
                enterprises alike struggled to integrate complex machine learning models onto resource-constrained 
                embedded devices without sacrificing latency or battery life.
              </p>
              <br />
              <p>
                We set out to change that by constructing a studio built specifically for full-spectrum engineering. 
                From low-level registers, custom PCB design, and RTOS configurations to cloud telemetry databases 
                and Edge AI modeling, we control the entire lifecycle of hardware-grade products.
              </p>
            </div>
            
            <div className="about-content">
              <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Engineering Philosophy</h2>
              <p>
                We believe that "good enough" is the enemy of reliability. When deploying systems into the field—whether 
                biomedical sensors, factory automation gateways, or smart grid equipment—there is no room for firmware 
                crashes or signal noise.
              </p>
              <br />
              <p>
                Our philosophy is grounded in extreme test coverage, rigorous math-driven modeling, and early prototype 
                validation. We don't just write scripts; we write clean, deterministically structured, memory-safe code 
                designed to run uninterrupted for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR VALUES</span>
            <h2 className="section-title">Mission & Vision</h2>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <h3><i className="fas fa-bullseye"></i> Our Mission</h3>
              <p>
                To empower innovators and businesses by engineering robust, highly-optimized physical products and 
                connected systems. We translate theoretical computation into physical, reliable, edge-computed reality.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-eye"></i> Our Vision</h3>
              <p>
                To become the premier engineering studio for high-risk, high-complexity systems where electronics, 
                artificial intelligence, and connectivity converge. We build the physical backbone of the next era.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-shield-alt"></i> Integrity First</h3>
              <p>
                We practice transparent, open engineering. Our customers receive complete source code, hardware 
                schematics, test logs, and comprehensive handovers with zero vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION (Why Albedrix) */}
      <section className="timeline-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">THE ALBEDRIX PROCESS</span>
            <h2 className="section-title">How We Guide Your Project</h2>
          </div>
          <Timeline />
        </div>
      </section>

      {/* TEAM SECTION (Placeholder) */}
      <section className="section-padding" style={{ background: 'rgba(255, 45, 85, 0.01)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">THE MINDSHARE</span>
            <h2 className="section-title">Our Technical Leadership</h2>
          </div>
          
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <i className="fas fa-microchip"></i>
              </div>
              <h3>Alex Mercer</h3>
              <div className="team-role">Lead Embedded Architect</div>
              <p>Specializes in bare-metal C/C++, RTOS scheduling, custom PCB layouts, and ultra-low-power electronics.</p>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Sarah Chen, PhD</h3>
              <div className="team-role">AI & Edge Compute Lead</div>
              <p>Researcher in model quantization, biosignal pattern analysis, and real-time deep neural networks (ONNX/YOLO).</p>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">
                <i className="fas fa-server"></i>
              </div>
              <h3>Marcus Vance</h3>
              <div className="team-role">Full-Stack Platforms Architect</div>
              <p>Builds the highly available cloud bridges, web dashboards, MQTT telemetry grids, and security layers.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
