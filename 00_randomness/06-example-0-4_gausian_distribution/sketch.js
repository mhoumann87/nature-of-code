// A sketch to display the gausian dristibution

function setup() {
  createCanvas(640, 400);
  background(210);
}

function draw() {
  let x = randomGaussian(320, 60);

  noStroke();
  fill(0, 10);
  circle(x, height / 2, 16);
}
