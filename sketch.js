//Create variables here
var pet,dog,happyDog,database,foodS,foodStock

function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
  
}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  pet=createSprite(200,200,10,10);
pet.addImage(dog);
pet.scale=0.15;
 foodStock=database.ref('Food');
  foodStock.on("value",readStock) 
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  pet.addImage(happyDog);
}

  drawSprites();
  //add styles here
  textSize(20);
  fill("orange");
  text("Food left"+foodS,50,100);
}
  //Function to read values from Data Base
  function readStock(data){
    foodS=data.val();
  }


  //Function to write values in Data Base
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}




