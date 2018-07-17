/*
SEMESTERAUSSTELLUNG SoSe 2018
MEDIALE SYSTEME
FRAMEWORK SECOND SCREEN
WEBSPCKET VERSION 2
Benedikt Kaffai
*/

let config = require('./config');
let counter = 0; // aktueller Sketch
let amount = config.AMOUNT; // Anzahl Ordner in Phone und TV
let port = config.PORT;
let urlBase = 'http://' + config.IP + ':' + port + '/'

let express = require('express');
let socket = require('socket.io');
let app = express();
let server = app.listen(config.PORT)
app.use(express.static('public'))

let io = socket(server);

let os = require('os');
let networkInterfaces = os.networkInterfaces();
Object.keys(networkInterfaces).forEach(function(ifname) {
	networkInterfaces[ifname].forEach(function(iface) {
		if ('IPv4' !== iface.family || iface.internal !== false) {
			// skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
			return;
		}
		console.log("Server läuft auf: \n " +
			iface.address + ':' + server.address().port + '/phone/1 \n ' +
			iface.address + ':' + server.address().port + '/tv/1 \n ' +
			"zum beenden [STRG+c] bzw. [CMD+c] drücken");
	});
});

io.sockets.on('connection',
	// we are given a websocket object in our function
	function(socket) {
		console.log("We have a new client: " + socket.id);

		console.log(socket.request.headers.referer);
		let referer = socket.request.headers.referer.split("/");
		let current = (counter % amount) + 1;
		if (referer[referer.length - 2] != current) {
			let message = {
				phone: urlBase + 'phone/' + current,
				tv: urlBase + 'tv/' + current
			};
			console.log("corrected client URL to current");
			socket.emit('next', message);
		}

		// When this user emits, client side: socket.emit('otherevent',some data);
		socket.on('command',
			function(data) {
				// data comes in as whatever was sent, including objects
				console.log("Received 'command' ");
				// send it to all other clients
				socket.broadcast.emit('command', data);
				// io.sockets.emit('message', "this goes to everyone");
			}
		);

		// When user clicks NEXT
		socket.on('next',
			function(data) {
				console.log("Received 'next'");
				counter++;
				let next = (counter % amount) + 1;
				let message = {
					phone: urlBase + 'phone/' + next,
					tv: urlBase + 'tv/' + next
				};
				console.log("New URLS: " + message.phone + " and " + message.tv);
				io.sockets.emit('next', message);
			}
		);

		socket.on('disconnect', function() {
			console.log("Client has disconnected");
		});
	}
);