document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');
  const dots = Array.from(document.querySelectorAll('.dot'));
  let idx = 0;
  function show(i) {
    idx = (i + slides.length) % slides.length;
    slides.forEach((s, j) => s.style.display = j === idx ? 'block' : 'none');
    dots.forEach((d, j) => d.classList.toggle('active', j === idx));
  }
  if (!slides.length) return;
  prev.addEventListener('click', () => show(idx - 1));
  next.addEventListener('click', () => show(idx + 1));
  dots.forEach(d => d.addEventListener('click', e => show(Number(e.currentTarget.dataset.index))));
  // keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  show(0);
});
