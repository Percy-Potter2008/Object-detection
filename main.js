img = "";
object=[];
status = "";
function preload(){
img=loadImage('dog_cat.jpg');
}
function setup(){
canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector= ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML="Status:Detecting Object";
}
function modelLoaded(){
status=true;
  objectDetector.detect(img, gotResults);
}
function gotResult(error, results){
if(error){console.log(error);}
  objects=results;
}
function draw(){
image(img, 0, 0, 640, 420);
  fill("Red");
  text("dog", 45, 75);
  noFill();
  stroke("Maroon");
  rect(30, 60, 450, 350);
  fill("green");
  text("cat", 320, 120);
  noFill();
  stroke("Limegreen");
  rect(300, 90, 270, 320);
  if(status!= ""){
  for(i=0;i<objects.length;i++){
  document.getElementById("status").innerHTML="Status:Object Detected";
    fill("Cyan");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+ percent+ " %", objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("Blue");
    rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height);
  }
  }
}
