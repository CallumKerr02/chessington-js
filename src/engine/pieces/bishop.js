import Piece from './piece';
import Square from '../square';
export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const availableMovesOnBoard = [];
        for (let i = 1; i <= 6; i++){
            if (i !== -1 && currentSquare.row + i <= 7 && currentSquare.row + i >= 0 && currentSquare.col - i >= 0 && currentSquare.col -i <= 7){
                availableMovesOnBoard.push(Square.at(currentSquare.row + i, currentSquare.col - i))
            }  
            if (i !== -1 && currentSquare.row - i >= 0 && currentSquare.row - i <= 7 && currentSquare.col + i >= 0 && currentSquare.col + i <= 7){
                availableMovesOnBoard.push(Square.at(currentSquare.row - i, currentSquare.col + i))
            }
            if (i !== -1 && currentSquare.row + i >= 0 && currentSquare.row + i <= 7 && currentSquare.col + i >= 0 && currentSquare.col + i <= 7){
                availableMovesOnBoard.push(Square.at(currentSquare.row + i, currentSquare.col + i))
            }
            if (i !== -1 && currentSquare.row - i >= 0 && currentSquare.row - i <= 7 && currentSquare.col - i >= 0 && currentSquare.col -i <= 7){
                availableMovesOnBoard.push(Square.at(currentSquare.row - i, currentSquare.col - i))
            }
        }
        return availableMovesOnBoard;
    } 
}
 