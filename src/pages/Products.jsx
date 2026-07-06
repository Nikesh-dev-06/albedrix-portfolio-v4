import React, { useRef } from 'react';

function ProjectCard({ status, statusColor, tags, title, description }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 45, 85, 0.15), rgba(255, 255, 255, 0.03))`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.background = '';
    }
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-content">
        <div className="project-status">
          <span
            className="status-dot"
            style={{
              background: statusColor,
              boxShadow: `0 0 8px ${statusColor}, 0 0 16px ${statusColor}`
            }}
          ></span>
          <span className="status-text">{status}</span>
        </div>
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Products() {
  const productsList = [
    {
      status: 'Active Research & Study',
      statusColor: '#22c55e',
      tags: ['Healthcare Technology', 'ECG Analysis', 'Embedded Intelligence'],
      title: 'ECG Emotion Analysis System',
      description: 'AI-powered ECG analytics system for emotion detection and biomedical signal interpretation.'
    },
    {
      status: 'Design Phase',
      statusColor: '#f59e0b',
      tags: ['Embedded', 'Power Systems', 'Portable Tech'],
      title: 'Portable Laptop Powerbank',
      description: 'Portable high-capacity power solution designed for laptops and mobile engineering workflows.'
    },
    {
      status: 'Coming Soon',
      statusColor: '#3b82f6',
      tags: ['Industrial Compute', 'Edge Gateways', 'Ruggedized PCB'],
      title: 'Edge-Net Gateway v2',
      description: 'A ruggedized industrial grade gateway built on ARM Cortex-A72 cores with isolated CAN, RS485, and cellular connectivity options.'
    },
    {
      status: 'Under Development',
      statusColor: '#a855f7',
      tags: ['Real-Time OS', 'Microkernel', 'IoT Security'],
      title: 'Albedrix RTOS Microkernel',
      description: 'A memory-safe microkernel RTOS written in Rust, optimized for microcontrollers requiring secure runtime partitions.'
    },
    {
      status: 'Research Prototype',
      statusColor: '#ec4899',
      tags: ['Machine Learning', 'Signal Processing', 'DSP'],
      title: 'DeepSignal Neural DSP',
      description: 'An embedded neural network compiler translating raw analog signal telemetry directly into quantized edge classification events.'
    },
    {
      status: 'Internal Project',
      statusColor: '#6b7280',
      tags: ['CAD Automation', 'Design Checking', 'Python Scripting'],
      title: 'AlbeCAD Verification Suite',
      description: 'Internal automation checking script suites analyzing electrical schematics for potential board layout routing errors prior to fabrication.'
    }
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <span className="section-subtitle">PROJECT PORTFOLIO</span>
          <h1>PRODUCTS & RESEARCH</h1>
          <p>
            An inside look at our medical signal prototypes, hardware electronics designs, 
            and next-generation connected systems.
          </p>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <section className="projects-section section-padding">
        <div className="container">
          <div className="projects-wrapper">
            {productsList.map((product, idx) => (
              <ProjectCard
                key={idx}
                status={product.status}
                statusColor={product.statusColor}
                tags={product.tags}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH LAB OVERVIEW (Placeholder) */}
      <section className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">RESEARCH DOMAINS</span>
            <h2 className="section-title">Areas of Investigation</h2>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <h3><i className="fas fa-heartbeat"></i> Biosignal Processing</h3>
              <p>
                Developing low-latency pipelines for digital filter convolutions and frequency-domain 
                conversions running on ultra low-power microcontrollers (Cortex-M4/M7).
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-battery-half"></i> Solid-State Power</h3>
              <p>
                Testing high-efficiency thermal layouts and power switching configurations for portable lithium 
                pack management systems with USB-PD 3.1 negotiations.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-brain"></i> Neural Compression</h3>
              <p>
                Experimenting with neural network prune algorithms, weight clamping techniques, and integer 
                quantization (INT8) to optimize models for tiny edge processors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
