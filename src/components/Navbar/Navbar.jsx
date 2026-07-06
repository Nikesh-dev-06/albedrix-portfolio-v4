import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const navMenuRef = useRef(null);
  const mobileBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileOpen &&
        navMenuRef.current &&
        !navMenuRef.current.contains(e.target) &&
        mobileBtnRef.current &&
        !mobileBtnRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileOpen]);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileOpen((prev) => !prev);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/favicon.png" alt="Albedrix Logo" />
          <div className="logo-text">
            <span>ALBEDRIX</span>
            <small>SYSTEMS</small>
          </div>
        </Link>

        <nav
          ref={navMenuRef}
          className={`nav-menu ${mobileOpen ? 'mobile-open' : ''}`}
        >
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? 'active-link' : ''}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'active-link' : ''}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/technologies" className={({ isActive }) => isActive ? 'active-link' : ''}>
                Technologies
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <div className="nav-socials">
            <a
              href="https://www.linkedin.com/company/albedrix-systems"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/albedrixsystems"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:albedrixsystems@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <Link to="/contact" className="nav-cta">
            Book Consultation
          </Link>
          <button
            ref={mobileBtnRef}
            className={`mobile-menu-btn ${mobileOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
