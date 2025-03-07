class Game {
    constructor() {
        // set up deck
        // set up player list
    }

    play() {

    }

    doTurn(player) {

    }
}

class Deck {
    constructor() {
        // set up cardsInDeck
    }

    shuffle() {

    }

    dealCard() {

    }
}

class Player {
    constructor() {
        // set up the hand
        this.hand = [] // array of Card objects
    }

    // If you have the card, it returns that card and removes it from the hand
    // If you don't have the card it returns undefined
    doYouHave(requestedCard) { // card parameter will be a card object
        // i = 0
        for(let i = 0; i < this.hand.length; i++) {
            if(this.hand[i].number === requestedCard.number) {
                const card = this.hand[i]
                // remove from hand
                this.hand.splice(i, 1)
                // return card
                return card
            }
        }
        // Only return undefined if you've looped through the whole array and never went inside the if
        return undefined
    }
}

// We could just make our card objects by hand too, but using a class is great too
class Card {
    constructor(suit, number) {
        // set up suit and number
        this.suit = suit
        this.number = number
    }
}

const game = new Game()
game.play()