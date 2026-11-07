/*
 *  Random walker using vectors
 *  From Nature Of Code (natureofcode.com/vectors)
 *  Author: Michael Houmann
 * Made: 7/11 2026
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
