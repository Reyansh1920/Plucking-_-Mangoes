
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var mango1,mango2,mango3,mango4;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = new Boy(100,600,200,300);
	tree =  new Tree(600,500,300,400);
	stone =  new Stone(30,600,50,50); 
	ground = new Ground(400,680,800,20);
	mango1 =  new Mango(620,520,30,30);
	mango2 =  new Mango(650,500,30,30);
	mango3 =  new Mango(600,550,30,30);
	sling = new Sling(stone.body,{x:30,y:530})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  boy.display();
  tree.display();
  stone.display();
  ground.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}






