let drehwinkel=0;

function preload() {

  bild = loadImage("images/IMG_5154.webp")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  let ratio = width / bild.width;
  tint(255, 20);
  image(bild, 0, 0, bild.width * ratio, bild.height * ratio)

  //clear();

  push();
  //Rechteck rechts
  //Koordinatesystem verschieben
  translate(width/2 + 200, height/3);
  //rotieren
  rotate(drehwinkel);

  fill(0, 0, 255);
  rect (0, 0, 100, 100);

  pop();


  push();
  //Rechteck links
  //Koordinatesystem verschieben
  translate(width/2 - 200, height/3);
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

function keyPressed(){
 if(key == 's'){
   saveCanvas("meinBild.png");

   }
  }
