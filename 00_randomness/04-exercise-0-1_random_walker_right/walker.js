/**
 * Random walker with a tendency of moving right
 */

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  step() {
    // get a random between 0 and 1
    const choice = random(1);
    // Use the random number to choose the direction
    if (choice < 0.5) {
      this.x++;
    } else if (choice < 0.66) {
      this.x--;
    } else if (choice < 0.82) {
      this.y++;
    } else {
      this.y--;
    }
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }
}
