/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { create } from "react-test-renderer";
import { createRenderer } from "react-test-renderer/shallow";
import PokemonList from "../Components/PokemonList";

const pokemons = [
    {
        name: "bulbasaur",
        id: 1,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        type: ["grass", "poison"],
        hp: 45,
        attack: 49,
        defense: 49,
        sattack: 65,
        sdef: 65,
        speed: 45,
    },
    {
        name: "charmander",
        id: 4,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        type: ["fire"],
        hp: 39,
        attack: 52,
        defense: 43,
        sattack: 60,
        sdef: 50,
        speed: 65,
    },
    {
        name: "squirtle",
        id: 7,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        type: ["water"],
        hp: 44,
        attack: 48,
        defense: 65,
        sattack: 50,
        sdef: 64,
        speed: 43,
    },
];

test("renders correctly with no pokemons", () => {
    const tree = create(<PokemonList pokemonList={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("renders correctly with some pokemons", () => {
    const r = createRenderer();
    r.render(<PokemonList pokemonList={pokemons} />);
    expect(r.getRenderOutput()).toMatchSnapshot();
});
