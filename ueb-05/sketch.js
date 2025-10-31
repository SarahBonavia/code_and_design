let drehwinkel=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}


function draw() {
  background(0);

  push();
  //Rechteck unten rechts
  //Koordinatesystem verschieben
  translate(width/4 + 650, height/2);
  //rotieren
  rotate(drehwinkel);

  fill(100, 40, 255);
  rect (0, 0, 100, 100);

  pop();

    push();
  //Rechteck unten zentrum
  //Koordinatesystem verschieben
  translate(width/4 + 250, height/2);
  //rotieren
  rotate(drehwinkel);

  fill(100, 255, 255);
  rect (0, 0, 100, 100);

  pop();

  push();
  //Rechteck unten links
  //Koordinatesystem verschieben
  translate(width/4 - 200, height/2);
  //hier im Gegenuhrzeigersinn drehen
  rotate(drehwinkel * -1); // suggestion von copilot

  fill(255, 0, 255);
  rect (0, 0, 100, 100);

  pop();

    push();
  //Rechteck oben rechts
  //Koordinatesystem verschieben
  translate(width/2 + 150, height/8);
  //rotieren
  rotate(drehwinkel);

  fill(150, 200, 255);
  rect (0, 0, 100, 100);

  pop();


  push();
  //Rechteck oben links
  //Koordinatesystem verschieben
  translate(width/2 - 300, height/8);
  //hier im Gegenuhrzeigersinn drehen
  rotate(drehwinkel * -1); // suggestion von copilot

  fill(0, 150, 255);
  rect (0, 0, 100, 100);

  pop();

  //fill(255, 0, 100);
  //Koordinatesystem zurückgesetzt
  //rect(0, 0, 200, 200);


  drehwinkel = drehwinkel +1;

}
