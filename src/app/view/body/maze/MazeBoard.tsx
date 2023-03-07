import React, { useState } from "react";
import { Maze } from "../../../domain/entities";
import GetAlgorithmService from "../../../domain/services/getAlgorithmService";
import ReloadButton from "../../shared/Button/ReloadButton";
import './MazeBoard.css';

type Props = {
    service: GetAlgorithmService;
}

const MazeBoard: React.FC<Props> = ({ service }) => {
    const [matrix, setMatrix] = useState<number[][]>(
        Array(4).fill(Array(4).fill(0))
    );
    const [solver, setSolver] = useState<Maze>();
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSquareClick = (rowIndex: number, colIndex: number) => {
        const newMatrix = matrix.map((row, i) =>
            i === rowIndex
                ? row.map((col: number, j: number) => (j === colIndex ? (col ? 0 : 1) : col))
                : row
        );
        setMatrix(newMatrix);
    };

    const handleSolve = async () => {
        try {
            setSolver(await service.mazeSolver(matrix));
            setErrorMessage('');
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message)
            }
        }
    };

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <>
            {errorMessage ?
                <div>
                    <div className="maze-boards-reload-button-container">
                        <ReloadButton onClick={() => handleReload()} />
                    </div>
                    <div className="maze-boards-error-text">
                        {errorMessage}
                    </div>
                </div> :
                <>
                    <div className="maze-boards-container">
                        <div className="maze-container">
                            {matrix.map((row, rowIndex) => (
                                <div key={rowIndex} className="maze-boards-row">
                                    {row.map((col: number, colIndex: number) => (
                                        <div
                                            key={colIndex}
                                            className={`maze-boards-square ${col ? "selected" : ""}`}
                                            onClick={() => handleSquareClick(rowIndex, colIndex)}
                                        >
                                            {col}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="maze-container">
                            {solver && solver.array.map((row, rowIndex) => (
                                <div key={rowIndex} className="maze-boards-row">
                                    {row.map((col: number, colIndex: number) => (
                                        <div
                                            key={colIndex}
                                            className={`maze-boards-square ${col ? "selected" : ""}`}
                                            onClick={() => handleSquareClick(rowIndex, colIndex)}
                                        >
                                            {col}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="maze-boards-container-button">
                        {solver ? <ReloadButton onClick={() => handleReload()} /> : <button type="button" className="maze-boards-send-button" onClick={() => handleSolve()}>Enviar labirinto</button>}
                    </div>
                </>
            }
        </>
    );
}

export default MazeBoard;