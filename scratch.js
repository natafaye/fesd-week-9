class Oven {
    constructor() {
      this.temp = null
    }
  
    preheat(temperature) {
      this.temp = temperature
    }
  
    cook(food) {
      const results = food + " cooked at " + this.temp
      this.temp = null
      return results 
    }
  }
  