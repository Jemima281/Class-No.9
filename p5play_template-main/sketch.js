var box 
function setup() {
  createCanvas(1275,700);
box = createSprite(200,200,15,15)
box.shapeColor="blue"
} 

function draw() 
{
  
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.x += 5
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x -= 5
  }
  if(keyIsDown(UP_ARROW)){
    box.y -= 5
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y += 5
  }
drawSprites()
}




