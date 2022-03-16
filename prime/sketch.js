
// State of spiral
let x, y;
let px, py;
let step = 1;
let state = 0;
let numSteps = 1;
let turnCounter = 1;

// Scale / resolution
let stepSize = 20;
let totalSteps;

// Function to test if number is prime
function isPrime(value) {
  if (value == 1) return false;

  for (let i = 2; i <= sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }

  return true;
}

function setup () {
  createCanvas(500, 500);
  // set up spiral
  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  background(0);
}

function draw () {
  // If prime draw circle
  if (isPrime(step)) {
    fill(255);
    stroke(255);
    circle(x, y, stepSize * 0.5);
    // text(step, px, py)
  }
  // Connect current to previous with a line
  line(x, y, px, py);

  px = x;
  py = y;

  const movesMap = [
    () => x += stepSize,
    () => y -= stepSize,
    () => x -= stepSize,
    () => y += stepSize
  ]

  movesMap[state]();

  // Change state
  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;

    if (turnCounter % 2 == 0) {
      numSteps++;
    }
  }
  
  step++;

  // Are we done?
  if (step > totalSteps) {
    noLoop();
  }

  // frameRate(1);
}