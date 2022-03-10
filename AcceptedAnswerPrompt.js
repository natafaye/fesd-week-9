
class AcceptedAnswerPrompt {
    constructor(acceptedAnswers) {
        this.acceptedAnswers = acceptedAnswers;
    }

    // Returns true or false depending on if it's in the list or not
    isAcceptedAnswer(potentialAnswer) {
        return this.acceptedAnswers.includes(potentialAnswer); 
    }

    // prompt until they give an accepted answer, then return that answer
    prompt(question) {
        let answer = prompt(question);
        while( !this.isAcceptedAnswer(answer) ) {
            answer = prompt(question + "\nIt needs to be one of these options: " + this.acceptedAnswers.join(", "))
        }
        return answer;
    }
}

class BooleanPrompt extends AcceptedAnswerPrompt {
    constructor() {
        super(["yes", "no"])
    }

    prompt(question) {
        // call the prompt on AcceptedAnswerPrompt
        const answer = super.prompt(question);
        // return true if they picked "yes" false if they picked "no"
        return answer === "yes";
    }
}

// using Boolean Prompt
// const confirmPrompt = new BooleanPrompt()
// const shouldDelete = confirmPrompt.prompt("Should we delete?");

// if(shouldDelete) {
//     alert("Deleting the thing")
// }

// // using Accepted Answer Prompt
// const yesNoPrompt = new AcceptedAnswerPrompt( ["yes", "no"] )

// const answer = yesNoPrompt.prompt("Should we do something?");

// if(answer === "yes") {
//     alert("They said yes!")
// }
// else if(answer === "no") {
//     alert("They said no!")
// }
// else {
//     alert("This shouldn't happen!") // we should never get here
// }

// const shouldDelete = yesNoPrompt.prompt("Are you sure you want to delete?");

// if(shouldDelete === "yes") {
//     // delete the thing
// }


// const votingPrompt = new AcceptedAnswerPrompt( ["cat", "dog", "fish"] )

// const answer = votingPrompt.prompt("What is the best animal?");

// if(answer === "fish") {
//     alert("You're wrong")
// }