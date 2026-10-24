'use strict';
(() => {
 const sound=document.getElementById('soundToggle'),status=document.getElementById('ambienceStatus');
 let wanted=true,context=null,master=null,buffers=null,loading=null,started=false,timer=0,firstCall=0,failed=false;
 const sources=[];
 let assetsLoading=null;
 function audioAssets(){
   if(window.MOCHI_NATURE_AUDIO)return Promise.resolve(window.MOCHI_NATURE_AUDIO);
   if(assetsLoading)return assetsLoading;
   assetsLoading=new Promise((resolve,reject)=>{
     const script=document.createElement('script');script.src='world-map-nature-audio.js';
     script.onload=()=>window.MOCHI_NATURE_AUDIO?resolve(window.MOCHI_NATURE_AUDIO):reject(Error('Audio assets unavailable'));
     script.onerror=()=>{script.remove();reject(Error('Audio assets unavailable'));};
     document.head.append(script);
   }).catch(error=>{assetsLoading=null;throw error;});
   return assetsLoading;
 }
 function label(){sound.setAttribute('data-audio-state',failed?'error':!wanted?'muted':context?.state==='running'&&buffers?'playing':loading&&!buffers?'loading':'waiting');sound.setAttribute('aria-pressed',String(wanted));sound.textContent=wanted?(context?.state==='running'&&buffers?'Sound on · mute':'Tap to start sound'):'Sound off · listen';}
 function decode(data){const bytes=Uint8Array.from(atob(data.slice(data.indexOf(',')+1)),c=>c.charCodeAt(0));return context.decodeAudioData(bytes.buffer);}
 function bird(){if(!wanted||document.hidden||context?.state!=='running'||!buffers)return;const node=context.createBufferSource(),gain=context.createGain();node.buffer=buffers.gull;gain.gain.value=.11;node.connect(gain).connect(master);node.start();node.onended=()=>{node.disconnect();gain.disconnect();};}
 function loop(buffer,volume){
   // Blend the end with the start to avoid a hard click at the loop boundary.
   const blend=Math.min(Math.floor(buffer.sampleRate*.3),Math.floor(buffer.length/5));
   const copy=context.createBuffer(buffer.numberOfChannels,buffer.length-blend,buffer.sampleRate);
   for(let channel=0;channel<buffer.numberOfChannels;channel++){
     const input=buffer.getChannelData(channel),output=copy.getChannelData(channel);output.set(input.subarray(blend));
     for(let i=0;i<blend;i++){const k=output.length-blend+i,mix=i/blend;output[k]=output[k]*(1-mix)+input[i]*mix;}
   }
   const node=context.createBufferSource(),gain=context.createGain();node.buffer=copy;node.loop=true;gain.gain.value=volume;node.connect(gain).connect(master);node.start();sources.push(node);
 }
 function sync(){
   clearInterval(timer);clearTimeout(firstCall);timer=0;firstCall=0;label();
   if(failed){status.textContent='Nature audio could not load. Tap Sound to retry.';return;}
   if(!wanted){status.textContent='Sound muted.';if(context)context.suspend().catch(()=>{});return;}
   if(document.hidden){if(context)context.suspend().catch(()=>{});return;}
   if(context?.state==='running'&&buffers){
     if(!started){loop(buffers.ocean,.42);loop(buffers.breeze,.17);started=true;}
     master.gain.cancelScheduledValues(context.currentTime);master.gain.setTargetAtTime(.65,context.currentTime,.3);
     status.textContent='Ocean waves · gentle breeze · distant birds';firstCall=setTimeout(bird,6500);timer=setInterval(bird,24000);
   }else status.textContent=loading&&!buffers?'Loading nature sounds…':'Tap the map or Sound to start the ambience.';
 }
 function prepare(){
   if(loading)return loading;
   const Audio=window.AudioContext||window.webkitAudioContext;
   if(!Audio){failed=true;sync();return Promise.resolve();}
   if(!context){context=new Audio();master=context.createGain();master.gain.value=0;master.connect(context.destination);context.addEventListener('statechange',sync);}
   loading=audioAssets().then(assets=>Promise.all([decode(assets.ocean),decode(assets.breeze),decode(assets.gull)])).then(([ocean,breeze,gull])=>{buffers={ocean,breeze,gull};failed=false;sync();}).catch(()=>{failed=true;loading=null;sync();});
   return loading;
 }
 function activate(){
   if(!wanted||document.hidden)return;
   prepare();
   if(context)context.resume().then(sync).catch(()=>{status.textContent='Tap Sound to start the coastal ambience.';});
 }
 sound.addEventListener('click',()=>{
   // A blocked/pending first play is an enable request, not a mute request.
   if(wanted && (failed || !buffers || context?.state!=='running')){failed=false;activate();return;}
   wanted=!wanted;label();if(wanted)activate();else sync();
 });
 function firstInteraction(event){if(event.isTrusted && !sound.contains(event.target)){activate();}}
 document.addEventListener('pointerdown',firstInteraction,{passive:true});
 document.addEventListener('keydown',firstInteraction);
 document.addEventListener('click',firstInteraction);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden&&wanted)activate();else sync();});
 window.addEventListener('pagehide',()=>{clearTimeout(firstCall);clearInterval(timer);context?.suspend().catch(()=>{});});
 window.addEventListener('pageshow',()=>{if(wanted)activate();});
 label();activate();
})();
