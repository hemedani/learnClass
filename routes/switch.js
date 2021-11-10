import { getUrls } from "./gets.js";

export const switchMethod = (req, res) => {
    switch (req.method) {
        case "GET":
            getUrls(req, res);
            break;
        case "POST":
            // code block
            break;
        default:
            res.writeHead(200);
            res.end("Hello, World!");
    }
};
