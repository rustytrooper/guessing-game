class GuessingGame {
    constructor(number) {
        this.number = number;
      }
      setRange(min, max) {
        this.min = min;
        this.max = max;
      }
      guess() {
        this.half = Math.round((this.min + this.max) / 2);
        if (this.half === this.number) {
          return this.half;
        } else if (this.number < this.half) {
          this.lower();
        } else if (this.number > this.half) {
          this.greater();
        }
        return this.half;
      }
      lower() {
        this.max = this.half - 1;
        this.guess();
        return this.number;
      }
      greater() {
        this.min = this.half + 1;
        this.guess();
        return this.number;
      }

   
}

module.exports = GuessingGame;
