img = "";
status = "";

function preload() {
    img = loadImage("bedroom.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

objects = [];

function draw() {
    image(img, 0, 0, 640, 420);
    textSize(20);
    if (status !=""){
        for (i = 0; i < objects.length; i++){
            fill("#FF0000");
            strokeWeight(2);
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y-20);
            noFill();
            stroke("#FF0000");
            strokeWeight(5);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
    }
}