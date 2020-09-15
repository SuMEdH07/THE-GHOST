var tower, towerImage;
var door, doorImage, doorGroup;
var climber, climberImage, climberGroup;
var ghost, ghostImage;
var invisibleBlock, invisibleBlockGroup;
var gamestate="play";



function preload () {
towerImage = loadImage("tower.png");
doorImage = loadImage("door.png");
climberImage = loadImage("climber.png");
ghostImage = loadImage("ghost-standing.png");

}



function setup() {
createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  
  doorGroup=new Group();
   climberGroup=new Group();
  invisibleBlockGroup=new Group();
  
  ghost = createSprite(300,300);
  ghost.addImage(ghostImage);
 ghost.scale=0.3;
}
function draw() {
if(gamestate==="play"){
  tower.velocityY=1;
  if(tower.y>400) {
  tower.y=300;

}
if(keyDown("left_arrow")){
 ghost.x=ghost.x-3; 
}
  
  if(keyDown("right_arrow")){
  ghost.x=ghost.x+3;
  }
  if(keyDown("space")){
   ghost.velocityY=-2; 
 
  }
  ghost.velocityY=ghost.velocityY+0.5;
 if(climberGroup.isTouching(ghost)){
  ghost.velocityY=0; 
 }
if(ghost.y>600||invisibleBlockGroup.isTouching(ghost)){
 ghost.destroy(); 
gamestate="end";
}
 
  
  spawndoors() ;  
}
 
  
drawSprites()
if(gamestate==="end"){
 fill("yellow");
   textSize(20);
   text("GameOver",300,300)  
 }


}
function spawndoors() {
if(frameCount%240===0){
 var door= createSprite(200,-50);
  door.addImage(doorImage);
door.x=Math.round(random(100,400));
door.velocityY=1;
door.lifetime=600;
doorGroup.add(door);
var climber = createSprite(200,10);
 climber.addImage(climberImage); 
climberGroup.add(climber);
  climber.velocityY=1;
  door.x=climber.x;
climber.lifetime=600;

ghost.depth=door.depth;
  ghost.depth=ghost.depth+1;
  
  var invisibleBlock = createSprite(200,15);
  invisibleBlock.x=door.x;
  invisibleBlock.velocityY=1;
  
  invisibleBlockGroup.add(invisibleBlock);
  invisibleBlock.width=climber.width;
invisibleBlock.height=2;
invisibleBlock.debug=true;
}


}




