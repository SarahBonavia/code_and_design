let drehwinkel=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}


function draw() {
  background(0);


  push();
  //Rechteck unten zentrum
  //Koordinatesystem verschieben
  translate(width/2, height/2);
  //rotieren
  rotate(drehwinkel);

  fill(100, 255, 255);
  rect (0, 0, 100, 100);

  pop();

  

  push();

    // Little square movement
    //let angle = frameCount * rotationspeed; 
    //let distance = map(orbit, 0, 100, 80, 150);
    //let moonX = width / 2 + cos(angle) * distance;
    //let moonY = height / 2 + sin(angle) * distance;
  
  //Rechteck oben links
  //Koordinatesystem verschieben
  translate(width/2 - 300, height/6);
  //hier im Gegenuhrzeigersinn drehen
  rotate(drehwinkel * -1); // suggestion von copilot

  fill(0, 150, 255);
  rect (50, 50, 30, 30);

  pop();



  //fill(255, 0, 100);
  //Koordinatesystem zurückgesetzt
  //rect(0, 0, 200, 200);


  drehwinkel = drehwinkel +1;

}
