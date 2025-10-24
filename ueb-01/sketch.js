let durchmesser;
durchmesser=10;

let rotwert = 0;

//let durchmesser = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(245, 10);

  console.log(rotwert);

  //mouseX
  //mouseY

  fill(rotwert,0,0,100);
  rect(30, 20, 100, 100);

  fill(0,0,255,100);
  ellipse(400, 400, durchmesser, durchmesser);

  durchmesser = durchmesser + 1;

  // 11 = 10 + 1
  // 12 = 11 + 1

  rotwert = rotwert + 0,5;

  fill(125,50);
  line(100, 100, 100, 100);

}




