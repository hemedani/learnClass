import { Bus, fromPromise } from "baconjs";
import fetch from "node-fetch";

const getTodo = (id) => {
    const promise = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(json => json);
    return fromPromise(promise);
};

const stream = new Bus();

stream
    .flatMap(id => getTodo(id))
    .onValue(json => console.log(json));

stream.push("1");
stream.push("2");
// getTodo(1);
