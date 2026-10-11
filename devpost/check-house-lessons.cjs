const fs=require('fs'),vm=require('vm'),assert=require('assert');
const base=__dirname;const source=fs.readFileSync(base+'/lesson-workspace.js','utf8');const ctx={};vm.createContext(ctx);vm.runInContext(source,ctx);const {parseLearning:parse,checksFor,lessonPlan:lessons}=ctx.LessonLogic;
const name=lessons[0].example,plan=lessons[1].example,loop=lessons[2].example;
const first=name+'\n'+plan.replace('let wall = 1;','')+'\n'+loop;
const full=first+'\n'+lessons[3].example+'\n'+lessons[4].example+'\n'+lessons[5].example;
assert.equal(parse(name).values.greeting,'Hello, let’s build a home!');
assert.equal(checksFor(parse(name),false)[0],false);assert.equal(checksFor(parse(name),true)[0],true);
assert.equal(parse(name+'\n'+plan).values.wall,1);assert.equal(parse(first).values.wall,12);
assert.equal(parse(first.replace('let width = 4;','let width = 6;')).values.wall,18);
assert.ok(checksFor(parse(first),true)[2]);assert.equal(checksFor(parse(name+'\n'+plan),true)[2],false);
const complete=parse(full);assert.equal(complete.error,null);assert.equal(complete.pending,false);assert.ok(checksFor(complete,true).slice(0,6).every(Boolean));
assert.ok(parse('let material = "plastic";').error);assert.ok(parse('let width = 100;').error);assert.ok(parse('let furniture = ["bed", "bed"];').error);assert.ok(parse('build_house();').error);assert.ok(parse('let greeting = alert(1);').error);assert.ok(parse('let width = 4;\nlet width = 5;').error);
assert.ok(parse('for (let block = 0; block < width * height; block = block + 1) {\n wall = wall + 1;').pending);
assert.equal(parse('let completed_walls = 3;\nlet roof = false;\nif (completed_walls === 4) {\n roof = true;\n}').values.roof,false);
assert.equal(parse('let completed_walls = 4;\nlet roof = false;\nif (completed_walls === 4) {\n roof = true;\n}').values.roof,true);
const guest=full+'\n'+(plan.replace('let wall = 1;','')+'\n'+loop+'\n'+lessons[3].example+'\n'+lessons[4].example+'\n'+lessons[5].example).replace(/\b(material|width|height|wall|walls|completed_walls|door|windows|roof_material|roof_color|roof|furniture)\b/g,'guest_$1');
assert.equal(parse(guest).error,null);assert.ok(checksFor(parse(guest),true)[6]);
const html=fs.readFileSync(base+'/prototype-cosmic-live.html','utf8');for(const id of ['replyForm','bubbleText','code','lessonNav','next','cutaway'])assert.ok(html.includes('id="'+id+'"'));
for(const match of html.matchAll(/<script[^>]+src="([^"?]+)(?:\?[^"]*)?"/g)){if(!match[1].startsWith('https:'))assert.ok(fs.existsSync(base+'/'+match[1]))}
new vm.Script(fs.readFileSync(base+'/diorama-house.js','utf8'));
console.log('House lessons: greeting/tap checks, six stages + finale, material/size bounds, loops, false/true conditions, invalid code, script links and syntax pass.');

// Verify that a chat reply cannot pass a lesson and that a fresh greeting must be tapped.
{
 const elements={};function element(){return {value:'',children:[],handlers:{},classList:{toggle(){}},setAttribute(){},addEventListener(k,fn){this.handlers[k]=fn},append(n){this.children.push(n)}}}
 const doc={getElementById:id=>elements[id]||(elements[id]=element()),createElement:element,querySelectorAll:()=>doc.getElementById('lessonNav').children};const win={};vm.runInNewContext(source,{document:doc,window:win});
 const ed=doc.getElementById('code'),next=doc.getElementById('next');ed.value=name;ed.handlers.input();win.Learning.tap();assert.equal(next.disabled,true,'No renderer cannot claim completion');
 win.Learning.connect({apply(){},cutaway(){}});assert.equal(next.disabled,true,'Guided practice requires independent variation');
 doc.getElementById('reply').value='repeat it';doc.getElementById('replyForm').onsubmit({preventDefault(){}});assert.equal(next.disabled,true,'A chat answer cannot pass');
 ed.value=name.replace('Hello, let’s build a home!','Welcome to my little world!');ed.handlers.input();assert.equal(next.disabled,true,'New greeting must be tapped');win.Learning.tap();assert.equal(next.disabled,false);
 doc.getElementById('next').onclick();assert.ok(doc.getElementById('lessonTitle').textContent.includes('home'));assert.equal(ed.value.includes('Welcome to my little world!'),true,'Navigation keeps learner code');
 console.log('Lesson UI checks pass: renderer gate, practical variation, chat-only answer, fresh-greeting tap and retained code.');
}

(async()=>{
class Vector{constructor(x=0,y=0,z=0){this.set(x,y,z)}set(x,y,z){this.x=x;this.y=y;this.z=z;return this}}
class Color{constructor(hex){this.hex=hex}setHex(hex){this.hex=hex}copy(other){this.hex=other.hex}}
class Material{constructor(opts={}){Object.assign(this,opts);this.color=new Color(opts.color)}clone(){return new Material({...this,color:this.color.hex})}dispose(){}}
class Geometry{dispose(){}}
class Node{constructor(){this.position=new Vector();this.scale=new Vector(1,1,1);this.rotation=new Vector();this.children=[];this.userData={}}add(...items){for(const item of items){item.parent=this;this.children.push(item)}}remove(item){this.children=this.children.filter(n=>n!==item)}traverse(fn){fn(this);for(const c of this.children)c.traverse(fn)}}
let scene;
class Scene extends Node{constructor(){super();scene=this}}
class Mesh extends Node{constructor(geometry,material){super();this.geometry=geometry;this.material=material;this.isMesh=true}}
class Camera extends Node{updateProjectionMatrix(){}lookAt(){}}
class Renderer{constructor(){this.shadowMap={}}setPixelRatio(){}setSize(){}setAnimationLoop(fn){this.loop=fn}render(){}}
class Light extends Node{constructor(){super();this.shadow={mapSize:{set(){}},camera:{}}}}
class Grid extends Node{constructor(){super();this.material={}}}
class Sprite extends Node{constructor(material){super();this.material=material}}
const FakeThree={Scene,Group:Node,Mesh,Sprite,Vector3:Vector,Vector2:Vector,MeshStandardMaterial:Material,SpriteMaterial:Material,CanvasTexture:class{dispose(){}},WebGLRenderer:Renderer,OrthographicCamera:Camera,HemisphereLight:Light,DirectionalLight:Light,GridHelper:Grid,BoxGeometry:Geometry,PlaneGeometry:Geometry,IcosahedronGeometry:Geometry,SphereGeometry:Geometry,TorusGeometry:Geometry,CylinderGeometry:Geometry,ConeGeometry:Geometry,PCFSoftShadowMap:1};
const elements={};const noop=()=>{};
const drawing={fillRect:noop,strokeRect:noop,beginPath:noop,moveTo:noop,lineTo:noop,stroke:noop,roundRect:noop,fill:noop,fillText:noop};
const document={getElementById:id=>elements[id]||(elements[id]={clientWidth:1200,clientHeight:800,addEventListener:noop,setAttribute:noop}),createElement:()=>({getContext:()=>drawing})};let adapter;
const window={Learning:{connect(value){adapter=value},tap(){}},addEventListener:noop};
const renderSource=fs.readFileSync(base+'/diorama-house.js','utf8').replace("await import('https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js')",'FakeThree');
await vm.runInNewContext(renderSource,{FakeThree,document,window,devicePixelRatio:1,matchMedia:()=>({matches:true,addEventListener:noop}),performance:{now:()=>0},console});
assert.ok(adapter,'Scene connected');
adapter.apply(parse(name));assert.equal(scene.children.filter(n=>n.userData.home).length,0);
adapter.apply(parse(name+'\n'+plan));const main=scene.children.find(n=>n.userData.home==='main');assert.ok(main);assert.equal(main.children.filter(n=>n.userData.block).length,1);
adapter.apply(parse(first));assert.equal(main.children.filter(n=>n.userData.block).length,12);
adapter.apply(parse(full));assert.equal(scene.children.filter(n=>n.userData.home).length,1);assert.ok(main.children.filter(n=>n.userData.block).length>12);
const beforeCount=main.children.length;adapter.apply(parse(full.replace(lessons[2].example,'let wall = 0;').replace(lessons[3].example,'let completed_walls = 0;').replace(lessons[4].example,'let roof = false;')));assert.equal(main.children.length,beforeCount,'Deleting construction blocks preserves built work');adapter.apply(parse(''));assert.equal(main.children.length,beforeCount,'Deleted code retains creations');
adapter.apply(parse(full.replace('"brick"','"timber"')));assert.ok(main.children.filter(n=>n.userData.block).every(n=>n.material.color.hex===0xc8ac7c));
adapter.apply(parse(guest));assert.equal(scene.children.filter(n=>n.userData.home).length,2);assert.ok(scene.children.includes(main),'Finale preserves first home');
adapter.cutaway(true);assert.ok(main.children.filter(n=>n.userData.front).every(n=>n.material.opacity===.22));
console.log('Mocked scene checks pass: single persistent terrain, 1→12 blocks, material update, code-deletion retention, guest home addition and cutaway.');
})().catch(error=>{console.error(error);process.exitCode=1});
