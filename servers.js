// require/import http module
var http = require('http');

// define the ports
var PORTONE = 7000;
var PORTTWO = 7500;

// two functions to handle requests, one for each server
function handleRequestOne(request, response) {
    response.end('You\'re a bonafide JavaScript Scholar.');
}

function handleRequestTwo(request, response) {
    response.end('Your coding skills need much improvement.');
}

// create servers
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// start servers
serverOne.listen(PORTONE, function() {
    
    // callback that is triggered when the server is successfully listening
    console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function() {
     // callback that is triggered when the server is successfully listening
    console.log("Server listening on: http://localhost:%s", PORTTWO);
});
