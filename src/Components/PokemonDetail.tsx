import { useEffect, useState } from "react";
import fetchPokemonDetails from "../Services/fetchPokemonDetails";
import IPokemonDetails from "../Interfaces/IPokemonDetails";
import "../Assets/Styles/pokemon-detail.scss";

interface Props {
    hidePokemonDetail: Function;
    currentPokemon: number;
    showingPokemonDetail: boolean;
}

export default function PokemonDetail(Props: Props) {
    const { hidePokemonDetail, currentPokemon, showingPokemonDetail } = Props;
    const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails>({
        id: "",
        name: "",
        image: "",
        type: [],
        height: "",
        weight: "",
        ability: [],
        hp: 0,
        hpBar: 0,
        attack: 0,
        attackBar: 0,
        defense: 0,
        defenseBar: 0,
        sattack: 0,
        sattackBar: 0,
        sdef: 0,
        sdefBar: 0,
        speed: 0,
        speedBar: 0,
    });

    useEffect(() => {
        if (currentPokemon) {
            fetchPokemonDetails(currentPokemon).then((res) => {
                setPokemonDetails(res);
            });
        }
    }, [currentPokemon]);

    return (
        <div
            data-testid="pokemonDetailView"
            id="pokemon-detail"
            className={showingPokemonDetail ? "show" : ""}
        >
            <div
                data-testid="closeButton"
                onClick={() => hidePokemonDetail()}
                id="close-button"
            ></div>
            <div id="pokemon-name">{pokemonDetails.name}</div>
            <img id="pokemon-pic" src={pokemonDetails.image} />
            <div className="stats-title">Pokédex data</div>
            <div className="stat-row">
                <div className="stat-label">National № </div>
                <div className="stat">{pokemonDetails.id}</div>
            </div>
            <div className="stat-row">
                <div className="stat-label">Type</div>
                <div className="stat">
                    {pokemonDetails.type.map((type: string, index: number) => (
                        <span key={index} className={`${type} type`}>
                            {type.toUpperCase()}
                        </span>
                    ))}
                </div>
            </div>
            <div className="stat-row">
                <div className="stat-label">Height </div>
                <div className="stat">{pokemonDetails.height}</div>
            </div>
            <div className="stat-row">
                <div className="stat-label">Weight </div>
                <div className="stat">{pokemonDetails.weight}</div>
            </div>
            <div className="stat-row">
                <div className="stat-label">Abilities </div>
                <div className="stat">
                    {pokemonDetails.ability.map(
                        (ability: string, index: number) => (
                            <div key={index}>
                                {`${index + 1}. ${ability.toUpperCase()}`}
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="stats-title">
                <div className="stat-label">Base stats</div>
            </div>
            <div className="stat-row">
                <div className="stat-label">HP </div>
                <div className="stat">{pokemonDetails.hp}</div>
                <div className="stat-bar">
                    <div
                        className="stat-bar-value"
                        style={{ width: `${pokemonDetails.hpBar}%` }}
                    ></div>
                </div>
            </div>
            <div className="stat-row">
                <div className="stat-label">Attack </div>
                <div className="stat">{pokemonDetails.attack}</div>
                <div className="stat-bar">
                    <div
                        className="stat-bar-value"
                        style={{ width: `${pokemonDetails.attackBar}%` }}
                    ></div>
                </div>
            </div>
            <div className="stat-row">
                <div className="stat-label">Defense</div>{" "}
                <div className="stat">{pokemonDetails.defense}</div>
                <div className="stat-bar">
                    <div
                        className="stat-bar-value"
                        style={{ width: `${pokemonDetails.defenseBar}%` }}
                    ></div>
                </div>
            </div>
            <div className="stat-row">
                <div className="stat-label">Sp. Attack</div>
                <div className="stat">{pokemonDetails.sattack}</div>
                <div className="stat-bar">
                    <div
                        className="stat-bar-value"
                        style={{ width: `${pokemonDetails.sattackBar}%` }}
                    ></div>
                </div>
            </div>
            <div className="stat-row">
                <div className="stat-label">Sp. Def </div>
                <div className="stat">{pokemonDetails.sdef}</div>
                <div className="stat-bar">
                    <div
                        className="stat-bar-value"
                        style={{ width: `${pokemonDetails.sdefBar}%` }}
                    ></div>
                </div>
            </div>
            <div className="stat-row">
                <div className="stat-label">Speed </div>
                <div className="stat">{pokemonDetails.speed}</div>
                <div className="stat-bar">
                    <div
                        className="stat-bar-value"
                        style={{ width: `${pokemonDetails.speedBar}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
