var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	createEdgeSprites();
	rectMode(CENTER);

	gameState=true;
	
	helicopterSprite=createSprite(130, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	packageSprite=createSprite(13000, 8000, 20,20)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);

	box2 = new Box(500,650,20,100,"red");
	box3 = new Box(295,650,20,100,"red");
	box1 = new Box(400,700,200,20,"red");
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  helicopterSprite.velocityX=3;


//  if(packageSprite.isTouching(Box)){
//}


  if(packageSprite.position.y>660){
	  packageSprite.velocityY=0
  }

  drawSprites();

  if(keyDown(DOWN_ARROW)&& gameState===true) {
	packageSprite.x=helicopterSprite.x
	packageSprite.y=helicopterSprite.y
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityY=10
	gameState=false
	}

	box1.display();
	box2.display();
	box3.display();

  Engine.update(engine);
}