const http = require("http");
const { switchMethod } = require("./routes/switch");

console.log("Your server is runnig on port : 8080");

const server = http.createServer(switchMethod);
server.listen(8080);
