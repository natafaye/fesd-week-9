
class Menu {
    constructor(dishes) {
        this.dishes = dishes
    }

    findOption(ingredient) {
        // returns all the  dishes with that word in the name of the dish
        return this.dishes.filter(dish => dish.includes(ingredient));
    }
}


const menu = new Menu(["chicken ragoni", "fetuchini spaghetti with pickles", "pickle sandwich"])