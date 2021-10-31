const http = require('http');
const fs = require("fs")

const todos = JSON.parse(fs.readFileSync("./todos.json", "utf-8")).filter(todo => todo.done === false)
const requestListener = function(req, res) {
    console.log("the requset is => ", req.method, req.url)
    if (req.method === "GET" && req.url === "/todos") {
        console.log("todos", todos)
        res
            .writeHead(200)
            .end(JSON.stringify(todos, null, 2));

    } else if (req.method === "GET" && /^\/todo/.test(req.url)) {
        console.log(req)
        const current_url = new URL(`http://localhost:8000${req.url}`);

        // get access to URLSearchParams object
        const search_params = current_url.searchParams;

        console.log(search_params)
        const foundedTodo = todos.find(todo => todo.id === Number(search_params.get("id")))
        res
            .writeHead(200)
            .end(JSON.stringify(foundedTodo, null, 2));
    } else if (req.method === "POST" && /^\/todo/.test(req.url)) {
        fs.readFile("./todos.json", "utf8", (err, todo) => {
            if (err) {
                console.log(err)
                res.writeHead(501);
                res.end('Server is crashed');
            }

            const current_url = new URL(`http://localhost:8000${req.url}`);

            const search_params = current_url.searchParams;
            const parsedTodo = JSON.parse(todo)
            parsedTodo.push({ id: parsedTodo.length + 1, title: search_params.get("title"), desc: search_params.get("desc"), done: false })
            console.log(parsedTodo)
            fs.writeFile("./todos.json", JSON.stringify(parsedTodo, null, 2), (err, done) => {
                if (err) {
                    console.log(err)
                    res.writeHead(501);
                    res.end('Server is crashed');
                }
                console.log(done)
                res.writeHead(501);
                res.end(JSON.stringify(parsedTodo, null, 2));

            })
        })


    } else {
        console.log(req.method)

        res.writeHead(200);
        res.end('Hello, World!');
    }
}

console.log("Your server is runnig on port : 8080")

const server = http.createServer(requestListener);
server.listen(8080);
