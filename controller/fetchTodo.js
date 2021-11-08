const fs = require("fs");

const fetchTodos = () => JSON.parse(fs.readFileSync("./todos.json", "utf-8"));

module.exports = {
    fetchTodos,
};
