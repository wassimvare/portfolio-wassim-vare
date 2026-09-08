(() => {
  'use strict';
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const backTop = document.querySelector('.back-to-top');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 960px)');

  // Blocked preference storage must not disable navigation.
  try {
    const stored = localStorage.getItem('portfolio-theme');
    if (stored === 'light' || stored === 'dark') root.dataset.theme = stored;
  } catch { /* Use the document theme. */ }
  function syncTheme() {
    const light = root.dataset.theme === 'light';
    if (themeButton) {
      themeButton.textContent = light ? '☾' : '◐';
      const label = light ? 'Passer au thème sombre' : 'Passer au thème clair';
      themeButton.setAttribute('aria-label', label);
      themeButton.title = label;
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f6f9fd' : '#07111f');
  }
  syncTheme();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch { /* Session-only preference. */ }
    syncTheme();
  });

  function closeMenu(restoreFocus = false) {
    nav?.classList.remove('open');
    document.body.classList.remove('nav-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Ouvrir le menu');
    if (restoreFocus) menuButton?.focus();
  }
  if (menuButton && nav) {
    root.classList.add('menu-ready');
    menuButton.addEventListener('click', () => {
      if (nav.classList.contains('open')) return closeMenu(true);
      nav.classList.add('open');
      document.body.classList.add('nav-open');
      menuButton.setAttribute('aria-expanded', 'true');
      menuButton.setAttribute('aria-label', 'Fermer le menu');
      nav.querySelector('a')?.focus();
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      closeMenu();
      const href = link.getAttribute('href');
      if (href?.startsWith('#')) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
        }
      }
    }));
    document.addEventListener('keydown', event => {
      if (!nav.classList.contains('open')) return;
      if (event.key === 'Escape') { event.preventDefault(); closeMenu(true); }
      if (event.key === 'Tab' && header) {
        const items = [...header.querySelectorAll('a[href],button:not([disabled])')].filter(el => el.getClientRects().length);
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    });
    document.addEventListener('click', event => {
      if (nav.classList.contains('open') && header && !header.contains(event.target)) closeMenu();
    });
    mobile.addEventListener('change', () => { if (!mobile.matches) closeMenu(); });
  }
  function syncScroll() {
    header?.classList.toggle('scrolled', window.scrollY > 10);
    backTop?.classList.toggle('visible', window.scrollY > 600);
  }
  window.addEventListener('scroll', syncScroll, { passive: true });
  syncScroll();
  backTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    header?.querySelector('.brand')?.focus({ preventScroll: true });
  });

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0, rootMargin: '0px 0px 50px' });
    document.querySelectorAll('.reveal').forEach(el => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('reveal-pending');
        observer.observe(el);
      }
    });
    document.addEventListener('focusin', event => event.target.closest?.('.reveal-pending')?.classList.remove('reveal-pending'));
  }
  const links = [...document.querySelectorAll('.main-nav a[href^="#"]')];
  if ('IntersectionObserver' in window && links.length) {
    const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
    const spy = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }), { rootMargin: '-25% 0px -60% 0px' });
    sections.forEach(section => spy.observe(section));
  }
  let feedbackTimer;
  document.querySelector('.copy-email')?.addEventListener('click', async event => {
    const email = event.currentTarget.dataset.email;
    const feedback = document.querySelector('.copy-feedback');
    if (!email || !feedback) return;
    clearTimeout(feedbackTimer);
    try {
      await navigator.clipboard.writeText(email);
      feedback.textContent = 'Adresse copiée.';
      feedbackTimer = setTimeout(() => { feedback.textContent = ''; }, 4000);
    } catch { feedback.textContent = 'Adresse à copier : ' + email; }
  });
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
