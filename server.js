var http = require('http')
const { on } = require('process');
var onRequest = function (request, response) {
    console.log("Request created");
    response.writeHead(200, { "content-type": "text/plain" });
    response.write("Hello from Application");
    response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server created in port 8888");