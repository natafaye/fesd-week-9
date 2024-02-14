
const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',  'U', 'V', 'W', 'X', 'Y', 'Z']

class Game {
    constructor() {
        this.board = new Board()
        this.scorekeeper = new Scorekeeper()
    }

    start() {
        console.log(this.board.toString())
        this.resetBoard()
        console.log(this.board.toString())
    }
    
    resetBoard() {
        this.board.shuffle()
    }
}

class Scorekeeper {
    constructor() {
        this.players = []
    }

    addPlayer() {

    }
}

class Board {
    constructor() {
        this.diceList = []
        // build dice list
        for(let i = 0; i < 16; i++) {
            // make the sides array
            const sides = []
            for(let i = 0; i < 6; i++) {
                // add a random letter from the alphabet array to the dice sides
                sides.push(alphabet[Math.floor(Math.random()*alphabet.length)])
            }
            // generate a die
            const newDie = new Die(sides)
            this.diceList.push(newDie)
        }
    }

    shuffle() {
        this.diceList = this.diceList
            .map(value => ({ value: value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map((valueAndSort) => valueAndSort.value)
        
        for(let i = 0; i < this.diceList.length; i++) {
            this.diceList[i].roll()
        }
    }

    toString() {
        const currentSides = this.diceList.map(die => die.currentSide)
        return currentSides.slice(0, 4).join("") + "\n" + 
            currentSides.slice(4, 8).join("") + "\n" + 
            currentSides.slice(8, 12).join("") + "\n" + 
            currentSides.slice(12, 16).join("") + "\n"
    }
}

class Die {
    constructor(sides) {
        this.sides = sides 
        this.currentSide = this.sides[0] 
    }

    roll() {
        // grab a random side and set that to the current side
        this.currentSide = this.sides[Math.floor(Math.random()*this.sides.length)]
    }
}

const game = new Game()
game.start()