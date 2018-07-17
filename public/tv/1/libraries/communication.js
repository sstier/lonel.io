///////////////////////////////////////////////////
// Funktionen für die Kommunikation. Nicht löschen!
///////////////////////////////////////////////////
// Variable für die Kommunikation mit dem Websocket/Server
let socket;

function initSocket() {
	// mit dem Server verbinden
	socket = io.connect();
	// Callback für eingehende Nachrichten
	socket.on('next', loadNext);
	socket.on('command', receive);
}

// Funktion, um Nachrichten/Daten an den TV-Sketch zu schicken
function sendMessage(name, data) {
	// Nachricht an TV Sketch schicken
	data.category = name;
	console.log(data);
	socket.emit('command', data);
}

// wird aufgerufen, sobald eine Nachricht mit dem Namen 'next' kommt
function loadNext(data) {
	location.reload();
	location.href = data.tv;
}