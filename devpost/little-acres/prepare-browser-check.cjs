const fs=require('fs');
const html=fs.readFileSync(__dirname+'/index.html','utf8');
const script=String.raw`<script>
(async()=>{const results=[];const delay=ms=>new Promise(r=>setTimeout(r,ms));const check=(test,label)=>{if(!test)throw Error(label);results.push(label);};const click=selector=>{const el=document.querySelector(selector);if(!el)throw Error('Missing '+selector);el.dispatchEvent(new MouseEvent('click',{bubbles:true}));};const idle=()=>FarmGame.whenIdle();const code=async value=>{document.getElementById('code').value=value;click('#run');await idle();};
try{
document.getElementById('pace').value='120';
// Actual UI events exercise both direct tools and the same code controller.
click('[data-tool="plant"]');click('#plot-1');await idle();check(FarmGame.snapshot().plots[0].crop==='carrot','click plants carrot');
click('[data-tool="water"]');click('#plot-1');await idle();check(FarmGame.snapshot().plots[0].wateredAt!==null,'click waters crop');
await code('farm.plant(2, "strawberry")\nfarm.water(2)');check(FarmGame.snapshot().codeActions===2,'code plants and waters strawberry');
await delay(6200);check(document.querySelector('#plot-1 .ready-spark'),'growth renders ready sparkle');
click('[data-tool="harvest"]');click('#plot-1');await idle();await code('farm.harvest(2)');check(FarmGame.snapshot().harvested===2,'click and code harvest crops');check(FarmGame.snapshot().complete,'meadow mission completes');check(!document.getElementById('complete').hidden,'completion card displayed');
// Invalid code must not mutate state; cancellation must halt pending walking/action.
const before=JSON.stringify(FarmGame.snapshot());await code('farm.water(99)');check(JSON.stringify(FarmGame.snapshot())===before,'invalid code preserves state');
document.getElementById('code').value='move_down(1)\nfarm.plant(6, "carrot")';click('#run');click('#stop');await idle();check(!FarmGame.snapshot().plots[5].crop,'stop prevents later action');
click('[data-option="river"]');check(FarmGame.snapshot().option==='river'&&!FarmGame.snapshot().bridge,'river begins with broken bridge');
await code('farm.repair_bridge()');check(!FarmGame.snapshot().bridge,'bridge repair gated before harvest');
await code('farm.plant(1, "carrot")\nfarm.water(1)');await delay(6200);await code('farm.harvest(1)\nfarm.repair_bridge()');check(FarmGame.snapshot().bridge&&FarmGame.snapshot().complete,'river crop and bridge mission completes');
click('[data-option="cafe"]');await code('farm.deliver()');check(!FarmGame.snapshot().delivered,'delivery gated before two crops');
await code('farm.plant(1, "carrot")\nfarm.water(1)\nfarm.plant(2, "strawberry")\nfarm.water(2)');await delay(6200);await code('farm.harvest(1)\nfarm.harvest(2)\nfarm.deliver()');check(FarmGame.snapshot().delivered&&FarmGame.snapshot().complete,'cafe delivery mission completes');check(document.getElementById('guest').style.opacity==='1','cafe guest is visible');
click('[data-option="meadow"]');check(FarmGame.snapshot().harvested===2,'switching settings preserves farm');click('#reset');check(FarmGame.snapshot().harvested===0&&!FarmGame.snapshot().plots.some(p=>p.crop),'reset restores active farm');click('[data-option="cafe"]');check(FarmGame.snapshot().delivered,'reset preserves other farms');
check(document.body.scrollWidth<=innerWidth,'no horizontal overflow');
const report=document.createElement('pre');report.id='browser-result';report.textContent=JSON.stringify({ok:true,results,viewport:innerWidth,bodyWidth:document.body.scrollWidth,state:FarmGame.snapshot()});report.hidden=true;document.body.append(report);
}catch(e){const report=document.createElement('pre');report.id='browser-result';report.textContent=JSON.stringify({ok:false,error:e.message,results,state:window.FarmGame?.snapshot()});document.body.prepend(report);console.error(e);}
})();</script>`;
fs.writeFileSync(__dirname+'/browser-check.html',html.replace('</body>',script+'</body>'));console.log('Prepared actual-browser UI interaction check.');
const visual=String.raw`<script>(async()=>{document.getElementById('pace').value='120';document.getElementById('code').value='farm.plant(1, "carrot")\nfarm.water(1)\nfarm.plant(2, "strawberry")\nfarm.water(2)\nfarm.plant(3, "carrot")\nfarm.water(3)';await FarmGame.run();await new Promise(r=>setTimeout(r,6500));const report=document.createElement('pre');report.id='visual-result';report.hidden=true;report.textContent=JSON.stringify({ready:document.querySelectorAll('.ready-spark').length,state:FarmGame.snapshot()});document.body.append(report);})();</script>`;
fs.writeFileSync(__dirname+'/browser-visual.html',html.replace('</body>',visual+'</body>'));
