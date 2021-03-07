
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var ground;
var rope1;

function preload()
{
	
}

function setup() {
  engine=Engine.create();
 
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 // bobDiameter=40;

ground=new Roof(350,200,300,40);


bobObject1=new Bob(250,400);
bobObject2=new Bob(300,400);
bobObject3=new Bob(350,400);
bobObject4=new Bob(400,400);
bobObject5=new Bob(450,400);

bobDiameter=50;


rope1=new Chain(bobObject1.body,ground.body,-100,0);

rope2=new Chain(bobObject2.body,ground.body,-50,0);


rope3=new Chain(bobObject3.body,ground.body,0,0);

rope4=new Chain(bobObject4.body,ground.body,+50,0);

rope5=new Chain(bobObject5.body,ground.body,+100,0);



Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope5.display();
  rope4.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){

  
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-220,y:0})
}
}



