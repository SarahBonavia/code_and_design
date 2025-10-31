let drehwinkel=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);

}


function draw() {
  background(0);

  push();
  //Rechteck rechts
  //Koordinatesystem verschieben
  translate(width/2 + 200, height/2);
  //rotieren
  rotate(drehwinkel);

  fill(0, 0, 255);
  rect (0, 0, 200, 200);

  pop();


  push();
  //Rechteck links
  //Koordinatesystem verschieben
  translate(width/2 - 200, height/2);
  //hier im Gegenuhrzeigersinn drehen
  rotate(drehwinkel * -1); // suggestion von copilot

  fill(0, 150, 255);
  rect (0, 0, 200, 200);

  pop();

  fill(255, 0, 100);
  //Koordinatesystem zurückgesetzt
  rect(0, 0, 200, 200);



  drehwinkel = drehwinkel +1;

}
