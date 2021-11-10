import http from "http";
export const createMyServer = () => {
    const urls = [];
    const fns = {};
    return {
        listen: (port) =>
            http.createServer((req, res) => {
                urls.map(url => fns[url](req, res));
            }).listen(port),
        get: (url, fn) => {
            urls.push(url);
            fns[url] = fn;
        },
    };
};
