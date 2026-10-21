'use strict';
(() => {
  let canvas = document.getElementById('livingWater');
  const textureSource = window.MOCHI_WATER_TEXTURE;
  const motion = document.getElementById('motionToggle');
  const status = document.getElementById('ambienceStatus');
  const world = document.querySelector('.world');
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = !preference.matches, visible = true, ready = false, frame = 0, last = 0, elapsed = 0;
  let gl, program, timeLocation, paint2D = null, fallbackLoading = false;
  const vertex = 'attribute vec2 position;varying vec2 uv;void main(){uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}';
  const fragment = `precision mediump float;
varying vec2 uv;uniform sampler2D artwork;uniform float time;
float water(vec3 c){return smoothstep(.055,.19,max(c.b,c.g)-c.r)*smoothstep(.015,.10,c.b-c.r);}
void main(){
 vec2 p=vec2(uv.x,1.-uv.y);vec3 original=texture2D(artwork,p).rgb;
 float wet=water(original);
 // Conservatively retain land edges: neighboring pixels must also be water.
 wet*=water(texture2D(artwork,p+vec2(.004,0.)).rgb)*water(texture2D(artwork,p-vec2(.004,0.)).rgb);
 wet*=water(texture2D(artwork,p+vec2(0.,.004)).rgb)*water(texture2D(artwork,p-vec2(0.,.004)).rgb);
 vec2 flow=vec2(sin(p.y*95.+time*.82)+.45*sin(p.x*73.-time*.55),cos(p.x*88.+time*.61)+.4*sin(p.y*131.-time*.73));
 vec2 displaced=clamp(p+flow*vec2(.0065,.004)*wet,vec2(.001),vec2(.999));
 vec3 color=texture2D(artwork,displaced).rgb;
 float ripple=sin(p.x*290.+p.y*210.-time*1.5)*sin(p.y*170.-p.x*120.+time*.8);
 float shallows=smoothstep(.28,.7,original.g)*smoothstep(.10,.4,original.g-original.r);
 color+=vec3(.04,.075,.08)*ripple*wet*(.4+shallows);
 // Very small movement of surviving green foliage; buildings/ruins remain fixed.
 float leaf=smoothstep(.065,.15,original.g-original.r)*smoothstep(.04,.15,original.g-original.b)*(1.-wet);
 vec2 sway=vec2(sin(time*.75+p.y*95.)*.0007,0.)*leaf;
 color=mix(color,texture2D(artwork,clamp(p+sway,vec2(.001),vec2(.999))).rgb,leaf*.65);
 gl_FragColor=vec4(color,1.);
}`;
  function shader(type, source) {
    const item=gl.createShader(type);gl.shaderSource(item,source);gl.compileShader(item);
    if(!gl.getShaderParameter(item,gl.COMPILE_STATUS)) throw Error('Animation shader unavailable');
    return item;
  }
  function render(now) {
    frame=0;
    if(!ready || !enabled || document.hidden || !visible || world.classList.contains('show-vision')) {last=0;return;}
    if(now-last>=(paint2D ? 65 : 32)) {
      elapsed+=last ? Math.min((now-last)/1000,.1) : 0;
      last=now;
      if(paint2D) paint2D(elapsed);
      else {gl.uniform1f(timeLocation,elapsed);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);}
      canvas.dataset.frames=String(Number(canvas.dataset.frames || 0)+1);
    }
    frame=requestAnimationFrame(render);
  }
  function sync() {
    const hiddenCoast=document.hidden || !visible;
    if(world.classList.contains('coastal-hidden')!==hiddenCoast) world.classList.toggle('coastal-hidden',hiddenCoast);
    const vision=world.classList.contains('show-vision');
    canvas.hidden=!ready || !enabled || vision;
    motion.setAttribute('aria-pressed',String(enabled));
    motion.textContent=enabled?'Pause motion':'Play motion';
    if(world.classList.contains('motion-paused')===enabled) world.classList.toggle('motion-paused',!enabled);
    if(frame) cancelAnimationFrame(frame);frame=0;last=0;
    if(ready && enabled && !document.hidden && visible && !vision) frame=requestAnimationFrame(render);
  }
  function fallback() {
    if(fallbackLoading)return;
    fallbackLoading=true;ready=false;canvas.hidden=true;
    const fail=()=>{motion.disabled=true;motion.textContent='Still illustration';status.textContent='Motion could not start; the map and sound still work.';};
    const image=new Image();
    image.onerror=fail;
    image.onload=()=>{
      try {
        const replacement=document.createElement('canvas');replacement.id=canvas.id;replacement.className=canvas.className;replacement.setAttribute('aria-hidden','true');
        replacement.width=960;replacement.height=Math.round(960*image.height/image.width);
        const ctx=replacement.getContext('2d');if(!ctx)throw Error('Canvas unavailable');
        canvas.replaceWith(replacement);canvas=replacement;
        const w=canvas.width,h=canvas.height;
        const cut=document.createElement('canvas');cut.width=w;cut.height=h;
        const cutContext=cut.getContext('2d',{willReadFrequently:true});cutContext.drawImage(image,0,0,w,h);
        const pixels=cutContext.getImageData(0,0,w,h),data=pixels.data;
        const alpha=new Uint8Array(w*h);
        for(let i=0;i<alpha.length;i++){
          const r=data[i*4],g=data[i*4+1],b=data[i*4+2];
          alpha[i]=Math.round(Math.max(0,Math.min(1,(Math.max(g,b)-r-20)/35))*Math.max(0,Math.min(1,(b-r-5)/25))*255);
        }
        for(let y=0;y<h;y++)for(let x=0;x<w;x++){
          const i=y*w+x;data[i*4+3]=x>3&&x<w-4&&y>3&&y<h-4?Math.min(alpha[i],alpha[i-3],alpha[i+3],alpha[i-3*w],alpha[i+3*w]):0;
        }
        cutContext.putImageData(pixels,0,0);
        const warped=document.createElement('canvas');warped.width=w;warped.height=h;const effect=warped.getContext('2d');
        paint2D=time=>{
          ctx.drawImage(image,0,0,w,h);effect.clearRect(0,0,w,h);
          for(let y=0;y<h;y+=3){
            const dx=Math.sin(y*.027+time*1.1)*4.5+Math.sin(y*.061-time*.65)*2;
            effect.drawImage(cut,0,y,w,Math.min(3,h-y),dx,y,w,Math.min(3,h-y));
          }
          effect.globalCompositeOperation='destination-in';effect.drawImage(cut,0,0);effect.globalCompositeOperation='source-over';
          ctx.drawImage(warped,0,0);
        };
        canvas.dataset.ready='true';canvas.dataset.renderer='canvas2d';ready=true;sync();
      }catch(error){fail();}
    };
    image.src=textureSource;
  }
  try {
    gl=canvas.getContext('webgl',{alpha:false,antialias:false,powerPreference:'low-power'});
    if(!gl) throw Error('WebGL unavailable');
    program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vertex));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS)) throw Error('Animation unavailable');
    gl.useProgram(program);
    const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    const position=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
    timeLocation=gl.getUniformLocation(program,'time');
    const image=new Image();
    image.onload=()=>{
      try {
        canvas.width=Math.min(image.width,1536);canvas.height=Math.round(canvas.width*image.height/image.width);gl.viewport(0,0,canvas.width,canvas.height);
        const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);
        gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);
        if(gl.getError()!==gl.NO_ERROR)throw Error('Texture unavailable');
        ready=true;canvas.dataset.ready='true';canvas.dataset.renderer='webgl';sync();
      } catch(error){fallback();}
    };
    image.onerror=fallback;image.src=textureSource;delete window.MOCHI_WATER_TEXTURE;
    canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();fallback();});
  } catch(error) {fallback();}
  motion.addEventListener('click',()=>{enabled=!enabled;sync();});
  preference.addEventListener('change',()=>{enabled=!preference.matches;sync();});
  new MutationObserver(sync).observe(world,{attributes:true,attributeFilter:['class']});
  // Observe only viewport visibility; do not run the GPU while the map is offscreen.
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}).observe(world);
  sync();

  document.addEventListener('visibilitychange',sync);
  window.addEventListener('pagehide',()=>{if(frame)cancelAnimationFrame(frame);});
  window.addEventListener('pageshow',sync);
})();
