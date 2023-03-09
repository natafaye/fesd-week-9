const expect = chai.expect // helpful hack

describe("addPlayer method on Player class", function() {
    it("adds a player correctly", function() {
        // Arrange
        const team = new Team("Lakers")
        const player = new Player("Mia", "defense")

        // Act
        const worked = team.addPlayer(player)

        // Assert
        expect(worked).to.equal(true)
        expect(team.players).to.have.lengthOf(1)
        expect(team.players[0].name).to.equal("Mia")
    })

    
    it("does not add non player objects", function() {
        // Arrange
        const team = new Team("Lakers")
        const notPlayer = new Team("I am not a player")

        // Act
        const worked = team.addPlayer(notPlayer)

        // Assert
        expect(worked).to.equal(false)
        
    })
})