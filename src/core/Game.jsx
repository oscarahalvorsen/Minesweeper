import {Tile} from "./Tile.jsx"

export class Game {
    constructor(width, height, bombNr) {
        this.height=height
        this.width=width
        this.bombNr=bombNr
        this.areProportionsValid(height, width)
        this.isBombNrValid(height, width, bombNr)
        this.board = Array(height).fill().map(() => Array(width).fill().map(() => (new Tile())))
        this.placeBombs()
        this.placeNumbers()
    }

    getHeight = () => this.height

    getWidth = () => this.width

    getBoard = () => this.board

    getTile = (x, y) => {
        if (!this.isTileValid(x, y)) {
            throw new RangeError("Coordinates must be at least 0 and less than max. Your coordinates were " + x + ":" + y + "while max is " + this.getWidth() + ":" + this.getHeight())
        }
        return this.board[y][x]
    }
    
    placeBombs = () => {
        let i=0
        while (i<this.bombNr) {
            let randomX=Math.floor(Math.random()*(this.width-1))
            let randomY=Math.floor(Math.random()*(this.height-1))
            let tile = this.getTile(randomX, randomY)
            if (!tile.isBomb()) {
                tile.setBomb()
                i++
            }
        }
    }

    placeNumbers = () => {
        for (let y=0; y<this.height; y++) {
            for (let x=0; x<this.width; x++) {
                if (!this.getTile(x, y).isBomb()) {
                    let tileNumber=0
                    for (let j=-1; j<2; j++) {
                        for (let i=-1; i<2; i++) {
                            if (this.isTileValid(x+i, y+j)) {
                                if (this.getTile(x+i, y+j).isBomb()) {
                                    tileNumber++
                                }
                            }
                        }
                    }
                    this.getTile(x, y).setNumber(tileNumber)
                }
            }
        }
    }

    toggleFlag = (x, y) => {
        let tile = this.getTile(x,y)
        if (tile.isCovered()) {
            tile.toggleFlag()
        }
    }
    
    uncover = (x, y) => {
        console.log("uncover" + x + ":" + y)
        let tile = this.getTile(x, y)
        if (tile.isCovered() && !tile.isFlag()) {
            tile.uncover()
            if (tile.isBomb()) {
                return
            }
            if (tile.isAir()) {
                for (let j=-1; j<2; j++) {
                    for (let i=1; i<2; i++) {
                        if (this.isTileValid(x+i, y+j)) {
                            if (!this.getTile(x+i, y+j).isBomb()) {
                                this.uncover(x+i, y+j)
                            }
                        }
                    }
                }
            }
        }
    }

    uncoverNearbyTiles = (x, y) => {
        let nearbyFlagCount=0
        let tile = this.getTile(x, y)
        if (!tile.isCovered()) {
            for (let j=-1; j<2; j++) {
                for (let i=1; i<2; i++) {
                    if (this.isTileValid(x+i, y+j)) {
                        if (tile.isFlag()) {
                            nearbyFlagCount++
                        }
                    }
                }
            }
            for (let j=-1; j<2; j++) {
                for (let i=1; i<2; i++) {
                    if (i!==0 || j!==0) {
                        if (this.isTileValid(x+i, y+j)) {
                            if (!tile.isFlag()) {
                                if (nearbyFlagCount===tile.getType()) {
                                    this.uncover(x+i, y+j)
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    areProportionsValid = (width, height) => {
        if (!Number.isInteger(width) || !Number.isInteger(height)) {
            throw new TypeError("Tile number must be integer.")
        }
        if (width<1 || height<1) {
            throw new RangeError("Width and height must be possitive integers.")
        }
    }
     
    isTileValid = (x, y) => {
        if (!Number.isInteger(x) || !Number.isInteger(y) ) {
            throw new TypeError("Coordinates must be integers.")
        }
        return x>=0 && x<this.width && y>=0 && y<this.height
    }

    isBombNrValid = (bombNr, height, width) => {
        if (bombNr<0 || bombNr>height*width) {
            throw new RangeError("BombNr must be positive integer lower than width*height")
        }
    }

    toString = () => {
        let string = ""
        for (let y=0; y<this.height; y++) {
            for (let x=0; x<this.width; x++) {
                string+=this.getTile(x,y).toString()
            }
            string+="\n"
        }
        return string
    }
}