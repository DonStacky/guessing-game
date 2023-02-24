class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.range = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.range = Math.round((this.max + this.min)/2);
        return this.range;
    }

    lower() {
        this.max = this.range;
        console.log(`max = ${this.max}`);
        this.guess();
    }

    greater() {
        this.min = this.range;
        console.log(`min = ${this.min}`);
        this.guess();
    }
}

module.exports = GuessingGame;
