/* A bounded game command; deliberately does not evaluate arbitrary JavaScript/Python. */
(function (root) {
 'use strict';
 const route = [[640,744],[740,772],[840,800],[868,731],[896,662],[924,593],[952,524],[980,455],[1008,386]];
 function parse(source, position = 0) {
  const lines = source.split(/\r?\n/);
  if (lines.length > 16) return { error: 'long' };
  const commands = [];
  for (let i = 0; i < lines.length; i++) {
   const line = lines[i].replace(/#.*/, '').trim();
   if (!line) continue;
   const match = /^move\(\s*([1-8])\s*\)$/.exec(line);
   if (!match) return { error: 'syntax', line: i + 1 };
   commands.push(Number(match[1]));
  }
  if (!commands.length) return { error: 'empty' };
  const steps = commands.reduce((a, b) => a + b, 0);
  if (position + steps >= route.length) return { error: 'bounds', remaining: route.length - 1 - position };
  return { steps };
 }
 const engine = { route, parse };
 if (typeof module !== 'undefined' && module.exports) module.exports = engine;
 if (typeof document === 'undefined') return;
 const $ = id => document.getElementById(id);
 const phone = matchMedia('(max-width:680px)');
 const reduced = matchMedia('(prefers-reduced-motion:reduce)');
 const workspace = $('walkWorkspace');
 const hud = document.querySelector('.hud');
 let index = 0, entered = false, running = false, revision = 0, feedback = null;
 const text = {
  en: { title:'Walk to the farmhouse', eyebrow:'BEFORE LESSON 1', task:'Mochi starts at the bridge. Count the outlined squares to the door. One square is one step.', label:'Write your movement code', placeholder:'Type your movement code here…', help:'How to move', hint:'Use move(1) to advance one square along the path. Change the number to move more steps. This is a game command.', run:'Run ▶', stop:'Stop', reset:'Reset', enter:'Enter the farm · Start Lesson 1 →', language:'العربية', count:n=>`${n} / 8 steps`, progress:n=>`${8-n} steps left to the door.`, arrived:'You reached the farmhouse! Ready for your first Python lesson?', stopped:'Stopped. Mochi stays on this square.', syntax:n=>`Line ${n}: use move(1) through move(8).`, bounds:n=>`Only ${n} steps remain. Count the squares before running.`, empty:'Write a move(...) command first.', long:'Keep your program to 16 lines or fewer.' },
  ar: { title:'امشِ إلى بيت المزرعة', eyebrow:'قبل الدرس الأول', task:'يبدأ موشي عند الجسر. عُدّ المربعات المحددة حتى الباب. كل مربع يساوي خطوة.', label:'اكتب كود الحركة', placeholder:'اكتب كود الحركة هنا…', help:'كيف تتحرك؟', hint:'استخدم move(1) للتقدم مربعًا واحدًا على المسار. غيّر الرقم للتقدم خطوات أكثر. هذا أمر خاص باللعبة.', run:'تشغيل ▶', stop:'إيقاف', reset:'من البداية', enter:'ادخل المزرعة · ابدأ الدرس الأول ←', language:'English', count:n=>`${n} / 8 خطوات`, progress:n=>`بقيت ${8-n} خطوات إلى الباب.`, arrived:'وصلت إلى بيت المزرعة! هل أنت مستعد لأول درس بايثون؟', stopped:'توقف موشي في هذا المربع.', syntax:n=>`السطر ${n}: استخدم move(1) إلى move(8).`, bounds:n=>`بقيت ${n} خطوات فقط. عُدّ المربعات قبل التشغيل.`, empty:'اكتب أمر move(...) أولًا.', long:'اكتب برنامجًا من 16 سطرًا أو أقل.' }
 };
 const lang = () => document.documentElement.lang === 'ar' ? 'ar' : 'en';
 const svgNS = 'http://www.w3.org/2000/svg';
 const grid = document.createElementNS(svgNS,'svg');
 grid.setAttribute('viewBox','0 0 1600 1067');
 grid.setAttribute('class','walk-grid');
 grid.setAttribute('aria-hidden','true');
 route.forEach(([x,y],i) => {
  const group = document.createElementNS(svgNS,'g');
  const cell = document.createElementNS(svgNS,'polygon');
  cell.setAttribute('points',`${x-64},${y+20.5} ${x+36},${y+48.5} ${x+64},${y-20.5} ${x-36},${y-48.5}`);
  const label = document.createElementNS(svgNS,'text');
  label.setAttribute('x',x);label.setAttribute('y',y+8);
  label.textContent = String(i);
  group.append(cell,label);grid.append(group);
 });
 document.querySelector('.world').append(grid);
 function active() { return phone.matches && !entered; }
 function render() {
  const t = text[lang()];
  document.body.classList.toggle('walk-active',active());
  document.body.classList.toggle('walk-running',active() && running);
  workspace.hidden = !active();hud.inert = active();
  [['walkTitle','title'],['walkEyebrow','eyebrow'],['walkTask','task'],['walkLabel','label'],['walkHelp','help'],['walkHint','hint'],['walkRun','run'],['walkStop','stop'],['walkReset','reset'],['walkContinue','enter'],['walkLanguage','language']].forEach(([id,k]) => $(id).textContent=t[k]);
  $('walkCode').placeholder=t.placeholder;
  $('walkCount').textContent=t.count(index);
  $('walkContinue').hidden=index!==route.length-1;
  $('walkRun').disabled=running || index===route.length-1;
  $('walkStop').disabled=!running;
  $('walkCode').readOnly=running;
  const status = feedback || { kind:index===route.length-1?'arrived':'progress',value:index };
  $('walkFeedback').textContent=typeof t[status.kind]==='function'?t[status.kind](status.value):t[status.kind];
  $('walkFeedback').classList.toggle('walk-error',['syntax','empty','bounds','long'].includes(status.kind));
  [...grid.children].forEach((g,i)=>{g.classList.toggle('current',i===index);g.classList.toggle('visited',i<index);g.classList.toggle('goal',i===route.length-1);});
  window.dispatchEvent(new Event('mochi-walk-position'));
 }
 function cancel() { revision++;running=false; }
 $('walkRun').addEventListener('click',async () => {
  const program=parse($('walkCode').value,index);
  if(program.error){feedback={kind:program.error,value:program.line ?? program.remaining};render();return;}
  $('walkCode').blur();
  const request=++revision;running=true;feedback=null;render();
  for(let step=0;step<program.steps;step++){
   await new Promise(resolve=>setTimeout(resolve,reduced.matches?80:500));
   if(request!==revision || !active())return;
   index++;render();
  }
  running=false;render();
 });
 $('walkStop').addEventListener('click',()=>{cancel();feedback={kind:'stopped'};render();});
 $('walkReset').addEventListener('click',()=>{cancel();index=0;feedback=null;render();});
 $('walkContinue').addEventListener('click',()=>{
  if(index!==route.length-1)return;
  cancel();entered=true;render();
  window.dispatchEvent(new Event('mochi-walk-finished'));
 });
 $('walkLanguage').addEventListener('click',()=>$('langBtn').click());
 new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 phone.addEventListener('change',()=>{cancel();render();});
 root.MochiWalk={get active(){return active();},get position(){const point=active()?route[index]:route[route.length-1];return {x:point[0]/1600,y:point[1]/1067};}};
 render();
})(typeof window !== 'undefined' ? window : globalThis);
