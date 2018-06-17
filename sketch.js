// port of Daniel Shiffman's Pong coding challenge
// by madacoo

let leftscore = 0;
let rightscore = 0;

var left;
var right;

var stars = [];

var started = false;

function preload() {
    soundFormats('mp3', 'ogg');
    song = loadSound("song.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    puck = new Puck();
    left = new Paddle(true);
    right = new Paddle(false);

    for (var i = 0; i < 75; i++) {
        let s = new Star(createVector(random(width), random(height)));
        stars.push(s);
    }

    rpadImg = loadImage("rpad.png");
    lpadImg = loadImage("lpad.png");
    rpadgloatImg = loadImage("rpadgloat.png");
    lpadgloatImg = loadImage("lpadgloat.png");
    ballImg = loadImage("ball.png");
    titleImg = loadImage("title.png");
    imageMode(CENTER);
}

function draw() {
    if (started) {

        if (!song.isPlaying()) {
            song.play();
        }

        background(0);
        stars.forEach(x => x.update());
        stars.forEach(x => x.draw());
        noStroke();
        rect(width / 2, 0, 10, height);

        if (keyIsDown(87) === true) {
            left.move(-10);
        }
        if (keyIsDown(83) === true) {
            left.move(10);
        }

        if (keyIsDown(38) === true) {
            right.move(-10);
        }
        if (keyIsDown(40) === true) {
            right.move(10);
        }

        puck.checkPaddleRight(right);
        puck.checkPaddleLeft(left);

        left.show();
        right.show();
        left.update();
        right.update();

        puck.update();
        puck.edges();
        puck.show();

        fill(255);
        textSize(32);
        text(leftscore, 32, 40);
        text(rightscore, width - 64, 40);
    } else {
        background(0);
        image(titleImg, width / 2, height / 2)
    }
}


function keyReleased() {
    left.move(0);
    right.move(0);
}

function mousePressed() {
    if (!started){
        started = true;
    }
}

class Star {
    constructor(pos) {
        this.pos = pos;
    }

    update() {
        this.pos.x += 1;

        if (this.pos.x > width) { this.pos.x = 0 };
    }

    draw() {
        stroke(255);
        point(this.pos.x, this.pos.y);
    }
}