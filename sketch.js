const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg1.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,100,100);
    box2 = new Box(800,320,100,100);
    box3 = new Box(700,240,100,100);
    box4 = new Box(800,240,100,100);
    box5 = new Box(700,160,100,100); 
    box6 = new Box(800,160,100,100);
    ball = new Ball(600,200,50,50);

    

   
   

    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:200, y:-10});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    ground.display();

    ball.display();
   
    //platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


