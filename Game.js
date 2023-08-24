const Board = require("./Board")
const Player = require("./Player")

class Game{
    constructor(player0,player1,board){
        this.player0 = player0
        this.player1 = player1
        this.board = board
        this.turn = 0
        this.isGameOver = false
        
    }
    
    static newGame(player0Name, player1Name) {
        let board = new Board();
        let player0 = new Player("x", player0Name);
        let player1 = new Player("o", player1Name);
        if (player0Name == player1Name && typeof player0.name !== "string" || typeof player1.name !== "string") {
            return ["Invalid parameter", null];
        }
        return [new Game(player0, player1, board)];
    }

    play(cellNumber){
        if(this.isGameOver){
            return "Game Over!"
        }
        if (typeof cellNumber != 'number' || cellNumber < 0 || cellNumber > 8) {
            this.isGameOver = true
            return "The cellNumber is not present in the cell"
        }

        let isCellEmpty = this.board.isEmpty(cellNumber)

        if(!isCellEmpty){
            return "Cell not empty"
        }
        // if(!this.board.isEmpty(cellNumber)){
        //     return "Cell is marked"
        // }
        let currentPlayer
        if(this.turn%2 == 0){
            currentPlayer = this.player0
        }
        else{
            currentPlayer = this.player1
        }
        
        currentPlayer.markCell(this.board.cells[cellNumber]);
        this.turn++
        this.board.printBoard()

        // const { symbol, status } = this.board.analyzeResult();

        // if (status === "win" && symbol === currentPlayer.getSymbol()) {
        //     this.isGameOver = true;
        //     return `${currentPlayer.getName()} won the game`;
        // }
    
        // if (this.board.isBoardFull()) {
        //     this.isGameOver = true;
        //     return "Game has ended";
        // }
    
        // if (this.board.isDraw()) {
        //     this.isGameOver = true;
        //     return "Game has ended with draw";
        // }
        if (this.board.analyzeResult()) {
            this.isGameOver = true
            return `${currentPlayer.name} is the  winner`
        }
        if (this.board.isDraw()) {
            this.isGameOver = true
            return "Its a Draw"
        }
        return "Continue playing";
    }
}
module.exports = Game;