import { useEffect, useState } from "react";
import fetchPokemonList from "../Services/fetchPokemonList";
import IPokemon from "../Interfaces/IPokemon";
import Pokemon from "./Pokemon";
import Search from "./Search";
import PokemonDetail from "./PokemonDetail";
import "../Assets/Styles/pokemon-list.scss";

export default function PokemonList() {
    const [pokemonList, setPokemonList] = useState<Array<IPokemon>>([]);
    const [backupPokemonList, setBackupPokemonList] = useState<Array<IPokemon>>(
        []
    );
    const [showingPokemonDetail, setShowingPokemonDetail] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState(null);
    useEffect(() => {
        getPokemon();
    }, []);

    function getPokemon() {
        fetchPokemonList().then((res) => {
            setPokemonList(res);
            setBackupPokemonList(res);
        });
    }

    function searchPokemon(searchTerm: string) {
        if (searchTerm) {
            setPokemonList(
                backupPokemonList.filter((pokemon) => {
                    return pokemon.name.includes(searchTerm);
                })
            );
        } else {
            setPokemonList(backupPokemonList);
        }
    }

    function showPokemonDetail(id: number) {
        setShowingPokemonDetail(true);
        setCurrentPokemon(id);
    }

    function hidePokemonDetail() {
        setShowingPokemonDetail(false);
        setCurrentPokemon(null);
    }

    return (
        <div id="pokemon-list-wrapper">
            <Search searchPokemon={searchPokemon} />
            <div
                id="pokemon-list"
                className={showingPokemonDetail ? "shrink" : ""}
            >
                <div id="sorter">
                    <div className="stat"></div>
                    <div className="stat">#</div>
                    <div className="stat">Name</div>
                    <div className="stat">Type</div>
                    <div className="stat">HP</div>
                    <div className="stat">Attack</div>
                    <div className="stat">Defense</div>
                    <div className="stat">Sp. Atk</div>
                    <div className="stat">Sp. Def</div>
                    <div className="stat">Speed</div>
                </div>
                {pokemonList.map((pokemon) => (
                    <Pokemon
                        showPokemonDetail={showPokemonDetail}
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        type={pokemon.type}
                        hp={pokemon.hp}
                        attack={pokemon.attack}
                        defense={pokemon.defense}
                        sattack={pokemon.sattack}
                        sdef={pokemon.sdef}
                        speed={pokemon.speed}
                    />
                ))}
            </div>
            <PokemonDetail
                hidePokemonDetail={hidePokemonDetail}
                currentPokemon={currentPokemon}
                showingPokemonDetail={showingPokemonDetail}
            />
        </div>
    );
}
