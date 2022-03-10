
class Die {
    constructor(sides) {
        this.sides = sides;
        this.currentSide = this.sides[0];
    }

    roll() {
        const randomIndex = Math.floor(Math.random() * this.sides.length)
        this.currentSide = this.sides[randomIndex];
    }
}

class Board {
    constructor() {
        this.dice = [];
        for(let i = 0; i < 9; i++) {
            this.dice.push( new Die(["A", "R", "C", "D", "E", "N"]) ) // all dies will have the same sides
        }
    }

    shuffle() {
        this.dice.sort(() => Math.random() - 0.5); // crappy shuffle
        for(const die of this.dice) {
            die.roll();
        }
    }
}

class Game {
    constructor(numPlayers) {
        this.board = new Board();
        this.players = [];
        for(let i = 0; i < numPlayers; i++) {
            this.players.push( new Player() ) 
        }
    }

    startGame() {
        this.board.shuffle();
        while(!this.isOver()) {
            // keep playing the game
        }
    }

    isOver() {
        // returns true if the game is over, false if it is not
    }
}

class Player {
    constructor() {
        this.wordsFound = [];
    }

    findWord() {

    }
}