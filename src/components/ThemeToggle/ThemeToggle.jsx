import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem('albedrix-theme');
    if (saved) return saved === 'light';
    return document.body.classList.contains('light-theme');
  });

  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light-theme');
      localStorage.setItem('albedrix-theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('albedrix-theme', 'dark');
    }
  }, [isLight]);

  return (
    <button
      className="theme-toggle"
      id="themeToggle"
      onClick={() => setIsLight((prev) => !prev)}
      aria-label="Toggle dark/light theme"
    >
      <span className="toggle-track">
        <span className="toggle-thumb">
          <i className="fas fa-moon moon-icon"></i>
          <i className="fas fa-sun sun-icon"></i>
        </span>
      </span>
    </button>
  );
}
