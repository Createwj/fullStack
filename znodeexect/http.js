var http = require('http')

http.createServer(function(res,req){
    req.writeHead(200,{'Content-Type': 'text/plain'})
    req.end('Hello World\n')
}).listen(8888)

console.log('Server is running at http:127.0.0.1:8888')