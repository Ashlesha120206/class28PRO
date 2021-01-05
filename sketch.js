
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Bodies;

var mango1, mango2, mango3, mango4, mango5;
var tree;
var stone;
var ground;
var boy;
var connector;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,620,800,140);

	boy = new Boy(200,530,150,250);

	tree = new Tree(650,380,350,600);

    stone = new Stone(150,470,50,50);

	mango1 = new Mango(650,200,60,60);
    mango2 = new Mango(620,300,60,60);
    mango3 = new Mango(720,260,60,60);
	mango4 = new Mango(550,270,60,60);
	mango5 = new Mango(780,300,60,60);

	connector = new Connector(stone,boy);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("blue");
  
ground.display();

boy.display();

tree.display();

stone.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

connector.display();
line(150, 470, 200, 530);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY}); 
}

function mouseReleased(){
    stone.fly();
}



