import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const timelineRef = useRef(null);
  const fillRef = useRef(null);
  const itemsContainerRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const fill = fillRef.current;
    if (!timeline || !fill) return;

    const st = ScrollTrigger.create({
      trigger: timeline,
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 0.4,
      onUpdate: (self) => {
        if (fill) {
          fill.style.height = `${self.progress * 100}%`;
        }
      },
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.4 }
    );

    const items = itemsContainerRef.current?.querySelectorAll('.timeline-item') || [];
    items.forEach((item) => observer.observe(item));

    return () => {
      st.kill();
      observer.disconnect();
    };
  }, []);

  const timelineSteps = [
    {
      title: 'Idea',
      description: 'We start by understanding the problem, the constraints, and what success actually looks like.'
    },
    {
      title: 'Research',
      description: 'Technical feasibility, component selection, and architecture research grounded in real constraints.'
    },
    {
      title: 'Prototype',
      description: 'Rapid, functional prototypes that validate the hardest parts of the system first.'
    },
    {
      title: 'Testing',
      description: 'Rigorous testing across firmware, hardware, and software layers before anything ships.'
    },
    {
      title: 'Deployment',
      description: 'Production rollout with monitoring, documentation, and a clear handover.'
    },
    {
      title: 'Maintenance',
      description: 'Ongoing support, updates, and iteration as your product and requirements evolve.'
    }
  ];

  return (
    <div ref={timelineRef} className="timeline">
      <div className="timeline-line">
        <div ref={fillRef} className="timeline-line-fill"></div>
      </div>
      <div ref={itemsContainerRef}>
        {timelineSteps.map((step, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
