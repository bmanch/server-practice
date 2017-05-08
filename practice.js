var http = require("http");
var PORT_ONE = 7000;
var PORT_TWO = 7500;

function handleRequest(request, response) {
	if (PORT_ONE) {
		response.end("This is port one");
	} else {
		response.end("This is port two");
	}
}

var serverOne = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequest);

serverOne.listen(PORT_ONE, function() {
	console.log("First server listening on: http://localhost:%s", PORT_ONE);
});

serverTwo.listen(PORT_TWO, function() {
	console.log("First server listening on: http://localhost:%s", PORT_TWO);
});