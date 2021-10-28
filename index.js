const http = require('http');
const fs = require("fs")

const requestListener = function (req, res) {
    console.log("the requset is => ", req.method, req.url)
    if (req.method === "GET" && req.url === "/todos") {
        const todos = fs.readFileSync("./todos.json", "utf-8" );
        console.log("todos", todos)
        res
  .writeHead(200 )
  .end(todos);
        
    } else {
          res.writeHead(200);
  res.end('Hello, World!');

    }
}

console.log("Your server is runnig on port : 8080")

const server = http.createServer(requestListener);
server.listen(8080);
