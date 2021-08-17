function setup() {
  createCanvas(1200,800);
  movingrectangle = createSprite(400, 200, 80, 30);
  movingrectangle.shapeColor = "green";
  movingrectangle.debug = true;
  fixedrectangle = createSprite(600, 400, 50, 80);
  fixedrectangle.shapeColor = "green";
  fixedrectangle.debug = true;
}

function draw() {
  background(255,255,255);  
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;

  if (movingrectangle.x - fixedrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2 
    &&  fixedrectangle.x - movingrectangle.x  < fixedrectangle.width/2 + movingrectangle.width/2 
    && movingrectangle.y - fixedrectangle.y < fixedrectangle.height/2 + movingrectangle.height/2
    && fixedrectangle.y - movingrectangle.y  < fixedrectangle.height/2 + movingrectangle.height/2  ){
    movingrectangle.shapeColor = "red";
    fixedrectangle.shapeColor = "red";
  }
  else {
    movingrectangle.shapeColor = "green";
    fixedrectangle.shapeColor = "green";
  }
  


  drawSprites();
}