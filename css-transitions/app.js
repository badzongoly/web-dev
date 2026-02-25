// Build a set of bars inside each .bars container
// and assign each bar a slightly different animation-delay.

const barContainers = document.querySelectorAll('.bars');

barContainers.forEach((container) => {
  const count = Number(container.dataset.count || 24);

  for (let i = 0; i < count; i++) {
    const bar = document.createElement('div');
    bar.className = 'bar';

    // Each bar starts a bit later than the previous one
    // Example: 0ms, 40ms, 80ms, 120ms...
    bar.style.animationDelay = `${i * 40}ms`;

    // Optional: make every 5th bar look different
    if ((i + 1) % 5 === 0) {
      bar.style.opacity = '0.75';
    }

    container.appendChild(bar);
  }
});
