const expect = chai.expect

// TEST
// numbers smaller than 21
// 21
// numbers bigger than 21
// things that aren't numbers
// negative numbers
// zero

const goodInputs = [102, 21, 34, 44]
const badInputs = [2, 20, "fdsfds", "$#@$#@"]

const something = goodInputs.map(function(number) {
    return number + 3
})

describe("canDrink", function() {
    it("works with big numbers", function() {
        expect(canDrink(34)).to.equal("You can drink")
        expect(canDrink(500)).to.equal("You can drink")
        expect(canDrink(22)).to.equal("You can drink")
    })
    it("works with small numbers", function() {
        expect(1 + 1).to.equal(2)
    })
})


// for(const goodInput of goodInputs) {
//     it("Works with good inputs: " + goodInput, function() {
//         expect(canDrink(22)).to.equal("You can drink")
//         expect(canDrink(34)).to.equal("You can drink")
//         expect(canDrink(26)).to.equal("You can drink")
//         expect(canDrink(goodInput)).to.equal("You can drink")
//     })
// }


describe("Deck", function() {
    it("shuffles correctly", function() {
        // Arrange (assuming the constructor shuffles the deck)
        const deck = new Deck()
        const beforeShuffle = deck.cards.slice() // make a copy of the whole array
        // Act
        deck.shuffle()
        // Assert
        let somethingMoved = false
        for(let i = 0; i < deck.cards.length; i++) {
            if(deck.cards[i] !== beforeShuffle[i]) {
                somethingMoved = true
            }
        }
        expect(somethingMoved).to.equal(true) // forces an error if somethingMoved isn't true
    })
    it("works with small numbers", function() {
        expect(1 + 1).to.equal(2)
    })
})



class Card {

}

class Deck {
    constructor() {
        this.cards = []
        fdsjfklds
        new Card()
    }

    shuffle() {

    }

    getHand() {

    }
}


function startGame() {
    // set up the deck, shuffle it, deal itout
    const deck = new Deck()
    deck.shuffle()
    const player1Cards = deck.getHand()
    fdsjfklds
    fdsjfkldsfds
    // loop 26 times and do each turn

    // console.log who won the whole game

    fdsfd
}

startGame()