function setup() {
    video = createCapture(VIDEO);
    video.size(50, 50);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); //supongo que esto es inicializar posenet 🧍‍♂️
}

function gotPoses(results) {
    if(results.length > 0)
    {
        //no sabia que tenia que poner aqui perdon 😭
   }
}
