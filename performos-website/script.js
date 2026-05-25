/* PerformOS Website JS */

(function() {
  'use strict';

  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    navMenu.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Nav scroll shadow
  const nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 8) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight current nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function(a) {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function(item) {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', function() {
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Intersection observer for fade-in
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('fade-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.lane-card, .audience-card, .product-card, .usecase, .service-card, .content-card, .process-step').forEach(function(el) {
      io.observe(el);
    });
  }
})();
