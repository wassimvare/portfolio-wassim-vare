(() => {
  'use strict';

  const root = document.documentElement;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = systemDark ? 'dark' : 'light';

  try {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') theme = savedTheme;
  } catch {
    // The system preference remains usable when storage is blocked.
  }

  root.dataset.theme = theme;
  root.classList.add('js');
})();
