/*
Stephanie Stier

FRAMEWORK SECOND SCREEN
PHONE
*/
let player;

function setup() {
	createCanvas(windowWidth, windowHeight);
  initSocket(); // Nicht löschen! und nicht auskommentieren du Idiot!!

	player = new Player();
}

function draw() {
  background(200);
	//translate(width/2, height/2);
	player.show();
}


function receive(message) {
    print(message);
}

class Player{
  constructor(){
	  this.r = (width/5)/2;
	  this.x = width/2;
		this.y = height/2;
		this.velocity = createVector(0,0);
	}


	show(){
		noLoop();
		fill(random(80,200),random(80,200),random(80,200));
		noStroke();
    ellipse(this.x, this.y, this.r*2);
	}
}
/*function mouseDragged() {
	fill(255);
	noStroke();
	ellipse(mouseX, mouseY, 20, 20);

	// eine eigene Nachricht an alle senden
	// category, {varible:wert,variable:wert,variable:wert ...}
	sendMessage('beispiel1', {
		x: mouseX,
		y: mouseY
	});
}

// wird aufgerufen, sobald eine Nachricht ankommt
function receive(message) {
	print("neue Message erhalten: ");
	print(message);
}*/
