var garden,rabbit;
var gardenImg,rabbitImg;
var leaf, apple

function preload(){
  gardenImage = loadImage("garden.png");
  rabbitImage = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
  leafImage = LoadImage("leaf.png")
}

function setup(){
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImage);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImage);
rabbit.X=mouse.X
}

function createApples() {
if (frameCount % 80 === 0){
  apple = createSprite(40, 10, 10)
  apple.addImage(appleImage)
  apple.x = Math.round(random(50, 350))
  apple.scale = 0.3
  apple.velocityY = 5
  apple.lifetime = 200
}
}

function createLeaves() {
  if (frameCount % 80 === 0){
    leaf = createSprite(40, 10, 10)
    leaf.addImage(appleImage)
    leaf.x = Math.round(random(50, 350))
    leaf.scale = 0.3
    leaf.velocityY = 5
    leaf.lifeTime = 200
  }
  }



function createLeaves(){
leaf = createSprite(random(50, 350),40, 10, 10)
}

function draw() {
  background(0);
  
  createLeaves()
  createApples()

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}