var car,wall;
var speed,weigth;

function setup() {
  createCanvas(1600,400);

  speed=random(40,80);
  weight=random(400,1500);
  
  car=createSprite(50,200,50,50);
  car.shapeColor="white";
  wall=createSprite(1600,200,60,height/2);
  wall.shapeColor="white";
  
  car.velocityX=speed;
}

function draw() {
  background("black");  

  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/2250;

    if(deformation>100){
      car.shapeColor="lightgreen";
    }

    if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }

    if(deformation>180){
      car.shapeColor="red";
    }
  }
  drawSprites();
}