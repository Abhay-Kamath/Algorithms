var box1
var box2
var box3
var box4
function setup() {
  createCanvas(800,800);
  // box1 = createSprite(300, 200, 200, 50);
  // box2 = createSprite(500, 200, 100, 80);
  box3 = createSprite(100, 500, 25, 25);
  box4 = createSprite(700, 500, 25, 25);
  box3.velocityX = 2;
  box4.velocityX = -2;
  box3.velocityY = -2
  box4.velocityY = -2
  // box1.shapeColor = "blue";
  // box2.shapeColor = "blue";
}

function draw() {
  background(0);  
  drawSprites();
  // if(box1.x-box2.x<=box1.width/2+box2.width/2&&
  //   box2.x-box1.x<=box1.width/2+box2.width/2&&
  //   box1.y-box2.y<=box1.height/2+box2.height/2&&
  //   box2.y-box1.y<=box1.height/2+box2.height/2){
  //   box1.shapeColor = "red";
  //   box2.shapeColor = "red";
  // }else{
  //   box1.shapeColor = "blue";
  //   box2.shapeColor = "blue";
  // }
  // box1.y = mouseY;
  // box1.x = mouseX;
  // if(box3.x-box4.x<=box3.width/2+box4.width/2&&
  //   box4.x-box3.x<=box3.width/2+box4.width/2){
  //     box3.velocityX = box3.velocityX*-1
  //     box4.velocityX = box4.velocityX*-1
      
      
  //   }
     if(box3.y-box4.y<box3.height/2+box4.height/2&&
      box4.y-box3.y<box3.height/2+box4.height/2){
      box3.velocityY = box3.velocityY*-1
      box4.velocityY = box4.velocityY*-1
    }
}
