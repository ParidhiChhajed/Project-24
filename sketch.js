
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper=new Paper();
	 ground=new Ground(400,690,800,20);
	 dustbin1 = new Dustbin(620,650,200,20);
	 dustbin2 = new Dustbin(720,620,20,100);
	 dustbin3 = new Dustbin(510,620,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

}

function keyPressed(){
     if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65})
	 }
}
