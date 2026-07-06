import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CursorGlow from '../components/CursorGlow/CursorGlow';
import ScrollProgress from '../components/ScrollProgress/ScrollProgress';
import Particles from '../components/Particles/Particles';
import useScrollReveal from '../hooks/useScrollReveal';

export default function MainLayout() {
  const { pathname } = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Activate scroll-based intersection reveals
  useScrollReveal();

  return (
    <>
      <ScrollProgress />
      <Particles />
      <CursorGlow />
      <Navbar />
      <div className="layout-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
