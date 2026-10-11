/* Three simple additive lessons; accepted state only. */
(() => {
 const stage=document.querySelector('.stage'),wrap=document.querySelector('.creature-wrap'),floor=document.querySelector('.home-floor');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const built={floor:false,roof:false};floor.style.visibility='hidden';
 const status=document.createElement('p');status.className='lesson-journey-status';status.setAttribute('role','status');Object.assign(status.style,{position:'absolute',left:'16px',bottom:'8px',margin:'0',font:'11px Consolas,monospace',color:'#ffe0c5',zIndex:'6'});stage.append(status);
 function drop(node){if(reduced.matches)return;if(window.gsap)window.gsap.fromTo(node,{y:-40,opacity:0,scale:.9},{y:0,opacity:1,scale:1,duration:.8,ease:'elastic.out(1,0.45)'});else node.animate?.([{opacity:0,translate:'0 -40px'},{opacity:1,translate:'0 0'}],{duration:650,easing:'ease-out'});}
 const previous=window.MochiVisuals.home;
 window.MochiVisuals.home=state=>{if(state.error||state.pending)return;
 if(state.bricks>0&&!built.floor){built.floor=true;floor.style.visibility='visible';drop(floor);}
 previous(state);if(window.homePromptPending){status.textContent='Lesson 2 / 3 · One brick. Tell Mochi your idea.';return;}
 if(state.roof&&window.cosmicBrickCount===12&&!built.roof){built.roof=true;const roof=document.createElement('div');roof.className='home-roof';roof.setAttribute('aria-label','Completed house roof');Object.assign(roof.style,{position:'absolute',left:'-65px',right:'-65px',bottom:'97px',height:'68px',zIndex:'1',pointerEvents:'none',clipPath:'polygon(50% 0,100% 85%,100% 100%,0 100%,0 85%)',background:'repeating-linear-gradient(0deg,#754c77 0 12px,#a5739a 13px 15px)',filter:'drop-shadow(0 0 6px #ffb5c044)'});wrap.prepend(roof);drop(roof);}
 const count=window.cosmicBrickCount||0,step=count>1?3:built.floor?2:1;
 status.textContent=built.roof?'Lesson 3 / 3 · Your cosmic cottage is complete!':'Lesson '+step+' / 3 · '+(step===1?'Give Mochi a greeting':step===2?'Add brick on a new line':count+' / 12 bricks · Add one brick per line');
 document.querySelector('.toolbar code').textContent=step===1?'mochi.greeting = "Hello!"':count===12?'roof':'brick';
 };window.cosmicJourney=built;window.MochiVisuals.home(window.cosmicHomeState||{bricks:0});
})();
