const expect = chai.expect;

describe("AcceptedAnswerPrompt", function() {
    describe("#constructor", function() {
        it("should save the acceptedAnswers in a property", function() {
            // Arrange & Act
            const testPrompt = new AcceptedAnswerPrompt(["HELLO", "GOODBYE"])

            // Assert
            expect(testPrompt.acceptedAnswer).to.have.lengthOf(2);
            expect(testPrompt.acceptedAnswers).to.be.a("array")
            expect(testPrompt.acceptedAnswers.includes("HELLO")).to.equal(true)
            expect(testPrompt.acceptedAnswers.includes("GOODBYE")).to.equal(true)
        })
    })
    describe("#isAcceptedAnswer", function() {
        it("should return true if the answer is in the list of accepted answers", function() {
            // Arrange
            const testPrompt = new AcceptedAnswerPrompt(["HELLO", "GOODBYE"])
            
            // Act
            let isAccepted = testPrompt.isAcceptedAnswer("HELLO");
            // Assert
            expect(isAccepted).to.equal(true);
            
            // Act
            isAccepted = testPrompt.isAcceptedAnswer("GOODBYE");
            // Assert
            expect(isAccepted).to.equal(true);
        })
        it("should return false if the answer is not in the list of accepted answers", function() {
            // Arrange
            const testPrompt = new AcceptedAnswerPrompt(["HELLO", "GOODBYE"])
            
            // Act
            const isAccepted = testPrompt.isAcceptedAnswer("TOODLOO");

            // Assert
            expect(isAccepted).to.equal(false);
        })
    })
})