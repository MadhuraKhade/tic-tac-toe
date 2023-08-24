
class Cell {
    constructor() {
        this.mark = "z";
    }
    isEmpty() {
        return this.mark == "z";
    }

    markCell(symbol) {
        return this.mark=symbol
    }
    getMark(){
        return this.mark
    }
}
module.exports = Cell;