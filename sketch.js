var hr = hour();
var min = minute();
var sec = second();
var minAngle, hrAngle, secAngle;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  hrAngle = map(hr, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);
}

function draw() {
  background(255,255,255);  
  ellipseMode(CENTER);
  fill("white");
  ellipse(400,200,300,300);
  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(400,200,100,100);
  pop();
  push();
  rotate(minAngle);
  stroke("royalblue");
  strokeWeight(7);
  line(400,200,75,75);
  pop();
  push();
  rotate(secAngle);
  stroke("lightgreen");
  strokeWeight(7);
  line(400,200,50,50);
  pop();
  drawSprites();
}