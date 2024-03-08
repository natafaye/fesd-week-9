const DEALER = 0
const HUMAN = 1

class Game {
    constructor() {
        this.deck = new Deck()
        this.players = [new Player(DEALER), new Player(HUMAN)]
    }

    isGameOver() {
        // check if either player over 21
        return this.players[HUMAN].getHandValue() >= 21 
            || this.players[DEALER].getHandValue() >= 21
    }

    playRound() {
        // dealer deals 2 cards to both players
        while(!this.isGameOver()) {
            // show the user their cards and ask if they want a card
            const response = prompt("Here's your hand value: " + this.players[HUMAN].getHandValue() + 
                "\n\nDo you want another card")
            // if they say yes
            if(response.toLowerCase() === "yes") {
                // get another card
                this.players[HUMAN].addCard(this.deck.getCard())
                this.players[DEALER].addCard(this.deck.getCard())
            } else {
                break; // leave the loop now
            }
        }

        // game over
        // winner is closest to 21 but not over
        alert("Here's who won")
    }

    reset() {

    }
}

class Player {
    constructor(type) {
        this.hand = []
        this.type = type
    }

    getHandValue() {
        let total = 0;
        for(let i = 0; i < this.hand.length; i++) {
            total += this.hand[i].value
        }
        return total
    }

    addCard(newCard) {
        this.hand.push(newCard)
    }
}

class Deck {
    constructor() {
        this.deck = []
        this.discard = []

        const spades = [1,1,2,3,4,5,6,7,8,9,10,10,10,10,11,11];
        const clubs = [1,1,2,3,4,5,6,7,8,9,10,10,10,10,11,11];
        const hearts = [1,1,2,3,4,5,6,7,8,9,10,10,10,10,11,11];
        const diamonds = [1,1,2,3,4,5,6,7,8,9,10,10,10,10,11,11];
        const deckValues = spades.concat(clubs).concat(hearts).concat(diamonds);

        for(let i = 0; i < deckValues.length; i++) {
            this.deck.push(new Card(deckValues[i]))
        }

        this.shuffle()
    }

    getCard() {
        return this.deck.pop()
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

class Card {
    constructor(value) {
        this.value = value
    }
}

const game = new Game()
game.playRound()