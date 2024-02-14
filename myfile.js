
function getMultipliedSum(number) {
    let multipliedSum = 1
    for(let i = 1; i <= number; i++) {
        multipliedSum += multiplyNumbers(multipliedSum, i)
    }
    return multipliedSum
}

function multiplyNumbers(a, b) {
    let total = 0
    for(let i = 0; i < a; i++) {
        total + b
    }
    return total
}

const result = getMultipliedSum(4)
alert("The result of 4 is: " + result)