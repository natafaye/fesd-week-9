const expect = chai.expect

describe("Menu constructor", function() {
    it("creates the teams array correctly", function() {
        // Arrange & Act
        const menu = new Menu()
        // Assert
        expect(menu.teams).to.be.a("array")
        expect(menu.teams).to.have.lengthOf(0)
    })
})