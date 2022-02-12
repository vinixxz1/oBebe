


function setup() {
  createCanvas(700 ,500);
  fundoSFX.loop();
}

function draw() {
  background(road);
  showCars();
  showCow();
  moveCar();
  moveCow();
  loopCar();
  collision();
  showScore();
  scorePoint();
  

}