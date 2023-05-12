const expect = chai.expect

/**
 * Write one test of the constructor for your class from practice 1
 */


// Natalie's Example
describe("Building constructor", function() {
    it("sets the three properties correctly", function() {
        // Arrange & Act
        const testBuilding1 = new Building(2, "restaurant")

        // Assert
        expect(testBuilding1.floors).to.be.a("array")
        expect(testBuilding1.floors).to.have.lengthOf(2)
        expect(testBuilding1.floors).to.deep.equal([undefined, undefined])
        expect(testBuilding1.locked).to.equal(true)
        expect(testBuilding1.type).to.equal("restaurant")
    })
})































