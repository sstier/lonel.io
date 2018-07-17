/*
SEMESTERAUSSTELLUNG SoSe 2018
MEDIALE SYSTEME
FRAMEWORK SECOND SCREEN
PHONE VERSION 2
*/

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(0);

	fill(55);
	rect(0, 0, 720, 576);

	// Verbindung zu Server aufbauen
	// Nicht löschen!
	initSocket();
}

function draw() {}


function mouseDragged() {
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
}