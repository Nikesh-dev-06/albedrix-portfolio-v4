import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

window.history.scrollRestoration = 'manual';

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {

  /* LOADING SCREEN */
  const loader = document.querySelector('.loader-wrapper');
  const loaderBar = document.querySelector('.loader-bar');
  let loadProgress = 0;

  const loadingInterval = setInterval(() => {
    loadProgress += Math.random() * 12;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(loadingInterval);
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        loader.style.transition = '1s ease';
        playHeroIntro();
      }, 500);
    }
    loaderBar.style.width = loadProgress + '%';
  }, 120);

  /* SCROLL PROGRESS BAR */
  const progressBar = document.querySelector('.scroll-progress-bar');
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = ((scrollTop / scrollHeight) * 100) + '%';
  }, { passive: true });

  /* NAVBAR GLASS EFFECT */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* THEME TOGGLE */
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  });

  /* HERO TYPING EFFECT */
  const typingElement = document.querySelector('.typing-text');
  const words = ['Embedded Systems', 'Edge AI', 'IoT Innovation', 'Intelligent Engineering'];
  let wordIndex = 0, charIndex = 0, deleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (!deleting) {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        deleting = true;
        setTimeout(typeEffect, 1500);
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
    setTimeout(typeEffect, deleting ? 50 : 100);
  }
  typeEffect();

  /* HERO INTRO REVEAL */
  function playHeroIntro() {
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
  }

  /* SMOOTH SCROLL LINKS */
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        navMenu.classList.remove('mobile-open');
        mobileBtn.classList.remove('active');
      }
    });
  });

  /* SCROLL REVEAL ANIMATIONS */
  const revealElements = document.querySelectorAll(
    '.service-panel, .about-card, .project-card, .tech-card, .social-card, .process-step, .faq-item'
  );
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => {
    el.classList.add('hidden-reveal');
    revealObserver.observe(el);
  });

  /* FLOATING PARTICLES */
  const particlesContainer = document.querySelector('.particles-container');
  function createParticle() {
    const particle = document.createElement('span');
    particle.classList.add('particle');
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.opacity = Math.random();
    particlesContainer.appendChild(particle);
    setTimeout(() => particle.remove(), 20000);
  }
  if (!prefersReducedMotion) setInterval(createParticle, 250);

  /* MOBILE MENU TOGGLE */
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  mobileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('mobile-open');
    mobileBtn.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
      navMenu.classList.remove('mobile-open');
      mobileBtn.classList.remove('active');
    }
  });

  /* PROJECT CARD HOVER GLOW */
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.background = `radial-gradient(circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(255,45,85,0.15), rgba(255,255,255,0.03))`;
    });
    card.addEventListener('mouseleave', () => { card.style.background = ''; });
  });

  /* ACTIVE NAV LINK ON SCROLL */
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (pageYOffset >= section.offsetTop - 200) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active-link', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

  /* CURSOR GLOW */
  const cursorGlow = document.getElementById('cursorGlow');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.classList.add('active');
      gsap.to(cursorGlow, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power2.out' });
    });
    document.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));
  }

  /* MAGNETIC BUTTONS */
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    });
  });

  /* ANIMATED STAT COUNTERS */
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  statNumbers.forEach(el => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.round(counter.val) + suffix; },
        });
      },
    });
  });

  /* TIMELINE SCROLL PROGRESS + REVEAL */
  const timeline = document.querySelector('.timeline');
  const timelineFill = document.querySelector('.timeline-line-fill');
  const timelineItems = document.querySelectorAll('.timeline-item');

  if (timeline && timelineFill) {
    ScrollTrigger.create({
      trigger: timeline,
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 0.4,
      onUpdate: (self) => {
        timelineFill.style.height = `${self.progress * 100}%`;
      },
    });

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.4 });
    timelineItems.forEach(item => timelineObserver.observe(item));
  }

  /* FAQ ACCORDION */
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });
      item.classList.toggle('open', !isOpen);
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
    });
  });

  /* THREE.JS HERO SCENE — rotating wireframe network sphere */
  initHeroScene();
});

function initHeroScene() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const isMobile = window.innerWidth < 900;
  if (isMobile && prefersReducedMotion) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, isMobile ? 11 : 9);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const group = new THREE.Group();
  group.position.x = isMobile ? 0 : 2.6;
  scene.add(group);

  /* Icosahedron wireframe core — "motherboard-esque" faceted node */
  const coreGeo = new THREE.IcosahedronGeometry(2.1, 1);
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0xff2d55,
    wireframe: true,
    transparent: true,
    opacity: 0.55,
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  group.add(core);

  /* Inner solid faint fill for depth */
  const fillMat = new THREE.MeshBasicMaterial({
    color: 0xff5a7a,
    transparent: true,
    opacity: 0.04,
  });
  const fillMesh = new THREE.Mesh(coreGeo, fillMat);
  group.add(fillMesh);

  /* Outer orbit ring */
  const ringGeo = new THREE.TorusGeometry(3.1, 0.01, 8, 100);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 });
  const ring1 = new THREE.Mesh(ringGeo, ringMat);
  ring1.rotation.x = Math.PI / 2.4;
  group.add(ring1);

  const ring2 = new THREE.Mesh(ringGeo, ringMat.clone());
  ring2.rotation.x = Math.PI / 1.6;
  ring2.rotation.y = Math.PI / 4;
  ring2.scale.setScalar(0.82);
  group.add(ring2);

  /* Floating particle nodes ("network" points) */
  const particleCount = isMobile ? 60 : 140;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const radius = 3.6 + Math.random() * 2.2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  const particlesGeo = new THREE.BufferGeometry();
  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particlesMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.045,
    transparent: true,
    opacity: 0.5,
  });
  const points = new THREE.Points(particlesGeo, particlesMat);
  group.add(points);

  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5);
    mouseY = (e.clientY / window.innerHeight - 0.5);
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    core.rotation.y = elapsed * 0.15;
    core.rotation.x = elapsed * 0.08;
    fillMesh.rotation.copy(core.rotation);

    ring1.rotation.z = elapsed * 0.1;
    ring2.rotation.z = -elapsed * 0.12;

    points.rotation.y = elapsed * 0.03;

    group.rotation.y += (mouseX * 0.4 - group.rotation.y) * 0.02;
    group.rotation.x += (-mouseY * 0.25 - group.rotation.x) * 0.02;

    renderer.render(scene, camera);
  }

  if (!prefersReducedMotion) {
    animate();
  } else {
    renderer.render(scene, camera);
  }
}
