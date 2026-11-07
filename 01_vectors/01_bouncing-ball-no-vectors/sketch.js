let x = 100;
let y = 100;
const xSpeed = 2.5;
const ySpeed = 2;

function setup() {
  createCanvas(640, 400);


}

function draw() {
  background(210);

  // add speed to the the ball 
  x = x + xSpeed;
  y = y + ySpeed;

  // Set bounderies for the ball
  if (x > width || x < 0) {
    xSpeed = xSpeed * -1; 
  }
  if (y > height || y < 0) {
    ySpeed = ySpeed * -1;
  }

  console.log(y);

  stroke(0);
  fill(127);

  circle(x, y , 40);
}