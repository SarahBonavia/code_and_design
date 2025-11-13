function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  background(0);

  // plan durchmesser der ellipse  abhängig von distanz der maus

  let durchmesser;
  // distanz des zentrums der ellipse zur maus messen

  let distanz = dist(mouseX, mouseY, width/2, height/2);
  //console.log(distanz);

  durchmesser = map(distanz, 0, width/2, 5, 500);

  ellipse(width/2, height/2, durchmesser, durchmesser)



}
