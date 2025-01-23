
// Property vs variable?
// Are you using it across multiple methods/in code outside the class?
// if yes, it should be property, if not it can just be a variable

class Game {
    constructor() {
        this.players = [{ name: "Bobby", lowScore: 3}, { name: "Sheila", lowScore: 2}]
        this.board = new Board()
    }

    start() {
        //while(they want to play maybe again) {
            // ask them their name?
            const name = prompt("What's your name?") // "Bobby"

            // make a player for them if there isn't one already
            // let player = null // { name: "Bobby"}
            // for(const playerToCheck of this.players) {
            //     // playerToCheck = { name: "Bobby"}
            //     if(playerToCheck.name === name) {
            //         player = playerToCheck
            //         break // emergency exit the for-of loop
            //     }
            // }
            // All those lines can be replaced with this line:
            let player = this.players.find(playerToCheck => playerToCheck.name === name)

            if(player === null) {
                player = new Player(name)
            }

            alert("Welcome " + player.name + " Your lowest score so far is " + player.lowScore)


            //while(they havent won) {
                // ask the user where to drop the ball
                // drop the ball
                // show the results (score)
                // add a point to the player's score
            //}
            // tell them they won and show them the low scores
            // do you want to play again?
        }
        // Tell them goodbye
    //}
}

class Board {
    constructor() {
        this.size = 5
    }

    drop(spotNumber) {
        return "Win" // or "Lose"
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.score = 0
        this.lowScore = 1000
    }
}

class Ball {

}


const game = new Game()
game.start()






// Ignore this, it's about making the War Game have a dynamic number of players

// this.playerHands = []

// // this.player1Hand = this.cards.slice(cardsPerPlayer * 0, cardsPerPlayer * 1)
// // this.player2Hand = this.cards.slice(cardsPerPlayer * 1, cardsPerPlayer * 2)
// // this.player3Hand = this.cards.slice(cardsPerPlayer * 2, cardsPerPlayer * 3)
// // this.player4Hand = this.cards.slice(cardsPerPlayer * 3, cardsPerPlayer * 4)

// // this one would be faster
// for(let i = 0; i < numPlayers; i++) {
//     this.playerHands[i] = this.cards.slice(cardsPerPlayer * i, cardsPerPlayer * (i + 1))
// }

// for(let i = 0; i < numPlayers; i++) {
//     this.playerHands[i] = this.cards.splice(0, cardsPerPlayer)
// }