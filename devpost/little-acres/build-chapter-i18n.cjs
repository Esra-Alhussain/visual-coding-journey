// Build the bilingual chapter from chapter-source.js and the copy catalogs.
const fs=require('fs'),vm=require('vm'),path=require('path');const p=n=>path.join(__dirname,n);
if(!fs.existsSync(p('chapter-source.js')))fs.copyFileSync(p('chapter.js'),p('chapter-source.js'));
if(!fs.existsSync(p('colorful-scene-before-english.html')))fs.copyFileSync(p('colorful-scene.html'),p('colorful-scene-before-english.html'));
let js=fs.readFileSync(p('chapter-source.js'),'utf8'),html=fs.readFileSync(p('colorful-scene-before-english.html'),'utf8');
const literal=/'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/g;
const literals=[...new Set([...js.matchAll(literal)].map(m=>m[0]).filter(s=>/[\u0600-\u06ff]/.test(s)))];const english=JSON.parse(fs.readFileSync(p('english-copy.json'),'utf8'));if(literals.length!==english.length)throw Error('Translation count mismatch '+literals.length+' / '+english.length);
const pairs={};literals.forEach((s,i)=>{if(s[0]!=='`'){if(typeof english[i]!=='string')throw Error('Missing translation '+i);pairs[vm.runInNewContext(s)]=english[i];}});
const staticCopy=JSON.parse(fs.readFileSync(p('static-english-copy.json'),'utf8'));const texts=[...new Set([...html.matchAll(/>([^<>]+)</g)].map(m=>m[1]).filter(v=>/[\u0600-\u06ff]/.test(v)))],attrs=[...html.matchAll(/(?:aria-label|alt)="([^"]+)"/g)].map(m=>m[1]);if(texts.length!==staticCopy.texts.length||attrs.length!==staticCopy.attributes.length)throw Error('Static count mismatch');texts.forEach((v,i)=>pairs[v.trim()]=staticCopy.texts[i].trim());attrs.forEach((v,i)=>pairs[v]=staticCopy.attributes[i]);
Object.assign(pairs,{'مساعدة {n} من 3':'Hint {n} of 3','{n} من 5 أنشطة مكتملة':'{n} of 5 activities complete','النشاط {n} من 5 · الفصل الأول':'Activity {n} of 5 · Chapter One','موشي يعرّفك بالمزرعة · {n} / {total}':'A tour with Mochi · {n} / {total}','، مكتمل':', complete','السطر':'Line','اللغة':'Language','موشي في النشاط الحالي':'Mochi is at the current activity'});
fs.writeFileSync(p('chapter-translations.js'),'window.ChapterTranslations = '+JSON.stringify(pairs,null,2)+';\n');
js=js.replace("const $=s=>document.querySelector(s),E=window.ChapterEngine;","const $=s=>document.querySelector(s),E=window.ChapterEngine,T=window.ChapterI18n?.t||((s)=>s);");
js=js.replace(literal,s=>/[\u0600-\u06ff]/.test(s)&&s[0]!=='`'?'T('+s+')':s);
js=js.replace('`مساعدة ${depth+1} من 3`',"T('مساعدة {n} من 3',{n:depth+1})").replace('`${n} من 5 أنشطة مكتملة`',"T('{n} من 5 أنشطة مكتملة',{n})").replace('`النشاط ${i+1} من 5 · الفصل الأول`',"T('النشاط {n} من 5 · الفصل الأول',{n:i+1})").replace('`موشي يعرّفك بالمزرعة · ${tourIndex+1} / ${tour.length}`',"T('موشي يعرّفك بالمزرعة · {n} / {total}',{n:tourIndex+1,total:tour.length})");
js=js.replace("${lessons[i].title}${completed.has(i)?'، مكتمل':''}","${T(lessons[i].title)}${completed.has(i)?T('، مكتمل'):''}");
js=js.replace('`السطر ${e.line||1}: ${errorMessages[e.kind]||errorMessages.expression}',"`${T('السطر')} ${e.line||1}: ${T(errorMessages[e.kind]||errorMessages.expression)}");
for(const value of ['l.title','l.explain','l.expected','l.why','l.hints[depth]','inspection[b.dataset.inspect]','title','copy']){js=js.replaceAll('textContent='+value+';','textContent=T('+value+');').replaceAll('innerHTML='+value+';','innerHTML=T('+value+');');}
js=js.replace("$('#chapter-progress').value=n;","$('#chapter-progress').value=n;$('#activity-path').style.setProperty('--current-activity',active);document.querySelector('#trail-mochi')?.setAttribute('aria-label',T('موشي في النشاط الحالي'));");
js=js.replace('loadActivity(0);beginTour();\n','document.addEventListener(\'chapterlanguage\',()=>{progress();if(tourIndex>=0)requestAnimationFrame(positionTour);});loadActivity(0);beginTour();\n');
js=js.replace("[$('#tour-back'),$('#tour-next'),$('#tour-skip')]","[$('#tour-back'),$('#tour-next'),$('#tour-skip'),$('#tour-language')]");
fs.writeFileSync(p('chapter.js'),js);
html=html.replace('<html lang="ar" dir="rtl">','<html lang="en" dir="ltr">').replace('</head>','<link rel="stylesheet" href="activity-art.css"></head>');
html=html.replace(/>([^<>]+)</g,(all,text)=>/[\u0600-\u06ff]/.test(text)?'>'+text.replace(text.trim(),pairs[text.trim()]||text.trim())+'<':all).replace(/(aria-label|alt)="([^"]+)"/g,(_,k,v)=>k+'="'+(pairs[v]||v).replaceAll('"','&quot;')+'"');
html=html.replace('<div class="header-actions">','<div class="header-actions"><button id="chapter-language" lang="ar" dir="rtl" aria-label="Switch to Arabic">العربية</button>');
html=html.replace('<div id="tour-spotlight">','<button id="tour-language" lang="ar" dir="rtl" aria-label="Switch to Arabic">'+String.fromCharCode(1575,1604,1593,1585,1576,1610,1577)+'</button><div id="tour-spotlight">');
html=html.replace('<script src="chapter-engine.js">','<script src="chapter-translations.js"></script><script src="chapter-i18n.js"></script><script src="activity-art.js"></script><script src="chapter-engine.js">');
fs.writeFileSync(p('colorful-scene.html'),html);console.log('English-default chapter generated; '+Object.keys(pairs).length+' bilingual text entries.');
