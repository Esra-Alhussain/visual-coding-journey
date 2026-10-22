'use strict';
(() => {
 const small=matchMedia('(max-width:680px)');
 const world=document.querySelector('.world'),scene=document.createElement('div');scene.className='mobile-scene';
 for(const child of [...world.children])scene.appendChild(child);world.appendChild(scene);
 const controls=document.createElement('div');controls.className='mobile-controls';
 controls.innerHTML='<div class="mobile-hint">Drag to explore · pinch or use + / − to zoom</div><button id="mobileMission" type="button">Mission</button><button id="mobileSound" type="button" aria-label="Toggle coastal sound">Sound on</button><button id="mobileZoomOut" type="button" aria-label="Zoom out">−</button><button id="mobileZoomIn" type="button" aria-label="Zoom in">+</button><button id="mobileOverview" type="button">All 5</button><button class="mobile-start" id="mobileStart" type="button">Find Mochi ↗</button>';
 document.body.appendChild(controls);
 const overview=document.createElement('div');overview.className='mobile-overview';overview.innerHTML='<strong>5 islands to restore</strong><small>Island 1 is ready for you</small>';world.appendChild(overview);
 const mission=document.createElement('section');mission.className='mobile-mission';mission.hidden=true;mission.innerHTML='<button type="button" aria-label="Close mission">×</button><small>YOUR JOURNEY</small><h2>Bring the islands back to life.</h2><p>Learn Python with Mochi. Restore the islands, then relight the lighthouse.</p><small>Island 1 is playable now. Four more islands are coming soon.</small>';document.body.appendChild(mission);
 const missionButton=document.getElementById('mobileMission');missionButton.setAttribute('aria-expanded','false');
 missionButton.onclick=()=>{mission.hidden=!mission.hidden;mission.toggleAttribute('open',!mission.hidden);missionButton.setAttribute('aria-expanded',String(!mission.hidden));};mission.querySelector('button').onclick=()=>{mission.hidden=true;mission.removeAttribute('open');missionButton.setAttribute('aria-expanded','false');};
 let zoom=1,x=0,y=0,moved=false;const points=new Map();let start=null;
 function draw(){const limitX=Math.max(0,(1120*zoom-innerWidth)/2+24),limitY=Math.max(0,(746.67*zoom-innerHeight)/2+24);x=Math.max(-limitX,Math.min(limitX,x));y=Math.max(-limitY,Math.min(limitY,y));scene.style.setProperty('--pan-x',x+'px');scene.style.setProperty('--pan-y',y+'px');scene.style.setProperty('--map-zoom',zoom);}
 function focusFirst(){zoom=1;x=1120*.27;y=-746.67*.15;draw();}
 function changeZoom(next){const previous=zoom;zoom=Math.max(.38,Math.min(1.75,next));x*=zoom/previous;y*=zoom/previous;draw();}
 document.getElementById('mobileZoomIn').onclick=()=>changeZoom(zoom+.16);document.getElementById('mobileZoomOut').onclick=()=>changeZoom(zoom-.16);
 document.getElementById('mobileOverview').onclick=()=>{zoom=Math.max(.30,Math.min(innerWidth/1120,(innerHeight-160)/746.67));x=0;y=0;draw();};
 document.getElementById('mobileStart').onclick=event=>{event.stopPropagation();focusFirst();document.querySelector('[data-island="0"]').click();};
 const sound=document.getElementById('soundToggle'),mobileSound=document.getElementById('mobileSound');
 const soundLabel=()=>{const on=sound.getAttribute('aria-pressed')==='true';mobileSound.textContent=on?'Sound on':'Sound off';mobileSound.setAttribute('aria-pressed',String(on));};mobileSound.onclick=()=>sound.click();new MutationObserver(soundLabel).observe(sound,{attributes:true,attributeFilter:['aria-pressed']});soundLabel();
 function gesture(){const values=[...points.values()];start={x,y,zoom,point:values[0],distance:values.length>1?Math.hypot(values[0].x-values[1].x,values[0].y-values[1].y):0};}
 world.addEventListener('pointerdown',e=>{if(!small.matches||e.target.closest('button,a'))return;points.set(e.pointerId,{x:e.clientX,y:e.clientY});world.setPointerCapture(e.pointerId);moved=false;gesture();});
 world.addEventListener('pointermove',e=>{if(!points.has(e.pointerId)||!start)return;points.set(e.pointerId,{x:e.clientX,y:e.clientY});const values=[...points.values()];if(values.length>1&&start.distance){const distance=Math.hypot(values[0].x-values[1].x,values[0].y-values[1].y);zoom=Math.max(.30,Math.min(1.75,start.zoom*distance/start.distance));x=start.x*zoom/start.zoom;y=start.y*zoom/start.zoom;moved=true;}else{const dx=values[0].x-start.point.x,dy=values[0].y-start.point.y;x=start.x+dx;y=start.y+dy;if(Math.abs(dx)+Math.abs(dy)>5)moved=true;}draw();});
 const end=e=>{points.delete(e.pointerId);if(points.size)gesture();else start=null;};world.addEventListener('pointerup',end);world.addEventListener('pointercancel',end);
 world.addEventListener('click',e=>{if(moved){e.stopImmediatePropagation();moved=false;}},true);
 world.addEventListener('wheel',e=>{if(!small.matches)return;e.preventDefault();changeZoom(zoom+(e.deltaY<0?.08:-.08));},{passive:false});
 function layout(){if(small.matches){overview.hidden=false;focusFirst();}else{overview.hidden=true;scene.style.removeProperty('--pan-x');scene.style.removeProperty('--pan-y');scene.style.removeProperty('--map-zoom');}}
 small.addEventListener('change',layout);window.addEventListener('resize',()=>{if(small.matches)draw();});layout();
})();
