var princess,p1;
var servant,s1;
var game;
game = 1;
var mob;
var ground,gates;
var chY,chN;
var miku;
var text1;

function setup() {
  createCanvas(displayWidth,displayHeight - 70);
  princess = createSprite(20,displayHeight-200,20,50);
  princess.shapeColor = "orange";
  servant = createSprite(princess.x + 40,displayHeight-200,20,50);
  servant.shapeColor = "yellow";
  servant.visible = false;
  ground = createSprite(displayWidth/2,displayHeight-170,displayWidth,20);
  ground.shapeColor = "#7a0909";
  gates = createSprite(displayWidth-50,ground.y-110,40,200);
  mob = createSprite(princess.x+displayWidth/3,displayHeight-200,20,50);
  mob.shapeColor = "purple";
  //mob.visible = false;
  chY = createSprite(displayWidth/2 + 50,displayHeight /2 - 200,40,40);
  chY.visible = false;
  chN = createSprite(displayWidth/2 - 50,displayHeight /2 - 200,40,40);
  chN.visible = false;
  miku = createSprite(servant.x + 200,displayWidth - 200,20,50);
  miku.shapeColor = "#52e5be";
  miku.visible = false;
}

function draw(){
  background(0);
  if(game==1){
    if(keyWentUp("l")){
      text("Press 'l' to call Len",displayWidth/2,displayHeight/2);
    }
  }
  mob.velocityX = -0.5;
  if(keyDown("space")){
    princess.velocityY = -10;
    princess.velocityY = 9;
  }
  princess.velocityY = 0;
  if(keyDown("l")){
    servant.visible = true;
  }
  if(servant.visible == true){
    servant.velocityX = 10;
  }
  princess.collide(ground);
  servant.collide(ground);
  mob.collide(ground);
  miku.collide(ground);
  if(servant.isTouching(gates)){  
    servant.velocityX = 0;
    princess.x = servant.x;
    princess.y = servant.y - 60;
    mob.visible = false;
    game = 2;
  }
  if(servant.isTouching(mob)){  
    mob.velocityX = 0;
    mob.shapeColor = "red";
  }else if(princess.isTouching(mob)){
    princess.shapeColor = "red";
    text("The princess has fallen",displayWidth/2,displayHeight/2);
  }
  if(game===2){
    game2();
  }
  if(game===3){
    game3();
  }
  drawSprites();
}

function game2(){
    text("The princess wishes Miku dead Yes, or No",displayWidth/2,displayHeight/2);
    text("Please choose wisely",displayWidth/2,displayHeight/2+20);
    princess.x = 20;
    princess.y = displayHeight - 200;
    servant.x = princess.x + 100;
    gates.x = princess.x + 50;
    gates.shapeColor = "orange";
    chY.visible = true;
    chY.shapeColor = "green";
    chN.visible = true;
    chN.shapeColor = "red";
    miku.visible = true;
    if(mousePressedOver(chY)){
      miku.shapeColor = "red";
      game = 3;
    }
    if(mousePressedOver(chN)){
      //text.visible = false;
      text("Princess is in misery, regain her trust",displayWidth /2,displayHeight /2);
      s();
      princess.shapeColor = "blue";
    }
}

function game3(){
}

function s(){
  if(mousePressedOver(chN)){
    text("You left her : Now the kingdom suffers greatly",displayWidth /2,displayHeight /2 + 30);
  }
}