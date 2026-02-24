function initHeader() {
  const header = document.getElementById('site-header');
  const menuOpenBtn = document.getElementById('menu-open');
  const menuOverlay = document.getElementById('mobile-overlay');
  const menuCloseBtn = document.getElementById('menu-close');
  const menuLinks = document.querySelectorAll<HTMLAnchorElement>('#mobile-overlay nav a');

  // Scroll detection
  if (header) {
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 20) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      },
      { passive: true },
    );
  }

  // Open menu
  if (menuOpenBtn && menuOverlay) {
    menuOpenBtn.addEventListener('click', () => {
      menuOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close menu
  function closeMenu() {
    menuOverlay?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  menuCloseBtn?.addEventListener('click', closeMenu);
  menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
}

document.addEventListener('DOMContentLoaded', initHeader);
