img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    objectDetector.detect(img,gotResult);
    document.getElementById("status").innerHTML = "Status: Object Detected";
}

function modelLoaded(){
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,640,420);
    fill("#fc9d03");
    text("Dog",45,75);
    noFill();
    stroke("#fc9d03");
    rect(30,60,450,350);

    fill("#fc9d03");
    text("Cat",320,120);
    noFill();
    stroke("#66ada4");
    rect(300,90,270,320);
}