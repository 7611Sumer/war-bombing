function preload(){
  PlaneImg = loadImage("armyplane.png")
  BombImg = loadImage("bomb.png")
  houseImg = loadImage("house.png")
  bgImg = loadImage("bg1.jpg")
  house2Img = loadImage("house2.png")
  house3Img = loadImage("house3.png")
  house4Img = loadImage("house4.png")
}
function setup() {
  createCanvas(1400,1200);
  createSprite(400, 200, 50, 50);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 5
  plane = createSprite (displayWidth-200,displayHeight-800,50,50)
  plane.addImage(PlaneImg)
  plane.scale = 1.5
  
}
function draw() {
  
  background(600,600,600);  
  houses();
  drawSprites();
}
function houses(){
  if(frameCount % 100 === 0) {
    house = createSprite(displayWidth-1200,displayHeight-200,50,50)
    house.scale = 1
    house.velocityX = 3
    var rand = Math.round(random(1,4));
     switch(rand) { case 1: house.addImage(houseImg);
     break; case 2: house.addImage(house2Img);
     break; case 3: house.addImage(house3Img);
     break; case 4: house.addImage(house4Img); 
     break;  default: 
     break; }
  }
  

}
