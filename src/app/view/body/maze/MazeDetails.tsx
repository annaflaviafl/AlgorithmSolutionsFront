import React from "react";
import GetAlgorithmService from "../../../domain/services/getAlgorithmService";
import MazeBoard from "./MazeBoard";
import './MazeDetails.css';

type Props = {
    service: GetAlgorithmService;
}

const MazeDetails: React.FC<Props> = ({ service }) => {
    return (
        <div className="maze-details-container">
            <div className="maze-details-title">
                Resolução do labirinto
            </div>
            <div>
                Você deve se lembrar do jogo de labirinto da infância, em que um jogador começa em um lugar e termina em outro destino por meio de uma série de etapas.
                Este jogo também é conhecido como o problema do labirinto. Monte seu labirinto e envie para verificar se há solução.
                <span role="img" aria-label="sheep"> 🔮</span>
            </div>
            <MazeBoard service={service} />
        </div>
    );
}

export default MazeDetails;