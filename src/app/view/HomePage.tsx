import React from "react";
import GetAlgorithmService from "../domain/services/getAlgorithmService";
import MazeDetails from "./body/maze/MazeDetails";
import QueenDetails from "./body/queen/QueenDetails";
import SudokuDetails from "./body/sudoku/SudokuDetails";

type Props = {
    service: GetAlgorithmService;
}

const HomePage: React.FC<Props> = ({ service }) => {

    return (
        <div>
            <QueenDetails service={service} />
            <SudokuDetails service={service} />
            <MazeDetails service={service} />
        </div>
    );
}

export default HomePage;