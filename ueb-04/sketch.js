
<<<<<<< HEAD
let posX = 0;
let posY = 0;

let threshold = 240;
=======
let posX=0;
>>>>>>> 6072085 (TAG 2)


function setup() {
  createCanvas(windowWidth, windowHeight);

<<<<<<< HEAD
}


function draw() {
  background(20, 10);


  if(posX < threshold){

    //farbe vor der Position 120
    fill(255, 0, 0)
     }else{
      //farbe nach der Position 120
      fill(0, 0, 255)
    }

    //Zufallswert für Y Position
    //FrameCount
    // % Modulo
    if(frameCount % 10 == 0){
    posY = random(-50, 30)

    }

  rect(posX, height/ 2 + posY, 50, 50)

  // 1s posX -> 60
  // 2s posX -> 120
  // 3s posX -> 180

  // 6s posX -> 350

  /*
  exakt gleich          posX==350
  kleiner als           posX < 350
  grösser als           posX > 350
  kleiner oder gleich   posX <= 350 (wahr, falls posX 350 ist)
  grösser oder gleich   posX >= 350
  ungleich              posX != 350 (trifft immer zu, ausser posX hat den Wert von 350)
  
  */


  if(posX < 850){
    //falls die Bedigung zutrifft

    //noLoop();  eine mögliche Variante

    posX = posX + 1; //posX++

  
  }


}

=======

}

function draw() {
  background(220);

rect(posX, height/ 2)

posX = posX + 1; //posX++

}
>>>>>>> 6072085 (TAG 2)
