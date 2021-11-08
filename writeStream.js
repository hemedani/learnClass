const { createWriteStream } = require("fs");

process.stdin.pipe(createWriteStream("./nothing.ts"));
