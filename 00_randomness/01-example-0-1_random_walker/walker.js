// Create a class to descripe the walker
class Walker {
  constructor() {
    // Set the start position for the walker
    // here in the middle of the canvas
    this.x = width / 2;
    this.y = height / 2;
  }

  step() {
    // Get a random number between 0 and 4
    const choice = floor(random(4));

    // Use the random number to chose the direction
    // for the walker, and add that to the position
    // for the walker
    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else {
      this.y--;
    }
  }

  show() {
    // Draw the walker as a point at the x and y position
    stroke(0);
    point(this.x, this.y);
  }
}
