var http = require("http");

http.createServer(function(request,response)
{
    response.writeHead(200,{'Content-Type' : 'text/plain' });

    //send the text as "HELLO EORLD"
    response.end("Hello World - Manojkumar K");

}).listen(3100);

console.log('Server running at http://127.0.0.1:3100/');