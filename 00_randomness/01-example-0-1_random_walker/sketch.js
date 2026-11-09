// set a variable for the walker
let walker;

function setup() {
  createCanvas(640, 400);
  background(210);
  // create the walker
  walker = new Walker();
}

function draw() {
  // Use the nethods to make the walker move and show
  walker.step();
  walker.show();
}
