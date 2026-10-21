const fs=require('fs'),vm=require('vm'),assert=require('assert');
const handlers={},frames=new Map(),shifts=[];let next=0,current;
function context(){return {drawImage(...args){if(args.length===9)shifts.push(args[5]);},clearRect(){},putImageData(){},getImageData(x,y,w,h){const data=new Uint8ClampedArray(w*h*4);for(let i=0;i<data.length;i+=4){data[i]=0;data[i+1]=170;data[i+2]=220;data[i+3]=255;}return {data};}};}
function canvas(){return {id:'livingWater',className:'living-water',dataset:{},getContext(type){return type==='webgl'?null:context();},setAttribute(){},replaceWith(value){current=value;},addEventListener(){}};}
current=canvas();const original=current;
const button=id=>({disabled:false,setAttribute(k,v){this[k]=v;},addEventListener(t,f){handlers[id+':'+t]=f;}});
const motion=button('motion'),sound=button('sound'),status={},world={classList:{contains(){return false;},toggle(){}}};
const doc={hidden:false,body:{},getElementById:id=>({livingWater:original,motionToggle:motion,soundToggle:sound,ambienceStatus:status}[id]),querySelector:()=>world,createElement:()=>canvas(),addEventListener(){}};
const win={MOCHI_WATER_TEXTURE:'data:fake',addEventListener(){}};
const env={document:doc,window:win,matchMedia:()=>({matches:false,addEventListener(){}}),MutationObserver:class{observe(){}},IntersectionObserver:class{observe(){}},Image:class{constructor(){this.width=1536;this.height=1024;}set src(s){this.onload();}},requestAnimationFrame:f=>{frames.set(++next,f);return next;},cancelAnimationFrame:id=>frames.delete(id),setInterval,clearInterval,Float32Array,Uint8Array};
vm.runInNewContext(fs.readFileSync('devpost/little-acres/world-map-living.js','utf8'),env);
assert.equal(current.dataset.renderer,'canvas2d');assert.equal(current.dataset.ready,'true');
function tick(time){const [id,fn]=frames.entries().next().value;frames.delete(id);fn(time);}
tick(1000);const a=shifts[0];shifts.length=0;tick(1100);assert.notEqual(shifts[0],a,'water shifts change between frames');
handlers['motion:click']();assert(current.hidden);assert.equal(frames.size,0);
handlers['motion:click']();assert(!current.hidden);assert.equal(frames.size,1);
console.log('PASS: WebGL unavailable -> 2D fallback, changing water displacement, pause/resume, no static-only fallback');
