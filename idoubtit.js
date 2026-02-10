
// I Doubt It
// 
// Everyone gets a hand of random cards (Deck dealHands method)
// The starting player has to play ones or lie (1 one, or 2 ones, or 3 ones)
// The next player has to play twos or lie (1 two, or 2 twos, or 3 twos)
// If you think the player lied about what they just played you say "I Doubt It"
// If you're right, they have to take all the cards into their hand
// If you're wrong, you have to take all the cards into your hand
// The game ends when someone runs out of cards


// Classes
// 1) To represent and manage data
// 2) To represent and manage a part of the user interface

// Data
// (Deck) What cards are in the deck
// What cards are in people's hands
// (Game) Who's turn it is
// (Game) What number needs to be played next


class Game {
    constructor() {
        this.whoseTurn = 0 // index into the players array
        this.whatNumber = 1
        this.deck = new Deck()
        this.players = []
    }

    playGame() {
        // Ask how many players
        const numberOfPlayers = prompt("How many players?")
        // Make a player for each person they say is playing
        for (let i = 0; i < numberOfPlayers; i++) {
            // Make a player object and add it to the this.players array
            const newPlayer = new Player()
            this.players.push(newPlayer)
        }

        // Everyone gets a hand of random cards (dealing out every card)
        this.deck.dealCards(this.players)

        while (!this.isGameOver()) {
            // Current player picks a card to play
            const currentPlayer = this.players[this.whoseTurn]
            currentPlayer.pickCardsToPlay()
            // All the other players decide whether to challenge
            for(let i = 0; i < this.players.length; i++) {
                const wantToChallenge = this.players[i].decideWhetherToChallenge()
                if(wantToChallenge) {
                    // TODO: do challenge stuff
                }
            }

            this.whoseTurn++;
            // If we've gone off the hand, start back at 0
            if(this.whoseTurn >= this.players.length) {
                this.whoseTurn = 0;
            }
        }
    }

    isGameOver() {
        for (let i = 0; i < this.players; i++) {
            if (this.players[i].hand.length === 0) {
                // If we find a player with an empty hand, the game is over
                return true;
            }
        }
        // If we checked all the players and there was no empty hand, the game isn't over
        return false;
    }
}


class Player {
    constructor() {
        this.hand = []
    }

    pickCardsToPlay() {
        console.log("Picking card to play....")
        // TODO
    }

    decideWhetherToChallenge() {
        console.log("Deciding whether to challenge...")
        // TODO
    }
}

const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

class Deck {
    constructor() {
        this.cards = []

        for (let i = 0; i < 4; i++) {
            this.cards = this.cards.concat(cardValues)
        }

        this.shuffle()

        console.log(this.cards)
    }

    // this.cards = ['7']
    // cardsToEachPlayer = 3
    // i = 2

    // players = [
    //     {
    //         hand: ['10', '2', '2']
    //     },
    //     {
    //         hand: ['2', 'K', 'J']
    //     },
    //     {
    //         hand: ['5', '10', '3']
    //     },
    // ]

    dealCards(players) {
        // How many cards to each player, rounded down
        const cardsToEachPlayer = Math.floor(52 / players.length)
        // Loop over all the players and take the number of cards they need off the top of the deck
        for (let i = 0; i < players.length; i++) {
            players[i].hand = this.cards.splice(0, cardsToEachPlayer)
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}

const game = new Game()
game.playGame()