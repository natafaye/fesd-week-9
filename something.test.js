const expect = chai.expect

describe("filterByFirstLetter", () => {
    it("should filter with one letter", () => {
        // Arrange
        const arrayOfNames1 = ["Natalie", "Nate", "Sam"]
        const arrayOfNames2 = ["Natalie", "Nate", "Sam"]
        const arrayOfNames3 = ["Natalie", "Nate", "Sam"]

        // Act
        const result = filterByFirstLetter(arrayOfNames, "N")
        const result2 = filterByFirstLetter(arrayOfNames, "F")

        // Assert

        // Do it in pieces
        expect(result).to.be.a("array")
        expect(result).to.have.lengthOf(2)
        expect(result[0]).to.equal("Natalie")
        expect(result[1]).to.equal("Nate")

        // Or do it in one test
        expect(result).to.deep.equal(["Natalie", "Nate"])
        
        // shorthand for above
        expect(result).to.eql(["Natalie", "Nate"])

        
        expect(result2).to.eql([])
        expect(result2).to.eql([])
    })
})


fdsjklfds

fdsfdsfsd

fdsfdsfsdfds