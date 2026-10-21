const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
(async()=>{
const base='devpost/little-acres/';
for(const [name,magic] of [['ocean-wave.flac','fLaC'],['coastal-gull.ogg','OggS'],['garden-breeze.ogg','OggS']])assert.equal(fs.readFileSync(base+'art/audio/'+name).subarray(0,4).toString(),magic);
const html=fs.readFileSync(base+'world-map-living.html','utf8');for(const m of html.matchAll(/(?:src|href)="([^"]+)"/g)){if(!/^https?:/.test(m[1]))assert(fs.existsSync(path.join(base,m[1].split('?')[0])),m[1]);}
const events={},sound={textContent:'',contains:()=>false,setAttribute(k,v){this[k]=v;},addEventListener(t,f){events['sound:'+t]=f;}},status={};
let allowed=false,audio,sourceCount=0;
const buffer=()=>({numberOfChannels:1,length:1024,sampleRate:1000,getChannelData:()=>new Float32Array(1024)});
function node(){return {gain:{value:0,cancelScheduledValues(){},setTargetAtTime(){}},connect(){return this;},start(){sourceCount++;}};}
class AudioContext{constructor(){audio=this;this.state='suspended';this.currentTime=0;}createGain(){return node();}createBuffer(){return buffer();}createBufferSource(){return node();}decodeAudioData(){return Promise.resolve(buffer());}addEventListener(){}resume(){if(!allowed)return Promise.reject(Error('gesture required'));this.state='running';return Promise.resolve();}suspend(){this.state='suspended';return Promise.resolve();}}
const doc={hidden:false,getElementById:id=>id==='soundToggle'?sound:status,addEventListener:(t,f)=>events[t]=f};
const env={window:{AudioContext,addEventListener(){}},document:doc,Uint8Array,atob:s=>Buffer.from(s,'base64').toString('binary'),setInterval:()=>1,clearInterval(){},setTimeout:()=>2,clearTimeout(){}};
vm.createContext(env);vm.runInContext(fs.readFileSync(base+'world-map-nature-audio.js','utf8'),env);vm.runInContext(fs.readFileSync(base+'world-map-nature.js','utf8'),env);
const settle=()=>new Promise(r=>setImmediate(r));await settle();assert.equal(sound['aria-pressed'],'true');assert.equal(audio.state,'suspended');
allowed=true;events.pointerdown({isTrusted:true,target:{}});await settle();assert.equal(audio.state,'running');assert.equal(sourceCount,2,'two nature ambience loops');
events['sound:click']();await settle();assert.equal(sound['aria-pressed'],'false');assert.equal(audio.state,'suspended');
events.pointerdown({isTrusted:true,target:{}});await settle();assert.equal(audio.state,'suspended','mute survives later interactions');
events['sound:click']();await settle();assert.equal(audio.state,'running');assert.equal(sourceCount,2,'resume does not duplicate loops');
doc.hidden=true;events.visibilitychange();await settle();assert.equal(audio.state,'suspended');
doc.hidden=false;events.visibilitychange();await settle();assert.equal(audio.state,'running');
console.log('PASS: real audio signatures/assets, default-on setting, first-gesture start, mute retention, resume without duplicate loops and hidden-tab pause');
})().catch(e=>{console.error(e);process.exitCode=1;});
