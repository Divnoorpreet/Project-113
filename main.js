function preload(){

}

function setup(){
    canvas= createCanvas(650,550);
    canvas.position(320,150);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,125,150,400,300);

    fill(0,255,0);
    stroke(0,255,0);
    circle(350,70,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(300,70,80);

    fill(0,0,255);
    stroke(0,0,255);
    circle(250,70,80);

    fill(255,255,0);
    stroke(255,255,0);
    circle(200,70,80);

    fill(0,255,0);
    stroke(0,255,0);
    circle(150,70,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(100,70,80);

    fill(0,0,255);
    stroke(0,0,255);
    circle(50,70,80);

    fill(255,255,0);
    stroke(255,255,0);
    circle(50,120,80);

    fill(0,255,0);
    stroke(0,255,0);
    circle(50,170,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,220,80);

    fill(0,0,255);
    stroke(0,0,255);
    circle(50,270,80);

    fill(255,255,0);
    stroke(255,255,0);
    circle(50,320,80);

    fill(0,255,0);
    stroke(0,255,0);
    circle(50,370,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,420,80);

    fill(0,0,255);
    stroke(0,0,255);
    circle(50,470,80);

    fill(255,255,0);
    stroke(255,255,0);
    circle(50,520,80);

    fill(0,255,0);
    stroke(0,255,0);
    circle(100,520,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(150,520,80);

    fill(0,0,255);
    stroke(0,0,255);
    circle(200,520,80);

    fill(255,255,0);
    stroke(255,255,0);
    circle(250,520,80);

    
    fill(0,255,0);
    stroke(0,255,0);
    circle(300,520,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(350,520,80);

    fill(0,0,255);
    stroke(0,0,255);
    circle(400,520,80);

    fill(255,255,0);
    stroke(255,255,0);
    circle(450,520,80);

    fill(0,255,0);
    stroke(0,255,0);
    circle(500,520,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(550,520,80);

    fill(0,0,255);
    stroke(0,0,255);
    circle(600,520,80);

    fill(255,255,0);
    stroke(255,255,0);
    circle(600,470,80);

    fill(0,255,0);
    stroke(0,255,0);
    circle(600,420,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(600,370,80);

    fill(0,0,255);
    stroke(0,0,255);
    circle(600,320,80);

    fill(255,255,0);
    stroke(255,255,0);
    circle(600,270,80);

    fill(0,255,0);
    stroke(0,255,0);
    circle(600,220,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(600,170,80);

    fill(0,0,255);
    stroke(0,0,255);
    circle(600,120,80);

    fill(255,255,0);
    stroke(255,255,0);
    circle(600,70,80);

    fill(0,255,0);
    stroke(0,255,0);
    circle(550,70,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(500,70,80);

    fill(0,0,255);
    stroke(0,0,255);
    circle(450,70,80);

    fill(255,255,0);
    stroke(255,255,0);
    circle(400,70,80);
}

function take_snapshot(){
    save("student_image.png");
}