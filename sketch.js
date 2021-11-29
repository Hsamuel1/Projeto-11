var sea, seaimg;
var ship, shipimg;

function preload(){
 shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaimg = loadAnimation("sea.png");
}

function setup(){
  createCanvas(800,800);

  sea = createSprite(100,100);
  sea.addAnimation("sea.png", seaimg);
  //animação do barco
  ship = createSprite(200,200);
  ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  ship.scale = 0.8;
}

if(sea.x <0){
  sea.x = sea.width/2;
}

function draw() {
  background("blue");
    drawSprites();

 
}
