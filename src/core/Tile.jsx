export class Tile {
    constructor() {
        this.type=0
        this.covered=true
        this.flag=false
        this.tempUncovered=false
    }

    getType = () => this.type

    setNumber = n => {
        this.isNumberValid(n)
        this.type=n
    }

    isAir = () => this.type===0

    isBomb = () => this.type===9

    setBomb = () => {this.type=9}

    isCovered = () => this.covered

    uncover = () => {this.covered=false}

    isFlag = () => this.flag

    toggleFlag = () => {this.flag= !this.flag}

    isTempUncovered = () => this.tempUncovered

    toggleTempUncovered = () => {this.tempUncovered = !this.tempUncovered}

    isNumberValid = type => {
        if (!Number.isInteger(type)) {
            throw new TypeError("Tile number must be integer.")
        }
        if (type<0 || type>8) {
            throw new RangeError("Tile number cannot be less that 0 or more than 9.")
        }
    }

    toString = () => this.getType() + " "
}