import { useContext, useState } from "react";
import "../Assets/Styles/search.scss";

interface Props {
    searchPokemon: Function;
}

const Search: React.FC<Props> = (Props) => {
    const { searchPokemon } = Props;
    return (
        <div id="search-bar">
            <label>Name:</label>
            <input
                onChange={(e) => searchPokemon(e.target.value)}
                id="search-field"
            />
        </div>
    );
};

export default Search;
