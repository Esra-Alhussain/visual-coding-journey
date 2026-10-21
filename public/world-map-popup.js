'use strict';
(() => {
  const dialog = document.getElementById('islandDialog');
  const close = document.getElementById('closeIslandDialog');
  let trigger = null;
  function positionCard() {
    if (!dialog.open || !trigger) return;
    if (window.innerWidth <= 680) {
      dialog.style.left = '12px';
      dialog.style.top = '';
      return;
    }
    const pin = trigger.getBoundingClientRect();
    const width = dialog.offsetWidth;
    const height = dialog.offsetHeight;
    let left = pin.right + 12;
    if (left + width > window.innerWidth - 14) left = pin.left - width - 12;
    dialog.style.left = `${Math.max(14, Math.min(left, window.innerWidth - width - 14))}px`;
    dialog.style.top = `${Math.max(14, Math.min(pin.top - 25, window.innerHeight - height - 14))}px`;
  }
  document.querySelectorAll('[data-island]').forEach(pin => {
    pin.setAttribute('aria-haspopup', 'dialog');
    pin.setAttribute('aria-controls', 'islandDialog');
    pin.addEventListener('click', () => {
      trigger = pin;
      if (!dialog.open) dialog.show();
      positionCard();
    });
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('island-dialog-open');
    trigger?.focus();
  });
  dialog.addEventListener('cancel', () => document.body.classList.remove('island-dialog-open'));
  document.addEventListener('click', event => {
    if (dialog.open && !dialog.contains(event.target) && !event.target.closest('[data-island]')) dialog.close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dialog.open) dialog.close();
  });
  window.addEventListener('resize', positionCard);
  window.addEventListener('scroll', positionCard, { passive: true });
})();
