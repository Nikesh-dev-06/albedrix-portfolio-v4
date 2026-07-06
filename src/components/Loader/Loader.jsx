import React, { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Booting Embedded Intelligence...');

  useEffect(() => {
    const statuses = [
      'Booting Embedded Intelligence...',
      'Initializing Signal Processing Core...',
      'Connecting Edge AI Nodes...',
      'Securing Cloud Bridges...',
      'Calibrating Hardware Triggers...',
      'Systems Operational.'
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }

        const statusIdx = Math.min(
          Math.floor((next / 100) * statuses.length),
          statuses.length - 1
        );
        setStatus(statuses[statusIdx]);

        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <div className="loader-logo">
          <img src="/favicon.png" alt="Albedrix Logo" />
        </div>
        <h1 className="loader-title">INITIALIZING ALBEDRIX SYSTEMS</h1>
        <div className="loader-bar-container">
          <div className="loader-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loader-status">
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
}
