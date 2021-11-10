// import http from "http";
import { getTodos } from "./controller/todo.js";
import { createMyServer } from "./createServer.js";

console.log("Your server is runnig on port : 8080");

// const server = http.createServer(switchMethod);

const server = createMyServer();

server.get("/todos", getTodos);

server.listen(8080);
