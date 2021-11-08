
const fs = require("fs")

const readFilePromise = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("./todos.json", "utf8", (err, todo) => {
            if (err) {
                console.log(err)
                reject("we can not read file")
            }
            resolve(todo)

        })

    })
}

module.exports = {
    readFilePromise
}

