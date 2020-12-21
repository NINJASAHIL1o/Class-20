var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);

fixedRect=createSprite(400,400,50,50);
movingRect=createSprite(440,400,50,50);
fixedRect.shapeColor="green";
movingRect.debug= true;
fixedRect.debug=true;
movingRect.shapeColor="green";

 
}

function draw() {
  background(0,0,0);  
  
  movingRect.y=mouseY;
  movingRect.x=mouseX;

 
                                  
  if(movingRect.x - fixedRect.x  < movingRect.width/2 + fixedRect.width/2  &&
     fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2   &&
     movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
     fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 

    ){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";

  }



  drawSprites();
}