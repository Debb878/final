
var cloud;
var sun;

let x = 1;
let y = 1;
let easing = 0.05;

var maxCircleSize = 50
var phase = 0, speed = 0.03;



function preload(){
  cloud= loadImage('images/cloud.png');
  sun= loadImage('images/sun.png');
}

let spotx = 10; 
let spoty = 50;



function setup() {
  createCanvas(600, 400);
  background(0);
  noCursor();
 
}

function draw() {

 // background(0);


  spotx = (0, width);
  spoty = random(height);
  
  imageMode(CENTER);
  image(cloud, x, spoty, 40,40);
  
push();

  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  image(sun, x,y, 70,70);
pop();
  
   
}

  



