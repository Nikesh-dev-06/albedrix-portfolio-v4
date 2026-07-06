import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ/FAQ';

export default function Services() {
  const servicesList = [
    {
      icon: 'fa-microchip',
      title: 'Embedded Systems',
      description: 'Intelligent firmware and embedded architecture for advanced electronic products.',
      tags: ['STM32', 'ESP32', 'Arduino', 'Raspberry Pi', 'PCB Design', 'RTOS']
    },
    {
      icon: 'fa-robot',
      title: 'Edge AI',
      description: 'Real-time AI deployment on embedded and edge hardware infrastructure.',
      tags: ['YOLO', 'TensorFlow', 'OpenCV', 'ONNX', 'PyTorch']
    },
    {
      icon: 'fa-wifi',
      title: 'IoT Platforms',
      description: 'Smart, secure, connected ecosystems for industrial and consumer applications.',
      tags: ['MQTT', 'Cloud', 'ESP32', 'AWS', 'Firebase']
    },
    {
      icon: 'fa-code',
      title: 'Full Stack Engineering',
      description: 'Modern, scalable web and software systems for intelligent platforms.',
      tags: ['React', 'Node.js', 'Next.js', 'MongoDB', 'Docker']
    },
    {
      icon: 'fa-cogs',
      title: 'Intelligent Automation',
      description: 'Futuristic automation systems powered by AI and embedded control loops.',
      tags: ['Sensors', 'Control Systems', 'Python']
    },
    {
      icon: 'fa-lightbulb',
      title: 'Product & MVP Consulting',
      description: 'Technical consulting, prototyping, and MVP development for early-stage teams.',
      tags: ['Prototyping', 'Technical Consulting', 'Academic Projects']
    }
  ];

  const processSteps = [
    {
      index: '01',
      title: 'Requirement',
      description: 'Define scope, constraints, and success criteria with the client.'
    },
    {
      index: '02',
      title: 'Research',
      description: 'Evaluate components, feasibility, and technical approach.'
    },
    {
      index: '03',
      title: 'Architecture',
      description: 'Design the system: hardware, firmware, and software layers.'
    },
    {
      index: '04',
      title: 'Development',
      description: 'Build in tight iterations with continuous validation.'
    },
    {
      index: '05',
      title: 'Testing',
      description: 'Stress-test across real-world conditions and edge cases.'
    },
    {
      index: '06',
      title: 'Delivery',
      description: 'Ship with documentation, support, and a clean handover.'
    }
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <span className="section-subtitle">OUR CAPABILITIES</span>
          <h1>OUR SERVICES</h1>
          <p>
            From low-level microcontrollers to edge machine learning and secure web platforms, 
            we engineer complete intelligent ecosystems.
          </p>
        </div>
      </div>

      {/* CORE SERVICES GRID */}
      <section className="services-section section-padding">
        <div className="container">
          <div className="services-grid">
            {servicesList.map((service, idx) => (
              <div key={idx} className="service-panel">
                <div className="service-panel-header">
                  <div className="service-icon"><i className={`fas ${service.icon}`}></i></div>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, tagIdx) => (
                    <span key={tagIdx}>{tag}</span>
                  ))}
                </div>
                <Link to="/contact" className="service-link">
                  Request Info <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING WORKFLOW */}
      <section className="process-section section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">THE WORKFLOW</span>
            <h2 className="section-title">How We Build</h2>
          </div>
          <div className="process-track">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="process-index">{step.index}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION (Placeholder) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">DOMAINS</span>
            <h2 className="section-title">Industries We Serve</h2>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <h3><i className="fas fa-heartbeat"></i> Healthcare & Bio</h3>
              <p>Biomedical signal analytics, ECG processing systems, and non-invasive patient monitors.</p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-industry"></i> Industrial IoT</h3>
              <p>Predictive maintenance sensors, telemetry dashboards, and MODBUS/CAN gateway architectures.</p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-home"></i> Smart Cities & Homes</h3>
              <p>Intelligent lighting control controllers, environmental monitors, and low-power mesh nodes.</p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-car"></i> Automotive & Power</h3>
              <p>Battery management systems (BMS), telemetry modules, and charging infrastructure interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION PROCESS */}
      <section className="section-padding" style={{ background: 'rgba(255, 45, 85, 0.01)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-header">
            <span className="section-subtitle">PARTNERSHIP</span>
            <h2 className="section-title">The Consultation Process</h2>
          </div>
          <p style={{ maxWidth: '650px', margin: '0 auto 40px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Starting a project with Albedrix is simple. We host an initial discovery call, draft a comprehensive technical 
            architecture document matching your BOM target budget, deliver early breadboard proofs-of-concept, and iterate 
            until production deployment.
          </p>
          <Link to="/contact" className="primary-btn magnetic">
            <span>Book A Discovery Call</span>
          </Link>
        </div>
      </section>

      {/* FAQ SECTION (Moved to the bottom of Services page) */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
}
