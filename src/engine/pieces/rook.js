import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }
    
    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const someSortOfArray = [];
        for (let i = -7; i <= 7; i++){
            if (i !== 0 && currentSquare.row + i <= 7 && currentSquare.row + i >= 0){
                someSortOfArray.push(Square.at(currentSquare.row + i, currentSquare.col ))
            }  
            if (i !== 0 && currentSquare.col + i >= 0 && currentSquare.col + i <= 7){
                someSortOfArray.push(Square.at(currentSquare.row, currentSquare.col + i))
            }
        }
        return someSortOfArray;
    }
}
