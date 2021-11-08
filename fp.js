const zarb = function(a, b) {
    return a * b;
};

const tavan = function(callback, a) {
    return callback(a, a);
};

console.log(tavan(zarb, 3));

const lebases = [
    {
        type: "nazi",
        model: "pirahan",
        gheymat: 20,
    },
    {
        type: "nazi",
        model: "shalvar",
        gheymat: 100,
    },
    {
        type: "pashmi",
        model: "jorab",
        gheymat: 150,
    },
    {
        type: "pashmi",
        model: "shalvar",
        gheymat: 50,
    },
    {
        type: "abrisham",
        model: "rosari",
        gheymat: 75,
    },
    {
        type: "nazi",
        model: "shall",
        gheymat: 40,
    },
];

let naziLebas = [];
for (let index = 0; index < lebases.length; index++) {
    const lebas = lebases[index];

    if (lebas.type === "nazi") {
        naziLebas.push(lebas);
    }
}

const naziFn = l => l.type === "nazi";

const fileterNazi = (arrLebas, b) => arrLebas.filter(l => b ? l.type === "nazi" : l.type !== "nazi");

const naziFilter = lebases.filter(naziFn);

const notNazi = lebases.filter(naziFn);

const lebasTypes = lebases.map(l => `${l.model} hast ${l.type}`);

console.log("lesabTypes", lebasTypes);

let jameGheymat = 0;
for (let index = 0; index < lebases.length; index++) {
    jameGheymat += lebases[index].gheymat;
}

const jameFn = (arr) => arr.reduce((jame, lebas) => (jame += lebas.gheymat), 0);

const jameNakhi = jameFn(fileterNazi(lebases, true));
const jameNotNazi = jameFn(fileterNazi(lebases, false));

console.log("jameNakhi", jameNakhi);
console.log("jameNotNazi", jameNotNazi);

const fnReduc = (jame, lebas) => jame += lebas.gheymat;

const baravordGheymat = (lebasType, arr) => arr.filter(l => l.type === lebasType).reduce(fnReduc, 0);

const jamePashi = baravordGheymat("pashmi", lebases);

console.log("jame pahsmi", jamePashi);
lebases.push({ type: "pashmi", model: "tshirt", gheymat: 325 });
console.log("jame pahsmi baad", baravordGheymat("pashmi", lebases));
// const jameFn = (arr) => arr.reduce((jame, lebas) => (jame += lebas.gheymat), 0);
//
// const jameNakhi = jameFn(fileterNazi(lebases, true));
// const jameNotNazi = jameFn(fileterNazi(lebases, false));
//
// console.log("jameNakhi", jameNakhi);
// console.log("jameNotNazi", jameNotNazi);
// const jameFn = (arr) => arr.reduce((jame, lebas) => (jame += lebas.gheymat), 0);
//
// const jameNakhi = jameFn(fileterNazi(lebases, true));
// const jameNotNazi = jameFn(fileterNazi(lebases, false));
//
// console.log("jameNakhi", jameNakhi);
// console.log("jameNotNazi", jameNotNazi);
// const jameFn = (arr) => arr.reduce((jame, lebas) => (jame += lebas.gheymat), 0);
//
// const jameNakhi = jameFn(fileterNazi(lebases, true));
// const jameNotNazi = jameFn(fileterNazi(lebases, false));
//
// console.log("jameNakhi", jameNakhi);
// console.log("jameNotNazi", jameNotNazi);
