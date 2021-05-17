var balloon,background
// create database and position variable here

function preload(){
   backgroundImg = loadImage ("images/cityImage.png")
   ballonImage = loadImage("images/hotairballoon1.png","images/hotairballoon2.png","images/hotairballoon3.png")
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  balloon=createSprite(100,400,20,20);
  balloon.addAnimation("hotAirBalloon",balloonImage);
  balloon.scale=0.4;

  textSize(20); 
}

// function to display UI
function draw() {
  background(backgroundImg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.x = balloon .x -10
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.x = balloon.x +10
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y = balloo.y -10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y = balloon.y +10
  }

  drawSprites();
 
}
