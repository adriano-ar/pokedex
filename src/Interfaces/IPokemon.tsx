export default interface IPokemon {
    id: string;
    name: string;
    image: string;
    type: Array<string>;
    hp: number;
    attack: number;
    defense: number;
    sattack: number;
    sdef: number;
    speed: number;
}
