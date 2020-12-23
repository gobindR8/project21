var frect,mrect




function setup() {
  createCanvas(1200,800);
 frect=createSprite(600, 400, 80, 80);
 frect.shapeColor="blue"
 mrect=createSprite(400, 200, 50, 80);
 mrect.shapeColor="blue"
}

function draw() {
  background(0);  
  mrect.x=mouseX
  mrect.y=mouseY
if (mrect.x-frect.x<frect.width/2-mrect.width/2){    
  mrect.shapeColor="red"
  frect.shapeColor="red"
}
else{
  mrect.shapeColor="blue"
  frect.shapeColor="blue"
}
  drawSprites();
}