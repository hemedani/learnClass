import fs from "fs";

export const fetchTodos = () => JSON.parse(fs.readFileSync("./todos.json", "utf-8"));
