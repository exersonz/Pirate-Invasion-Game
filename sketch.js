const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;
var ground;
var cannon;
var background_Img;

function preload()
{
    background_Img = loadImage("assets/background.gif");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angle = -PI/4;
    box = new Tower(150,430,160,310);
    ground = new Ground(600,590,1200,20);
    cannon = new Cannon(185,210,80,50,angle);
}

function draw(){
    background(0);
    image(background_Img,0,0,width,height);
    Engine.update(engine);

    ground.display();
    cannon.display();
    box.display();
}
