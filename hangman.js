class Player {
    constructor() {
        this.guessed = []
    }
}

const POTENTIAL_ANSWERS = ["hello", "apple", "banana", "kiwi"]
const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

class Game {
    constructor() {
        // This is a pattern for getting a random item in an array in JS
        this.answer = POTENTIAL_ANSWERS[Math.floor(Math.random() * POTENTIAL_ANSWERS.length)]
        this.player = new Player()
        this.strikes = 0
    }

    play() {
        // While they haven't guessed all the letters in the word go back to step 1 do it again
        while(!this.isGameOver()) {
            // Show the user the empty spots and ask them for their letter guess
            const guess = prompt("Welcome to hangman!\n\nWhat's your guess?" + this.player.guessed.join(", ")) // TODO: Show letter spots
            // Check that it's a letter
            if(!LETTERS.includes(guess)) {
                alert("That's not a letter!")
                break // go to the next looping (prompt them again for a guess)
            }
            // Add it to their guessed
            this.player.guessed.push(guess)
            // Check if it's in the answer word
            // If it's not in the word, give them a strike
            if(!this.letterIsInAnswer()) {
                this.strikes++
            }

            // allow them to makeAGuess for the word?
        }
        // Handle the game ending
        alert("Game over")
        // reset?
    }

    reset() {

    }

    makeAGuess() {

    }

    isGameOver() {
        // this.answer is the word
        // this.player.guessed is the list of letters they've guessed
        const lettersInAnswer = this.answer.split("") // makes an array of letters, like this: ["h", "e", "l", "l", "o"]
        for(let i = 0; i < lettersInAnswer.length; i++) {
            // Does the player's guessed letters include this letter that I'm checking right now
            // If not, return false
            if(!this.player.guessed.includes(lettersInAnswer[i])) {
                return false
            }
        }
        return true
    }

    letterIsInAnswer() {
        return true
    }
}

const game = new Game()
// game = { answer: "hello", player: {}, strikes: 0, play() {}, reset() {} ........}
game.play()