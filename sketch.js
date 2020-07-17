var jungles;
var monkey_01,monkey_02,monkey_03,monkey_04,monkey_5,monkey_06,monkey_07,monkey_08,monkey_09,monkey_10;
var banana; 

var stone; 
var ground;



function preload(){
 jungles= loadImage("jungle.jpg");
 banana = loadImage("Banana.png");
 stone = loadImage("stone.png");
 player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
}


function setup() {
  createCanvas(600,300);
  jungles= createSprite (300,150,600,300);
  jungles.addImage("jungle.jpg");
  jungles.visible=true;
  jungles.width=jungles.width/2;
  jungles.velocityX=-2;
  obstaclesGroup = new Group();
  bananasGroup = new Group();
  invisibleGround=createSprite(300,250,10,600);
  invisibleGround.visible=false;
  player_running=createSprite(50,255,15,15);
  player_running.addAnimation("player_running");
  player_running.scale=0.2;
  score=0;
}


function draw(){
 background(255); 
 if(keyDown("space")){
    player_running.velocityY=-8;
  }
  player_running.velocityY=player_running.velocityY+0.4;
  if(jungles.x<0){
    jungles.x=jungles.width/2;
  }
  player_running.collide(invisibleGround);
  bananaGroup();
  obstaclesGroup();
  if(player_running.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    var rand =Math.round(random(1,10));
    switch(rand){
      case 10:player_running.scale=0.12 ;
      break ;
      case 20:player_running.scale=0.14 ;
      break ;
      case 30:player_running.scale=0.16 ;
      break ;
      case 40:player_running.scale=0.18 ;
      break ;
      default : break ;
    }
  
    if(obstacleGroup.isTouching(player_running)){
      player_running.scale=0.2
    }
 drawSprites();
}

function bananas() {
  if(World.frameCount%60===0){
    var banana = createSprite(600,180,15,15);
    banana.velocityY = -5;
    bannana.y = Math.round(random(80,120));
    banana.addImage(banana);
    banana.scale = 0.5;
    banana.lifetime= 600;
    bananasGroup.add(banana);
     }
}
  
function obstacles() {
  if(World.frameCount%60===0){
    var obstacle = createSprite(600,250,15,15);
    obstacle.velocityY = -5;
    obstacle.y = Math.round(random(80,120));
    obstacle.addImage(stone);
    banana.scale = 0.5;
    banana.lifetime= 600;
    obstaclesGroup.add(obstacle);
     }
}
  
  
  
  