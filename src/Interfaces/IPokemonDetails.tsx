import IPokemonType from "./IPokemonType";
import IPokemonAbility from "./IPokemonAbility";

export default interface IPokemonDetails {
    id: string;
    name: string;
    image: string;
    type: Array<string>;
    height: number;
    weight: number;
    ability: Array<string>;
    hp: number;
    attack: number;
    defense: number;
    sattack: number;
    sdef: number;
    speed: number;
}
