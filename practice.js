
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



