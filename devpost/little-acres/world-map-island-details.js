'use strict';
(() => {
 const pins = document.querySelectorAll('[data-island]');
 const cards = [
   ['🌱 First Steps', 'Give Mochi’s farm a fresh start.', 'Python basics', 'Repair the cottage · revive the garden'],
   ['💧 The Watermill', 'Let the water flow again.', 'Instructions · input & output', 'Repair the wheel · clear the channel'],
   ['🌿 The Glass Garden', 'Make room for something green.', 'Variables · expressions', 'Rebuild the greenhouse · plant new life'],
   ['✨ The Lighthouse', 'Bring hope to the rocky shore.', 'if · else', 'Repair the tower · prepare the beacon'],
   ['🍊 The Orchard', 'One small action. A whole new orchard.', 'Loops · repetition', 'Revive the trees · restore the garden']
 ];
 function details(index) {
   document.getElementById('islandTitle').textContent = cards[index][0];
   document.getElementById('islandTagline').textContent = cards[index][1];
   document.getElementById('islandDescription').textContent = cards[index][2];
   document.getElementById('restorationGoal').textContent = cards[index][3];
   document.getElementById('islandStatus').textContent = `ISLAND ${String(index + 1).padStart(2, '0')} · ${index ? 'LOCKED' : 'AVAILABLE NOW'}`;
   document.getElementById('accessNote').textContent = index ? `Finish Island ${index} to unlock this stop in the planned journey. This chapter is still in development.` : 'Start here · the existing Python basics lesson is available.';
   document.getElementById('upcoming').textContent = `🔒 Finish Island ${index} to unlock`;
 }
 pins.forEach((pin,index) => {
   if(index) {
     pin.classList.add('locked-island');
     pin.querySelector('.label small').textContent = `🔒 FINISH ISLAND ${index}`;
   }
   pin.setAttribute('aria-label', `Island ${index+1}. ${index ? `Locked. Finish Island ${index} first.` : 'Available.'} Inspect subject and restoration summary.`);
   pin.setAttribute('aria-controls', 'islandTitle islandDescription restorationGoal');
   pin.addEventListener('click', () => details(index));
 });
 document.getElementById('visionToggle').addEventListener('click', () => {
   document.querySelector('.world').classList.toggle('show-vision', document.getElementById('visionToggle').getAttribute('aria-pressed') === 'true');
 });
 details(0);
})();
