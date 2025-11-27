document.addEventListener('DOMContentLoaded', () => {
  const yearEls = document.querySelectorAll('#y');
  const year = new Date().getFullYear();
  yearEls.forEach(el => (el.textContent = year));

  const buttons = document.querySelectorAll('.toggle-btn');
  const panels = document.querySelectorAll('.collapsible');

  buttons.forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', () => {
      const id = btn.dataset.target;
      const panel = document.getElementById(id);
      if (!panel) return;

      const wasOpen = panel.classList.contains('open');

      panels.forEach(p => p.classList.remove('open'));
      buttons.forEach(b => b.setAttribute('aria-expanded', 'false'));

      if (!wasOpen) {
        panel.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
