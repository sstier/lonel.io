/*
Stephanie Stier

FRAMEWORK SECOND SCREEN
TV
*/
let bubbles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	initSocket(); // Nicht löschen!
	background(200);
  //bubbles = new Bubbles();
	for (let i=0; i< 600; i++){
		let b = new Bubble();
		bubbles.push(b);
	}

}

function draw() {

  for (let i=599; i>= 0; i--){
		let bubble = bubbles[i];
        bubble.show();
        sendMessage('bubble' + i, {
            x: bubble.x,
            y: bubble.y,
            r: bubble.r,
            g: bubble.g,
            b: bubble.b,
        })
	}
}


function receive(message){
    print(message);
}

// wird aufgerufen, sobald eine Nachricht ankommt
/*function receive(message) {
	print(message);

	if (message.category == 'beispiel1') {
		let x = message.x;
		let y = message.y;

		fill(0, 0, 255);
		noStroke();
		ellipse(x, y, 20, 20);
	}
}*/



class Bubble{
  constructor(){
		this.x = random(0, width);
		this.y = random (0, height);
		this.r = random(80, 255);
		this.g = random(80, 255);
		this.b = random(80, 255);
		this.radius = height/80;
	}

	set(x,y,r,g,b){
		this.x = x;
		this.y = y;
		this.r = r;
		this.g = g;
		this.b = b;
	}

	show(){
		noStroke();
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.radius, this.radius);
	}

    getX() {return x;}
    getY() {return y;}
    getR() {return r;}
    getG() {return g;}
    getB() {return b;}


}
