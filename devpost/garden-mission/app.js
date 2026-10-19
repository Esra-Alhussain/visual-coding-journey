/* The view follows the same deterministic rules exercised by check.cjs. */
(function(){
'use strict';
const E=GardenEngine,$=id=>document.getElementById(id),NS='http://www.w3.org/2000/svg';
const state={position:{...E.START},running:false,watered:false,runId:0,hints:0,sound:false,steps:0};
const waits=new Map();let audio;
function svg(name,attrs,parent){const n=document.createElementNS(NS,name);for(const[k,v]of Object.entries(attrs))n.setAttribute(k,v);if(parent)parent.appendChild(n);return n;}
function point(p){return{x:215+p.x*80,y:328+p.y*64};}
function drawWorld(){
  for(let y=0;y<E.HEIGHT;y++)for(let x=0;x<E.WIDTH;x++){
    const goal=x===E.GOAL.x&&y===E.GOAL.y,water=x===4;
    svg('rect',{x:177+x*80,y:284+y*64,width:76,height:59,rx:15,class:'tile'+(water?' water-tile':'')+(goal?' goal-tile':'')},$('tiles'));
    if(goal){svg('path',{d:'M690 307h10m-5-5v10',stroke:'#fff7ce','stroke-width':3,'stroke-linecap':'round'},$('tiles'));}
  }
  const bridge=svg('g',{'aria-label':'Wooden bridge across stream'},$('decor'));
  svg('path',{d:'M486 450H584',stroke:'#6b714f','stroke-width':49,'stroke-linecap':'round',opacity:.25},bridge);
  for(let i=0;i<7;i++)svg('rect',{x:487+i*14,y:425,width:13,height:44,rx:3,fill:'url(#wood)',stroke:'#a37848','stroke-width':1},bridge);
  svg('path',{d:'M488 424H583M488 469H583',stroke:'#b08b58','stroke-width':5,'stroke-linecap':'round'},bridge);
  for(const[key,what]of E.obstacles){const[x,y]=key.split(',').map(Number),p=point({x,y});if(what.includes('rock'))svg('use',{href:'#rock',x:p.x-36,y:p.y-39,width:72,height:63},$('decor'));}
  const tufts=[[120,370],[149,477],[299,266],[343,678],[651,684],[860,398],[903,604],[706,258],[273,678],[833,667],[117,640],[936,443],[643,236],[324,230]];
  for(const[x,y]of tufts)svg('use',{href:'#grass',x,y,width:35,height:30,class:'grass-sway'},$('decor'));
  const flowers=[[135,330,'#e5b5a8'],[139,560,'#f3d892'],[867,368,'#ecbcaa'],[893,399,'#ebd5a0'],[661,681,'#e7b19f'],[690,687,'#efd9a4'],[304,673,'#efd49b']];
  for(const[x,y,c]of flowers)svg('use',{href:'#flower',x,y,width:31,height:53,class:'plant-sway',style:'color:'+c},$('decor'));
  $('plant').setAttribute('transform','translate(775 328)');
  // A small painted start marker, not a second goal.
  svg('path',{d:'M202 611h26m-22 5h18',stroke:'#e8d9ab','stroke-width':4,'stroke-linecap':'round'},$('decor'));
}
function updatePosition(){const p=point(state.position);$('actor').setAttribute('transform','translate('+p.x+' '+p.y+')');$('position').textContent='Mochi · column '+(state.position.x+1)+', row '+(state.position.y+1);$('reachGoal').classList.toggle('complete',E.water(state.position).ok);}
function feedback(text,error=false){$('feedback').textContent=text;$('feedback').classList.toggle('error',error);}
function say(text){$('dialogue').textContent=text;}
function numbers(){const lines=$('code').value.split('\n').length;$('lineNumbers').textContent=Array.from({length:lines},(_,i)=>i+1).join('\n');$('lineNumbers').scrollTop=$('code').scrollTop;}
function setRunning(value){state.running=value;$('run').disabled=value;$('stop').disabled=!value;$('code').readOnly=value;document.querySelectorAll('[data-command]').forEach(b=>b.disabled=value);$('hintButton').disabled=value;}
function pause(ms,id){return new Promise(resolve=>{const timer=setTimeout(()=>{waits.delete(timer);resolve(id===state.runId);},ms);waits.set(timer,resolve);});}
function cancel(){state.runId++;for(const[t,resolve]of waits){clearTimeout(t);resolve(false);}waits.clear();$('actor').classList.remove('walking','blocked','watering','happy');setRunning(false);}
function clearWorld(){state.position={...E.START};state.watered=false;state.steps=0;$('plant').classList.remove('bloomed');$('success').hidden=true;$('trails').replaceChildren();$('celebration').replaceChildren();$('waterGoal').classList.remove('complete');$('goalLabel').innerHTML='Reach Fern<br><small>then give her a drink</small>';updatePosition();}
function chime(notes=[440],duration=.08){if(!state.sound)return;try{audio??=new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();notes.forEach((hz,i)=>{const o=audio.createOscillator(),g=audio.createGain(),t=audio.currentTime+i*.09;o.type='sine';o.frequency.value=hz;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.045,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(audio.destination);o.start(t);o.stop(t+duration+.02);});}catch{state.sound=false;$('sound').textContent='Sound unavailable';$('sound').setAttribute('aria-pressed','false');}}
function footprints(p){const xy=point(p);svg('ellipse',{cx:xy.x-8,cy:xy.y+1,rx:3,ry:5,fill:'#f5e6b5',transform:'rotate(-18 '+(xy.x-8)+' '+(xy.y+1)+')'},$('trails'));svg('ellipse',{cx:xy.x+6,cy:xy.y-2,rx:3,ry:5,fill:'#f5e6b5'},$('trails'));}
function cheer(){for(let i=0;i<20;i++)svg('circle',{cx:620+(i*43)%250,cy:245+(i*31)%190,r:2+i%3,fill:['#f4d68a','#e8ad99','#d6e6a1'][i%3],class:'sparkle',style:'animation-delay:'+i*.04+'s'},$('celebration'));}
function highlight(line,command){$('execution').textContent='Line '+line+' → '+command;$('execution').classList.add('running');const gutter=$('lineNumbers');gutter.style.color='#a6b08f';}
async function run(){
  if(state.running)return;
  const parsed=E.parse($('code').value);
  if(!parsed.ok){feedback(parsed.message,true);say('Let’s check that instruction together. Nothing has moved yet.');$('execution').textContent='Check line '+parsed.line;const lines=$('code').value.split('\n');const start=lines.slice(0,parsed.line-1).join('\n').length+(parsed.line>1?1:0);$('code').focus();$('code').setSelectionRange(start,start+lines[parsed.line-1].length);return;}
  cancel();clearWorld();const id=state.runId;setRunning(true);say('Okay, I’m following your instructions. One little step at a time.');feedback('Watch Mochi follow each line. You can stop the route at any time.');
  try{
    for(let ci=0;ci<parsed.commands.length;ci++){
      const command=parsed.commands[ci];if(id!==state.runId)return;
      highlight(command.line,command.name+'('+(command.steps||'')+')');
      if(command.name==='water_plant'){
        const watered=E.water(state.position);
        if(!watered.ok){feedback('Line '+command.line+': '+watered.message,true);say('I can’t reach Fern with my watering can yet.');chime([220]);return;}
        $('actor').classList.add('watering');say('Here you go, little friend.');chime([523,659,784],.2);
        if(!await pause(900,id))return;
        state.watered=true;$('plant').classList.add('bloomed');$('waterGoal').classList.add('complete');$('goalLabel').innerHTML='Fern is blooming!<br><small>Mission complete</small>';$('actor').classList.remove('watering');$('actor').classList.add('happy');cheer();say('You did it! Your instructions brought us here. Look at her bloom.');feedback('Mission complete! Your sequence guided Mochi to Fern and watered her. '+state.steps+' walking steps.');
        if(!await pause(2800,id))return;$('success').hidden=false;$('execution').textContent='Mission complete · '+state.steps+' steps';return;
      }
      for(let i=0;i<command.steps;i++){
        const next=E.step(state.position,command.name);
        if(!next.ok){$('actor').classList.remove('walking');$('actor').classList.add('blocked');feedback('Line '+command.line+', step '+(i+1)+': '+next.message,true);say('Oops, this way is blocked. Could we try another route?');chime([230,180]);return;}
        footprints(state.position);state.position=next.position;state.steps++;
        const ms=window.matchMedia('(prefers-reduced-motion: reduce)').matches?120:Number($('speed').value);
        $('actor').style.transitionDuration=ms+'ms';$('actor').classList.add('walking');
        // The face looks in the direction of travel; its feet remain on the tile.
        $('face-body').style.transform='translateX('+(E.directions[command.name][0]*2)+'px)';
        updatePosition();$('execution').textContent='Line '+command.line+' → '+command.name+'('+command.steps+') · step '+(i+1)+' of '+command.steps;chime([330+(i%3)*44],.045);
        if(!await pause(ms+60,id))return;
      }
      $('actor').classList.remove('walking');if(!await pause(130,id))return;
    }
    if(E.water(state.position).ok){say('We made it! Now I just need to give Fern a drink.');feedback('You reached the golden tile. Add water_plant() at the end of your route.');}
    else{say('That’s your route so far. What’s our next move?');feedback('Route finished after '+state.steps+' steps. Add more instructions to reach the golden tile beside Fern.');}
    $('execution').textContent='Route finished · '+state.steps+' steps';
  }finally{if(id===state.runId){setRunning(false);$('actor').classList.remove('walking','watering');$('execution').classList.remove('running');}}
}
$('run').onclick=run;
$('stop').onclick=()=>{cancel();$('actor').style.transitionDuration='0ms';updatePosition();$('execution').textContent='Stopped · edit your route';feedback('Stopped safely. Your next run starts at the gate.');say('Take your time. I’m right here.');};
$('reset').onclick=()=>{cancel();clearWorld();$('execution').textContent='Back at the gate.';feedback('Garden reset. Your code is still here, ready to change.');say('Shall we find our way to Fern?');};
$('again').onclick=()=>{cancel();clearWorld();feedback('Try a different route, or run your code again.');say('Another little adventure?');};
$('experiment').onclick=()=>{$('success').hidden=true;say('There’s always another path to try.');};
$('gridToggle').onchange=()=>$('scene').classList.toggle('no-grid',!$('gridToggle').checked);
$('sound').onclick=()=>{state.sound=!state.sound;$('sound').textContent=state.sound?'Sound on':'Sound off';$('sound').setAttribute('aria-pressed',String(state.sound));if(state.sound)chime([523,659],.15);};
$('hintButton').onclick=()=>{const hints=['Look for the wooden bridge in the middle row. Rocks block the shortest route. Go up before you try crossing.','From the gate: right 1, up 2, right 5, then up 2 reaches the golden tile. Then water Fern.','One working route:\nmove_right(1)\nmove_up(2)\nmove_right(5)\nmove_up(2)\nwater_plant()'];$('hint').hidden=false;$('hint').style.whiteSpace='pre-line';$('hint').textContent=hints[Math.min(state.hints++,2)];$('hintButton').textContent=state.hints<3?'Another nudge?':'Show the route again';};
document.querySelectorAll('[data-command]').forEach(button=>button.onclick=()=>{const command=button.dataset.command,steps=Number($('steps').value);if(command!=='water_plant'&&(!Number.isInteger(steps)||steps<1||steps>8)){feedback('Choose a whole number of steps from 1 to 8.',true);return;}const line=command+'('+(command==='water_plant'?'':steps)+')';const editor=$('code');editor.value=editor.value.replace(/\s*$/,'')+(editor.value.trim()?'\n':'')+line;numbers();editor.focus();editor.setSelectionRange(editor.value.length,editor.value.length);editor.scrollTop=editor.scrollHeight;});
$('code').addEventListener('input',numbers);$('code').addEventListener('scroll',()=>{$('lineNumbers').scrollTop=$('code').scrollTop;});
$('code').addEventListener('keydown',event=>{if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();run();}});
drawWorld();updatePosition();numbers();
// Local QA can inspect state without bypassing the same UI execution code.
window.MochiGarden={state,run,cancel,point};
})();
