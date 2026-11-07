// Set up variables for the ball
let x = 100;
let y = 100;
let xSpeed = 2.5;
let ySpeed = 2;

function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(210);

  // add speed to the the ball
  x += xSpeed;
  y += ySpeed;

  // If the ball get outside canvas, inverst the speed
  if (x > width || x < 0) {
    xSpeed *= -1;
  }
  if (y > height || y < 0) {
    ySpeed *= -1;
  }

  // Draw the ball
  stroke(0);
  fill(127);

  circle(x, y, 48);
}
