var fixedRectangle
var movingRectangle
function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(600, 400, 50, 80);
  fixedRectangle.debug = true;
  movingRectangle = createSprite(400,200, 80, 50);
  movingRectangle.debug = true;
  fixedRectangle.shapeColor = "green";
  movingRectangle.shapeColor  = "green";
}
function draw() {
  background(255,255,255);  
  movingRectangle.x = World.mouseX
  movingRectangle.y = World.mouseY
  drawSprites();
  if(movingRectangle.x - fixedRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 && fixedRectangle.x - movingRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 &&
    movingRectangle.y - fixedRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2 && fixedRectangle.y - movingRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2) {
    fixedRectangle.shapeColor = "red";
    movingRectangle.shapeColor  = "red";
  } else {
    fixedRectangle.shapeColor = "green";
    movingRectangle.shapeColor  = "green";
  }
}