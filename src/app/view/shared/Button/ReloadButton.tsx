import React from 'react';
import './ReloadButton.css'
interface Props {
    onClick: () => void;
}

const ReloadButton: React.FC<Props> = ({ onClick }) => {
    const handleOnClick = () => {
        onClick();
    };

    return (
        <div>
            <button type="button" onClick={() => handleOnClick()} className="reload-button">
                <img src={require("../../../../assets/reload.png")} />
            </button>
        </div>
    );
};

export default ReloadButton;