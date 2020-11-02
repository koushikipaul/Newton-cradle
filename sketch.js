var roof;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1100);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof =new Roof(400,100,600,50);
	ball1 =new Ball(600,300,600);
	ball2 =new Ball(500,300,600);
	ball3 =new Ball(400,300,600);
	ball4 =new Ball(300,300,600);
	ball5 =new Ball(100,300,600);

	rope1=new Rope(ball1.body,{x:650, y:100});
	rope2=new Rope(ball2.body,{x:530, y:100});
	rope3=new Rope(ball3.body,{x:420, y:100});
	rope4=new Rope(ball4.body,{x:300, y:100});
	rope5=new Rope(ball5.body,{x:190, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY});
}


