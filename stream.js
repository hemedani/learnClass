const { PassThrough, Duplex } = require("stream");
const { createWriteStream, createReadStream } = require("fs");

const readRecording = createReadStream("./recording.mp4");
const writeRecording = createWriteStream("./copy.mp4");

const calLength = new PassThrough();

let fullLength = 0;
calLength.on("data", (chunck) => {
    fullLength += chunck.length;
    console.log(fullLength);
});

readRecording.pipe(calLength).pipe(writeRecording);

// const writeStd = createWriteStream("./std.txt", "utf8");
//
// process.stdin.on("data", (chunk) => {
//     console.log(chunk);
//     writeStd.write(chunk);
// });
