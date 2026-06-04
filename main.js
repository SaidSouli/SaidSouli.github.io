/* ══════════════════════════════════════════════
   Said Souli — Portfolio Scripts
   main.js
   ══════════════════════════════════════════════ */

/* ── FADE-UP: section-level observer ── */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));


/* ── STAGGER: project / skill / exp cards ── */
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.project-card, .skill-card, .exp-item');
      cards.forEach((card, i) => {
        card.style.opacity    = '0';
        card.style.transform  = 'translateY(24px)';
        card.style.transition = `opacity .5s ease ${i * 0.08}s, transform .5s ease ${i * 0.08}s`;
        setTimeout(() => {
          card.style.opacity   = '1';
          card.style.transform = 'translateY(0)';
        }, 100 + i * 80);
      });
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.projects-grid, .skills-grid, .exp-list')
        .forEach(el => cardObserver.observe(el));


/* ── CONTACT FORM ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');

  btn.textContent       = 'Message sent ✓';
  btn.style.background  = '#2a2a2a';
  btn.style.color       = 'var(--accent)';
  btn.style.border      = '1px solid var(--accent)';

  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style       = '';
    e.target.reset();
  }, 3000);
}