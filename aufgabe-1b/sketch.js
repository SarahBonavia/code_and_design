let orbitSlider, speedSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  orbitSlider = createSlider(0, 100, 50); // values min max start
  orbitSlider.position(20, 20);
  orbitSlider.style('width', '200px');
  
  speedSlider = createSlider(0.1, 5, 0.5, 0.1); // values min max start step
  speedSlider.position(20, 50);
  speedSlider.style('width', '200px');
}

function draw() {
  background(20);
  
  let orbit = orbitSlider.value();
  let rotationspeed = speedSlider.value();
  
  // Earth
  fill(0, 100, 255, map(orbit, 0, 100, 100, 200)); // Color change
  ellipse(width / 2, height / 2, 80, 80); // Earth position and size
  
  // Moon movement
  let angle = frameCount * rotationspeed; 
  let distance = map(orbit, 0, 100, 80, 150);
  let moonX = width / 2 + cos(angle) * distance;
  let moonY = height / 2 + sin(angle) * distance;

  // Moon
  fill(128);
  ellipse(moonX, moonY, 25, 25); // Moon position and size
  
  // Labels
  fill(255);
  textSize(14);
  text("Orbit", 240, 35);
  text("Rotation speed", 240, 65);
}