/**
 * Random walker that i 50% og the times
 * will move towards the mouse postition
 */
class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  step() {
    // Get a random number between 0 and 1
    const choice = random();

    // Give the walker 50% chance to go towards the nouse
    if (choice < 0.5) {
      // 23% chance to go after nouseX
      if (choice < 0.25) {
        if (this.x < mouseX) {
          this.x++;
        } else {
          this.x--;
        }
        // else go after mouseY
      } else {
        if (this.y < mouseY) {
          this.y++;
        } else {
          this.y--;
        }
      }
      // the other 50% are a "normal" walker
    } else {
      // get a random number between 1 and 4
      const rand = floor(random(4));
      // and get direction using this random number
      if (rand === 0) {
        this.x++;
      } else if (rand === 1) {
        this.x--;
      } else if (rand === 2) {
        this.y++;
      } else {
        this.y--;
      }
    }
  }

  show() {
    // Draw the walker as a point at x, y
    stroke(0);
    point(this.x, this.y);
  }
}
