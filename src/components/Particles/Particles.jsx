import React, { useEffect, useRef } from 'react';

export default function Particles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const parent = containerRef.current;
      if (!parent) return;
      
      const particle = document.createElement('span');
      particle.classList.add('particle');
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particle.style.opacity = Math.random().toString();
      parent.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode === parent) {
          particle.remove();
        }
      }, 20000);
    };

    const interval = setInterval(createParticle, 250);

    // Create initial set of particles
    for (let i = 0; i < 10; i++) {
      createParticle();
    }

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="particles-container"></div>;
}
