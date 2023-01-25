function doItManyTimes() {
    for(let i = 0; i < 3; i++) {
        doSomething(i)
    }
}

function doSomething(howManyTimes) {
    for(let i = 0; i < howManyTimes; i++) {
        const message = "something "
        console.log(message + i)
    }
}

doItManyTimes();