
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ball2, ball3;
var groundObj;
var leftside;
var rightside

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var ball_options={
	isStatic:false
	,restitution:0.3,
	friction:0,
	density:1.2
   }
   var ball_options2={
      isStatic:false
      ,restitution:0.3,
      friction:0,
      density:1.2
      }
   ball=Bodies.circle(300,100,20, ball_options);
   ball2=Bodies.circle(300,100,10, ball_options2);
   ball3=Bodies.circle(300,100,60, ball_options2);
   World.add(world, ball);
   World.add(world, ball2);
   World.add(world, ball3);
   groundObj=new Ground(width/2,670,width,20);
   leftside=new Ground(600,600,20,120);

   rightside=new Ground(750,600,20,120);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  fill(349)
  drawSprites();
  groundObj.show();
  keyPressed()
  keyPressed2()

  leftside.show();
  rightside.show();
  Engine.update(engine);
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:3,y:-8});
	}
}
function keyPressed2() {
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:-3,y:8});
      Matter.Body.applyForce(ball2,ball2.position,{x:-3,y:8});
	}
}
