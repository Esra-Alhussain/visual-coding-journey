(function(){
'use strict';
const E=FarmEngine,$=id=>document.getElementById(id),NS='http://www.w3.org/2000/svg';
const farms=Object.fromEntries(Object.keys(E.OPTIONS).map(k=>[k,E.create(k)]));
let option='meadow',selected=1,tool='plant',busy=false,runId=0,pending=Promise.resolve(),sound=false,audio;
const waits=new Map(),plotNodes=new Map(),plotKeys=new Map(),celebrated=new Set();let depthItems=[],actor;
const state=()=>farms[option],point=p=>({x:520+(p.x-p.y)*58,y:180+(p.x+p.y)*29});
function svg(tag,attrs={},parent){const n=document.createElementNS(NS,tag);for(const[k,v]of Object.entries(attrs))n.setAttribute(k,v);if(parent)parent.appendChild(n);return n;}
function text(parent,value,attrs={}){const n=svg('text',attrs,parent);n.textContent=value;return n;}
function polygon(parent,points,fill,attrs={}){return svg('polygon',{points,fill,...attrs},parent);}
function feedback(message,error=false){$('feedback').textContent=message;$('feedback').classList.toggle('error',error);}
function say(message){$('dialogue').textContent=message;}
function beat(notes=[440],duration=.08){if(!sound)return;try{audio??=new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();notes.forEach((hz,i)=>{const o=audio.createOscillator(),g=audio.createGain(),t=audio.currentTime+i*.08;o.frequency.value=hz;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.035,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(audio.destination);o.start(t);o.stop(t+duration+.02);});}catch{sound=false;$('sound').textContent='Sound unavailable';}}
function setBusy(value){busy=value;$('run').disabled=value;$('stop').disabled=!value;$('code').readOnly=value;document.querySelectorAll('[data-tool], [data-example]').forEach(b=>b.disabled=value);$('special').disabled=value;}
function sleep(ms,id){return new Promise(resolve=>{const t=setTimeout(()=>{waits.delete(t);resolve(id===runId);},ms);waits.set(t,resolve);});}
function cancel(){runId++;for(const[t,res]of waits){clearTimeout(t);res(false);}waits.clear();setBusy(false);if(actor){actor.classList.remove('walking','acting');actor.style.transitionDuration='0ms';}}
function launch(fn){if(busy){feedback('Mochi is following the current instructions. Wait, or press Stop.');return pending;}const id=runId;setBusy(true);pending=(async()=>{try{return await fn(id);}catch(e){feedback('The action could not finish. Your crops are safe; reset the farm to try again.',true);console.error(e);}finally{if(id===runId){setBusy(false);actor?.classList.remove('walking','acting');}}})();return pending;}
function addDepth(node,x,y,bias=0){depthItems.push({node,x,y,bias});return node;}
function sortDepth(){for(const item of [...depthItems].sort((a,b)=>(a.x+a.y+a.bias)-(b.x+b.y+b.bias)))$('depth').appendChild(item.node);}
function makeFarmer(parent,small=false){
 const g=svg('g',{},parent);svg('ellipse',{cy:7,rx:25,ry:9,fill:'#426b48',opacity:.17},g);
 const body=svg('g',{class:'farmer-body'},g);
 svg('ellipse',{cx:-12,cy:1,rx:10,ry:7,fill:'#916f4c',class:'left-boot'},body);svg('ellipse',{cx:12,cy:1,rx:10,ry:7,fill:'#916f4c',class:'right-boot'},body);
 svg('path',{d:'M-28-31Q-43-29-38-16Q-32-9-23-19M28-31Q43-29 38-16Q32-9 23-19',fill:'#ebc895'},body);
 svg('path',{d:'M-30-45Q-34-78 0-82Q36-78 31-43L27-8Q0 9-27-8Z',fill:'url(#leafBody)',stroke:'#56916c','stroke-width':1.5},body);
 svg('path',{d:'M-25-41Q-28-67 0-67Q28-67 26-41Q28-17 0-17Q-28-17-25-41',fill:'url(#face)'},body);
 const eyes=svg('g',{class:'eyes'},body);for(const x of [-10,10]){svg('ellipse',{cx:x,cy:-44,rx:3.5,ry:5.5,fill:'#435747'},eyes);svg('circle',{cx:x-1,cy:-46,r:1.2,fill:'#fff9e2'},eyes);}
 for(const x of [-17,17])svg('ellipse',{cx:x,cy:-34,rx:6,ry:3.5,fill:'#e5a48a',opacity:.7},body);
 svg('path',{d:'M-4-31Q0-26 4-31',stroke:'#8a6b51','stroke-width':2,fill:'none','stroke-linecap':'round'},body);
 svg('path',{d:'M-18-14V-7Q0 4 18-7v-7l-10-6H-8Z',fill:'#6c9b97'},body);svg('path',{d:'M-11-19v10m22-10v10',stroke:'#b2ccc0','stroke-width':3},body);
 // Original little straw hat, made from simple rounded shapes.
 svg('ellipse',{cy:-72,rx:42,ry:11,fill:'#caaa67',stroke:'#b39555','stroke-width':1.5},body);svg('path',{d:'M-27-74Q-23-101 0-101Q25-100 28-74Q0-60-27-74Z',fill:'#e8cb84'},body);svg('path',{d:'M-26-76Q0-65 27-76',fill:'none',stroke:'#a4b278','stroke-width':7},body);
 svg('path',{d:'M14-88Q20-103 28-98Q30-88 14-83',fill:'#82ad6c'},body);
 const can=svg('g',{class:'farmer-can',opacity:0,transform:'translate(26 -25)'},body);svg('path',{d:'M0 0h20v19Q10 24 0 19Z',fill:'#d2dcb3',stroke:'#739179','stroke-width':2},can);svg('path',{d:'m20 5 15-8 2 5-17 12M0 3Q-11-5-10 9L0 14',fill:'none',stroke:'#739179','stroke-width':3},can);
 if(small)g.setAttribute('transform','scale(.78)');return g;
}
function building(type){
 const g=svg('g',{filter:'url(#drop)'},null);
 polygon(g,'-80,0 22,-52 113,0 12,54','#7a9162',{opacity:.2});
 polygon(g,'-67,-8 -67,-100 16,-59 16,39','#f3dfaa');polygon(g,'16,-59 102,-101 102,-7 16,39','#d9c697');
 polygon(g,'-79,-100 6,-153 114,-102 17,-53','url(#roof)');polygon(g,'6,-153 43,-178 130,-126 114,-102','#efb17c');
 svg('path',{d:'m-78-100 95 47 97-49M5-153l109 51',fill:'none',stroke:'#f2be85','stroke-width':5,'stroke-linecap':'round'},g);
 for(let i=0;i<5;i++)svg('path',{d:'M'+(-51+i*18)+' '+(-114-i*6)+'l91 45',fill:'none',stroke:'#c57854','stroke-width':2,opacity:.4},g);
 polygon(g,'-41,-54 -8,-38 -8,25 -41,10','#9a9c73');polygon(g,'-34,-46 -15,-37 -15,16 -34,7','#6e9277');svg('circle',{cx:-20,cy:-7,r:2.5,fill:'#f5d497'},g);
 polygon(g,'42,-47 70,-60 70,-34 42,-20','#a8c7af',{stroke:'#ac9c6a','stroke-width':4});svg('path',{d:'M56-54v27',stroke:'#b4a16b','stroke-width':3},g);
 if(type==='cafe'){
   polygon(g,'-72,-63 18,-21 32,-45 -57,-88','#f5d2ad');for(let i=0;i<5;i++)polygon(g,(-72+i*18)+','+(-63+i*8.4)+' '+(-63+i*18)+','+(-59+i*8.4)+' '+(-48+i*18)+','+(-84+i*8.4)+' '+(-57+i*18)+','+(-88+i*8.4),'#cfa08a');
   svg('path',{d:'M-70-64V4M17-20v58',stroke:'#b99369','stroke-width':4},g);
   const table=svg('g',{transform:'translate(0 70)'},g);polygon(table,'-40,-10 0,-31 40,-10 0,10','#c5a075');svg('path',{d:'M0 9v29m-28-37v25m57-26v26',stroke:'#ac865e','stroke-width':5},table);svg('ellipse',{cx:1,cy:-9,rx:12,ry:5,fill:'#f4e7bf'},table);
   const guest=svg('g',{id:'guest',transform:'translate(-70 68)'},g);makeFarmer(guest,true);guest.style.opacity=state().delivered?'1':'0';
 }else{
   const hay=svg('g',{transform:'translate(95 28)'},g);polygon(hay,'-22,-12 8,-27 34,-14 5,3','#e7c778');polygon(hay,'-22,-12 5,3 5,29 -22,13','#d4b168');polygon(hay,'5,3 34,-14 34,12 5,29','#bc9c59');svg('path',{d:'m-13-8 29-15m-20 21 29-15M-13-7v23M17-4v25',stroke:'#bda36a','stroke-width':3},hay);
 }
 return g;
}
function drawBridge(){
 const old=$('bridgeVisual');if(old)old.remove();const p=point({x:5,y:4}),g=svg('g',{id:'bridgeVisual',transform:'translate('+p.x+' '+p.y+')'},$('river'));
 if(!state().bridge){svg('path',{d:'M-47-25-20-11M20 11 47 25',stroke:'#c59658','stroke-width':12,'stroke-linecap':'round'},g);text(g,'?',{x:0,y:2,fill:'#fff5cf','text-anchor':'middle','font-size':20,'font-family':'Georgia'});return;}
 for(let i=0;i<7;i++){const x=-38+i*12,y=-19+i*6;polygon(g,(x-16)+','+(y+8)+' '+x+','+(y-1)+' '+(x+26)+','+(y+12)+' '+(x+10)+','+(y+21),i%2?'#d3b17a':'#e0bf87',{stroke:'#ad8f5c','stroke-width':1,class:'bridge-board',style:'animation-delay:'+i*.04+'s'});}
 svg('path',{d:'m-55-13 91 46m-70-67 91 46',stroke:'#b18a52','stroke-width':4,'stroke-linecap':'round'},g);
}
function drawWorld(){
 for(const id of ['ground','river','paths','backDecor','depth','effects'])$(id).replaceChildren();depthItems=[];plotNodes.clear();plotKeys.clear();
 for(let x=0;x<E.SIZE;x++)for(let y=0;y<E.SIZE;y++){
   const p=point({x,y}),g=svg('g',{},$('ground'));
   const ground=polygon(g,p.x+','+(p.y-27)+' '+(p.x+54)+','+p.y+' '+p.x+','+(p.y+27)+' '+(p.x-54)+','+p.y,x===5?'#9bd6bd':(x+y)%2?'#d6e5a1':'#b7d488',{stroke:'#d6e5a3','stroke-width':1,class:'ground-tile'});
   if(E.walkable(state(),{x,y})){ground.setAttribute('role','button');ground.setAttribute('tabindex','0');ground.setAttribute('aria-label','Walk to column '+(x+1)+', row '+(y+1));const click=()=>launch(id=>walkTo({x,y},id));ground.addEventListener('click',click);ground.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();click();}});}
   if(x===5){polygon($('river'),p.x+','+(p.y-27)+' '+(p.x+55)+','+p.y+' '+p.x+','+(p.y+27)+' '+(p.x-55)+','+p.y,'url(#riverWater)');svg('path',{d:'M'+(p.x-18)+' '+(p.y-7)+'l18 9m8-10 14 7',stroke:'#c5ede0','stroke-width':2,fill:'none',class:'ripples',opacity:.65},$('river'));}
   if(y===5&&x<5){for(let i=0;i<2;i++)svg('ellipse',{cx:p.x+(i?15:-13),cy:p.y+(i?7:-7),rx:15,ry:7,fill:'#d4ce99',transform:'rotate(26 '+p.x+' '+p.y+')',opacity:.6},$('paths'));}
 }
 drawBridge();
 for(const plot of state().plots){const p=point(plot),g=svg('g',{id:'plot-'+plot.id,transform:'translate('+p.x+' '+p.y+')',class:'plot',role:'button',tabindex:'0'},null);plotNodes.set(plot.id,g);addDepth(g,plot.x,plot.y,.15);g.addEventListener('click',()=>selectPlot(plot.id,true));g.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();selectPlot(plot.id,true);}});}
 const house=building(option);const hp=point({x:6.3,y:1.2});house.setAttribute('transform','translate('+hp.x+' '+hp.y+')');addDepth(house,6,1,.3);
 const trees=[[0,0,150],[0,2,125],[0,7,150],[7,0,155],[7,6,135],[3,0,125],[7,7,115]];
 for(const[x,y,size]of trees){const p=point({x,y}),g=svg('g',{},null);svg('use',{href:'#tree',x:p.x-size/2,y:p.y-size*1.12,width:size,height:size*1.33},g);addDepth(g,x,y,.4);}
 for(const[x,y]of [[1,0],[0,4],[3,7],[6,7],[7,4]]){const p=point({x,y}),g=svg('g',{},null);svg('use',{href:'#bush',x:p.x-33,y:p.y-29,width:66,height:40},g);addDepth(g,x,y,.2);}
 // Little windmill and short original fence, all native vectors.
 const wind=svg('g',{transform:'translate(624 185)'},$('backDecor'));polygon(wind,'-14,18 14,18 8,-55 -6,-55','#e8d9a7');const rotor=svg('g',{transform:'translate(1 -55)'},wind),blades=svg('g',{class:'windmill'},rotor);svg('path',{d:'M-44-8H44M-8-44V44',stroke:'#c7ac77','stroke-width':12,'stroke-linecap':'round'},blades);svg('circle',{r:8,fill:'#a89065'},blades);
 const fence=svg('g',{stroke:'#d5bc87','stroke-width':5,'stroke-linecap':'round'},$('paths'));for(let i=0;i<5;i++){const p=point({x:i,y:0});svg('path',{d:'M'+p.x+' '+(p.y-35)+'v25m0-15 55 28',fill:'none'},fence);}
 for(let i=0;i<2;i++){const p=point({x:i+1,y:6}),g=svg('g',{transform:'translate('+p.x+' '+p.y+')'},null);svg('use',{href:'#chicken',x:-24,y:-39,width:48,height:48,class:'chicken',style:'animation-delay:'+i*-4+'s'},g);addDepth(g,i+1,6,.2);}
 if(option==='river'){
   const fp=point(state().bridge?{x:4,y:4}:{x:6,y:4}),friend=svg('g',{id:'friend',transform:'translate('+fp.x+' '+fp.y+')'},null);makeFarmer(friend,true);addDepth(friend,6,4,.2);
 }
 actor=svg('g',{id:'farmer'},null);makeFarmer(actor);addDepth(actor,state().actor.x,state().actor.y,.25);updateActor(true);render(true);sortDepth();
}
function updateActor(instant=false){const p=point(state().actor);actor.style.transition=instant?'none':'transform '+duration()+'ms linear';actor.style.transform='translate('+p.x+'px,'+p.y+'px)';const item=depthItems.find(i=>i.node===actor);if(item){item.x=state().actor.x;item.y=state().actor.y;}sortDepth();}
function renderPlot(plot,now,force=false){
 const stage=E.stage(plot,now),key=[plot.crop,stage,selected===plot.id].join('|'),g=plotNodes.get(plot.id);if(!g)return;
 if(force||plotKeys.get(plot.id)!==key){plotKeys.set(plot.id,key);g.replaceChildren();g.classList.toggle('selected',selected===plot.id);g.setAttribute('aria-label','Plot '+plot.id+', '+(plot.crop||'empty')+', '+stage+'. Selected tool: '+tool);g.setAttribute('aria-pressed',String(selected===plot.id));
   polygon(g,'0,-26 52,0 0,26 -52,0',plot.wateredAt===null?'url(#soil)':'url(#wetSoil)',{class:'plot-outline'});polygon(g,'-52,0 0,26 52,0 52,6 0,33 -52,6','#805e39');
   for(let i=0;i<4;i++)svg('path',{d:'M'+(-30+i*14)+' '+(-9+i*7)+'l35-18',stroke:plot.wateredAt===null?'#d29b62':'#a17d54','stroke-width':2,'stroke-linecap':'round',opacity:.5},g);
   if(plot.crop){const plants=svg('g',{class:'plants'},g);for(const[dx,dy]of [[-23,0],[0,-12],[23,0]]){const anchor=svg('g',{transform:'translate('+dx+' '+dy+')'},plants),root=svg('g',{class:'crop-sway'},anchor);svg('use',{href:stage==='planted'?'#sprout':'#'+plot.crop,x:-22,y:-49,width:44,height:60},root);}}
   text(g,plot.id,{x:0,y:23,class:'plot-number','text-anchor':'middle'});
   if(stage==='ready')svg('path',{d:'M32-45v16m-8-8h16M-28-27v10m-5-5h10',stroke:'#fff0ae','stroke-width':2.5,'stroke-linecap':'round',class:'ready-spark'},g);
 }
 const plants=g.querySelector('.plants');if(plants){const progress=stage==='growing'?Math.min(1,(now-plot.wateredAt)/E.GROW_MS):stage==='ready'?1:.45;plants.style.transform='scale('+(.4+progress*.6)+')';}
}
function objectives(){const s=state(),o=E.OPTIONS[option],items=[{done:s.harvested>=o.goal,label:'Harvest '+o.goal+' crop'+(o.goal>1?'s':'')+' ('+Math.min(s.harvested,o.goal)+'/'+o.goal+')'},{done:s.codeActions>0,label:'Make one change using code'}];if(option==='river')items.push({done:s.bridge,label:'Repair the bridge'});if(option==='cafe')items.push({done:s.delivered,label:'Deliver the first guest’s basket'});return items;}
function render(force=false){const s=state(),now=Date.now();for(const p of s.plots)renderPlot(p,now,force);
 $('basket').textContent=s.basket;$('harvestCount').textContent=s.harvested;
 const p=s.plots[selected-1],stage=E.stage(p,now);$('plotLabel').textContent='PLOT '+selected+' / '+stage.toUpperCase();$('plotStatus').textContent=stage==='empty'?'Ready for its first seed':stage==='planted'?'A '+p.crop+' sprout. Needs water.':stage==='growing'?'Growing · '+Math.max(1,Math.ceil((E.GROW_MS-(now-p.wateredAt))/1000))+'s to go':'Ready! Pick up your harvest.';$('growthBar').style.width=stage==='growing'?Math.min(100,(now-p.wateredAt)/E.GROW_MS*100)+'%':stage==='ready'?'100%':'0%';
 const objectiveKey=objectives().map(i=>i.done+' '+i.label).join('|');if($('objectives').dataset.key!==objectiveKey){$('objectives').dataset.key=objectiveKey;$('objectives').replaceChildren();for(const item of objectives()){const li=document.createElement('li');li.textContent=item.label;if(item.done)li.className='done';$('objectives').appendChild(li);}}
 $('special').hidden=option==='meadow'||(option==='river'&&s.bridge)||(option==='cafe'&&s.delivered);$('special').textContent=option==='river'?'Repair the bridge ↗':'Deliver the basket ↗';
 if(s.complete&&!celebrated.has(option)){celebrated.add(option);$('complete').hidden=false;$('completeTitle').textContent=option==='river'?'A friend, just over the water.':option==='cafe'?'Our very first guest.':'Your farm is coming to life.';$('completeMessage').textContent=option==='river'?'You grew a crop, used code, and opened a way across.':option==='cafe'?'A fresh basket, a warm welcome, and code that helped.':'Two crops harvested, with a little help from your code. Keep growing or try another setting.';actor.classList.add('happy');celebrate();beat([523,659,784],.2);}
}
function duration(){return window.matchMedia('(prefers-reduced-motion: reduce)').matches?50:Number($('pace').value);}
async function walkPath(route,id){if(!route)return false;actor.classList.add('walking');for(const p of route){if(id!==runId)return false;state().actor={...p};state().moves++;updateActor();beat([300],.025);if(!await sleep(duration()+25,id))return false;}actor.classList.remove('walking');return true;}
async function walkTo(target,id){const route=E.path(state(),target);if(!route){feedback('That tile is not reachable. Use the bridge to cross the stream.',true);return false;}say('One little step at a time.');return walkPath(route,id);}
function effect(plot,type){const p=point(plot),g=svg('g',{transform:'translate('+p.x+' '+p.y+')'},$('effects'));if(type==='water'){for(let i=0;i<7;i++)svg('path',{d:'M'+(-25+i*8)+' -65q-6 9 0 11q6-2 0-11',fill:'#bde9e2',class:'water-drop',style:'animation-delay:'+i*.07+'s'},g);}else{for(let i=0;i<8;i++)svg('circle',{cx:-30+i*8,cy:-20-i%3*12,r:2.5,fill:type==='harvest'?'#f1d78c':'#e0e9a3',class:'celebrate-dot',style:'animation-delay:'+i*.04+'s'},g);}setTimeout(()=>g.remove(),1800);}
function celebrate(){const g=svg('g',{},$('effects'));for(let i=0;i<24;i++)svg('circle',{cx:230+(i*37)%490,cy:240+(i*29)%260,r:2+i%3,fill:['#ffedb3','#e8b39a','#d9edb4'][i%3],class:'celebrate-dot',style:'animation-delay:'+i*.03+'s'},g);setTimeout(()=>g.remove(),2500);}
async function execute(command,source,id){
 if(id!==runId)return false;
 if(E.DIRECTIONS[command.name]){for(let i=0;i<command.steps;i++){const result=E.step(state(),command.name);if(!result.ok){feedback('Line '+command.line+': '+result.message,true);say('There’s something in our way. Let’s change the route.');return false;}actor.classList.add('walking');updateActor();if(!await sleep(duration()+25,id))return false;if(source==='code')state().codeActions++;}E.updateComplete(state());render();actor.classList.remove('walking');return true;}
 const preview=E.action(JSON.parse(JSON.stringify(state())),command.name,command.id,command.crop,Date.now(),source);if(!preview.ok){feedback((command.line?'Line '+command.line+': ':'')+preview.message,true);say(preview.message);return false;}
 let route;if(command.id)route=E.pathToPlot(state(),command.id);else route=E.path(state(),command.name==='repair_bridge'?{x:4,y:4}:{x:6,y:3});
 if(route===null){feedback('Mochi cannot reach that spot yet. Try repairing the bridge first.',true);return false;}
 if(!await walkPath(route,id))return false;
 actor.classList.add('acting');const can=actor.querySelector('.farmer-can');if(command.name==='water')can.setAttribute('opacity','1');
 if(!await sleep(350,id))return false;can.setAttribute('opacity','0');
 const result=E.action(state(),command.name,command.id,command.crop,Date.now(),source);if(!result.ok){feedback(result.message,true);return false;}
 if(command.id)effect(state().plots[command.id-1],command.name);
 if(command.name==='repair_bridge'){drawBridge();const fp=point({x:4,y:4}),friend=$('friend');if(friend){friend.style.transition='transform 1.5s ease-in-out';friend.style.transform='translate('+fp.x+'px,'+fp.y+'px)';}say('There you are! The bridge is open. Come see what we grew.');}
 else if(command.name==='deliver'){if($('guest'))$('guest').style.opacity='1';say('Welcome! We grew this little basket just for you.');}
 else say(command.name==='plant'?'A tiny beginning. A bit of water will help it along.':command.name==='water'?'A little drink. Now watch those leaves grow!':'Fresh from our own little farm. What shall we plant next?');
 feedback(result.message);actor.classList.remove('acting');render(true);beat(command.name==='harvest'?[523,659]:[440,523],.1);return true;
}
function selectPlot(id,act=false){selected=id;render(true);if(act)launch(token=>execute({name:tool,id,crop:$('crop').value},'click',token));}
function selectTool(name){tool=name;document.querySelectorAll('[data-tool]').forEach(b=>{b.classList.toggle('selected',b.dataset.tool===tool);b.setAttribute('aria-pressed',String(b.dataset.tool===tool));});$('toolLabel').textContent=(tool==='plant'?'Plant '+$('crop').value:tool==='water'?'Give a crop a drink':'Gather a ready crop')+' · choose a numbered plot';render(true);}
function selectOption(key){if(!E.OPTIONS[key])return;cancel();option=key;selected=1;$('complete').hidden=true;document.querySelectorAll('[data-option]').forEach(b=>{b.classList.toggle('active',b.dataset.option===key);b.setAttribute('aria-pressed',String(b.dataset.option===key));});document.body.classList.toggle('cafe-setting',key==='cafe');$('missionTitle').textContent=E.OPTIONS[key].title+'.';$('missionDescription').textContent=E.OPTIONS[key].description;$('settingLabel').textContent=E.OPTIONS[key].name.toUpperCase()+' / FIRST MORNING';$('execution').textContent='A fresh setting. Your other farms stay as you left them.';drawWorld();selectTool(tool);feedback('Six plots, two seed types, one little farm to bring to life. Click a plot or run a code instruction.');say(key==='river'?'Our friend is across the stream. A first harvest will bring some help for the bridge.':key==='cafe'?'The café is opening. Can we grow a fresh basket for our first guest?':'A little patch of land, and a whole lot of possibility. Let’s plant something!');}
function run(){const parsed=E.parse($('code').value);if(!parsed.ok){feedback(parsed.message,true);$('execution').textContent='Check line '+parsed.line;return Promise.resolve(false);}return launch(async id=>{for(const command of parsed.commands){if(id!==runId)return false;$('execution').textContent='Line '+command.line+' → '+command.name+(command.id?' · plot '+command.id:'');if(!await execute(command,'code',id)){$('execution').textContent='Paused at line '+command.line+' · edit and try again';return false;}}$('execution').textContent='Code finished. Your farm keeps what you changed.';return true;});}
document.querySelectorAll('[data-option]').forEach(b=>b.onclick=()=>selectOption(b.dataset.option));document.querySelectorAll('[data-tool]').forEach(b=>b.onclick=()=>selectTool(b.dataset.tool));$('crop').onchange=()=>selectTool(tool);
$('run').onclick=run;$('stop').onclick=()=>{cancel();updateActor(true);feedback('Stopped. Completed actions and crop growth are kept. You can edit your next instruction.');$('execution').textContent='Stopped safely.';};
$('special').onclick=()=>launch(id=>execute({name:option==='river'?'repair_bridge':'deliver'},'click',id));
$('reset').onclick=()=>{cancel();farms[option]=E.create(option);celebrated.delete(option);$('complete').hidden=true;drawWorld();feedback('This farm is reset. Your code and the other settings are kept.');$('execution').textContent='Ready to begin again.';say('A fresh little start.');};
$('keepPlaying').onclick=()=>$('complete').hidden=true;
$('sound').onclick=()=>{sound=!sound;$('sound').textContent=sound?'Sound on':'Sound off';$('sound').setAttribute('aria-pressed',String(sound));if(sound)beat([523,659],.15);};
document.querySelectorAll('[data-example]').forEach(b=>b.onclick=()=>{const type=b.dataset.example;$('code').value=type==='plant'?'farm.plant('+selected+', "'+$('crop').value+'")\nfarm.water('+selected+')':type==='water'?'farm.water('+selected+')':type==='harvest'?'farm.harvest('+selected+')':'# Along the isometric tile edges.\nmove_right(1)\nmove_up(1)';feedback('Example loaded for plot '+selected+'. You can change it before running.');$('code').focus();});
$('code').addEventListener('keydown',event=>{if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();if(!busy)run();}});
document.addEventListener('keydown',event=>{const tag=event.target.tagName;if(['INPUT','SELECT','TEXTAREA'].includes(tag)||event.ctrlKey||event.metaKey||event.altKey||busy)return;const map={1:'plant',2:'water',3:'harvest'};if(map[event.key])selectTool(map[event.key]);});
setInterval(()=>render(),180);
selectOption('meadow');
window.FarmGame={run,whenIdle:()=>pending,snapshot:()=>JSON.parse(JSON.stringify(state())),option:()=>option};
})();
