import React from 'react';
import './QueenBoard.css';

interface Props {
    solution: number[]; // Array de tamanho 4 contendo a posição de cada rainha (linha da coluna)
}

const QueenBoard: React.FC<Props> = ({ solution }) => {
    const renderSquare = (row: number, col: number) => {
        const isQueen = solution[col] === row;

        return (
            <div key={`${row}-${col}`} className={(row + col) % 2 === 0 ? 'square-black-style' : 'square-white-style'}>
                {isQueen && <span role="img" aria-label="sheep" className='queen-style'> 👑</span>}
            </div>
        );
    };

    const renderRow = (row: number) => {
        const squares = [];
        for (let col = 0; col < solution.length; col++) {
            squares.push(renderSquare(row, col));
        }
        return <div key={row}>{squares}</div>;
    };

    const rows = [];
    for (let row = 0; row < solution.length; row++) {
        rows.push(renderRow(row));
    }
    console.log(rows)
    return (
        <div className='board-style'>
            {rows}
        </div>
    );
};

export default QueenBoard;