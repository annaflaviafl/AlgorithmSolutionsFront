import React, { useState } from 'react';
import './Search.css';

interface Props {
    onSubmit: (searchTerm: number) => void;
}

const Search: React.FC<Props> = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(parseInt(searchTerm));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Nº"
                    className="search-input"
                />
            </form>
        </div>
    );
};

export default Search;