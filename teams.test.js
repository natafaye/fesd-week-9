const expect = chai.expect

describe("Teams addPlayer", () => {
    it("adds player objects", () => {
        // Arrange
        const team1 = new Team("Lakers")
        const player1 = new Player("Mia", "Forward")

        // Act
        team1.addPlayer(player1)

        // Assert
        expect(team1.players).to.eql([player1])
    })
})