class Poker {
    // Usually you want your top-level class/object to have references to all the chunks
    constructor() {
        this.deck = new CardDeck()
        this.hand1 = new Hand() // computer
        this.hand2 = new Hand() // player
        this.bet1 = 0
        this.bet2 = 0
    }

    // I'm going to set this up where the Poker class is like the manager
    // that connects everybody together

    play() {
        // Give each player/hand 5 cards
        for(let i = 0; i < 5; i++) {
            // Two ways to do the same thing
            const cardFromDeck = this.deck.deal()
            this.hand1.take(cardFromDeck)
            
            this.hand2.take(this.deck.deal())
        }
        console.log(this.hand1)
        console.log(this.hand2)

        // Get the players bets
        this.bet1 = 10 // Dealer bets 10
        //this.bet2 = prompt("What's your bet?")

        // discard and draw up to 3
        const toReplaceIndex = prompt("Which to replace (by index)? \n\n" + this.hand2.toString())
        // take the card at toReplaceIndex out of the second hand
        this.hand2.remove(toReplaceIndex)
        this.hand2.take(this.deck.deal())

        alert("Now your hand looks like this: \n\n" + this.hand2.toString())

        // Get second bets
        // Check the hands, higher ranking wins
        // Ask if play again?
        // If play again, reset the deck and the hands
    }

    // maybe helper methods to split play up later
}

class CardDeck {
    constructor() {
        this.cards = []
        this.reset()
    }

    // Return a card that has been removed from the deck
    deal() {
        return this.cards.pop()
    }

    reset() {
        this.cards = []

        const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

        for (let i = 0; i < values.length; i++) {
            this.cards.push(new Card(values[i], "♠️"))
        }
        for (let i = 0; i < values.length; i++) {
            this.cards.push(new Card(values[i], "❣️"))
        }
        for (let i = 0; i < values.length; i++) {
            this.cards.push(new Card(values[i], "♣️"))
        }
        for (let i = 0; i < values.length; i++) {
            this.cards.push(new Card(values[i], "♦️"))
        }

        this.shuffle()
    }

    shuffle() {
        let currentIndex = this.cards.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }
    }
}

class Hand {
    constructor() {
        this.cards = []
    }

    take(card) {
        this.cards.push(card)
    }

    remove(index) {
        return this.cards.splice(index, 1)[0]
    }

    clear() {
        this.cards = []
    }

    getRanking() {
        return 5 // TODO: make this actually figure this out
    }

    toString() {
        return this.cards.map(card => `${card.value}${card.suit}`)
    }
}

class Card {
    constructor(value, suit) {
        this.value = value
        this.suit = suit
    }
}

const pokerGame = new Poker()
pokerGame.play()