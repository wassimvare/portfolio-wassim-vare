(() => {
  'use strict';

  const root = document.documentElement;
  const header = document.querySelector('[data-site-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-site-nav]');
  const backTop = document.querySelector('[data-back-top]');

  function watchMedia(query, handler) {
    if (query.addEventListener) query.addEventListener('change', handler);
    else query.addListener?.(handler);
  }

  function setupTheme() {
    const button = document.querySelector('[data-theme-toggle]');
    const label = button?.querySelector('[data-theme-label]');
    const themeColor = document.querySelector('meta[name="theme-color"]');
    const system = window.matchMedia('(prefers-color-scheme: dark)');
    let manualTheme;

    try {
      manualTheme = localStorage.getItem('portfolio-theme');
    } catch {
      // Theme selection still works for the current page.
    }

    function applyTheme() {
      const theme = manualTheme === 'light' || manualTheme === 'dark'
        ? manualTheme
        : system.matches ? 'dark' : 'light';
      const light = theme === 'light';
      const action = light ? 'Activer le thème sombre' : 'Activer le thème clair';
      root.dataset.theme = theme;
      themeColor?.setAttribute('content', light ? '#F7FAFF' : '#07111F');
      if (button) {
        button.setAttribute('aria-label', action);
        button.title = action;
      }
      if (label) label.textContent = action;
    }

    if (button) {
      button.hidden = false;
      button.addEventListener('click', () => {
        manualTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
        try {
          localStorage.setItem('portfolio-theme', manualTheme);
        } catch {
          // The new theme can still be displayed on this page.
        }
        applyTheme();
      });
    }

    watchMedia(system, applyTheme);
    window.addEventListener('storage', event => {
      if (event.key === 'portfolio-theme' || event.key === null) {
        manualTheme = event.newValue;
        applyTheme();
      }
    });
    applyTheme();
  }

  function focusDestination(target) {
    if (!target) return;
    if (!target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
    target.focus({ preventScroll: true });
  }

  function setupMenu() {
    if (!header || !menuButton || !nav) return;

    const viewport = window.matchMedia('(max-width: 63.99rem)');
    const isOpen = () => menuButton.getAttribute('aria-expanded') === 'true';
    const setOpen = open => {
      nav.classList.toggle('is-open', open);
      header.classList.toggle('is-menu-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    };

    nav.classList.add('is-enhanced');
    menuButton.hidden = false;
    menuButton.addEventListener('click', () => {
      const open = !isOpen();
      setOpen(open);
      if (open) nav.querySelector('a[href]')?.focus({ preventScroll: true });
    });

    nav.addEventListener('click', event => {
      const link = event.target.closest('a[href]');
      if (!link || !isOpen() || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

      setOpen(false);
      const href = link.getAttribute('href');
      if (href.startsWith('#')) focusDestination(document.getElementById(href.slice(1)));
    });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || !isOpen() || event.defaultPrevented) return;
      event.preventDefault();
      setOpen(false);
      menuButton.focus();
    });

    document.addEventListener('click', event => {
      if (isOpen() && !header.contains(event.target)) {
        const focusInNav = nav.contains(document.activeElement);
        setOpen(false);
        if (focusInNav) menuButton.focus({ preventScroll: true });
      }
    });

    watchMedia(viewport, () => {
      const focusInNav = nav.contains(document.activeElement);
      const focusOnMenu = document.activeElement === menuButton;
      setOpen(false);
      if (viewport.matches && focusInNav) menuButton.focus({ preventScroll: true });
      if (!viewport.matches && focusOnMenu) {
        const current = nav.querySelector('[aria-current]') || nav.querySelector('a[href]');
        current?.focus({ preventScroll: true });
      }
    });
  }

  function setupScroll() {
    const sections = [...(nav?.querySelectorAll('a[href^="#"]') || [])]
      .map(link => ({ link, section: document.getElementById(link.hash.slice(1)) }))
      .filter(item => item.section);
    const sectionsInReverseOrder = [...sections].reverse();
    let activeLink;
    let frame = 0;

    function update() {
      frame = 0;
      header?.classList.toggle('is-scrolled', window.scrollY > 10);
      backTop?.classList.toggle('is-visible', window.scrollY > 520);
      if (!sections.length) return;

      const headerBottom = Math.max(header?.getBoundingClientRect().bottom || 0, 0);
      const threshold = headerBottom + Math.min(window.innerHeight * 0.18, 96);
      const atBottom = window.scrollY > 0 && Math.ceil(window.scrollY + window.innerHeight) >= root.scrollHeight - 2;
      const visible = atBottom ? sectionsInReverseOrder[0] : sectionsInReverseOrder
        .find(({ section }) => section.getBoundingClientRect().top <= threshold) || sections[0];

      if (visible.link === activeLink) return;
      sections.forEach(({ link }) => {
        const active = link === visible.link;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      activeLink = visible.link;
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    if (backTop) {
      backTop.hidden = false;
      backTop.classList.add('is-enhanced');
      backTop.addEventListener('click', event => {
        if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
        const target = document.getElementById(backTop.hash.slice(1)) || header?.querySelector('a[href]');
        focusDestination(target);
      });
    }

    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(scheduleUpdate);
      observer.observe(document.body);
    }
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    update();
  }

  function setupReveals() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window) || reducedMotion.matches) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        target.classList.add('is-revealed');
        observer.unobserve(target);
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('[data-reveal]').forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) observer.observe(element);
    });
  }

  async function copyEmail(email) {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        return true;
      } catch {
        // Clipboard permission can differ between browser contexts.
      }
    }

    const field = document.createElement('textarea');
    const active = document.activeElement;
    field.value = email;
    field.readOnly = true;
    field.tabIndex = -1;
    field.style.cssText = 'position:fixed;opacity:0;inset:0 auto auto 0;';
    document.body.append(field);
    field.select();
    field.setSelectionRange(0, email.length);

    try {
      return document.execCommand('copy');
    } catch {
      return false;
    } finally {
      field.remove();
      active?.focus({ preventScroll: true });
    }
  }

  function setupContact() {
    const status = document.querySelector('[data-copy-status]');
    if (!status) return;

    document.querySelectorAll('[data-copy-email]').forEach(button => {
      const email = button.dataset.copyEmail;
      if (!email) return;

      button.hidden = false;
      button.addEventListener('click', async () => {
        status.textContent = '';
        status.textContent = await copyEmail(email)
          ? 'Adresse e-mail copiée.'
          : `Adresse à copier : ${email}`;
      });
    });
  }

  const icons = {
    previous: '<path d="m15 18-6-6 6-6"/>',
    next: '<path d="m9 18 6-6-6-6"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
  };

  function galleryButton(label, icon) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'gallery-button';
    button.setAttribute('aria-label', label);
    button.title = label;
    button.innerHTML = `<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[icon]}</svg>`;
    return button;
  }

  function galleryControls(shift) {
    const controls = document.createElement('div');
    const previous = galleryButton('Image précédente', 'previous');
    const next = galleryButton('Image suivante', 'next');
    const count = document.createElement('span');
    controls.className = 'gallery-controls';
    count.className = 'gallery-count';
    count.setAttribute('role', 'status');
    previous.addEventListener('click', () => shift(-1));
    next.addEventListener('click', () => shift(1));
    controls.append(previous, count, next);
    return { controls, previous, next, count };
  }

  function observeSwipe(element, shift) {
    let start;

    element.addEventListener('pointerdown', event => {
      if (!event.isPrimary || event.pointerType === 'mouse') return;
      start = { id: event.pointerId, x: event.clientX, y: event.clientY };
    });
    element.addEventListener('pointercancel', () => { start = undefined; });
    element.addEventListener('pointerup', event => {
      if (start?.id !== event.pointerId) return;
      const x = event.clientX - start.x;
      const y = event.clientY - start.y;
      start = undefined;
      if (Math.abs(x) > 50 && Math.abs(x) > Math.abs(y) * 1.5) shift(x < 0 ? 1 : -1);
    });
  }

  function setupGallery(gallery) {
    const slides = [...gallery.querySelectorAll('[data-gallery-slide]')].map(figure => {
      const link = figure.querySelector('[data-gallery-open]');
      return { figure, link, image: link?.querySelector('img'), caption: figure.querySelector('figcaption') };
    }).filter(({ image }) => image);
    if (!slides.length) return;

    const filters = gallery.querySelector('[data-gallery-filters]');
    const filterButtons = [...(filters?.querySelectorAll('[data-gallery-filter]') || [])];
    const thumbnails = document.createElement('div');
    thumbnails.className = 'gallery-thumbnails';
    thumbnails.setAttribute('role', 'group');
    thumbnails.setAttribute('aria-label', 'Miniatures de la galerie');

    let availableSlides = slides;
    let current = 0;
    let preventClickUntil = 0;
    let opener;

    function shift(distance) {
      if (availableSlides.length < 2) return;
      select((current + distance + availableSlides.length) % availableSlides.length);
    }

    const controls = galleryControls(shift);
    gallery.append(controls.controls, thumbnails);

    const dialog = document.createElement('dialog');
    const dialogSupported = typeof dialog.showModal === 'function';
    const dialogInner = document.createElement('div');
    const preview = document.createElement('img');
    const caption = document.createElement('p');
    const close = galleryButton('Fermer l’agrandissement', 'close');
    const dialogControls = galleryControls(shift);

    if (dialogSupported) {
      dialog.className = 'gallery-dialog';
      dialog.setAttribute('aria-label', gallery.getAttribute('aria-label') || 'Galerie de photos');
      dialogInner.className = 'gallery-dialog-inner';
      preview.className = 'gallery-dialog-image';
      caption.className = 'gallery-dialog-caption';
      close.classList.add('gallery-dialog-close');
      dialogControls.controls.classList.add('gallery-dialog-controls');
      dialogInner.append(close, preview, caption, dialogControls.controls);
      dialog.append(dialogInner);
      document.body.append(dialog);

      close.addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close();
      });
      dialog.addEventListener('close', () => {
        if (!opener) return;
        const previous = slides.find(slide => slide.link === opener);
        const focus = previous?.figure.hidden ? availableSlides[current].link : opener;
        focus.focus({ preventScroll: true });
        opener = undefined;
      });
      observeSwipe(preview, shift);
    }

    function select(index) {
      current = index;
      const selected = availableSlides[current];
      const previousFocus = document.activeElement;
      const focusWasOnSlide = slides.some(slide => slide !== selected && slide.figure.contains(previousFocus));
      slides.forEach(slide => {
        const active = slide === selected;
        slide.figure.hidden = !active;
        if (active) slide.thumbnail.setAttribute('aria-current', 'true');
        else slide.thumbnail.removeAttribute('aria-current');
      });

      const count = `${current + 1} / ${availableSlides.length}`;
      const single = availableSlides.length === 1;
      controls.count.textContent = count;
      controls.previous.disabled = single;
      controls.next.disabled = single;
      thumbnails.hidden = single;

      if (dialog.open) {
        preview.src = selected.link.href;
        preview.alt = selected.image.alt;
        caption.textContent = selected.caption?.textContent.trim() || '';
        dialogControls.count.textContent = count;
        dialogControls.previous.disabled = single;
        dialogControls.next.disabled = single;
      }
      if (focusWasOnSlide) selected.link.focus({ preventScroll: true });
    }

    slides.forEach(slide => {
      const thumbnail = document.createElement('button');
      const image = document.createElement('img');
      const thumbnailCaption = slide.caption?.textContent.trim() || slide.image.alt;
      thumbnail.type = 'button';
      thumbnail.className = 'gallery-thumbnail';
      image.alt = '';
      image.width = 80;
      image.height = 58;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.src = slide.image.dataset.thumbnail || slide.image.src;
      thumbnail.append(image);
      thumbnails.append(thumbnail);
      slide.thumbnail = thumbnail;

      thumbnail.addEventListener('click', () => {
        const index = availableSlides.indexOf(slide);
        if (index !== -1) select(index);
      });
      observeSwipe(slide.figure, distance => {
        if (availableSlides.length < 2) return;
        preventClickUntil = performance.now() + 350;
        shift(distance);
      });

      if (dialogSupported) {
        slide.link.setAttribute('aria-haspopup', 'dialog');
        slide.link.addEventListener('click', event => {
          if (event.defaultPrevented || event.button !== 0 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
          event.preventDefault();
          if (event.detail > 0 && performance.now() < preventClickUntil) return;
          opener = slide.link;
          dialog.showModal();
          select(current);
          close.focus();
        });
      }

      slide.thumbnailCaption = thumbnailCaption;
    });

    function filter(category) {
      const matches = slides.filter(({ figure }) => {
        const categories = (figure.dataset.galleryCategory || '').split(/\s+/);
        return category === 'all' || categories.includes(category);
      });
      if (!matches.length) return;

      availableSlides = matches;
      filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.galleryFilter === category)));
      slides.forEach(slide => {
        const index = availableSlides.indexOf(slide);
        slide.thumbnail.hidden = index === -1;
        if (index !== -1) {
          const label = `Afficher l’image ${index + 1} sur ${availableSlides.length} : ${slide.thumbnailCaption}`;
          slide.thumbnail.setAttribute('aria-label', label);
        }
      });
      select(0);
    }

    function handleArrows(event) {
      if (availableSlides.length < 2 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      shift(event.key === 'ArrowLeft' ? -1 : 1);
    }

    filterButtons.forEach(button => button.addEventListener('click', () => filter(button.dataset.galleryFilter)));
    if (filters) filters.hidden = false;
    gallery.addEventListener('keydown', handleArrows);
    dialog.addEventListener('keydown', handleArrows);
    gallery.classList.add('is-enhanced');
    filter('all');
  }

  setupTheme();
  setupMenu();
  setupScroll();
  setupReveals();
  setupContact();
  document.querySelectorAll('[data-gallery]').forEach(setupGallery);
  document.querySelectorAll('[data-year]').forEach(year => { year.textContent = new Date().getFullYear(); });
})();
