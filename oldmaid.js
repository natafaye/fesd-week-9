
class Game {
    constructor() {
        this.players = []
        this.currentPlayer = null
    }

    // Top-Down = write this first, pretend everything else is already written

    // deal out all the cards
    // pick someone to go first
    // on the turn, player picks a player to take from
    // player takes the card
    // player puts down any pairs
    // next person's turn (repeat steps 3-5)
    // stop when all the pairs are down or the only card left in a hand is the old maid
    playGame() {
        this.makePlayers()
        const deck = this.createDeck()
        this.dealHands(deck)
        // set the current player to the first one
        this.currentPlayer = this.players[0]
        while(!this.isGameOver()) {
            const player = this.currentPlayer.pickPlayerToDrawFrom()
            const card = player.drawFromMe()
            this.currentPlayer.hand.push(card)
            this.currentPlayer.putDownPairs()
            // TODO: switch to next player
        }
        this.endGame()
    }

    // Make an array of all the cards, remove 3 queens
    // shuffle the array
    // return that array
    createDeck() {

    }

    // split the deck into as many chunks as there are players and set their hands to that (use slice maybe)
    dealHands(deck) {

    }

    // prompt how many players and each player's name and add to the players array
    makePlayers() {

    }

    // return true if only the old maid is left or false if not
    isGameOver() {

    }

    endGame() {

    }
}

class Player {
    constructor() {
        this.hand = []
        this.pairs = []
    }

    // Bottom-Up = write the little pieces first, then form them together

    // This function would pick a random card from this player's hand and return it
    // also that card should be removed from the hand
    drawFromMe() {
        const randomIndex = Math.floor(Math.random() * this.hand.length)
        const card = this.hand[randomIndex];
        this.hand.splice(randomIndex, 1)
        return card
    }

    pickPlayerToDrawFrom() {
        
    }

    putDownPairs() {

    }
}

class Card {
    constructor(value, suit) {
        this.value = value
        this.suit = suit
    }
}

// Four different ways to store card data
// { value: 7, suit: '♣️' }
// new Card(7, '♣️')
// '7♣️'
// 7


// Two Plans of Attack
// Top-Down
// Bottom-Up
// Whatever looks shiny