

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 20);
  noFill();
  stroke(255);

  // initialisierung; bedingung; update
  for(let i = 0; i < 100; i = i+1){


  // bewegung mit sin funktion
  let yPos = map(sin(frameCount * 0.05 + i), -1, 1, 0, 200);

  // Random Variation
  let noiseValue = noise(frameCount * 0.01 + i);
  let randomValue = random(0, 100);

  //rot kanal abhängig von distanz
  let rotkanal = map(noiseValue, 0, 1, 50, 255);
  //grüen kanal abhängig von distanz
  let gruenkanal = map(noiseValue, 0, 1, 200, 50);
  let blaukanal = map(noiseValue, 0, 1, 150, 255);


  // Transparenz oszilliert
  let alpha = map(sin(frameCount * 0.01 + i), -1, 1, 100, 255);

  // Strichstärke variieren autonom
  let durchmesser = map(noiseValue, 0, 1, 100, 300);
  let size = map(noiseValue, 0, 1, 0.5, 2);
  
 
  strokeWeight(size);
  fill(alpha, gruenkanal, randomValue, noiseValue * 255);
  stroke(rotkanal, alpha, blaukanal, noiseValue * 255);


  // zwei ellipse-reihe mit bewegung
  ellipse(i * 200 , height/2 - yPos, durchmesser, 200 );
  ellipse(i * 200 , height/2 + yPos, 200, durchmesser);
  

   }

  }


