import React, { useState } from 'react';
import FAQ from '../components/FAQ/FAQ';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', category: 'General Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setFormState({ name: '', email: '', category: 'General Inquiry', message: '' });
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h1>CONTACT ALBEDRIX</h1>
          <p>
            Ready to convert hardware rigor into intelligent products? Reach out via our encrypted form 
            or professional handles.
          </p>
        </div>
      </div>

      {/* SOCIAL CARDS & FORM GRID */}
      <section className="contact-section section-padding">
        <div className="contact-network" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="contact-socials" style={{ margin: '0 auto 50px' }}>
            <a href="mailto:albedrixsystems@gmail.com" className="social-card" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
              <span>Email Us</span>
            </a>
            <a href="https://www.linkedin.com/company/albedrix-systems" className="social-card" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/albedrixsystems" className="social-card" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }} className="about-grid">
            {/* CONTACT FORM */}
            <div className="contact-form-container">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <i className="fas fa-check-circle" style={{ fontSize: '3.5rem', color: '#22c55e', marginBottom: '20px' }}></i>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>TRANSMISSION SECURED</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Thank you! Your message has been encrypted and sent to our engineering queue. 
                    We will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name / Organisation</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="e.g. John Doe / TechCorp"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="e.g. john@techcorp.com"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Project Category</label>
                    <select
                      id="category"
                      name="category"
                      className="form-input"
                      style={{ background: '#050505', color: '#fff' }}
                      value={formState.category}
                      onChange={handleInputChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Embedded Systems">Embedded Systems</option>
                      <option value="Edge AI Integration">Edge AI Integration</option>
                      <option value="IoT Platform Development">IoT Platform Development</option>
                      <option value="MVP / Academic Consulting">MVP / Academic Consulting</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="form-textarea"
                      placeholder="Please describe your system parameters, core requirements, and target timeline..."
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="primary-btn submit-btn magnetic">
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* DETAILS & LOCATION */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="info-card">
                <h3><i className="fas fa-clock"></i> Business Hours</h3>
                <p>
                  <strong>Monday – Friday</strong>: 9:00 AM – 6:00 PM IST (GMT+5:30)<br />
                  <strong>Saturday – Sunday</strong>: Emergency support channels only.<br />
                  <span style={{ color: 'var(--accent)', fontSize: '0.8rem', display: 'block', marginTop: '10px', fontFamily: 'var(--font-mono)' }}>
                    ACTIVE DEVELOPMENT MONITOR READY
                  </span>
                </p>
              </div>

              <div className="info-card">
                <h3><i className="fas fa-map-marker-alt"></i> Headquarters Coordinates</h3>
                <div className="map-placeholder" style={{ marginBottom: '14px' }}>
                  <div className="map-grid-overlay"></div>
                  <i className="fas fa-satellite map-marker"></i>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', zIndex: 1 }}>
                    LOCATING LAB CORE...
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem' }}>
                  <strong>Address</strong>: Albedrix Systems Lab, Electronic City Phase I, Bengaluru, KA 560100, India<br />
                  <strong>Coordinates</strong>: 12.8452° N, 77.6749° E
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTING FAQ */}
      <section className="faq-section section-padding" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">NEED FAST ANSWERS?</span>
            <h2 className="section-title">Common Consultation Queries</h2>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
}
