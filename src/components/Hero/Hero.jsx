import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import HeroCanvas from './HeroCanvas';

export default function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    // 1. GSAP Text Reveal & Entrance Animations (Scoped to context for React unmount safety)
    const ctx = gsap.context(() => {
      gsap.to('.reveal-inner', {
        y: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.12,
      });
      
      gsap.from('.hero-badge, .hero-tagline, .hero-description, .hero-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.3,
        ease: 'power2.out',
      });
    });

    // 2. Typing text effect loop
    const words = ['Embedded Systems', 'Edge AI', 'IoT Innovation', 'Intelligent Engineering'];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const typingElement = typingRef.current;
      if (!typingElement) return;

      if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
          deleting = true;
          timeoutId = setTimeout(typeEffect, 1500);
          return;
        }
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timeoutId = setTimeout(typeEffect, deleting ? 50 : 100);
    };

    typeEffect();

    // 3. Magnetic Hover Button Interaction (GSAP)
    const magneticElements = document.querySelectorAll('.magnetic');
    
    const mouseMoveHandler = (e, btn) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' });
    };

    const mouseLeaveHandler = (btn) => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    };

    const listeners = [];
    magneticElements.forEach((btn) => {
      const moveListener = (e) => mouseMoveHandler(e, btn);
      const leaveListener = () => mouseLeaveHandler(btn);
      btn.addEventListener('mousemove', moveListener);
      btn.addEventListener('mouseleave', leaveListener);
      listeners.push({ btn, moveListener, leaveListener });
    });

    return () => {
      ctx.revert();
      clearTimeout(timeoutId);
      listeners.forEach(({ btn, moveListener, leaveListener }) => {
        btn.removeEventListener('mousemove', moveListener);
        btn.removeEventListener('mouseleave', leaveListener);
      });
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow"></div>
      <div className="circuit-overlay"></div>
      <HeroCanvas />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>NEXT-GENERATION ENGINEERING
          </div>
          <h1 className="hero-title">
            <span className="reveal-line">
              <span className="reveal-inner">ALBEDRIX</span>
            </span>
            <span className="reveal-line">
              <span className="reveal-inner">SYSTEMS</span>
            </span>
          </h1>
          <div className="hero-tagline">
            <span ref={typingRef} className="typing-text"></span>
            <span className="typing-cursor">|</span>
          </div>
          <p className="hero-description">
            We engineer embedded systems, Edge AI infrastructure, IoT
            ecosystems, and full-stack platforms — turning hardware-grade rigor
            into products enterprises can deploy with confidence.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="primary-btn magnetic">
              <span>Explore Services</span>
            </Link>
            <Link to="/contact" className="secondary-btn magnetic">
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
