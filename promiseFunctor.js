const pf = new Promise((resolve, reject) => {

    setTimeout(() => resolve({name: "saleh", age: 20}), 500)
})


// const name = pf.map(ob => ob.name).then(name => console.log(name))


const timeOutNumber = {
    each: (call) => {
        setTimeout(() => call(1), 1000)
        setTimeout(() => call(2), 2000)
        setTimeout(() => call(3), 3000)
    }
}


timeOutNumber.each(console.log)
