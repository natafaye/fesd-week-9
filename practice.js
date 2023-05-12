
/**
 * Make a class with a constructor that sets up at least three properties
 * Make it for some real object in the world like: sandwich, couch, door, book, car
 * Console.log out 2 objects made using the constructor
 */


// Natalie's Example
class Building {
    /**
     * Make a building object
     * @param {number} numFloors 
     * @param {string} type 
     */
    constructor(numFloors, type) {
        this.floors = Array(numFloors)
        this.type = type
        this.locked = true
    }
}
console.log(new Building(4, "apartment"))
console.log(new Building(15, "office"))



class Sandwich {
    // parameters = what you need to know to make the sandwich
    constructor(likesPickles) {
        // properties = the data about the sandwich
        this.ingredients = ["bread", "meat"]
        if(likesPickles)
            this.ingredients.push("pickles")
            
        this.isCut = true
    }
}
console.log(new Sandwich(true))
console.log(new Sandwich(false))


class Room {
    
    constructor(numOfRow,color){
        this.numOfRow = numOfRow;
        this.color = color;
        this.clean = false
    }
}
console.log(new Room(4,"black"));


// Martin's Example
class House {
    constructor(numberOfRooms, size) {
        // this.rooms = Array(numberOfRooms);
        this.size = size 

        const colors = ["white", "red", "green"]
        this.rooms = []
        for(let i = 0; i < 3; i++) {
            const newRoom = new Room(5, colors[i])
            this.rooms.push(newRoom)
        }
    }

    clean() {
        for(let i = 0; i < this.rooms.length; i++) {
            this.rooms[i].clean = true
        }
    }
}
console.log(new House(3, 'Appartment'))
console.log(new House(10, 'Mansion')) /// IDK if it works LOL

class kitchen {
    constructor(cabinet, sink, countercolor){
        this.sink= sink
        this.cabinet = cabinet
        this.counters= countercolor
    }
}

console.log(new kitchen("wood", "Aluminium", "white"))
console.log(new kitchen('Aluminium', "Aluminium", "blue"))



class Silverware {
    constructor(numberOfsilverware, type) {
        this.spoon = "spoon"
        this.fork = "fork"
        this.knife = "knife"
    }
}  
  console.log(new Silverware,)  







//Rachel
class Dinner {
    constructor(numIngredients, difficulty){
        this.ingredients = Array(numIngredients)
        this.difficulty = difficulty
        this.approval = false
    }
    
    approval(){
        if(familyApproval >=3){
            this.approval = true;
        } else{
            this.approval = false;
        }
    }
}
let familyApproval = 2;
let pasta = new Dinner(3, "easy");
console.log(pasta);
console.log(new Dinner(15, "difficult"));






//Kurt's Class
class Animal {
    constructor(species, habitat, prey, predators){
        this.species = species; //type of animal
        this.habitat = habitat; //where it lives
        this.prey = prey; //what it eats
        this.predators = predators; //what eats it
    }
    showLocation(){ //show home
        alert(`${this.species} lives in ${this.habitat}`);
    }
    interaction(Animal){ //interact with another animal
        let response = ""; 
        for (prey in Animal.prey){
            if (prey == this.species){
                response += ``;
            }
        }
        
    }
};
const pedro = new Animal("cat", "house", ["mouse", "rat"], ["dog", "car"]);





// Logan's Example

class Workout{
    constructor(exercise, sets, reps){
        this.exercise = exercise;
        this.sets = sets;
        this.reps = reps;
    }
    
}

console.log(new Workout("pushups", 4, 10));
console.log(new Workout("squats", 3, 15));



class Person {
    constructor(name) {
        this.home = new House(3, 4)
        this.name = name
    }

    doChores() {
        this.home.clean()
    }
}


const house = new House(4, 2)
console.log(house.rooms.map(room => room.color + " " + room.clean).join(", "))
house.clean()
console.log(house)


const natalie = new Person("Natalie")

//natalie.home.clean()
natalie.doChores()