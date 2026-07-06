import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15 }
    );

    // Select elements to reveal
    const selectors = [
      '.service-panel',
      '.about-card',
      '.project-card',
      '.tech-card',
      '.social-card',
      '.process-step',
      '.faq-item',
      '.info-card',
      '.workflow-card',
      '.team-card',
      '.stat-item'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));

    elements.forEach((el) => {
      if (!el.classList.contains('revealed')) {
        el.classList.add('hidden-reveal');
      }
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, [pathname]);
}
