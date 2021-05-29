var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1200,800);

    block1 = createSprite(0,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(250,580,200,30);
    block2.shapeColor = "orange";

    block3=createSprite(500, 580, 200, 30);
    block3.shapeColor="black"

    block4=createSprite(750, 580, 200, 30 )
    block4.shapeColor="red"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
   
    ball.velocityX=10;
    ball.velocityY=10;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor="orange";
        music.play();
    }

    
    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor="black";
        music.play();
    }

    
    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor="red";
        music.play();
    }

    drawSprites();
}
