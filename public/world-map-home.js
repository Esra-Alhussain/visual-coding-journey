'use strict';
(() => {
 const key='mochi.lesson1.progress.v1';
 const pins=document.querySelectorAll('[data-island]');
 let count=0,selected=0,revision=0;
 function progress(state){return new Set(Array.isArray(state?.completed)?state.completed.filter(n=>Number.isInteger(n)&&n>=0&&n<5):[]).size;}
 function update(){
   const finished=count===5;
   document.getElementById('journeyProgress').textContent=finished?'1 island restored · more islands coming soon':`Island 1 · ${count} of 5 activities complete`;
   document.getElementById('firstIslandRestored').style.opacity=String(count/5);
   pins[0].querySelector('.label small').textContent=finished?'✓ RESTORED':count?'CONTINUE HERE':'START HERE';
   pins[0].setAttribute('aria-label',finished?'Island 1 restored. Revisit Python basics.':'Island 1 available. Inspect Python basics.');
   pins[1].querySelector('.label small').textContent=finished?'COMING SOON':'🔒 FINISH ISLAND 1';
   pins[1].setAttribute('aria-label',finished?'Island 2 coming soon. Inspect its subject and mission.':'Island 2 locked. Finish Island 1 first. Inspect its subject and mission.');
   if(!document.querySelector('.world').classList.contains('show-vision'))document.getElementById('worldState').textContent=finished?'YOUR JOURNEY · ISLAND 1 RESTORED':'YOUR JOURNEY · BRING THE ISLANDS TO LIFE';
   const number=document.querySelector('.count span');number.textContent='ISLANDS · 1 PLAYABLE';
   if(selected===0){
     document.getElementById('islandStatus').textContent=finished?'ISLAND 01 · RESTORED':`ISLAND 01 · ${count}/5 COMPLETE`;
     const enter=document.getElementById('enterIsland');enter.firstChild.textContent=finished?'Revisit island ':count?'Continue island ':'Let’s begin ';
   }else{
     document.getElementById('islandStatus').textContent=`ISLAND ${String(selected+1).padStart(2,'0')} · COMING SOON`;
     document.getElementById('upcoming').textContent=selected===1&&finished?'Coming soon · you finished Island 1':`🔒 Finish Island ${selected} · coming soon`;
   }
 }
 function local(){try{return JSON.parse(localStorage.getItem(key)||'null');}catch{return null;}}
 count=progress(local());pins.forEach((pin,index)=>pin.addEventListener('click',()=>{selected=index;update();}));update();
 window.addEventListener('storage',event=>{if(event.key===key){count=progress(local());update();}});
 window.addEventListener('pageshow',()=>{count=progress(local());update();});
 const auth=window.MochiAuth;
 if(auth){
   auth.onChange(async user=>{
     const request=++revision;
     const account=document.getElementById('accountLink');account.textContent=user?'Account':'Sign in';
     count=progress(local());update();
     if(user)try{const state=await auth.loadProgress();if(request===revision&&state){count=progress(state);update();}}catch{document.getElementById('journeyProgress').textContent+= ' · using this browser’s save';}
   });
 }
})();
