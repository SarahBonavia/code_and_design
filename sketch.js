let slider;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  slider = createSlider(0, 100, 50); // values min max start
  slider.position(20, 20);
  slider.style('width', '200px'); 
}

function draw() {
  background(20);
  
  let orbit = slider.value();

  // Earth
  fill(0, 100, 255, map(orbit, 0, 100, 100, 200)); // Color change
  ellipse(width / 2, height / 2, 80, 80); // Earth position and size
  
  
  // Moon movement
  let angle = frameCount * 0.5;
  let distance = map(orbit, 0, 100, 80, 150);
  let moonX = width / 2 + cos(angle) * distance;
  let moonY = height / 2 + sin(angle) * distance;
  
  // Moon
  fill(128);
  ellipse(moonX, moonY, 25, 25); // Moon position and size


  // Label
  fill(255);
  textSize(14);
  text("Orbit", 240, 35);
}