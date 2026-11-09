// A class for a walker
class Walker {
  constructor() {
    // Set the place where the walker starts
    // Here we start in the middle of the canvas
    this.x = width / 2;
    this.y = height / 2;
  }

  step() {
    // we chose a random number between 0 and 3 for both x and y
    // and subtract 1 from that number, so we end up with -1, 0 or 1
    const xStep = floor(random(3) - 1);
    const yStep = floor(random(3) - 1);
    // and here we add that number to the x and y
    this.x += xStep;
    this.y += yStep;
  }

  show() {
    // here we draw the walker as a point at the x and y position
    stroke(0);
    point(this.x, this.y);
  }
}
