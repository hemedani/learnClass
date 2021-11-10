import url from "url";
import { getTodos, toggleTodo } from "../controller/todo.js";

export const getUrls = (req, res) => {
    req.parsedUrl = url.parse(req.url, true);

    switch (req.parsedUrl.pathname) {
        case "/todos":
            getTodos(req, res);
            break;
        case "/toggletodo":
            toggleTodo(req, res);
            break;
        default:
            console.log("we are here default");
            res.writeHead(200);
            res.end("nothing requeted");
    }
};
