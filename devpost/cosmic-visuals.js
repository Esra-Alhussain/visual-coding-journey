/* Visual-only adapter: receives accepted state; never parses or executes learner code. */
(() => {
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const blob=document.querySelector('.blob'),wrap=document.querySelector('.creature-wrap');
 const fill=document.querySelector('.fill'),readout=document.querySelector('.readout'),number=document.getElementById('number');
 const counter={value:0};let impulse;const items=new Map();
 function active(){return Boolean(window.gsap)&&!motion.matches}
 function idleLoop(){
  const status=document.getElementById('motionStatus');
  if(status)status.textContent=!window.gsap?'GSAP UNAVAILABLE · BASIC MOTION':motion.matches?'GSAP READY · REDUCED MOTION':'GSAP ACTIVE · LIVE PHYSICS';
  if(impulse)impulse.kill();
  document.documentElement.classList.toggle('gsap-motion',active());
  if(window.gsap)gsap.set([blob,wrap],{clearProps:'transform'});
  // CSS owns continuous breathing; GSAP reacts on the outer wrapper.
 }
 function react(value){
  if(!active())return;
  if(impulse)impulse.kill();
  impulse=gsap.timeline().to(wrap,{y:-value*.15,scaleX:1.07,scaleY:.94,duration:.12,ease:'power2.out'}).to(wrap,{y:0,scaleX:1,scaleY:1,duration:.65,ease:'elastic.out(1,0.4)'});
 }
 function gauge(value,color){
  if(!active())return false;
  gsap.to(fill,{width:value+'%',backgroundColor:color,boxShadow:'0 0 '+(12+value*.18)+'px '+color,duration:.5,ease:'power3.out',overwrite:true});
  gsap.to(readout,{color,textShadow:'0 0 10px '+color+',0 0 '+(20+value*.2)+'px '+color+'66',duration:.4,overwrite:true});
  gsap.to(counter,{value,duration:.5,ease:'power3.out',overwrite:true,onUpdate:()=>{number.textContent=String(Math.round(counter.value*10)/10)},onComplete:()=>{number.textContent=String(value)}});
  react(value);return true;
 }
 // Call only with accepted logical inventory state. Stable ids prevent repeated drops.
 function renderItems(next){
  const ids=new Set(next.map(item=>item.id));
  for(const [id,node] of items){if(!ids.has(id)){if(window.gsap)gsap.killTweensOf(node);node.remove();items.delete(id)}}
  for(const item of next){
   let node=items.get(item.id);
   if(node){node.querySelector('.asset-label').textContent=item.label;continue}
   node=document.createElement('div');node.className='storybook-asset';
   const icon=document.createElement('span');icon.className='asset-icon';icon.textContent=item.kind==='shop'?'▣':'✦';icon.setAttribute('aria-hidden','true');
   const label=document.createElement('span');label.className='asset-label';label.textContent=item.label;node.append(icon,label);document.querySelector('.stage-assets').append(node);items.set(item.id,node);
   if(active())gsap.timeline().fromTo(node,{y:-90,opacity:0,scaleX:.75,scaleY:1.2,rotation:-10},{y:0,opacity:1,scaleX:1.2,scaleY:.78,rotation:0,duration:.45,ease:'bounce.out'}).to(node,{scaleX:1,scaleY:1,duration:.7,ease:'elastic.out(1,0.35)'});
  }
 }
 motion.addEventListener('change',()=>{if(window.gsap){gsap.killTweensOf([fill,readout,counter,...items.values()]);gsap.set([...items.values()],{clearProps:'transform,opacity'});fill.style.width=lastSpeed+'%';number.textContent=String(lastSpeed);counter.value=lastSpeed}idleLoop()});
 window.MochiVisuals={gauge,renderItems};idleLoop();
})();

/* Home narrative: local character/asset effects; no frame or stylesheet changes. */
(() => {
 const editor=document.getElementById('code');
 const blob=document.querySelector('.blob'),wrap=document.querySelector('.creature-wrap'),stage=document.querySelector('.stage');const motion=matchMedia('(prefers-reduced-motion: reduce)');
 let currentForm='smooth',currentColor='pink',name='Mochi',greeting='',brickCount=0,chat=null,chatMode='',questionShown=false,promptPending=false,questionAnswered=false,queuedState=null;const brickNodes=[];
 window.homePromptPending=false;
 function setPromptPending(pending){promptPending=pending;window.homePromptPending=pending;editor.readOnly=pending;editor.setAttribute('aria-readonly',String(pending));editor.setAttribute('aria-describedby',pending?'homePromptHelp':'message')}
 const wall=document.createElement('div');wall.className='home-brick-wall';wall.setAttribute('aria-label','House wall, 4 columns by 3 rows');Object.assign(wall.style,{position:'absolute',left:'-50px',right:'-50px',bottom:'0',height:'180px',pointerEvents:'none',zIndex:'1'});wrap.prepend(wall);document.querySelector('.mochi-breath').style.zIndex='2';
 const ns='http://www.w3.org/2000/svg';const fur=document.createElementNS(ns,'svg');fur.classList.add('mochi-fur');fur.setAttribute('viewBox','-12 -12 124 124');fur.setAttribute('aria-hidden','true');Object.assign(fur.style,{position:'absolute',left:'-14%',top:'-14%',width:'128%',height:'128%',pointerEvents:'none',display:'none'});
 const outline=document.createElementNS(ns,'path');let path='';for(let i=0;i<160;i++){const a=i/160*Math.PI*2,r=i%2?46:53;path+=(i?'L':'M')+(50+Math.cos(a)*r).toFixed(2)+' '+(50+Math.sin(a)*r).toFixed(2)+' '}outline.setAttribute('d',path+'Z');outline.setAttribute('fill','none');outline.setAttribute('stroke-width','2.8');outline.setAttribute('stroke-linejoin','round');fur.append(outline);blob.prepend(fur);
 const palette={mint:'#82f5d9',teal:'#52d7c9',peach:'#ffb99a',coral:'#ff9a9e',lavender:'#ba9bea',purple:'#ab81dc',blue:'#7caef2',pink:'#f2a2cf',gold:'#efd381',red:'#ef737e',green:'#8cce96'};
 function shade(hex,amount){const rgb=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));return '#'+rgb.map(v=>Math.round(amount>0?v+(255-v)*amount:v*(1+amount)).toString(16).padStart(2,'0')).join('')}
 function appearance(){for(const cls of [...blob.classList])if(cls.startsWith('mochi-form-')||cls.startsWith('mochi-color-'))blob.classList.remove(cls);blob.classList.add('mochi-form-'+currentForm,'mochi-color-'+(currentColor.startsWith('#')?'custom':currentColor));fur.classList.toggle('form-furry',currentForm==='furry');const hex=palette[currentColor]||currentColor;blob.style.background='radial-gradient(circle at 28% 20%,'+shade(hex,.75)+'cc,transparent 38%),radial-gradient(circle at 78% 74%,'+shade(hex,-.25)+'88,transparent 43%),linear-gradient(135deg,'+shade(hex,.25)+','+hex+' 48%,'+shade(hex,-.3)+')';outline.setAttribute('stroke',shade(hex,.3));fur.style.filter='drop-shadow(0 0 5px '+hex+'66)';if(window.gsap)gsap.killTweensOf(fur);fur.style.display=currentForm==='furry'?'block':'none';if(currentForm==='furry'&&window.gsap&&!motion.matches)gsap.fromTo(fur,{scale:.88,opacity:0},{scale:1,opacity:1,duration:.6,ease:'elastic.out(1,0.45)'});else{fur.style.opacity='1';fur.style.transform='none'}blob.setAttribute('aria-label',name+' · '+currentForm+' · '+currentColor+'. Tap to show the greeting.')}
 function anchorChat(){if(!chat||chat.hidden)return;const a=wrap.getBoundingClientRect(),s=stage.getBoundingClientRect(),w=chat.offsetWidth,h=chat.offsetHeight;let left=a.left-s.left-w-16;if(left<12)left=a.right-s.left+16;if(left+w>s.width-12)left=Math.max(12,s.width-w-12);const top=Math.max(12,Math.min(a.top-s.top+10,s.height-h-12));chat.style.left=left+'px';chat.style.top=top+'px';chat.style.maxHeight=Math.max(100,s.height-24)+'px'}
 function makeChat(){if(chat)return;chat=document.createElement('section');chat.className='home-mochi-chat';chat.setAttribute('aria-label','Mochi chat');Object.assign(chat.style,{position:'absolute',width:'min(260px, calc(100vw - 24px))',zIndex:'5',padding:'14px',borderRadius:'17px 17px 17px 4px',background:'rgba(255,249,235,0.97)',backdropFilter:'blur(16px)',border:'1px solid #d6b88c',boxShadow:'0 8px 28px rgba(91,61,30,.18)',color:'#5b402e',overflow:'auto'});
 const header=document.createElement('div');Object.assign(header.style,{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'8px'});const who=document.createElement('span');who.className='home-chat-name';who.textContent=name;Object.assign(who.style,{font:'10px Consolas,monospace',letterSpacing:'1px',color:'#8b613a'});const close=document.createElement('button');close.className='home-chat-close';close.type='button';close.textContent='×';close.setAttribute('aria-label','Close Mochi chat');Object.assign(close.style,{border:'0',background:'transparent',color:'#876348',fontSize:'18px'});close.onclick=()=>{if(chatMode==='greeting'||promptPending)return;chat.hidden=true;if(chat.contains(document.activeElement))editor.focus()};header.append(who,close);
 const text=document.createElement('p');text.className='home-chat-text';text.id='homePromptHelp';text.setAttribute('role','status');Object.assign(text.style,{fontSize:'12px',lineHeight:'1.6',margin:'8px 0 12px'});
 const form=document.createElement('form');form.className='home-chat-question';const label=document.createElement('label');label.textContent='What do you think we could do?';label.htmlFor='homeAnswer';Object.assign(label.style,{display:'block',fontSize:'10px',color:'#806044',marginBottom:'5px'});const row=document.createElement('div');Object.assign(row.style,{display:'flex',gap:'6px'});const input=document.createElement('input');input.id='homeAnswer';input.className='home-answer';input.type='text';input.maxLength=160;input.placeholder='Tell Mochi your idea…';Object.assign(input.style,{minWidth:'0',width:'100%',padding:'8px',borderRadius:'8px',border:'1px solid #d6b88c',background:'#fffdf7',color:'#5b402e',fontSize:'11px'});const send=document.createElement('button');send.type='submit';send.textContent='Reply';Object.assign(send.style,{padding:'6px 9px',borderRadius:'8px',border:'1px solid #d6b88c',background:'#f3dfbc',color:'#69482f',fontSize:'10px'});row.append(input,send);const answer=document.createElement('p');answer.className='home-chat-feedback';answer.setAttribute('role','status');Object.assign(answer.style,{fontSize:'10px',lineHeight:'1.6',margin:'8px 0 0',color:'#806044'});form.append(label,row,answer);form.onsubmit=e=>{e.preventDefault();if(!input.value.trim()){answer.textContent='Tell me your idea first. Your code stays yours.';input.focus();anchorChat();return}answer.textContent='Let’s try your idea. Write brick on a new line for each block. Watch them stack into 4 columns and 3 rows. We’ll learn a repetition shortcut later.';questionAnswered=true;setPromptPending(false);close.hidden=false;if(queuedState){const next=queuedState;queuedState=null;renderHome(next)}if(typeof update==='function')update();editor.focus();anchorChat()};chat.append(header,text,form);stage.append(chat)}
 function speak(text,mode){if(window.eggGreetingLocked&&mode==='greeting')text=window.eggGreetingLocked;makeChat();chatMode=mode;chat.querySelector('.home-chat-name').textContent=name;chat.querySelector('.home-chat-text').textContent=text;chat.querySelector('.home-chat-question').hidden=mode!=='question';chat.querySelector('.home-chat-close').hidden=mode==='greeting'||promptPending;chat.hidden=false;anchorChat();if(promptPending)chat.querySelector('.home-answer').focus()}
 function addBrick(index){const brick=document.createElement('div');brick.className='home-brick';brick.dataset.brick=String(index+1);brick.setAttribute('aria-label','Brick '+(index+1));const col=index%4,row=Math.floor(index/4);Object.assign(brick.style,{position:'absolute',left:'calc('+col*25+'% + 2px)',bottom:row*32+'px',width:'calc(25% - 4px)',height:'28px',borderRadius:'4px',border:'1px solid #e8c6a359',background:'linear-gradient(135deg,#c99883,#986c65)',boxShadow:'inset 0 2px 0 #f3cfb938,inset 0 -4px 0 #5f4c5733,0 3px 10px #0000002b'});wall.append(brick);brickNodes.push(brick);if(window.gsap&&!motion.matches)gsap.timeline().fromTo(brick,{y:-70,scaleX:.85,scaleY:1.18,opacity:0},{y:0,scaleX:1.12,scaleY:.88,opacity:1,duration:.45,delay:Math.min(index*.06,.6),ease:'bounce.out'}).to(brick,{scaleX:1,scaleY:1,duration:.45,ease:'elastic.out(1,0.4)'})}
 function renderHome(state){if(state.error||state.pending)return;if(promptPending){queuedState=state;return}let changed=false;if(state.form&&state.form!==currentForm){currentForm=state.form;changed=true}if(state.color&&state.color!==currentColor){currentColor=state.color;changed=true}if(state.name)name=state.name;if(typeof state.greeting==='string'&&(state.greeting!==greeting||!chat)){greeting=state.greeting;if(!questionShown)speak(greeting,'greeting')}if(changed||((state.form||state.color)&&!blob.classList.contains('mochi-form-'+currentForm)))appearance();else blob.setAttribute('aria-label',name+'. Tap to show your greeting.');if(chat)chat.querySelector('.home-chat-name').textContent=name;
 const count=Math.max(brickCount,!questionAnswered&&state.bricks>0?1:state.bricks||0);for(let i=brickCount;i<count;i++)addBrick(i);brickCount=count;window.cosmicBrickCount=brickCount;wall.setAttribute('aria-label','House wall: '+brickCount+' of 12 bricks');if(brickCount&&!questionShown){questionShown=true;queuedState=state;setPromptPending(true);speak("Umm, 1 brick won't build my house walls! What can we do to make enough numbers?",'question')}
 const lesson=brickCount>1?3:brickCount===1?2:1;document.querySelector('.mission').textContent=lesson===1?'Lesson 1 · Variables · Choose Mochi’s form and color.':lesson===2?'Lesson 2 · House base · One brick, one command.':brickCount===12?'Lesson 3 · Sequences · Your 4 × 3 wall is complete.':'Lesson 3 · Sequences · '+brickCount+' / 12 bricks stacked.';document.querySelector('.toolbar code').textContent=lesson===1?'mochi.form = "furry"':lesson===2?'brick':'brick  # one command per line';
 }
 blob.setAttribute('role','button');blob.setAttribute('tabindex','0');blob.onclick=()=>{if(questionShown){speak("Umm, 1 brick won't build my house walls! What can we do to make enough numbers?",'question');return}speak(greeting||'Choose my form and color, then start our home with a brick.','greeting')};blob.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();blob.click()}};
 window.addEventListener('resize',anchorChat);motion.addEventListener('change',()=>{if(motion.matches&&window.gsap){gsap.killTweensOf([fur,...brickNodes]);for(const node of brickNodes){node.style.opacity='1';node.style.transform='none'}}});
 window.MochiVisuals=window.MochiVisuals||{};window.MochiVisuals.home=renderHome;window.MochiVisuals.speak=speak;
 // Preview completed appearance assignments and open greeting strings without executing code.
 function previewLessonOne(){
  if(window.homePromptPending)return;
  const state={bricks:brickCount};
  for(const [lineIndex,line] of editor.value.split('\n').entries()){
   const complete=line.trim().match(/^mochi\s*\.\s*(form|color)\s*=\s*(["'])([^"'\n]+)\2\s*(?:#.*)?$/);
   if(complete){const key=complete[1],value=complete[3];if(key==='form'&&['smooth','furry','fluffy','fur'].includes(value))state.form=value==='smooth'?'smooth':'furry';if(key==='color'&&(palette[value]||/^#[\da-fA-F]{6}$/.test(value)))state.color=value;}
   const greetingLine=lineIndex===0?line.trim().match(/^mochi\s*\.\s*greeting\s*=\s*(["'])(.*)$/):null;
   if(greetingLine){const tail=greetingLine[2],end=tail.indexOf(greetingLine[1]);state.greeting=end<0?tail:tail.slice(0,end);}
  }
  renderHome(state);
 }
 editor.addEventListener('input',previewLessonOne);
 appearance();renderHome(window.cosmicHomeState||{bricks:0});previewLessonOne();
})();
