const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync(__dirname+'/prototype-before-house-lessons.html','utf8');
const source=html.match(/<script>([\s\S]*?)<\/script>/)[1];new vm.Script(source);
const ctx={};vm.createContext(ctx);vm.runInContext(source.slice(source.indexOf('function parseDiorama('),source.indexOf('const editor=')),ctx);
const lines=['name = "Mochi"','supplies = ["wood", "stone", "tiles"]','build_house()','if house: protect()','for tree in range(12): plant_tree()'];
for(let i=1;i<=5;i++){const s=ctx.parseDiorama(lines.slice(0,i).join('\n'));assert.equal(s.steps.length,i);assert.equal(s.error,null)}
assert.equal(ctx.parseDiorama('').steps.length,0);
assert.equal(ctx.parseDiorama('# comment\n'+lines[0]).steps[0].value,'Mochi');
assert.ok(ctx.parseDiorama('name =').error);
assert.ok(ctx.parseDiorama('build_house()').error);
assert.ok(ctx.parseDiorama(lines[0]+'\nsupplies = []').error);
assert.ok(ctx.parseDiorama(lines[0]+'\nsupplies = ["wood" "stone"]').error);
assert.ok(ctx.parseDiorama(lines.slice(0,4).join('\n')+'\nfor tree in range(999): plant_tree()').error);
assert.ok(ctx.parseDiorama(lines.join('\n')+'\nalert(1)').error);
assert.equal(ctx.parseDiorama(lines.slice(0,3).join('\n')+'\nif house:').steps.length,3);
assert.ok(html.includes("editor.addEventListener('input',updateDiorama)"));
assert.ok(html.includes('for(let i=0;i<12;i++)'));
console.log('Diorama script parses; 14 parser cases, live binding and bounded forest checked.');
