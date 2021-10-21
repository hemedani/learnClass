const http = require('http');

const requestListener = function (req, res) {
    console.log("the requset is => ", req.method, req.url)
    if (req.method === "GET" && req.url === "/todos") {
        res
  .writeHead(200, {
    'Content-Length': Buffer.byteLength("not any todos for know"),
    'Content-Type': 'text/plain'
  })
  .end("not any todos for know");
        
    } else {
          res.writeHead(200);
  res.end('Hello, World!');

    }
}

console.log("Your server is runnig on port : 8080")

const server = http.createServer(requestListener);
server.listen(8080);
