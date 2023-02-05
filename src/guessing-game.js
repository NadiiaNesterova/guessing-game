class GuessingGame {
    constructor() {
    }
  
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
  
    guess() {
        this.mid =  Math.round((this.min + this.max) / 2 );
        return this.mid;
       }
  
    lower() {
      return this.max = this.mid;
    }
  
    greater() {
      return this.min = this.mid;
    }
  }

module.exports = GuessingGame;
