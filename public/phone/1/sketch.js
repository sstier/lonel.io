/*
Stephanie Stier

FRAMEWORK SECOND SCREEN
PHONE
*/
let player;

function setup() {
	createCanvas(windowWidth, windowHeight);

	player = new Player();
	// Verbindung zu Server aufbauen
	// Nicht löschen!
	//initSocket();
}

function draw() {
  background(200);
	translate(width/2, height/2);
}

function getBubbles(){
	receive(message){
		print(message);
	}
}

class Player{
  constructor(){
	  this.r = 64;
	  this.position = createVector(width/2, height/2);
		this.velocity = createVector(0,0);
	}

	move(){
	  let finger = createVector(mouseX- width/2, mouseY-height/2);
		finger.setMag(3);
		this.position.add(this.velocity);
	}


	show(){
    ellipse(this.position.x, this.position.y, this.r*2,this.r*2);
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
