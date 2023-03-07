import { useState } from "react";
import { NQueen } from "../../../domain/entities/NQueenModel";
import GetAlgorithmService from "../../../domain/services/getAlgorithmService";
import Search from "../../shared/Input/Search";
import QueenBoard from "./QueenBoard";
import './QueenDetails.css';

type Props = {
    service: GetAlgorithmService;
}

const QueenDetails: React.FC<Props> = ({ service }) => {
    const [array, setArray] = useState<NQueen>();
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSearch = async (searchTerm?: number) => {
        if (searchTerm) {
            try {
                setArray(await service.nQueen(searchTerm));
                setErrorMessage('');
            } catch (error) {
                if (error instanceof Error) {
                    setErrorMessage(error.message)
                }
            }
        }
    };


    return (
        <div className="queen-details-container">
            <div className="queen-details-title">
                Resolução do problema das N-Rainhas
            </div>
            <div>O problema das n rainhas é um problema combinatório exponencial, consiste em colocar n rainhas em um tabuleiro de xadrez de forma que não haja colisões,
                segundo Laguna (1994). Uma colisão ocorre quando duas ou mais rainhas estão posicionadas na mesma linha, coluna ou diagonal.
                <span role="img" aria-label="sheep"> 👑</span>
            </div>
            <div className="queen-details-title-search">
                Digite o número de rainhas:
            </div>
            <div className="queen-details-search">
                <Search onSubmit={handleSearch} />
            </div>
            {array && <QueenBoard solution={array.array} />}
        </div>
    );
}

export default QueenDetails;