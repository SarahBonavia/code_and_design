let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  slider = createSlider(0, 100, 50); //min max start
  slider.position(20, 20);
  slider.style('width', '200px'); 

}

function draw() {
  background(20);
  
  let orbit = slider.value();

  // Earth + Color change
  fill(0, 100, 255, map(orbit, 0, 100, 100, 200));
  // Earth position and size
  ellipse(width / 2, height / 2, 80, 80); 
  
  // Moon distance
  let distance = map(orbit, 0, 100, 80, 150);
  let moonX = width / 2 + distance;  // move on X axis 
  let moonY = height / 2;            // same Y as Earth
  

  // Moon color
  fill(128);
  // Moon position and size
  ellipse(moonX, moonY, 25, 25); 


  // Label
  fill(255);
  textSize(14);
  text("Distance", 240, 35);

}
