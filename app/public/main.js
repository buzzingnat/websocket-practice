// Create WebSocket connection.
// const socket = new WebSocket(`ws://${window.location.host}`);

let socket;

$(`#close`).on(`click`, function(){
	socket.close(1000, `User left`);
});

$(`#open`).on(`click`, function(){
	console.log(`Open the connection...`);

	// Create WebSocket connection.
	socket = new WebSocket(`ws://${window.location.host}`);

	// Connection opened
	socket.addEventListener('open', function (event) {
	    socket.send('Hello Server!');
	});

	// Listen for messages
	socket.addEventListener('message', function (event) {
	    console.log('Message from server ', event.data);
	});
});
