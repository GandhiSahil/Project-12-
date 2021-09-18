var garden,rabbit;
var gardenImg,rabbitImg;
var leaves

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leavesImg= loadImage ("leaf.png")
  applesImg= loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){
  apple=createSprite(random(50,350),40, 10, 10);
  apple.addImage(applesImg)

  apple.scale=0.05
  apple.velocityY=3
  apple.lifetime=200
}

function createLeaves(){
  leaves=createSprite(random(50,350),40, 10, 10);
  leaves.addImage(leavesImg)
  leaves.scale=0.05
  leaves.velocityY=3
  leaves.lifetime=200
}


function draw() {
  background(0);

  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites= Math.round(random(1,2));

if (frameCount %80==0){
  if (select_sprites==1){
    createApples()
  }
}
else {
   createLeaves()
}

  drawSprites();
}