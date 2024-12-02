
let distMouse = 25;
let block = [];
let cols;
let rows;
let size = 50;
let gap = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // rectMode set to center 
  // rectMode(CENTER);
  angleMode(DEGREES);

  calculateGrid();
  createBlocks();
  
}

function draw() {
  background('#1B065E');

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      block[i][j].move();
      block[i][j].display();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  calculateGrid();
  createBlocks();
}

function calculateGrid() {
  cols = floor(width / size);
  rows = floor(height / size);

  size = width / cols; // Forces exact fit horizontally
}

function createBlocks() {
  // create 2D array
  for (let i = 0; i < cols; i++) {
    block[i] = [];
    for (let j = 0; j < rows; j++) {
      block[i][j] = new Block(i * size + size / 2, j * size + size / 2);
    }
  }
}