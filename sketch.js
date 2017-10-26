function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(18,21,76);
  
  var diameter=0;
  
  if(width>height ){
    diameter=height-50;
  }
  else{
    diameter=width-50;
  }
  
  //circle
    push();
  fill(255,255,255);
  noStroke();
  strokeWeight(10);
  ellipse(width/2, height/2,diameter);
    pop();
  
  translate(width/2, height/2);
  rotate(-90);

  var h = hour();
  var m = minute();
  var s = second();

  var secondAngle = map(s, 0, 60, 0, 360);
  var minuteAngle = map(m, 0, 60, 0, 360);
  var hourAngle = map(h % 12, 0, 12, 0, 360);

  //seconds
  push();
   strokeWeight(1);
   rotate(secondAngle);
   stroke(255,255,255);
   line(0, 0, width, 0);
  pop();

  //minutes
  push();
   strokeWeight(5);
   rotate(minuteAngle);
   stroke(255,255,255);
   line(0, 0, width, 0);
  pop();

  //hours
  push();
   strokeWeight(15);
   rotate(hourAngle);
   stroke(255,255,255);
   line(0, 0, width, 0);
  pop();

  
}

function windowResized(){
resizeCanvas(windowWidth, windowHeight);  
  
}