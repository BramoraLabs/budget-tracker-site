(() => {
  document.documentElement.classList.add('js');
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav?.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (header && !header.contains(event.target)) closeMenu();
  });
  const desktop = matchMedia('(min-width: 761px)');
  desktop.addEventListener('change', closeMenu);
  const updateHeader = () => header?.classList.toggle('scrolled', scrollY > 12);
  addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !motionPreference.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-pending');
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(element => {
      if (element.getBoundingClientRect().top >= innerHeight) {
        element.classList.add('is-pending');
        observer.observe(element);
      }
    });
    motionPreference.addEventListener('change', event => {
      if (event.matches) {
        observer.disconnect();
        reveals.forEach(element => element.classList.remove('is-pending'));
      }
    });
    addEventListener('beforeprint', () => {
      reveals.forEach(element => element.classList.remove('is-pending'));
    });
  }

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const activateTab = (tab, focus) => {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab, false));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        activateTab(tabs[next], true);
      }
    });
  });
})();
