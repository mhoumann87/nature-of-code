let position, velocity;

function setup() {
  createCanvas(640, 400);

  // Set the position for the ball
  position = createVector(100, 100);
  // Set the speed for the ball
  velocity = createVector(2.5, 2);
}

function draw() {
  background(210);

  // Add the spped to the position to get the ball to move
  position.add(velocity);

  // Set boundries for the ball
  if (position.x > width || position.x < 0) {
    velocity.x *= -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y *= -1;
  }

  // Draw the ball
  stroke(0);
  fill(127);

  circle(position.x, position.y, 48);
}
