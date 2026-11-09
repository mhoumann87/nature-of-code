// Set a variable to keep track of the random
// numbers chosen. We use an array for this
const randomCounts = [];
// Set the max number af random numbers
const total = 20;

function setup() {
  createCanvas(640, 400);

  // "populate" our array and set every number to 0
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(210);

  // Pick a random number and increase the counter
  let index = floor(random(randomCounts.length));
  randomCounts[index]++;

  // draw the "graphs" for the counts
  stroke(0);
  fill(127);

  let w = width / randomCounts.length;
  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}
