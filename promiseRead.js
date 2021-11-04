const fs = require("fs")

const getTodoPromise = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, todos) => {
            if (err) {
                reject("we can not found todos")
                throw new Error()
            }
            resolve(todos)
        })
    })
}

module.exports = {
    getTodoPromise
}

