img = "";
status = "";

function preload() {
    img = loadImage("TV.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    textSize(20);

    /*fill("#FF0000");
    strokeWeight(2);
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    strokeWeight(5);
    rect(30, 60, 450, 350);

    fill("yellow");
    strokeWeight(2);
    text("Cat", 350, 90);
    noFill();
    stroke("yellow");
    strokeWeight(5);
    rect(300, 70, 275, 325);

    fill("green");
    strokeWeight(2);
    text("Bowl", 310, 320);
    noFill();
    stroke("green");
    strokeWeight(5);
    rect(275, 300, 125, 110);*/
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