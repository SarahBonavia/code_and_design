let orbitSlider, speedSlider;

function setup() {

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // Grad (0–360°) - Wenn es nicht angegeben wäre, wären Radianten 
  

  orbitSlider = createSlider(0, 100, 50); // Werte min, max, start
  orbitSlider.position(20, 20);
  orbitSlider.style('width', '200px'); // Slider-Breite
  
  
  //für die Drehgeschwindigkeit, reicht von 0,1 bis 5, ändert sich in Schritten von 0,1 (sanfter)
  speedSlider = createSlider(0.1, 5, 0.5, 0.1); // Werte min, max, start, Schrittweite
  speedSlider.position(20, 50); // Position des Sliders
  speedSlider.style('width', '200px');

}

function draw() {
  background(20);
  
  // steuert die Kreisbahn (wie weit der Mond entfernt ist)
  let orbit = orbitSlider.value(); 

  // steuerung Drehgeschwindigkeit des Mondes um die Erde
  let rotationspeed = speedSlider.value(); 
  
  // Position und Grösse der Erde
  ellipse(width / 2, height / 2, 80, 80);
  // Farbe der Erde mit Transparenz basierend auf Orbit
  fill(0, 100, 255, map(orbit, 0, 100, 100, 200)); 
  
  
  // Mondposition berechnen
  let angle = frameCount * rotationspeed; // Winkel basierend auf der Drehgeschwindigkeit
  let distance = map(orbit, 0, 100, 80, 150); // Abstand des Mondes von der Erde basierend auf dem Orbit-Slider
  let moonX = width / 2 + cos(angle) * distance; // X-Position des Mondes, Mathematik des Kreises (cos und sin)
  let moonY = height / 2 + sin(angle) * distance; // Y-Position des Mondes


  // Position und Grösse des Mondes
  ellipse(moonX, moonY, 25, 25); 
  // Farbe des Mondes
  fill(128); 
  

  
  // Labels, um Funktion des Sliders anzugeben
  fill(255);
  textSize(14);
  text("Orbit", 240, 35);
  text("Rotation speed", 240, 65);

  
}