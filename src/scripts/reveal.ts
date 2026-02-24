function initReveal() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const threshold = parseFloat(el.dataset.revealThreshold ?? '0.15');
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
  });

  // Arrow connectors (experience section)
  document.querySelectorAll<HTMLElement>('[data-reveal-arrow]').forEach((el) => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
  });

  // Diagram drawn state
  document.querySelectorAll<HTMLElement>('[data-diagram]').forEach((el) => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-drawn');
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initReveal);
