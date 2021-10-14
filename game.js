class Game{
    constructor(){
        
    }
start(){
    
    var storyButton = createSprite(windowWidth/2,50,20,10);
    var startButton = createSprite(windowWidth/2,windowHeight-150,20,10);
    if(mousePressedOver(startButton)){
        gameState=1;
    }
    if(mousePressedOver(storyButton)){
        text("gamestory",windowWidth/2,windowHeight/2);
    }

}
play(){
    king = new Player();
    king.moveLeft();
    king.moveRight();
    king.Jump();

}
}