export class Tile {
    
    constructor() {
        this.type=0
        this.covered=true
        this.flag=false
        this.tempUncovered=false
    }
    
    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getType() {
        return this.type
    }

    isAir() {
        return this.type==0
    }

    isBomb() {
        return this.type==9
    }

    setNumber(n) {
        this.isNumberValid(n)
        this.type=n
    }

    setBomb() {
        this.type=9
    }

    isCovered() {
        return this.covered
    }

    uncover() {
        this.covered=false
    }

    isFlag () {
        return this.flag
    }

    toggleFlag() {
        this.flag = !this.flag
    }

    isTempUncovered() {
        return this.tempUncovered
    }

    toggleTempUncovered() {
        this.tempUncovered = !this.tempUncovered
    }

    isNumberValid(type) {
        if (!Number.isInteger(type)) {
            throw new TypeError("Tile number must be integer.")
        }
        if (type<0 || type>9) {
            throw new RangeError("Tile number cannot be less that 0 or more than 9.")
        }
    }

    toString() {
        return this.getType() + " "
    }
}