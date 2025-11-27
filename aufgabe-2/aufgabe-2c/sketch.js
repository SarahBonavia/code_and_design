

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 20);
  noFill();
  stroke(255);

  // initialisierung; bedingung; update
  for(let i = 0; i < 100; i = i+1){
  

  //autonome bewegung mit noise
  let noiseValue = noise(frameCount * 0.01 + i);
  let baseY = map(sin(frameCount * 0.05 + i), -1, 1, 0, 200);
  let durchmesser = map(noiseValue, 0, 1, 100, 300);

  // interaktive störung
  let Distanz = dist(mouseX, mouseY, i * 200, height / 2);
  // bewegung stören mit näherung des mauses
  let störung = map(Distanz, 0, width / 2, 0.2, 1.0);
  let yPos = baseY * störung;


  // plan: Y position ist abhängig von Distanz von Maus zu 
  //let Distanz = dist(mouseX, mouseY, i * 200, height/2);
  //let yPos = map(Distanz, 0, width, -300, 300);

  // anweisung
  //console.log(i);

  //ellipse ohne bewegung
  //ellipse(i * 200 , height/2, 200, 200);
  
  // je näher desto grösser 
  //let durchmesser = map(Distanz, 0, width, 0, 300);

  // bewegung mit sin funktion
  //let yPos = map(sin(frameCount * 0.05 + i), -1, 1, 0, 200);

  //rot kanal abhängig von distanz
  let rotkanal = map(Distanz, 0, width, 255, 0);
  //grüen kanal abhängig von distanz
  let gruenkanal = map(Distanz, 0, width, 0, 255);
  //blau kanal abhängig von distanz
  let blaukanal = map(Distanz, 0, width, 0, 255);

  let alpha = map(Distanz, 0, width, 255, 60);

  //let size = map(Distanz, 0, width, 10, 1);

  strokeWeight(map(noiseValue, 0, 1, 0.5, 2));
  fill(alpha, gruenkanal, 100, noiseValue * 255);
  stroke(rotkanal, alpha, blaukanal, noiseValue * 255);
  
  // zwei ellipse-reihe mit bewegung
  ellipse(i * 200 , height/2 - yPos, durchmesser, 200 );
  ellipse(i * 200 , height/2 + yPos, 200, durchmesser);
  

   }

  }


