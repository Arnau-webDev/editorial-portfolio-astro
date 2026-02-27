const ROLE = 'Technical Lead Frontend Engineer';

function initHeroTyping() {
  // Name spans — slide in
  const nameSpans = document.querySelectorAll<HTMLElement>('.hero-name-span');
  nameSpans.forEach((span) => {
    setTimeout(() => span.classList.add('is-visible'), 100);
  });

  // Typing effect
  const typedEl = document.getElementById('hero-typed');
  if (!typedEl) return;

  let i = 0;
  const delay = setTimeout(() => {
    typedEl.classList.add('typing');
    const interval = setInterval(() => {
      i++;
      typedEl.textContent = ROLE.slice(0, i);
      if (i >= ROLE.length) {
        clearInterval(interval);
      }
    }, 50);
  }, 1200);

  // Cleanup not needed for a static portfolio page
  void delay;
}

document.addEventListener('DOMContentLoaded', initHeroTyping);
