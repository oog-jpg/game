var game = {
    state: "load_map_1",
    level: 0,
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
	x:7*game.mashtab,
	y:15*game.mashtab,
	width: game.mashtab/2,
	height: game.mashtab/2,
};

var finis = {
	x:7*game.mashtab,
	y:15*game.mashtab,
	width: game.mashtab/2,
	height: game.mashtab/2,
    animaciacryg: 0,
};

var keyboard = { };
var block = [];
var obj = [];


// =========== игра    ============

function updategame(){
    console.log(fon.R);
        if(game.state=='load_map_1' && fon.zatemnenie>0.9)
             {
                createMap(maslevel[game.level]);
                game.state="load_map_2";
             }
    
        if(game.state=='load_map_2' && fon.zatemnenie<0.1)
             {
                game.state="playing";
             }
    
    
        if(game.state=='end')
             {
                game.state='end1';
                alert("конец");
             }
}


function updatePlayer() {
    
    if(keyboard[38] && checkblock(player.x, player.y - game.mashtab)){
        player.y -= game.mashtab;
        if(player.y < 0) player.y = 0;
       }
    

    if(keyboard[40] && checkblock(player.x, player.y +game.mashtab))  {
        player.y += game.mashtab;
        var down = canvas.height - player.height-15;
	    if(player.y > down) player.y = down;
    }	

    if(keyboard[37] && checkblock(player.x -game.mashtab, player.y))  { 
	    player.x -= game.mashtab; 
	    if(player.x < 0) player.x = 0;
	}	

	if(keyboard[39] && checkblock(player.x+ game.mashtab, player.y )) { 
        
	    player.x += game.mashtab;	
	    var right = canvas.width - player.width-15;
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
      fon.zagrugen.Name=fon.load.Name;
    else
        fon.zagrugen.Name=null;
}

// ============== карта =============

function createMap(Level){
    fon.load=Level[0];
        for (var y = 1; y < Level.length; y++) 
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
                           alert("ошибка при создании карты");
                           console.log("элемент карты был не найден");
                            console.log("обьект равен символу = "+line[x]);
                           console.log("карта = "+game.level);
                           console.log("строка = "+y);
                           console.log("столбец = "+x);

                   break;
                   }
            }
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
            game.level++ ;
            block = [];
            obj=[];
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


//====================================

function doSetup() {
     
$(document).keydown(function(e) {
  	keyboard[e.keyCode] = true;
});
    
$(document).keyup(function(e) {
  	keyboard[e.keyCode] = false;
});
    
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}