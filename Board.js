const Cell = require("./Cell")

class Board{
    constructor(){
        this.cells=[new Cell(),new Cell(), new Cell(),
            new Cell(),new Cell(), new Cell(),
            new Cell(),new Cell(), new Cell()]
    }
    isEmpty(cellNumber){
        return this.cells[cellNumber].isEmpty()
    }

    analyzeResult(){
        if(this.cells[0].getMark()==this.cells[1].getMark() && this.cells[0].getMark() == this.cells[2].getMark() && !this.cells[0].isEmpty()){
            return true
        }
        if(this.cells[3].getMark()==this.cells[4].getMark() && this.cells[3].getMark() == this.cells[5].getMark() && !this.cells[3].isEmpty()){
            return true
        }
        if(this.cells[6].getMark()==this.cells[7].getMark() && this.cells[6].getMark() == this.cells[8].getMark() && !this.cells[6].isEmpty()){
            return true
        }
        if(this.cells[0].getMark()==this.cells[3].getMark() && this.cells[0].getMark() == this.cells[6].getMark() && !this.cells[0].isEmpty()){
            return true
        }
        if(this.cells[1].getMark()==this.cells[4].getMark() && this.cells[1].getMark() == this.cells[7].getMark() && !this.cells[1].isEmpty()){
            return true
        }
        if(this.cells[2].getMark()==this.cells[5].getMark() && this.cells[2].getMark() == this.cells[8].getMark() && !this.cells[2].isEmpty()){
            return true
        }
        if(this.cells[0].getMark()==this.cells[4].getMark() && this.cells[0].getMark() == this.cells[8].getMark() && !this.cells[0].isEmpty()){
            return true
        }
        if(this.cells[2].getMark()==this.cells[4].getMark() && this.cells[2].getMark() == this.cells[6].getMark() && !this.cells[2].isEmpty()){
            return true
        }
        return false
    }
   
    isBoardFull(){
        if(!this.cells[0].isEmpty() && !this.cells[1].isEmpty() && !this.cells[2].isEmpty && !this.cells[3].isEmpty && !this.cells[4].isEmpty() && !this.cells[5].isEmpty && !this.cells[6].isEmpty && !this.cells[7].isEmpty && !this.cells[8].isEmpty ){
            return true
        }
        return false
    }
    
    isDraw(){
        for (let index = 0; index < this.cells.length; index++) {
            if (this.cells[index].isEmpty()) {
                return false
            }
        }
        return true
    }
    printBoard(){
        console.log(this.cells);
    }
    
}
module.exports = Board;