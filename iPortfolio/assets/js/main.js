(() => {
  'use strict';

  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const themeButton = document.querySelector('.theme-toggle');
  const backToTop = document.querySelector('.back-to-top');
  const navLinks = [...document.querySelectorAll('.main-nav a')];

  const safeStorage = {
    get(key) { try { return window.localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch { /* Local file preview can block storage. */ } }
  };

  const storedTheme = safeStorage.get('portfolio-theme');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    root.dataset.theme = storedTheme;
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    root.dataset.theme = 'light';
  }

  const updateThemeLabel = () => {
    const light = root.dataset.theme === 'light';
    themeButton.setAttribute('aria-label', light ? 'Passer au thème sombre' : 'Passer au thème clair');
    themeButton.title = light ? 'Thème sombre' : 'Thème clair';
  };
  updateThemeLabel();

  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    safeStorage.set('portfolio-theme', root.dataset.theme);
    updateThemeLabel();
  });

  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Ouvrir le menu');
    nav.classList.remove('open');
    document.body.classList.remove('nav-open');
  };

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Ouvrir le menu' : 'Fermer le menu');
    nav.classList.toggle('open', !open);
    document.body.classList.toggle('nav-open', !open);
  });

  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 10);
    backToTop.classList.toggle('visible', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const sections = [...document.querySelectorAll('main section[id]')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-30% 0px -58% 0px', threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  const emailAddress = () => {
    const button = document.querySelector('.copy-email');
    return `${button.dataset.user}@${button.dataset.domain}`;
  };

  document.querySelector('.copy-email').addEventListener('click', async () => {
    const feedback = document.querySelector('.copy-feedback');
    try {
      await navigator.clipboard.writeText(emailAddress());
      feedback.textContent = 'Adresse copiée.';
    } catch {
      feedback.textContent = emailAddress();
    }
    window.setTimeout(() => { feedback.textContent = ''; }, 3500);
  });

  document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();
    const body = `Bonjour Wassim,\n\n${message}\n\nCordialement,\n${name}\n${email}`;
    window.location.href = `mailto:${emailAddress()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
