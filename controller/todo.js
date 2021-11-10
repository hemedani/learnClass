import fs from "fs";
import url from "url";
import { fetchTodos } from "./fetchTodo.js";

export const getTodos = (_, res) => {
    const todos = fetchTodos();
    res
        .writeHead(200)
        .end(JSON.stringify(todos, null, 2));
};

export const toggleTodo = (req, res) => {
    const queryObject = req.parsedUrl.query;

    const todos = fetchTodos();

    const newTodos = todos.map(todo => {
        if (todo.id === Number(queryObject.id)) {
            todo.done = !todo.done;
            return todo;
        } else {
            return todo;
        }
    });

    fs.writeFileSync("./todos.json", JSON.stringify(newTodos, null, 2), (err, _) => {
        if (err) {
            console.log(err);
            res.writeHead(501);
            res.end("Server is crashed");
        }
    });
    res.writeHead(200);
    res.end(JSON.stringify(newTodos, null, 2));
};
