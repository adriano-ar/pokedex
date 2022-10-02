import IPokemonDetails from "../Interfaces/IPokemonDetails";
import IPokemonType from "../Interfaces/IPokemonType";
import IPokemonAbility from "../Interfaces/IPokemonAbility";

export default async function fetchPokemonDetails(
    number: number
): Promise<IPokemonDetails> {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "ANYTHING_WILL_WORK_HERE",
            },
        });
        if (!response.ok) throw await response.json();
        const json = await response.json();
        const pokemonDetails = {
            id: json.id,
            name: json.name,
            image: json.sprites.other["official-artwork"].front_default,
            type: json.types.map((type: IPokemonType) => type.type.name),
            height: json.height,
            weight: json.weight,
            ability: json.abilities.map(
                (type: IPokemonAbility) => type.ability.name
            ),
            hp: json.stats[0].base_stat,
            attack: json.stats[1].base_stat,
            defense: json.stats[2].base_stat,
            sattack: json.stats[3].base_stat,
            sdef: json.stats[4].base_stat,
            speed: json.stats[5].base_stat,
        };
        return pokemonDetails;
    } catch (error) {
        throw new Error(error);
    }
}
