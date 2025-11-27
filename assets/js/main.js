document.addEventListener('DOMContentLoaded', () => {
  const yearEls = document.querySelectorAll('#y');
  const year = new Date().getFullYear();
  yearEls.forEach(el => (el.textContent = year));

  document.querySelectorAll('.toggle-btn').forEach(b => {
    b.setAttribute('aria-expanded', 'false');
  });
  document.querySelectorAll('.collapsible').forEach(p => p.classList.remove('open'));

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (a) {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState({}, '', '#' + id);
      }
    }

    const btn = e.target.closest('.toggle-btn');
    if (btn) {
      const id = btn.dataset.target;
      const panel = document.getElementById(id);
      if (panel) {
        const container = btn.closest('.about__content') || document;
        const nowOpen = !panel.classList.contains('open');
        container
          .querySelectorAll('.collapsible')
          .forEach(p => p.classList.remove('open'));
        container
          .querySelectorAll('.toggle-btn')
          .forEach(b => b.setAttribute('aria-expanded', 'false'));
        if (nowOpen) {
          panel.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      }
    }
  });

  if (location.hash) {
    const initial = document.getElementById(location.hash.slice(1));
    if (initial) {
      initial.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }
});
