import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/favicon.png" alt="Albedrix Logo" />
            <div>
              <h3>ALBEDRIX SYSTEMS</h3>
              <p>Engineering the Future</p>
            </div>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/technologies">Technologies</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-socials">
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
        </div>
        <div className="footer-bottom">
          <p>© 2026 Albedrix Systems — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
