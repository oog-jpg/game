var palitra_color = new Object();

palitra_color.red = new Object();
palitra_color.red.Name = "IndianRed";
palitra_color.red.R = 205;
palitra_color.red.G = 92;
palitra_color.red.B = 92;

palitra_color.green = new Object();
palitra_color.green.Name = "LimeGreen";
palitra_color.green.R = 50;
palitra_color.green.G = 205;
palitra_color.green.B = 50;

palitra_color.blue = new Object();
palitra_color.blue.Name = "DodgerBlue";
palitra_color.blue.R = 30;
palitra_color.blue.G = 144;
palitra_color.blue.B = 255;

palitra_color.white = new Object();
palitra_color.white.Name = "white";
palitra_color.white.R = 255;
palitra_color.white.G = 255;
palitra_color.white.B = 255;

palitra_color.black = new Object();
palitra_color.black.Name = "black";
palitra_color.black.R = 0;
palitra_color.black.G = 0;
palitra_color.black.B = 0;

palitra_color.grey = new Object();
palitra_color.grey.Name = "grey";
palitra_color.grey.R = 128;
palitra_color.grey.G = 128;
palitra_color.grey.B = 128;


window['palitra_color'] = palitra_color;



var training1 = [
    palitra_color.white,
    "                           ",
    "                           ",
    "           r g b           ",
    "           r g b           ",
    "                           ",
    "           R G B           ",
    "                           ",
    "                           ",
    "       xxxxxxx xxxxxxxxx   ",
    "       x               x   ",
    "       x @           * x   ",
    "       x               x   ",
    "       xxxxxxxxxxxxxxxxx   ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
];

var training2 = [
    palitra_color.white,
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "       xxxxxxxxxxxxxxxxx   ",
    "       x         r     x   ",
    "       x @   R   r   * x   ",
    "       x         r     x   ",
    "       xxxxxxxxxxxxxxxxx   ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
];

var training3 = [
    palitra_color.white,
    "                           ",
    "                           ",
    "                           ",
    "               *           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "       xxxxxxxxxxxxxbbbx   ",
    "       x     r G g     x   ",
    "       x @ R r   g   B x   ",
    "       x     r   g     x   ",
    "       xxxxxxxxxxxxxxxxx   ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
];

var training4 = [
    palitra_color.white,
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    " xxxxxxxxxxxxxxxxxxxxxx    ",
    " x   x        x       x    ",
    " x * x        B       xxxxx",
    " x   x        x           x",
    " xbbbx        x           x",
    " x @ x        x           x",
    " x   xxxxxbbbxxxxxggxxxbbbx",
    " x   r                    x",
    " x   r                    x",
    " x   xxxxxxxxxxxxxxxxxx   x",
    " x      b          b      x",
    " x    R xxxxxxxxxxxxG     x",
    " x      x          xxxxxxxx",
    " xxxxxxxx                  ",
    "                           ",
    "                           ",
];

var end = [
    palitra_color.white,
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "             @             ",
    "                           ",
    "                           ",
    "            xxx            ",
    "           x   x           ",
    "           x * x           ",
    "           x   x           ",
    "            xxx            ",
    "                           ",
    "                           ",
];

var maslevel=[training1,training2,training3,training4,end];
window['maslevel'] = maslevel;



