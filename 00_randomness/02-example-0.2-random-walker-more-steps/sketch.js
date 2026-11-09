// Set a variable for the walker
let walker;

function setup() {
  createCanvas(640, 400);
  background(210);

  // Invoke the walker
  walker = new Walker();
}

function draw() {
  // use the methods in the class
  // to move and show the walker
  walker.step();
  walker.show();
}
