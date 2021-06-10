
function preload() {
 tom1=loadAnimation("images/cat1.png");
 tom2=loadAnimation("images/cat2.png","images/cat3.png");
 tom3=loadAnimation("images/cat4.png");
 jerry1=loadAnimation("images/mouse1.png");
 jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
 jerry3=loadAnimation("images/mouse4.png");
 bg=loadImage("images/garden.png");
    //load the images here
}

function setup(){
    createCanvas(1000,600);
    tom=createSprite(850,500,10,10);
    tom.addAnimation("tom1",tom1);
    tom.scale=0.2
    jerry=createSprite(150,500,10,10);
    jerry.addAnimation("jerry1",jerry1)
    jerry.scale=0.2
    //create tom and jerry sprites here

}

function draw() {


    background(bg);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        jerry.addAnimation("mouse",jerry3);
        jerry.changeAnimation("mouse",jerry3);
        jerry.scale=0.2;  
        tom.addAnimation("kitten",tom3);
        tom.changeAnimation("kitten",tom3);
        tom.scale=0.2;
        tom.x=250;
        tom.velocityX=0;
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        jerry.addAnimation("mouseTeasing",jerry2);
        jerry.changeAnimation("mouseTeasing",jerry2);
        jerry.frameDelay=25
        tom.velocityX=-6
        tom.addAnimation("cat",tom2);
        tom.changeAnimation("cat",tom2);
    }

  //For moving and changing animation write code here


}
