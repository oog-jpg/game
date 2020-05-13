var game = {
    state: "load_map_1",
    level: -1,
    level_max: 0,
    mashtab:30,
};


var fon={
    load: palitra_color.white,
    zagrugen:palitra_color.white,
    R: 255,
    G: 255,
    B: 255,
    zatemnenie: 1,  
}

var player = {
	x:0,
	y:0,
	width: game.mashtab/2,
	height: game.mashtab/2,
};

var finis = {
	x:0,
	y:0,
	width: game.mashtab/2,
	height: game.mashtab/2,
    animaciacryg: 0,
};

var keyboard = { };
var block = [];
var obj = [];
var btnlevel = [];

var can = document.getElementById("canvas");
var c = can.getContext('2d');

game.level=localStorage.getItem('key_level');
game.level_max=localStorage.getItem('key_level_max');

creat_button ();

// =========== игра    ============

function updategame(){

        if(keyboard[27])
        { 
             keyboard[27]=false;
             switch(game.state)
             {
                    case "playing":
                     game.state="menu_open";
                    break;

                    case "menu_1":
                     game.state="menu_close";
                    break;

                default:
               break;
            }
        }  
    
      if(keyboard[46])
      {
        localStorage.setItem('key_level_max',  0);
        localStorage.setItem('key_level',  -1);
        location.reload();
      }

      
            if(game.state=='load_map_1')
             { 
                localStorage.setItem('key_level',  game.level);
                    if(zatemnenieplus())
                    {
                    block = [];
                    obj=[];
                    createMap(maslevel[++game.level]);

                        if(game.level>game.level_max){
                            game.level_max=game.level;
                            localStorage.setItem('key_level_max',  game.level_max);
                            btnlevel[game.level].state_level="unlock";
                        }
                    game.state="load_map_2";
                    }
             }
    
            if(game.state=='load_map_2')
             {
                 if(zatemnenieminus())
                game.state="playing";
             }

            if(game.state=="menu_open")
             {
                 if(zatemnenieplus())
                   game.state="menu_1";
             }
    
            if(game.state=="menu_close")
             {
                 if(zatemnenieminus())
                   game.state="playing";
             }
}

function updatePlayer() {
    
    if(keyboard[38] && checkblock(player.x, player.y - game.mashtab)){
        player.y -= game.mashtab;
        if(player.y < 0) player.y = 0;
       } 
    if(keyboard[40] && checkblock(player.x, player.y +game.mashtab))  {
        player.y += game.mashtab;
        var down = can.height - player.height-15;
	    if(player.y > down) player.y = down;
    }	

    if(keyboard[37] && checkblock(player.x -game.mashtab, player.y))  { 
	    player.x -= game.mashtab; 
	    if(player.x < 0) player.x = 0;
	}	

	if(keyboard[39] && checkblock(player.x+ game.mashtab, player.y )) { 
	    player.x += game.mashtab;	
	    var right = can.width - player.width-15;
	    if(player.x > right) player.x = right;
	}
}

function updatefon(){
    var color_speed=30;
    
        if(fon.R<(fon.load.R+color_speed) && fon.R>(fon.load.R-color_speed))
            fon.R =fon.load.R;
        else
           fon.R >fon.load.R ?  fon.R-=color_speed : fon.R+=color_speed ;

        if(fon.B<(fon.load.B+color_speed) && fon.B>(fon.load.B-color_speed))
            fon.B =fon.load.B;
        else
            fon.B >fon.load.B ?  fon.B-=color_speed : fon.B+=color_speed ;

        if(fon.G<(fon.load.G+color_speed) && fon.G>(fon.load.G-color_speed))
            fon.G =fon.load.G;
        else
            fon.G >fon.load.G ?  fon.G-=color_speed : fon.G+=color_speed ;
    
    if(fon.R == fon.load.R && fon.G == fon.load.G && fon.B == fon.load.B)
      fon.zagrugen=fon.load;
}

// ============== карта =============

function createMap(Level){
    fon.load=Level[Level.length-1];
        for (var y = 0; y < Level.length-1; y++) 
        {
        var line = Level[y], gridLine = [];
            for (var x = 0; x < Level[1].length; x++) 
            {
                switch(line[x])
                   {
                    case" ":
                    break;        
                   case"@":
                        player.x=x*game.mashtab;
                        player.y=y*game.mashtab;
                   break;  
                   case"*":
                        finis.x=x*game.mashtab;
                        finis.y=y*game.mashtab;
                   break;       
                   case"x":
                        block.push({
                            x: x*game.mashtab,y: y*game.mashtab,
                            color:  palitra_color.grey.Name,
                        })
                   break;
                   case"r":
                        block.push({
                            x: x*game.mashtab,y: y*game.mashtab,
                            color: palitra_color.red.Name,
                        })
                   break;
                   case"g":
                        block.push({
                            x: x*game.mashtab,y: y*game.mashtab,
                            color: palitra_color.green.Name,
                        })
                   break;
                   case"b":
                        block.push({
                            x: x*game.mashtab,y: y*game.mashtab,
                            color: palitra_color.blue.Name,
                        })
                   break;
                    case"R":
                        obj .push({
                            x: x*game.mashtab,y: y*game.mashtab,
                            color: palitra_color.red.Name,
                        })
                   break;
                    case"G":
                        obj.push({
                            x: x*game.mashtab,y: y*game.mashtab,
                             color: palitra_color.green.Name,
                        })
                   break;
                    case"B":
                        obj.push({
                            x: x*game.mashtab,y: y*game.mashtab,
                              color: palitra_color.blue.Name,
                        })
                   break;
                    default:
                           console.log( "элемент карты не найден \n"+
                                        "карта = "+game.level+"\n"+
                                        "символ = "+line[x]+"\n"+
                                        "строка = "+y+"\n"+
                                        "столбец = "+x+"\n");
                   break;
                   }
            }
        }               
}

function creat_button(){
     for (var i = 0; i < maslevel.length; i++){
     
 btnlevel.push({
      x:(i-Math.floor(i/6)*6)*100   +125,
      y:Math.floor(i/6)*100         +100,
      w:game.mashtab*2,
      h:game.mashtab*2,
      text:i+1,
      state:"default",
     state_level:(game.level_max>i-1) ? "unlock" : "lock"
});
 }
}


// =========== проверка ===

function checkblock(x,y) {
    for(var i in block) {
        

            if(x==block[i].x && y==block[i].y && block[i].color!=fon.zagrugen.Name){
                return false;    
            }
        }
    checkwin(x,y);
    checkobj(x,y); 
     return true; 
}
    
function checkwin(x,y) {
    if(x==finis.x && y==finis.y)
    {
            game.state='load_map_1'; 
        if(maslevel.length==game.level)
            game.state='end';      
    }
}

function checkobj(x,y) {
    for(var i in obj) 
    {
        if(x==obj[i].x && y==obj[i].y)
        {
            switch(obj[i].color)
                {
                case palitra_color.red.Name:
                    fon.load = palitra_color.red;
                    break;
                case palitra_color.green.Name:
                   fon.load = palitra_color.green;
                    break;
                case palitra_color.blue.Name:
                    fon.load = palitra_color.blue;
                    break;
                }
               
        }
    } 
        
}

function checkCollision(x,y,obj){
  	return x >= obj.x && x <= obj.x + obj.w && 
        y >= obj.y && y <= obj.y + obj.h ;
  }

//====================================
function doSetup() {
     
$(document).keydown(function(e) {
  	keyboard[e.keyCode] = true;

});
    
$(document).keyup(function(e) {
  	keyboard[e.keyCode] = false;
});
    
}
//====================================

$(can).mousedown(function(e){
    for(var i in btnlevel) 
    {
		if(checkCollision(e.offsetX,e.offsetY,btnlevel[i]) && btnlevel[i].state_level=="unlock")
    	{
            game.level=--i;
            game.state='load_map_1';
        }
    }
 });

$(can).mousemove(function(e){
        for(var i in btnlevel){
	btnlevel[i].state = checkCollision(e.offsetX,e.offsetY,btnlevel[i] )?"over":"def";
    }
 });

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//

function zatemnenieplus(){
                if(fon.zatemnenie>0.9)return true;
                else fon.zatemnenie+=0.1
}

function zatemnenieminus(){
                if(fon.zatemnenie<0.1)return true;
                else fon.zatemnenie-=0.1
}





  
