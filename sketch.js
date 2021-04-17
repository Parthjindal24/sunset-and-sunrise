const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here



    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

        var responseJSON =    await response.json();
        
        console.log(responseJSON);

        var date = responseJSON.datetime;
    var hour = date.slice(11,13);
    console.log(hour);

    if(hour>=04 && hour<=06){ 
        bg = "sunrise1.png";
    }
    else if (hour>=06 && hour<=08){
        bg = "sunrise2.png"; 
    }
    else if (hour>=08 && hour<=11){
        bg = "sunrise3.png"; 
    }
    else if (hour>=11 && hour<=13){
        bg = "sunrise4.png"; 
    }
    else if (hour>=13 && hour<=15){
        bg = "sunrise5.png"; 
    }
    else if (hour>=15 && hour<=17){
        bg = "sunrise6.png"; 
    }
    else if (hour>=17 && hour<=19){
        bg = "sunset7.png"; 
    }
    else if (hour>=19 && hour<=22){
        bg = "sunset8.png"; 
    }
    else if (hour>=22 && hour<=24){
        bg = "sunset10.png"; 
    }
    else if (hour>=24 && hour<=02){
        bg = "sunset11.png"; 
    }
    else if (hour>=2 && hour<=04){
        bg = "sunset12.png"; 
    }
    else if (hour>=4 && hour<=06){
        bg = "sunset7.png"; 
    }



    backgroundImg = loadImage(bg);
}

