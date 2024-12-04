
// initial x and y position
let x; let y; let x2 = []; let y2 = [];
let radius = 320;
let angle = 0;
let numAxis = 10;
let shiftingAngles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (let i = 0; i < numAxis; i++) {
    shiftingAngles[i] = i*90/numAxis;
  }
}

function draw() {
  background(3, 49, 46);
  translate(width/2, height/2);
  stroke(255);

  x = radius * cos(angle);
  y = radius * sin(angle);

  noFill();
  ellipse(0, 0, radius*2, radius*2);
  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);

  circles();
  // increment angle by 1
  angle += 1;
}

function circles() {
  // figuring out the other circles maybe chaos or not
  for (let i = 0; i < numAxis; i++) {
    x2[i] = radius * cos(angle + shiftingAngles[i]);
    y2[i] = radius * sin(angle + shiftingAngles[i]);
    push();
    rotate(-shiftingAngles[i]);
    stroke(255);
    line(-radius, 0, radius, 0);
    line(0, -radius, 0, radius);
    fill(255);
    ellipse(x2[i], 0, 30, 30);
    ellipse(0, y2[i], 20, 20);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}