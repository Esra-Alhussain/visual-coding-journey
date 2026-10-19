(function(root){
'use strict';
const SIZE=8,GROW_MS=6000;
const PLOTS=[{id:1,x:2,y:2},{id:2,x:3,y:2},{id:3,x:4,y:2},{id:4,x:2,y:3},{id:5,x:3,y:3},{id:6,x:4,y:3}];
const OPTIONS={meadow:{name:'Sunny meadow',title:'A first little harvest',description:'Bring two crops from seed to harvest. Let one code instruction help.',goal:2},river:{name:'Across the river',title:'A way to a friend',description:'Harvest a crop, repair the little bridge, and make a change with code.',goal:1},cafe:{name:'The garden café',title:'Something fresh to share',description:'Harvest two crops, deliver the basket, and try one code instruction.',goal:2}};
function create(option='meadow'){if(!OPTIONS[option])throw Error('Unknown farm');return{option,plots:PLOTS.map(p=>({...p,crop:null,wateredAt:null})),actor:{x:0,y:5},harvested:0,basket:0,codeActions:0,bridge:option!=='river',delivered:false,moves:0,complete:false};}
function stage(plot,now=Date.now()){return !plot.crop?'empty':plot.wateredAt===null?'planted':now-plot.wateredAt>=GROW_MS?'ready':'growing';}
function walkable(s,p){return Number.isInteger(p.x)&&Number.isInteger(p.y)&&p.x>=0&&p.y>=0&&p.x<SIZE&&p.y<SIZE&&!PLOTS.some(q=>q.x===p.x&&q.y===p.y)&&!(p.x===6&&p.y<=2)&&!(p.x===5&&(p.y!==4||!s.bridge));}
const DIRECTIONS={move_right:[1,0],move_left:[-1,0],move_up:[0,-1],move_down:[0,1]};
function step(s,name){const d=DIRECTIONS[name];if(!d)return{ok:false,message:'Unknown direction.'};const next={x:s.actor.x+d[0],y:s.actor.y+d[1]};if(!walkable(s,next))return{ok:false,message:'That step meets a crop bed, building, stream, or the farm edge. Try another direction. The bridge is on row 5.'};s.actor=next;s.moves++;return{ok:true};}
function path(s,target){if(!walkable(s,target))return null;const start=s.actor,key=p=>p.x+','+p.y,queue=[{...start,path:[]}],seen=new Set([key(start)]);for(let i=0;i<queue.length;i++){const p=queue[i];if(p.x===target.x&&p.y===target.y)return p.path;for(const d of Object.values(DIRECTIONS)){const n={x:p.x+d[0],y:p.y+d[1]};if(walkable(s,n)&&!seen.has(key(n))){seen.add(key(n));queue.push({...n,path:[...p.path,n]});}}}return null;}
function pathToPlot(s,id){const p=s.plots.find(p=>p.id===id);if(!p)return null;return Object.values(DIRECTIONS).map(d=>path(s,{x:p.x+d[0],y:p.y+d[1]})).filter(Boolean).sort((a,b)=>a.length-b.length)[0]??null;}
function updateComplete(s){s.complete=s.harvested>=OPTIONS[s.option].goal&&s.codeActions>0&&(s.option!=='river'||s.bridge)&&(s.option!=='cafe'||s.delivered);}
function action(s,name,id,crop,now=Date.now(),source='click'){
 const plot=s.plots.find(p=>p.id===id);let message;
 if(['plant','water','harvest'].includes(name)&&!plot)return{ok:false,message:'Choose a plot from 1 to 6.'};
 if(name==='plant'){
   if(!['carrot','strawberry'].includes(crop))return{ok:false,message:'Choose "carrot" or "strawberry".'};
   if(plot.crop)return{ok:false,message:'Plot '+id+' already has a crop. Water it, or harvest it when it is ready.'};
   plot.crop=crop;plot.wateredAt=null;message='A '+crop+' seed is planted in plot '+id+'. Give it some water!';
 }else if(name==='water'){
   if(!plot.crop)return{ok:false,message:'Plot '+id+' is empty. Plant a seed first.'};
   if(plot.wateredAt!==null)return{ok:false,message:stage(plot,now)==='ready'?'This crop is ready. Choose Harvest.':'Already watered. Watch the crop grow; watering again does not restart its timer.'};
   plot.wateredAt=now;message='Plot '+id+' is watered. It will be ready in 6 seconds.';
 }else if(name==='harvest'){
   if(stage(plot,now)!=='ready')return{ok:false,message:!plot.crop?'Nothing to harvest yet. Plant, then water.':plot.wateredAt===null?'This crop needs water before it can grow.':'Still growing. Wait for the golden sparkle before harvesting.'};
   s.harvested++;s.basket++;plot.crop=null;plot.wateredAt=null;message='Into the basket! You harvested one crop. This plot is ready for a new seed.';
 }else if(name==='repair_bridge'){
   if(s.option!=='river')return{ok:false,message:'This farm already has a working bridge. Try the river setting to repair one.'};
   if(s.bridge)return{ok:false,message:'The bridge is already repaired.'};
   if(s.harvested<1)return{ok:false,message:'First bring in one harvest. Then the neighbor will help repair the bridge.'};
   s.bridge=true;message='The bridge is repaired! Your friend can finally visit.';
 }else if(name==='deliver'){
   if(s.option!=='cafe')return{ok:false,message:'Delivery belongs to the café garden setting.'};
   if(s.delivered)return{ok:false,message:'Your guest already has the basket. Keep farming if you like.'};
   if(s.basket<2)return{ok:false,message:'The first guest needs a basket of two crops. Harvest two before delivering.'};
   s.basket-=2;s.delivered=true;message='Two fresh crops delivered. Our first guest has arrived!';
 }else return{ok:false,message:'Unknown farm action.'};
 if(source==='code')s.codeActions++;updateComplete(s);return{ok:true,message};
}
function parse(source){const commands=[];let totalSteps=0;const lines=source.split(/\r?\n/);for(let i=0;i<lines.length;i++){
 const line=lines[i].replace(/\s+#.*$/,'').trim();if(!line||line.startsWith('#'))continue;
 let m=line.match(/^farm\.plant\(\s*([1-6])\s*,\s*(["'])(carrot|strawberry)\2\s*\)$/);
 if(m)commands.push({name:'plant',id:Number(m[1]),crop:m[3],line:i+1});
 else if(m=line.match(/^farm\.(water|harvest)\(\s*([1-6])\s*\)$/))commands.push({name:m[1],id:Number(m[2]),line:i+1});
 else if(m=line.match(/^farm\.(repair_bridge|deliver)\(\s*\)$/))commands.push({name:m[1],line:i+1});
 else if(m=line.match(/^(move_right|move_left|move_up|move_down)\(\s*([1-8])\s*\)$/)){totalSteps+=Number(m[2]);commands.push({name:m[1],steps:Number(m[2]),line:i+1});}
 else return{ok:false,line:i+1,message:'Line '+(i+1)+': use farm.plant(1, "carrot"), farm.water(1), farm.harvest(1), move_right(2), or move_up(1). Plot numbers are 1–6; movement counts are 1–8.'};
 if(commands.length>24||totalSteps>80)return{ok:false,line:i+1,message:'Use at most 24 commands and 80 walking steps per run.'};
 }return commands.length?{ok:true,commands}:{ok:false,line:1,message:'Add a farm command to try it. The examples below can help.'};}
const api={SIZE,GROW_MS,PLOTS,OPTIONS,DIRECTIONS,create,stage,walkable,path,pathToPlot,step,action,parse,updateComplete};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.FarmEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
