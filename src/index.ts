// Basic Types
let indexId: number = 7;
let profileName: string = "saeed";
let isActive: boolean = true;
let avalableClasses: string[] = ["Java", "Javascript"];

// Tuple
type Person = [number, string, boolean];
let persons: Person = [12, "saeed", false];

// Tuple Array
let tuplePersons: Person[] = [[13, "saleh", true], [34, "saeid", false]];

// Union
let activeId: number | string = 23;
activeId = "sjldfhgfug87482287345jsd";

// Enum
enum PType {
    Nakhi = "nakhi",
    Abrisham = "abrisham",
    Pashmi = "pashmi",
}
let pirahanType: "nakhi" | "abrisham" | "pashmi" = "pashmi";
pirahanType = "pashmi";
pirahanType = "abrisham";

console.log("pirahantype", pirahanType);

// Objects
//
type User = { id: number; name: string; age?: number };

const user: User = {
    id: 32,
    name: "saeed",
};

user.age = 23;

// Type Assertion
let nothig: any = 23;
let personId = nothig as number;

// Functions
type Calc = (num: number, num2: number) => number;
function calculate(num1: number, num2: number): number {
    return num1 + num2;
}
const plus: Calc = (num1, num2) => num1 + num2;
const minus: Calc = (num1, num2) => num1 - num2;

console.log(calculate(23, 23));

// Void
function log(msg: string): void {
    console.log(msg);
}

// Interfaces
interface PUser {
    name: string;
    age?: number;
}

type UUser = PUser | string;

const userOne: PUser = {
    name: "masoud",
};

userOne.age = 12;

// Classes

class Karbar implements PUser {
    protected id: number = 12;
    name: string = "amir";
    age: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        console.log("we are in the class constructor", this.name, this.id, this.age);
    }
}

const karmand1 = new Karbar("ali", 34);

// console.log("id karmand", karmand1.id);
// Subclasses

// Generics
function createArr<T>(arr: T[], arr2: T[]): T[] {
    return arr.concat(arr2);
}

const arr1 = createArr([1, 2, 3], [3, 4, 5]);
const arr2 = createArr(["amir", "masoud"], ["reza", "vahid"]);

arr1.push(8);
arr2.push("saeed");

console.log("arr1", arr1, arr2);
