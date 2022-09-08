const expect = chai.expect;

describe("Menu", function() {
    it("should set up the dishes array when we call the instructor", function() {
        // Arrange and Act
        const menu = new Menu(["a", "b", "c"])

        // Assert
        expect(menu.dishes).to.have.lengthOf(3)
        expect(menu.dishes).to.be.a("array")
        expect(menu.dishes[0]).to.equal("a")
        expect(menu.dishes[1]).to.equal("b")
        expect(menu.dishes[2]).to.equal("c")
    })

    it("should return only the food that has the ingredient", function() {
        // Arrange
        const menu = new Menu(["pickle sandwich", "tuna and pickle", "something that doesn't say that"])

        // Act
        const dishesWithPickles = menu.findOption("pickle")

        // Assert
        expect(dishesWithPickles).to.eql(["pickle sandwich", "tuna and pickle"])
    })

    it("should work with ingredients that have an S on the end", function() {
        // Arrange
        const menu = new Menu(["strawberrys and cream"])

        // Act
        const dishesWithPickles = menu.findOption("strawberry")

        // Assert
        expect(dishesWithPickles).to.eql(["strawberrys and cream"])
    })
})