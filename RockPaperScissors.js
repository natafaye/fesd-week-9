

class Game {
    start() {
        const userChoice = prompt("Rock paper or scissors?")

        const player2 = new AIPlayer();
        const computerChoice = player2.pickOption()
        
        // TODO: figure out who won
        const winnerMessage = "You won!"

        alert("You picked: " + userChoice + "\n\n The computer picked: " + computerChoice + "\n\n" + winnerMessage)

        // TODO: add history to AIPlayer

        // TODO: allow the user to play again
    }
}



class AIPlayer {
    constructor() {
        this.history = []
    }

    pickOption() {
        const options = ["rock", "paper", "scissors"]
        const randomIndex = Math.floor(Math.random() * options.length) // get a random index into an array
        const randomOption = options[randomIndex]
        return randomOption;
    }

    saveInHistory(playerPick) {
        this.history.push(playerPick)
    }
}


// TESTING

// describe("AIPlayer", function() {
//     it("saves in history correctly", function() {
//         // Arrange
//         const player = new AIPlayer();

//         // Act
//         player.saveInHistory("rock")
//         player.saveInHistory("paper")

//         // Assert
//         expect(player.history).to.equal(["rock", "paper"])
//     })
// })



// RUN OUR CODE
const game = new Game();
game.start();