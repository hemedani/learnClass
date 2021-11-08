const { getTodos, toggleTodo } = require("../controller/todo");

var myStr = "/toggletodo";

const getUrls = (req, res) => {
    const url = req.url;

    switch (url) {
        case "/todos":
            getTodos(req, res);
            break;
        case (url.indexOf("/toggletodo") === 0):
            console.log("we are here");
            toggleTodo(req, res);
            break;
        default:
            console.log("we are here default");
            res.writeHead(200);
            res.end("nothing requeted");
    }
};

module.exports = {
    getUrls,
};
