var car , wall ;
var speed , weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(150, 210, 100, 50);
  car.shapeColor = "blue";
  speed = random(55 , 90);
  weight = random(400 , 1500);
}

function draw() {
  background("black");  
  wall = createSprite(1500,200,60, height/2);
  wall.shapeColor = "white";
  car.velocityX = speed;
  drawSprites();

 
  
}