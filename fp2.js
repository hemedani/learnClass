const name = "Saeid";
const callingApi = () => {
    console.log(`http://www.apicall.com/gettodos/${name}`)
}

callingApi()


const classStudent = (name) => {
    let privateName = name;

    return {
        // it is a getter 
        getName: () => {
            return privateName;
        },

        setter: (newName) => {
            privateName = newName
        }
    }
}


// const saleh = classStudent("aslani")
// 
// console.log(saleh.getName())
// console.log(saleh.privateName);
// console.log(saleh.setter("ghalkhanbaz"))
// console.log(saleh.getName())
//
//


// function clasName() {
//     return function another() {
// 
//     }
// }

// It is a currying concept
const classStudentCurry = (name) => (studentName) => (studentFalimy) => console.log(`the class name is ${name} and the student name is ${studentName} with ${studentFalimy} falimiles`)

const jsClasses = classStudentCurry("JS");

const saeidInJs = jsClasses("Saeid");

const ghalkhanbazInSaeid = saeidInJs("ghalkhanbaz")


const salehinJS = jsClasses("Saleh")

const anotherSaeidInJs = saeidInJs("Mohammadi")

const aslani = salehinJS("aslani")


// It is a Recursion Concept
const countDown = (num) => {
    num--
    console.log(num);
    (num > 0) && countDown(num)
}

countDown(13)


// Todo Recursive
const todos = [{
    id: 1,
    title: "karhaye khone",
    parent: null
}, {
    id: 2,
    title: "kharid",
    parent: 1
}, {
    id: 3,
    title: "kharid tokhmeMorgh",
    parent: 2
},
{
    id: 4,
    title: "tamiz kari",
    parent: 1
},
{
    id: 5,
    title: "karhaye sherkay",
    parent: null
},
{
    id: 6,
    title: "code nevisi",
    parent: 5
}]

// {
//     title: "karhaye khone",
//     todo: [{
//         title: "kharid",
//         todo: [{
//             title: "kharid tokhmeMorgh",
//             todo: []
//         },
//             {}]
//     }]
// }


