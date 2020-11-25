const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1,ball1,ball3, slingShot;

function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    

    
    ball1 = new Ball(220,100);
    slingshot = new SlingShot(ball1.body,{x:220, y:100});
    ball2 = new Ball(190,100);
    slingshot = new SlingShot(ball2.body,{x:190, y:100});
    ball3 = new Ball(160,100);
    slingshot = new SlingShot(ball3.body,{x:160, y:100});
    ball4 = new Ball(70,70);
    slingshot = new SlingShot(ball4.body,{x:100, y:100});
    ball5 = new Ball(130,100);
    slingshot = new SlingShot(ball5.body,{x:130, y:100});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);


    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    slingshot.display();    
}
