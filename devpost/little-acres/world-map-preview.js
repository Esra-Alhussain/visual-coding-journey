'use strict';
(() => {
  const islands = [
    ['Getting started with Python', 'Meet Mochi. Print your first message, store values, try calculations and write comments.'],
    ['How programs work', 'A future stop at the watermill: instruction order, input and output, and understanding errors.'],
    ['Variables and expressions', 'A future stop in the glass garden: values, names, types and arithmetic.'],
    ['Conditions and decisions', 'A future stop at the lighthouse: explore decisions with if and else.'],
    ['Loops and repetition', 'A future stop in the orchard: discover how repeating small actions can bring a world to life.']
  ];
  document.querySelectorAll('[data-island]').forEach(button => {
    button.addEventListener('click', () => {
      const selected = Number(button.dataset.island);
      document.querySelectorAll('[data-island]').forEach(pin => {
        const active = pin === button;
        pin.classList.toggle('active', active);
        pin.setAttribute('aria-pressed', String(active));
      });
      const number = String(selected + 1).padStart(2, '0');
      document.getElementById('islandNumber').textContent = number;
      document.getElementById('islandStatus').textContent = `ISLAND ${number} · ${selected === 0 ? 'AVAILABLE NOW' : 'PLANNED · COMING SOON'}`;
      document.getElementById('islandTitle').textContent = islands[selected][0];
      document.getElementById('islandDescription').textContent = islands[selected][1];
      document.getElementById('enterIsland').hidden = selected !== 0;
      document.getElementById('upcoming').hidden = selected === 0;
    });
  });
})();
