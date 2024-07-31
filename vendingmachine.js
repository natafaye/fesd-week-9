class VendingMachine {
  constructor(items, initialMoney) {
    this.items = items
    this.vendingMoney = initialMoney
  }
  
  vend(itemCode, userMoney) {
    
    // Find the matching item
    let selectedItem = null
    for(let i = 0; i < this.items.length; i++) {
      if( itemCode === this.items[i].code ) {
        selectedItem = this.items[i]
      }
    }
    
    if(selectedItem === null) {
      return "Invalid selection! : Money in vending machine = " + this.vendingMoney.toFixed(2)
    }
    
    const change = userMoney - selectedItem.price
    
    // Vend it
    if(userMoney < selectedItem.price) {
      return "Not enough money!"
    } else if(selectedItem.quantity === 0) {
      return selectedItem.name + ": Out of stock!"
    } else if(change === 0) {
      this.vendingMoney += selectedItem.price
      selectedItem.quantity--
      return "Vending " + selectedItem.name
    } else {
      this.vendingMoney += selectedItem.price
      selectedItem.quantity--
      return "Vending " + selectedItem.name + " with " + change.toFixed(2) + " change."
    }
  }
}