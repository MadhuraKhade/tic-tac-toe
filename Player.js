
class Player{
    constructor(symbol,name){
        this.symbol = symbol
        this.name = name 
    }
    markCell(x) {
        x.markCell(this.symbol);
    }
    
    getSymbol(){
        return this.symbol
    }
    getName(){
        return this.name
    }
    
}
module.exports = Player;