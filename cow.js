//cow var

var cowX = 100;
var cowY = 460;
var collide = false;
var score = 0;

var canMove = [0, 500, 700, 0]

function showCow(){
  image(cow, cowX, cowY, 40, 40)
}

function moveCow(){
  if(keyIsDown(UP_ARROW)){
     cowY -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    cowY += 3;
  }
  if(keyIsDown(LEFT_ARROW)){
    cowX -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
   if(canMove){
    cowX += 3; 
  }
}
}
function collision(){
//collideCircleCircle = function (x, y,d, x2, y2, d2)
  for(var i = 0; i < cars.length; i += 1){
    collide = collideRectCircle(carsX[i], carsY[i], 80, 35, cowX, cowY, 10)
  if(collide){
    cowY = 465;
    miss.play();
  if(score > 0){
    score -= 1
  }  

  }
 }
}

function canMove(){
  return cowY > 460
}

function showScore(){
  textSize(30);
  text(score,width / 5, 35);
}

function scorePoint(){
  if(cowY < 13){
    cowY = 460;
    score += 1;
  }
}