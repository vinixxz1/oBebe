//all game images

var road;
var cow;
var car1;
var car2;
var car3;
var fundoSFX;
var collisionSFX;
var miss;
var scoreSFX;

function preload(){
  
  fundoSFX = loadSound("sfx/Da Baby - Suge (Bass Boosted Earrape).mp3")
  miss = loadSound("sfx/BRUH.mp3")
  scoreSFX = loadSound("sfx/LESS GOO.mp3")
  road = loadImage("images/estrada.png");
  cow = loadImage("images/dababy.png");
  car1 = loadImage("images/dababycar.png")
  car2 = loadImage("images/dababycar.png")
  car3 = loadImage("images/dababycar.png")
  cars = [car1, car2, car3, car1, car2, car3]
  
}