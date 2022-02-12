//cars var

var carsX = [700, 700, 700, 0, 0, 0];
var carsY = [60, 125, 185, 268, 330, 400];
var carsSpeed = [3.7, 4.8, 6.3, 5, 4, 3.5];
var carsWidth = 70;
var carsHeight = 50;

function showCars(){
  for(var i = 0; i < cars.length; i += 1){
  
  image(cars[i], carsX[i], carsY[i], carsWidth, carsHeight)

 }
}

function moveCar(){
  for(var i = 0; i < cars.length; i+= 1){
  carsX[i] -= carsSpeed[i];

  }
}

function loopCar(){
  for(var i = 0; i < cars.length; i += 1){
    if (carsX[i] < -50){
    carsX[i] = 700;
  }   
 }
}