const ROLE = 'Technical Lead & Senior Frontend Engineer';

function initHeroTyping() {
  // Name spans — slide in
  const nameSpans = document.querySelectorAll<HTMLElement>('.hero-name-span');
  nameSpans.forEach((span) => {
    setTimeout(() => span.classList.add('is-visible'), 100);
  });

  // Typing effect
  const typedEl = document.getElementById('hero-typed');
  if (!typedEl) return;

  // Pre-compute where line breaks occur at the current viewport width
  // so we can insert <br> during typing BEFORE the browser wraps text
  const breakIndices: number[] = [];
  typedEl.style.visibility = 'hidden';
  const words = ROLE.split(' ');
  let built = '';
  let lastH = 0;

  for (const word of words) {
    const prev = built;
    built = built ? built + ' ' + word : word;
    typedEl.textContent = built;
    const h = typedEl.offsetHeight;
    if (lastH > 0 && h > lastH) {
      breakIndices.push(prev.length); // space index where this word starts
    }
    lastH = h;
  }

  typedEl.textContent = '';
  typedEl.style.visibility = '';

  let i = 0;
  const delay = setTimeout(() => {
    typedEl.classList.add('typing');
    const interval = setInterval(() => {
      i++;
      let display = ROLE.slice(0, i);
      // Insert pre-computed breaks (from end to preserve indices)
      for (let b = breakIndices.length - 1; b >= 0; b--) {
        const idx = breakIndices[b];
        if (idx < display.length) {
          display = display.slice(0, idx) + '<br>' + display.slice(idx + 1);
        }
      }
      typedEl.innerHTML = display;
      if (i >= ROLE.length) {
        clearInterval(interval);
      }
    }, 50);
  }, 1200);

  // Cleanup not needed for a static portfolio page
  void delay;
}

document.addEventListener('DOMContentLoaded', initHeroTyping);
