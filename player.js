class Player{
    constructor(){
        this.player=createSprite(50,250,20,70);
        
    }
    moveLeft(){
        this.player.x-=10;
    }
    moveRight(){
        this.player.x+=10;
    }
    Jump(){
        this.player.y-=7;
    }
    gravity(){
        this.player.y+=5;
    }
}