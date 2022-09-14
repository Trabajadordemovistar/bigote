
noseX=0;
noseY=0;




function preload(){
    clown_nose =loadImage('https://i.postimg.cc/G3gpRYqJ/bigote-removebg-preview.png');
}



function setup(){

canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
//importar modelo
poseNet = ml5.poseNet(video,modelLoaded);
//ejecutar posenet
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
console.log(results);
console.log("nose x = "+ results[0].pose.nose.x);
console.log("nose y = "+ results[0].pose.nose.y);
noseX = results[0].pose.nose.x-15;
noseY = results[0].pose.nose.y-15;
    }
}


function modelLoaded(){
    console.log('PoseNet si funciono!');
}


function draw(){
    image(video,0,0,300,300);
   // stroke(200,50,100);
   // fill(255,0,0);
   // circle(noseX, noseY, 20)
    image(clown_nose,noseX,noseY,40,40);
}



function take_snapshot(){
    save('MifotoClase14.png');
}


