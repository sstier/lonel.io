/*
Stephanie Stier

FRAMEWORK SECOND SCREEN
PHONE
*/
let player;
let bubbles = [600];
function setup() {
	createCanvas(windowWidth, windowHeight);

	player = new Player();
	// Verbindung zu Server aufbauen
	// Nicht löschen!
	initSocket();
}

function draw() {
    background(200);
    translate(width/2, height/2);

    let i = 0;
    while (typeof bubbles[i] != 'undefined'){
        bubbles[i++].show;
    }
}

function receive(message) {
      for(let i = 0; i < 600; i++){
          let leckMich;
          leckMich = new Bubble(i);
          leckMich.set(message[i].x,message[i].y,message[i].r,message[i].g,message[i]);
          bubbles[i] = leckMich;
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

class Bubble{
  constructor(id){
        this.id = id;
		this.x = random(0, width);
		this.y = random (0, height);
		this.r = random(80, 255);
		this.g = random(80, 255);
		this.b = random(80, 255);
	}

	set(x,y,r,g,b){
		this.x = x;
		this.y = y;
		this.r = r;
		this.g = g;
		this.b = b;
	}

	show(){
		strokeWeight(2);
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, 6, 6);
	}

    getX() {return x;}
    getY() {return y;}
    getR() {return r;}
    getG() {return g;}
    getB() {return b;}


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
