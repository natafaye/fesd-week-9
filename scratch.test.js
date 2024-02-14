const expect = chai.expect

describe("Oven", function() {

  it("preheats correctly", function() {
    const oven = new Oven() // Arrange
    oven.preheat(300) // Act
    expect(oven.temp).to.equal(300) // Assert
  })

  it("cooks correctly", function() {
    // Arrange
    const oven = new Oven() 
    oven.preheat(400)
    // Act
    const food = oven.cook("chicken")
    // Assert
    expect(food).to.equal("chicken cooked at 400")
    expect(oven.temp).to.equal(null)
  })

})