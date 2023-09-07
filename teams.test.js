const expect = chai.expect

describe("Team", function() {
    it("constructs correctly", function() {
        // Act
        const newTeam = new Team("Ashley")
        // Assert
        expect(newTeam.name).to.equal("Ashley")
        expect(newTeam.players).to.deep.equal([])
    })

    it("adds a valid Player object", function() {
        // Arrange
        const team = new Team("whatever")
        const player = new Player("Mia", "forward")
        // Act = calling addPlayer and passing in a Player object
        team.addPlayer(player)
        // Assert = checking that the Player object ended up in the players array
        expect(team.players).to.deep.equal([player])

        // Other ways to test this
        expect(team.players).to.have.lengthOf(1)
        expect(team.players.includes(player)).to.equal(true)
    })

    it("does not add something that's NOT a Player object", function() {
        // Arrange
        const team = new Team("something")
        const notAPlayer = "I'm not a player"
        // Act
        const result = team.addPlayer(notAPlayer)
        // Assert
        expect(result).to.equal(false)
        expect(team.players).to.deep.equal([])
    })

    it("describes itself with a nice string", function() {
        // Arrange
        const team = new Team("NAME")

        // Assert = describe gives us the string we're expecting
        expect(team.describe()).to.equal("NAME has 0 players.")

        // Act
        team.addPlayer(new Player("Mia", "forward"))
        // Assert = describe gives us the string we're expecting
        expect(team.describe()).to.equal("NAME has 1 players.")

        // Act
        team.addPlayer(new Player("Mia", "forward"))
        // Assert = describe gives us the string we're expecting
        expect(team.describe()).to.equal("NAME has 2 players.")
    })
})