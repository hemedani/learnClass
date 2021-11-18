"use strict";
// Basic Types
let indexId = 7;
let profileName = "saeed";
let isActive = true;
let avalableClasses = ["Java", "Javascript"];
let persons = [12, "saeed", false];
// Tuple Array
let tuplePersons = [[13, "saleh", true], [34, "saeid", false]];
// Union
let activeId = 23;
activeId = "sjldfhgfug87482287345jsd";
// Enum
var PType;
(function (PType) {
    PType["Nakhi"] = "nakhi";
    PType["Abrisham"] = "abrisham";
    PType["Pashmi"] = "pashmi";
})(PType || (PType = {}));
let pirahanType = "pashmi";
pirahanType = "pashmi";
pirahanType = "abrisham";
console.log("pirahantype", pirahanType);
const user = {
    id: 32,
    name: "saeed",
};
user.age = 23;
// Type Assertion
let nothig = 23;
let personId = nothig;
function calculate(num1, num2) {
    return num1 + num2;
}
const plus = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
console.log(calculate(23, 23));
// Void
function log(msg) {
    console.log(msg);
}
const userOne = {
    name: "masoud",
};
userOne.age = 12;
// Classes
class Karbar {
    constructor(name, age) {
        this.id = 12;
        this.name = "amir";
        this.age = 0;
        this.name = name;
        this.age = age;
        console.log("we are in the class constructor", this.name, this.id, this.age);
    }
}
const karmand1 = new Karbar("ali", 34);
// console.log("id karmand", karmand1.id);
// Subclasses
// Generics
function createArr(arr, arr2) {
    return arr.concat(arr2);
}
const arr1 = createArr([1, 2, 3], [3, 4, 5]);
const arr2 = createArr(["amir", "masoud"], ["reza", "vahid"]);
arr1.push(8);
arr2.push("saeed");
console.log("arr1", arr1, arr2);
