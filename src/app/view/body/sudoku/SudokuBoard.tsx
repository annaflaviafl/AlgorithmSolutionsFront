import { Sudoku } from "../../../domain/entities";
import './SudokuBoard.css';

type Props = {
    sudoku: Sudoku;
}

const SudokuBoard: React.FC<Props> = ({ sudoku }) => {
    return (
        <div className="sudoku-board">
            {sudoku.array.map((row, rowIndex) => (
                <div key={rowIndex} className="sudoku-row">
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className={`sudoku-cell${cellIndex === 2 || cellIndex === 5 ? ' sudoku-cell--border-right' : ''}${rowIndex === 2 || rowIndex === 5 ? ' sudoku-cell--border-bottom' : ''}`}>
                            {cell === 0 ? '' : cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default SudokuBoard;