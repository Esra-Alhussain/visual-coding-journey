const fs=require('fs');
const source=fs.readFileSync(__dirname+'/index.html','utf8');
const qa=`<script>
(async()=>{try{
document.getElementById('code').value='move_right(1)\\nmove_up(2)\\nmove_right(5)\\nmove_up(2)\\nwater_plant()';
document.getElementById('code').dispatchEvent(new Event('input'));
document.getElementById('speed').value='250';
await window.MochiGarden.run();
const s=window.MochiGarden.state;
const report={watered:s.watered,steps:s.steps,position:s.position,running:s.running,successVisible:!document.getElementById('success').hidden,bodyWidth:document.body.scrollWidth,viewport:innerWidth};
const p=document.createElement('pre');p.id='browser-check-result';p.textContent=JSON.stringify(report);p.hidden=true;document.body.appendChild(p);
}catch(e){document.body.setAttribute('data-qa-error',e.message);}})();
</script>`;
fs.writeFileSync(__dirname+'/browser-check.html',source.replace('</body>',qa+'</body>'));
console.log('Prepared real-browser route harness.');
