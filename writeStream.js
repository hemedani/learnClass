import { createWriteStream } from "fs";
import { PassThrough } from "stream";

const calLength = new PassThrough();

let fullLength = 0;
calLength.on("data", (chunck) => {
    fullLength += chunck.length;
    console.log(fullLength, chunck.toString("utf8"));
});

process.stdin.pipe(calLength);
