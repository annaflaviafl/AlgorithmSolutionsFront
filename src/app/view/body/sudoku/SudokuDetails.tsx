import { useState } from "react";
import { Sudoku } from "../../../domain/entities";
import GetAlgorithmService from "../../../domain/services/getAlgorithmService";
import SudokuBoard from "./SudokuBoard";
import './SudokuDetails.css';

type Props = {
    service: GetAlgorithmService;
}

const SudokuDetails: React.FC<Props> = ({ service }) => {
    const [array, setArray] = useState<Sudoku>();
    const [solver, setSolver] = useState<Sudoku>();
    const [finish, setFinish] = useState<boolean>(false);

    const handleGenerate = async () => {
        setArray(await service.sudokuGenerator());
    };

    const handleSolve = async () => {
        if (array) {
            setSolver(await service.sudokuSolver(array));
            setFinish(true);
        }
    };

    const handleFinisih = async () => {
        window.location.reload();
    };

    return (
        <div className="sudoku-details-container">
            <div className="sudoku-details-title">
                Resolução do Sudoku
            </div>
            <div>Sudoku, por vezes escrito Su Doku é um jogo baseado na colocação lógica de números. O objetivo do jogo é a colocação de
                números de 1 a 9 em cada uma das células vazias numa grade de 9x9 constituída por 3x3 subgrades chamadas regiões.
                <span role="img" aria-label="sheep"> 🥇</span>
            </div>
            <div className="sudoku-details-container-button">
                {finish ?
                    <button type="button" className="sudoku-details-finish-button" onClick={() => handleFinisih()}>
                        <img src={require("../../../../assets/reload.png")} />
                    </button>
                    :
                    <>
                        <button type="button" className="sudoku-details-generate-button" disabled={!!array?.array.length} onClick={() => handleGenerate()}>Gerar Sudoku</button>
                        {array && <button type="button" className="sudoku-details-solve-button" onClick={() => handleSolve()}>Resolver Sudoku</button>}
                    </>
                }
            </div>
            {array && <SudokuBoard sudoku={array} />}
            {solver && <SudokuBoard sudoku={solver} />}
        </div>
    );
}

export default SudokuDetails;