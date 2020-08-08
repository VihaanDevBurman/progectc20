var thick,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1300,400);
  bullet =createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thick,height/2);
  thick=random(22,83);
  weight=random(30,52);
  speed=random(223,321);
  bullet.velocityX=speed;
}

function draw() {
  background(80,80,80); 
  
  



  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thick*thick*thick);
  
  if(damage>10){
  
    wall.shapeColor=color(255,0,0);
  }
  
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
  }

