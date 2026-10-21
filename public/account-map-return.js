(() => {
 if(new URLSearchParams(location.search).get('from')!=='map')return;
 const home=()=>location.assign('index.html');
 document.getElementById('authGuest')?.addEventListener('click',home);
 document.getElementById('authClose')?.addEventListener('click',home);
 let initialized=false;
 window.MochiAuth?.onChange(user=>{if(initialized&&user)home();initialized=true;});
 window.MochiAuth?.ready.then(()=>document.getElementById('signinBtn')?.click());
 document.getElementById('authLayer')?.addEventListener('click',event=>{if(event.target.id==='authLayer')home();});
 document.addEventListener('keydown',event=>{if(event.key==='Escape')home();});
})();
