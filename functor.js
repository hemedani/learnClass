const todos = [{
    id: 1,
    title: "karhaye khone",
    parent: null,
}, {
    id: 2,
    title: "kharid",
    parent: 1,
}, {
    id: 3,
    title: "kharid tokhmeMorgh",
    parent: 2,
}, {
    id: 4,
    title: "tamiz kari",
    parent: 1,
}, {
    id: 5,
    title: "karhaye sherkay",
    parent: null,
}, {
    id: 6,
    title: "code nevisi",
    parent: 5,
}];

const ids = todos.map(todo => todo.title).map(title => title.length).map(len => len * 2);

console.log(ids);
