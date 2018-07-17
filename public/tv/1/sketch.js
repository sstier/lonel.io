/*
SEMESTERAUSSTELLUNG SoSe 2018
MEDIALE SYSTEME
FRAMEWORK SECOND SCREEN
TV VERSION 2
*/

function setup() {
	createCanvas(720, 576);

	background(0);

	// Verbindung zu Server aufbauen
	// Nicht löschen!
	initSocket();
}

function draw() {}

// wird aufgerufen, sobald eine Nachricht ankommt
function receive(message) {
	print(message);

	if (message.category == 'beispiel1') {
		let x = message.x;
		let y = message.y;

		fill(0, 0, 255);
		noStroke();
		ellipse(x, y, 20, 20);
	}

}