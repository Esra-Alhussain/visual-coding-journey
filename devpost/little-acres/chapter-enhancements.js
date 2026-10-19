(()=>{'use strict';
const $=s=>document.querySelector(s),path=$('#activity-path'),dialog=$('#activity-complete');
if(!path||!dialog)return;
const applaudPath='art/crowd-clapping-.wav';
const practice=$('#practice-more'),next=$('#next-activity'),actions=$('#completion-actions');
if(actions&&practice&&next)actions.append(practice,next);
const celebrated=new Set();let clapping=null,clapStop=null;
function playClap(){if(typeof Audio==='undefined')return;try{if(clapping){clapping.pause();clapping.currentTime=0;}clearTimeout(clapStop);clapping=new Audio(applaudPath);clapping.volume=.3;clapping.play().catch(()=>{});clapStop=setTimeout(()=>{if(clapping){clapping.pause();clapping.currentTime=0;clapping=null;}},3000);}catch{clapping=null;}}
function celebrate(){const current=+(path.querySelector('[data-activity][aria-current="step"]')?.dataset.activity||0);if(celebrated.has(current))return;celebrated.add(current);playClap();dialog.showModal();requestAnimationFrame(()=>next?.focus());}
const completionObserver=new MutationObserver(records=>{if(records.some(record=>record.attributeName==='hidden')&&!next.hidden)celebrate();});
if(next)completionObserver.observe(next,{attributes:true,attributeFilter:['hidden']});
if(practice){const runPractice=practice.onclick;practice.onclick=event=>{dialog.close();runPractice?.call(practice,event);};}
if(next){const runNext=next.onclick;next.onclick=event=>{dialog.close();runNext?.call(next,event);};}
$('#restart')?.addEventListener('click',()=>celebrated.clear());
window.addEventListener('pagehide',()=>{completionObserver.disconnect();clearTimeout(clapStop);if(clapping){clapping.pause();clapping=null;}});
})();
