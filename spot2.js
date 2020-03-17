
var cloud;

function preload(){
  img = loadImage('assets/cloud.png');
}

var spot = {
  x: 100,
  y: 50
};

var col = {
  r: 255,
  g: 50,
  b: 45,
};
function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  col.r = random(100, 255);
  col.g = random(100,55);
  col.b = random(100, 190);

  spot.x = random(0, width);
  spot.y = random(0, height);
  //noStroke();
  //fill(col.r, col.g, col.b, 100);
  image(cloud, spot.x, spot.y, 24, 24);
  //ellipse(spot.x, spot.y, 24, 24);
}