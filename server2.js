var http = require("http");

http.createServer(function (request, response) {
  
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   response.end('Hello World from server2\n');
}).listen(5002);

console.log('Server running at http://127.0.0.1:5002/');