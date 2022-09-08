

class Game {
    constructor() {
        this.board = new Board()
    }

    start() {

    }
}

class Board {
    constructor() {
        this.dice = [];

        for(let i = 0; i < 16; i++) {
            this.dice.push(new Die())
        }
    }

    shuffle() {
        // super crappy shuffle
        this.dice.sort( () => .5 - Math.random() )
    }
}



class Die {
    constructor() {
        this.sides = ["A", "B", "C", "D", "F", "T"]
        this.topLetter = this.sides[0]
    }

    roll() {
        const randomIndex = Math.floor(Math.random() * this.sides.length) // get a random index into an array
        this.topLetter = this.sides[randomIndex]
    }
}