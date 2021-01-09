const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var Myengine,Myworld,ground,ball;

function setup() {
  createCanvas(400,400);
  Myengine=Engine.create();
  Myworld=Myengine.world;

  var option={
    isStatic:true
  }
  
  ground=Bodies.rectangle(200,380,50,50,option);
  World.add(Myworld,ground);

  var option_ball={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,option_ball);
  World.add(Myworld,ball);

}

function draw() {
  background(0);
  Engine.update(Myengine);
  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,20)

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);

}
