class Walker {
  constructor() {
    this.position = createVector(width / 2, height / 2);
  }

  step() {
    const choice = floor(random(4));

    if (choice === 0) {
      this.position.x++;
    } else if (choice === 1) {
      this.position.x--;
    } else if (choice === 2) {
      this.position.y++;
    } else {
      this.position.y--;
    }
  }

  show() {
    stroke(0);
    point(this.position.x, this.position.y);
  }
}
