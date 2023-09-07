// https://www.codewars.com/kata/586e6d4cb98de09e3800014f/train/javascript

class VendingMachine {
    constructor(items, money) {
      this.items = items
      this.money = money
    };
  
    vend(selection, itemMoney){ // selection = "A01", itemMoney = 0.60
      
      // Getting the item that matches the selection
      let item = null
      for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].code === selection) {
          item = this.items[i]
        }
      }
      
      if(item === null) {
        return "Invalid selection! : Money in vending machine = " + this.money.toFixed(2)
      }
      
      if(itemMoney < item.price) {
        return "Not enough money!"
      }
      if(item.quantity === 0) {
        return item.name + ": Out of stock!"
      }
      
      const change = itemMoney - item.price
      this.money += item.price
      item.quantity--
      
      if(change === 0) {
        return "Vending " + item.name
      }
      
      return "Vending " + item.name + " with " + change.toFixed(2) + " change."
    };
  }