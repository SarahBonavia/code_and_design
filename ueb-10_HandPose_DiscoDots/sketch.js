
// ML5 globali
let handpose;
let video;
let hands = [];
let ratio;
let isModelReady = false;

// grandezza media dei cerchi
let baseSize = 80;  
let oscillation = 0.04;


function preload() {
  handpose = ml5.handPose();

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  ratio = width / video.width;

  handpose.detectStart(video, gotHands);


}

function draw() {
  background(20, 20);

  push();
  translate(width, 0);
  scale(-1, 1);

  if (isModelReady) {
    drawFingerCircles();
  }

  pop();
}

  function gotHands(results) {
  hands = results;
  if (hands.length > 0) {
    isModelReady = true;
  }
}


  // Ogni punta delle dita: è un cerchio, oscilla in y, dimensione e colore influenzati dalla distanza del mouse
  function drawFingerCircles() {
  for (let h = 0; h < hands.length; h++) {
  let hand = hands[h];


  // Keypoints delle punte delle dita (4, 8, 12, 16, 20)
  let fingertipIndexes = [4, 8, 12, 16, 20];

  fingertipIndexes.forEach((idx, i) => {
  if (!hand.keypoints[idx]) return;

  let k = hand.keypoints[idx];


  // coordinate reali sul canvas
  let x = k.x * ratio;
  let y = k.y * ratio;

  // La distanza del mouse influenza la dimensione
  let d = dist(mouseX, mouseY, x, y);

  let size = map(d, 0, width, baseSize, 10);

  // oscillazione sinusoidale in Y
  let yMotion = map(
  sin(frameCount * oscillation + i * 0.4), -1, 1, -40, 40

   );


  // colore influenzato dal noise
  let n = noise(frameCount * 0.01 + i * 3);
  let r = map(d, 0, width, 255, 80);
  let g = map(n, 0, 1, 50, 200);
  let b = map(d, 0, width, 100, 255);
  let alpha = map(d, 0, width, 255, 60);

  stroke(r, alpha, b, alpha);
  strokeWeight(map(n, 0, 1, 0.8, 2));
  fill(alpha, g, 100, n * 200);



  // doppia ellisse da applicare su ogni punta delle dita
  ellipse(x, y + yMotion, size, size * 0.6);
  ellipse(x, y - yMotion, size * 0.6, size);


    });

  }
}
