let walker;

function setup() {
  createCanvas(640, 400);
  background(210);

  walker = new Walker();

}

function draw() {
  walker.step();
  walker.show();
}