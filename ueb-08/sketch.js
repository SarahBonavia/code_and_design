function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  noFill();
  stroke(255);

  // initialisierung; bedingung; update
  for(let i = 0; i < 100; i = i+1){
  // plan: Y position ist abhängig von Distanz von Maus zu 
  let Distanz = dist(mouseX, mouseY, i*200, height/2);
  let yPos = map(Distanz, 0, width, -300, 300);
  // anweisung
  //console.log(i);

  //ellipse ohne bewegung
  //ellipse(i * 200 , height/2, 200, 200);

  // zwei ellipse-reihe mit bewegung
  ellipse(i * 200 , height/2 - yPos, 200, 200);
  ellipse(i * 200 , height/2 + yPos, 200, 200);
  
    
  // je näher desto grösser 
  //let Distanz = map(Distanz, 0, width, 300, 50)


   }

  }


