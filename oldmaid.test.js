const expect = chai.expect

describe("Player", function() {
    it("allows you to pick a card from its hand", function() {
        // Arrange
        const player = new Player()
        player.hand = [new Card(7, "♣️")]
        // Act
        const card = player.drawFromMe()
        // Assert
        expect(card.value).to.equal(7)
        expect(card.suit).to.equal("♣️")
        expect(player.hand).to.have.lengthOf(0)
    })
})