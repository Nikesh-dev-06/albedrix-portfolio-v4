import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="contact-network" aria-hidden="true"></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="notfound-code">404</div>
        <span className="section-subtitle" style={{ fontSize: '0.85rem', letterSpacing: '4px' }}>
          SYSTEM INDEX OUT OF RANGE
        </span>
        <h1 style={{ marginTop: '16px', marginBottom: '24px', fontSize: '2.2rem' }}>
          PAGE DECOMMISSIONED OR OFFLINE
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.7, fontSize: '0.95rem' }}>
          The requested firmware address or application route is invalid or has been relocated. 
          Verify the system URL arguments or return to the active workspace.
        </p>
        <Link to="/" className="primary-btn magnetic">
          <span>Return To Terminal</span>
        </Link>
      </div>
    </div>
  );
}
