function doItManyTimes() {

    const order = {
        main: "spaghetti",
        drink: "sprite"
    }

    for(let i = 0; i < 3; i++) {
        doSomething(3)
    }
}

function doSomething(howManyTimes) {

    for(let i = 0; i < howManyTimes; i++) {
        const message = "something "
        console.log(message + i)
    }
}


doItManyTimes();


function testingFunction() {
    doSomething(0)
    doSomething(1)
    doSomething(2)
    doSomething(3)
    doSomething(4)

    doSomething(-100)

    doSomething("hello")
}