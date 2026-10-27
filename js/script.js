'use strict';
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const copyButton = document.querySelector('#copy-phone');
const copyStatus = document.querySelector('#copy-status');
if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    const phone = '615 548 570';
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(phone);
      } else {
        const field = document.createElement('textarea');
        field.value = phone;
        field.setAttribute('readonly', '');
        field.setAttribute('aria-label', 'Teléfono para copiar');
        field.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0';
        document.body.appendChild(field);
        field.select();
        let copied = false;
        try { copied = document.execCommand('copy'); }
        finally { field.remove(); copyButton.focus({ preventScroll: true }); }
        if (!copied) throw new Error('Clipboard unavailable');
      }
      copyStatus.textContent = 'Teléfono copiado: 615 548 570';
    } catch {
      copyStatus.textContent = 'No se pudo copiar automáticamente. Selecciona el número: 615 548 570.';
    }
  });
}

// Only the navigation state changes. Content never depends on JavaScript to appear.
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.current a')];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const active = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0].target.id;
    links.forEach(link => {
      if (link.hash === '#' + active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-10% 0px -35% 0px', threshold: [0, .15, .4] });
  links.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
}
