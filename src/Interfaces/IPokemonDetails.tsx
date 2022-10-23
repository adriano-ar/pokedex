import IPokemonType from "./IPokemonType";
import IPokemonAbility from "./IPokemonAbility";

export default interface IPokemonDetails {
    id: string;
    name: string;
    image: string;
    type: Array<string>;
    height: string;
    weight: string;
    ability: Array<string>;
    hp: number;
    hpBar: number;
    attack: number;
    attackBar: number;
    defense: number;
    defenseBar: number;
    sattack: number;
    sattackBar: number;
    sdef: number;
    sdefBar: number;
    speed: number;
    speedBar: number;
}
