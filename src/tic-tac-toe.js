class TicTacToe {
   constructor() {
        this.matrix =new Array();

        for (var i =0; i<3; i++){
            this.matrix[i] = new Array();
        for (var j =0; j<3; j++){
            this.matrix[i][j] =null ;
            }
        }
        this.currentPlayer = 'x';
    }

    getCurrentPlayerSymbol() {
             return this.currentPlayer; 
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] != null){  // можно и не делать это условие
            this.currentPlayer = this.getCurrentPlayerSymbol();
        } else {
            if(this.currentPlayer == 'x'){
             this.matrix[rowIndex][columnIndex] = 'x';
             this.currentPlayer = 'o';   
            } else if (this.currentPlayer == 'o'){
             this.matrix[rowIndex][columnIndex] = 'o';
             this.currentPlayer = 'x';   
            } 
      } 
    }

    isFinished() {
        return (this.isDraw() || this.getWinner() != null) ? true : false;
        // this.getWinner();
    }

    getWinner() {
    var winner = null;
        for (var i=0; i<3;i++){
         if( this.matrix[i][1] ==this.matrix[i][0] && this.matrix[i][1] ==this.matrix[i][2]){
                    winner = this.matrix[i][1];
        }
     }
    for (var i=0; i<3;i++){
         if( this.matrix[1][i] ==this.matrix[0][i] && this.matrix[1][i] ==this.matrix[2][i]){
                    winner = this.matrix[1][i];
        }
     }
    if( this.matrix[0][0] ==this.matrix[1][1] && this.matrix[0][0] ==this.matrix[2][2]){
                    winner = this.matrix[1][1];
        }
    if( this.matrix[0][2] ==this.matrix[1][1] && this.matrix[1][1] ==this.matrix[2][0]){
                    winner = this.matrix[1][1];
        }

    return winner;
    }

    noMoreTurns() {
         for (var i=0; i<3;i++){
            for (var j=0; j<3;j++){
                if (this.matrix[i][j] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && this.getWinner()==null) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
            return this.matrix[rowIndex][colIndex];      
    }
}

module.exports = TicTacToe;
