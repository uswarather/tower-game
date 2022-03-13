const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var slingShot;
var rock_img;
var hexagon;
function preload(){
  rock_img=loadImage("rock.png");

}
function setup() {

  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  block1 = new Block(300,275,30,40);
  block2 = new Block(332,275,30,40);
  block3 = new Block(364,275,30,40);
  block4 = new Block(396,275,30,40);
  block5 = new Block(428,275,30,40);
  block6 = new Block(460,275,30,40);
  block7 = new Block(492,275,30,40);

  block8 = new Block(316,235,30,40);
  block9 = new Block(348,235,30,40);
  block10 = new Block(380,235,30,40);
  block11 = new Block(412,235,30,40);
  block12 = new Block(444,235,30,40);
  block13 = new Block(476,235,30,40);

  block14 = new Block(340,195,30,40);
  block15 = new Block(372,195,30,40);
  block16 = new Block(404,195,30,40);
  block17= new Block(436,195,30,40);

  block18 = new Block(354,155,30,40);
  block19 = new Block(386,155,30,40);
  block20 = new Block(418,155,30,40);

  block21 = new Block(386,115,30,40);

  
  
  




  
hexagon=new Hexagon(100,300,50,50)

  slingShot = new Slingshot(hexagon.body,{x:100,y:300});

}

function draw() {
  background(56,44,44); 
 
  imageMode(CENTER);
  // write image() to display the polygon image 
  //use the same x and y position as ball
  


  stroke(0,0,0);
  fill("white");
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
 
 
  fill("gold");
  hexagon.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  fill ("pink")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
   fill ("lightblue")
  block14.display();
  block15.display();
  block16.display();
  block17.display();
   fill  ("lightgreen")
  block18.display();
  block19.display();
  block20.display();
   fill ('orange')
  block21.display();

  
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}