
class Die {
    constructor(letters) {
        this.letters = letters // ["A", "E", "P", "T", "F", "S"]
        this.top = this.letters[0]
    }

    roll() {
        const randomIndex = Math.floor(Math.random() * this.letters.length) // gives a random index into an array
        this.top = this.letters[randomIndex]// random letter from the letters array
    }
}

class Board {
    constructor() {
        this.dice = []
        for(let i = 0; i < 16; i++) {
            this.dice.push(new Die(["A", "E", "P", "T", "F", "S"]))
        }
    }

    shuffle() {
        for (let i = this.dice.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.dice[i], this.dice[j]] = [this.dice[j], this.dice[i]];
        }

        // TODO: loop through dice and roll all of them
    }
}

class Game {

    start() {
        // runs the whole time the game is going

        // set up the board
        const board = new Board()
        // shuffle the board
        board.shuffle()
        console.log(board)
    }
}


const game = new Game()
game.start()
