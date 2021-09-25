var h,m,s;
var hangle,mangle,sangle;
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
  
}

function draw() {
  background(0); 
  
  translate(250,250);
  rotate(-90)
h=hour()
m=minute()
s=second()
mangle=map (m,0,60,0,360);
sangle=map (s,0,60,0,360);
hangle=map (h%12,0,12,0,360);

push()
rotate (sangle);
stroke ("blue");
strokeWeight(5);
line (0,0,130,0)
pop ()

push()
rotate (mangle);
stroke ("red");
strokeWeight(5);
line (0,0,80,0);
pop ()

push()
rotate (hangle)
stroke ("green");
strokeWeight(5);
line (0,0,60,0);
pop ()


noFill();
strokeWeight(5);
stroke ("blue")
arc (0,0,300,300,0,sangle)
  
strokeWeight(5);
stroke ("red");
arc (0,0,280,280,0,mangle);

strokeWeight(5);
stroke("green");
arc (0,0,260,260,0,hangle);

 

  drawSprites();
}