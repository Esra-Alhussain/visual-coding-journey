const assert=require('node:assert/strict'),fs=require('node:fs'),E=require('./engine.js');
for(const option of Object.keys(E.OPTIONS)){
 const s=E.create(option);assert.equal(s.plots.length,6);assert.equal(E.action(s,'water',1).ok,false);assert.equal(E.action(s,'harvest',1).ok,false);assert.equal(E.action(s,'plant',0,'carrot').ok,false);assert.equal(E.action(s,'plant',1,'bad').ok,false);
 for(let id=1;id<=2;id++){
  const route=E.pathToPlot(s,id);assert.ok(route);for(const tile of route)assert.ok(E.walkable(s,tile));
  assert.equal(E.action(s,'plant',id,id===1?'carrot':'strawberry',1000,'code').ok,true);assert.equal(E.stage(s.plots[id-1],1000),'planted');assert.equal(E.action(s,'plant',id,'carrot').ok,false);
  assert.equal(E.action(s,'water',id,null,2000,'code').ok,true);assert.equal(E.stage(s.plots[id-1],7999),'growing');assert.equal(E.action(s,'harvest',id,null,7999).ok,false);
  assert.equal(E.action(s,'water',id,null,5000).ok,false);assert.equal(s.plots[id-1].wateredAt,2000);assert.equal(E.stage(s.plots[id-1],8000),'ready');assert.equal(E.action(s,'harvest',id,null,8000,'code').ok,true);assert.equal(E.action(s,'harvest',id,null,8000).ok,false);assert.equal(E.stage(s.plots[id-1]),'empty');
 }
 assert.equal(s.harvested,2);assert.equal(s.basket,2);assert.equal(s.codeActions,6);
 if(option==='river'){assert.equal(E.path(s,{x:6,y:4}),null);assert.equal(E.action(s,'repair_bridge',null,null,9000,'code').ok,true);assert.ok(E.path(s,{x:6,y:4}));assert.equal(E.action(s,'repair_bridge').ok,false);}
 if(option==='cafe'){assert.equal(E.action(s,'deliver',null,null,9000,'code').ok,true);assert.equal(s.basket,0);assert.equal(E.action(s,'deliver').ok,false);}
 assert.equal(s.complete,true);
}
const river=E.create('river');assert.equal(E.action(river,'repair_bridge').ok,false);const cafe=E.create('cafe');assert.equal(E.action(cafe,'deliver').ok,false);
const m=E.create();for(let i=0;i<8;i++){const before={...m.actor},r=E.step(m,'move_right');if(!r.ok)assert.deepEqual(m.actor,before);}assert.equal(E.step(m,'move_left').ok,true);
const valid=E.parse('# first crop\nfarm.plant(1, "carrot")\nfarm.water(1)\nmove_right(2)\nfarm.harvest(1)\nfarm.repair_bridge()\nfarm.deliver()');assert.equal(valid.ok,true);assert.equal(valid.commands.length,6);
for(const bad of ['','eval("x")','farm.plant(1, "carrot");alert(1)','farm.water(0)','farm.water(7)','farm.plant(1,"tomato")','move_up(0)','move_up(9)','move_left(-1)','move_up(2.5)','farm["water"](1)','farm.__proto__()','for i in range(3):'])assert.equal(E.parse(bad).ok,false,bad);
assert.equal(E.parse(Array(25).fill('farm.water(1)').join('\n')).ok,false);assert.equal(E.parse(Array(11).fill('move_up(8)').join('\n')).ok,false);assert.equal(E.parse("farm.plant(2, 'strawberry') # a seed\r\nfarm.water(2)").ok,true);
for(const file of ['app.js','engine.js'])new Function(fs.readFileSync(__dirname+'/'+file,'utf8'));const html=fs.readFileSync(__dirname+'/index.html','utf8');for(const file of ['style.css','engine.js','app.js'])assert.ok(html.includes(file));assert.equal((html.match(/id="plot-/g)||[]).length,0);
console.log('PASS: all 3 farm goals; both crops; plant/water/grow/harvest/replant; no duplicate harvest or timer reset; bridge and delivery gates; BFS reachability/collisions; safe bounded parser; script syntax.');
