var  database;
var dog;
var foodStock;
var foodS;

function preload()
{
 // loadImage("images/dogImg.png")
  loadImage("images/dogImg.png");
}

function setup() {
  //database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  dog = createSprite(370,250,20,20);
  dog = loadImage("dogImg.png");
  
  
}


function draw() {  

  drawSprites();
  //add styles here
  dog.display();
 

}



