/* Small deterministic teaching language: no eval, no arbitrary Python. */
(function(root){
  'use strict';
  const WIDTH=8,HEIGHT=5,START={x:0,y:4},GOAL={x:6,y:0};
  const obstacles=new Map([['2,4','a mossy rock'],['2,3','a mossy rock'],['4,1','a flower-covered rock'],['5,1','a flower-covered rock'],['4,3','the stream'],['4,4','the stream'],['4,0','the stream'],['7,0','the flowerbed']]);
  const directions={move_right:[1,0],move_left:[-1,0],move_up:[0,-1],move_down:[0,1]};
  function parse(source){
    const commands=[];let steps=0;
    const lines=source.split(/\r?\n/);
    for(let i=0;i<lines.length;i++){
      const line=lines[i].split('#')[0].trim();if(!line)continue;
      const movement=line.match(/^(move_right|move_left|move_up|move_down)\(\s*([1-8])\s*\)$/);
      if(movement){commands.push({name:movement[1],steps:Number(movement[2]),line:i+1});steps+=Number(movement[2]);}
      else if(/^water_plant\(\s*\)$/.test(line))commands.push({name:'water_plant',steps:0,line:i+1});
      else return{ok:false,line:i+1,message:'Line '+(i+1)+': try move_right(2), move_up(1), move_left(1), move_down(1), or water_plant(). Movement counts must be whole numbers from 1 to 8.'};
      if(commands.length>24||steps>80)return{ok:false,line:i+1,message:'Keep this little route to 24 commands and 80 walking steps or fewer.'};
    }
    if(!commands.length)return{ok:false,line:1,message:'Give Mochi a first instruction, such as move_right(1).'};
    return{ok:true,commands};
  }
  function step(position,name){
    const d=directions[name];if(!d)return{ok:false,message:'That is not a movement command.'};
    const next={x:position.x+d[0],y:position.y+d[1]};
    if(next.x<0||next.y<0||next.x>=WIDTH||next.y>=HEIGHT)return{ok:false,message:'That would leave the garden. Change the direction or use fewer steps.'};
    const obstacle=obstacles.get(next.x+','+next.y);if(obstacle)return{ok:false,message:'There’s '+obstacle+' in the way. Go around it; the wooden bridge is in the middle row.'};
    return{ok:true,position:next};
  }
  function water(position){return position.x===GOAL.x&&position.y===GOAL.y?{ok:true}:{ok:false,message:'The plant is too far away. Walk to the golden watering tile beside it, then use water_plant().'};}
  const api={WIDTH,HEIGHT,START,GOAL,obstacles,directions,parse,step,water};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.GardenEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
