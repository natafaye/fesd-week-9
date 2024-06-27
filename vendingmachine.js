// https://www.codewars.com/kata/586e6d4cb98de09e3800014f/train/javascript

class VendingMachine {
  constructor(items, money) {
    this.items = items; // an array of objects with each item in the vending machine
    this.money = money; // is the amount of money in the vending machine
  }

  vend(selection, customerMoney) {
    // selection = "A01", customerMoney: 0.40
    // Find the item with the code that matches the selection
    let selectedItem = null;
    // Option 1
    //   for(let i = 0; i < this.items.length; i++) {
    //     if(this.items[i].code === selection) {
    //       selectedItem = this.items[i]
    //     }
    //   }

    // Option 2
    //   for(const item of this.items) {
    //     if(item.code === selection) {
    //       selectedItem = item
    //     }
    //   }

    // Option 3
    selectedItem = this.items.find((item) => item.code === selection);

    if (customerMoney < selectedItem.price) {
      return "Not enough money!";
    }

    return "NOT IMPLEMENTED YET";
  }
}
