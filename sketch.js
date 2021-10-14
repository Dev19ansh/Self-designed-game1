var king;
var game;
var dummy;
var gameState=0;
function setup() {
 createCanvas(windowWidth,windowHeight);
 game = new Game();
 //game.start();
dummy = createSprite(100,100,100,100)

}

function draw() {
  background("yellow");
  if(gameState===1){
    game.play();
  }
  if(mousePressedOver(dummy)){
    console.log(".....");
  }
  drawSprites();
}