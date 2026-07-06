import React, { useState, useRef } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const faqData = [
    {
      question: 'What kind of projects does Albedrix take on?',
      answer: 'Embedded systems, Edge AI, IoT platforms, industrial automation, and full-stack software for startups, SMEs, and research teams. We also take on academic and final-year engineering projects as a smaller part of our work.'
    },
    {
      question: 'How does a typical engagement start?',
      answer: 'With a short consultation to understand your requirements, constraints, and timeline. From there we scope the work and propose an architecture before development begins.'
    },
    {
      question: 'Do you work with early-stage startups?',
      answer: 'Yes — we regularly help early-stage teams go from idea to working prototype, and from prototype to a production-ready MVP.'
    },
    {
      question: 'What does ongoing support look like?',
      answer: 'We offer maintenance, monitoring, and iteration after deployment, so your system keeps working as requirements change.'
    },
    {
      question: 'How can I get a quote?',
      answer: "Reach out via the contact page with a short description of your project, and we'll get back to you with next steps."
    }
  ];

  const handleToggle = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="faq-list">
      {faqData.map((item, idx) => {
        const isOpen = activeIndex === idx;
        const currentRef = answerRefs.current[idx];
        const height = isOpen && currentRef ? `${currentRef.scrollHeight}px` : '0px';

        return (
          <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              className="faq-question"
              onClick={() => handleToggle(idx)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <i className="fas fa-plus"></i>
            </button>
            <div
              ref={(el) => (answerRefs.current[idx] = el)}
              className="faq-answer"
              style={{
                maxHeight: height,
                transition: 'max-height 0.4s ease'
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
