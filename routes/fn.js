import { switchMethod } from "./switch.js";

export const listener = function(req, res) {
    if (req.method === "GET" && req.url === "/todos") {
        res
            .writeHead(200)
            .end(JSON.stringify(todos, null, 2));
    } else if (req.method === "GET" && /^\/todo/.test(req.url)) {
        const current_url = new URL(`http://localhost:8000${req.url}`);

        // get access to URLSearchParams object
        const search_params = current_url.searchParams;

        console.log("search_param.get(id)", Number(search_params.get("id")));

        console.log(search_params);
        const foundedTodo = todos.find(todo => todo.id === Number(search_params.get("id")));
        res
            .writeHead(200)
            .end(JSON.stringify(foundedTodo, null, 2));
    } else if (req.method === "POST" && /^\/todo/.test(req.url)) {
        fs.readFile("./todos.json", "utf8", (err, todos) => {
            if (err) {
                console.log(err);
                res.writeHead(501);
                res.end("Server is crashed");
            }

            const current_url = new URL(`http://localhost:8000${req.url}`);

            const search_params = current_url.searchParams;
            const parsedTodo = JSON.parse(todos);
            parsedTodo.push({
                id: parsedTodo.length + 1,
                title: search_params.get("title"),
                desc: search_params.get("desc"),
                done: false,
            });
            console.log(parsedTodo);
            fs.writeFile("./todos.json", JSON.stringify(parsedTodo, null, 2), (err, _) => {
                if (err) {
                    console.log(err);
                    res.writeHead(501);
                    res.end("Server is crashed");
                }
                res.writeHead(501);
                res.end(JSON.stringify(parsedTodo, null, 2));
            });
        });
    } else if (req.method === "GET" && /^\/toggletodo/.test(req.url)) {
        const queryObject = url.parse(req.url, true).query;
        const promiseTodos1 = getTodoPromise("./todos/1.json");
        const promiseTodos2 = getTodoPromise("./todos/2.json");

        Promise.all([promiseTodos1, promiseTodos2]).then(resp => {
            console.log("resp in promise all", resp);
        });
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
    } else {
        res.writeHead(200);
        res.end("Hello, World!");
    }
};

export const newListener = (req, res) => {
    switchMethod(req, res);
};
