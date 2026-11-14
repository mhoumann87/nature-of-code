/**
 * Random walker with 50% chance to move towards the  mouse
 * Author: Michael Houmann
 * Created: 14/11 2026
 */

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
