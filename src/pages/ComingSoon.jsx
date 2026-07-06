import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <div className="notfound-container">
      <div className="contact-network" aria-hidden="true"></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="notfound-code" style={{ color: 'var(--text-secondary)' }}>LOCK</div>
        <span className="section-subtitle" style={{ fontSize: '0.85rem', letterSpacing: '4px' }}>
          PRODUCT DEPLOYMENT PHASE: 0
        </span>
        <h1 style={{ marginTop: '16px', marginBottom: '24px', fontSize: '2.2rem' }}>
          COMING SOON TO LAB
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 36px', lineHeight: 1.7, fontSize: '0.95rem' }}>
          We are currently calibrating the hardware specifications, compiling edge kernels, and running thermal 
          simulations. Sign up to receive technical datasheets upon release.
        </p>

        {subscribed ? (
          <p style={{ color: '#22c55e', fontWeight: '600', fontFamily: 'var(--font-mono)', marginBottom: '30px' }}>
            ✓ TELEX SIGNED - TELEMETRY NOTIFICATION SET
          </p>
        ) : (
          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', justifySelf: 'center', maxWidth: '420px', width: '100%', marginBottom: '30px' }}>
            <input
              type="email"
              placeholder="Enter developer email..."
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="primary-btn magnetic" style={{ padding: '14px 24px' }}>
              <span>Subscribe</span>
            </button>
          </form>
        )}

        <Link to="/" className="secondary-btn magnetic">
          <span>Return to Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
