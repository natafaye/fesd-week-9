

let userAge = prompt("What's your age?")
userAge = parseInt(userAge)
const message = canDrink(userAge)
alert(message)

function canDrink(age) {
    if(age > 21) {
        return "You can drink"
    } else {
        return "You can't drink"
    }
}