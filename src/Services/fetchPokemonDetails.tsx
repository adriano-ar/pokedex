import IPokemonDetails from "../Interfaces/IPokemonDetails";
import IPokemonType from "../Interfaces/IPokemonType";
import IPokemonAbility from "../Interfaces/IPokemonAbility";

export default async function fetchPokemonDetails(
    number: number
): Promise<IPokemonDetails> {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw await response.json();
        const json = await response.json();
        const pokemonDetails = {
            id: (json.id + "").padStart(3, "0"),
            name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
            image: json.sprites.other["official-artwork"].front_default,
            type: json.types.map((type: IPokemonType) => type.type.name),
            height: `${(Math.round(json.height) / 10).toString()} m`,
            weight: `${(Math.round(json.weight) / 10).toString()} kg`,
            ability: json.abilities.map(
                (type: IPokemonAbility) => type.ability.name
            ),
            hp: json.stats[0].base_stat,
            hpBar: (json.stats[0].base_stat * 100) / 250,
            attack: json.stats[1].base_stat,
            attackBar: (json.stats[1].base_stat * 100) / 190,
            defense: json.stats[2].base_stat,
            defenseBar: (json.stats[2].base_stat * 100) / 180,
            sattack: json.stats[3].base_stat,
            sattackBar: (json.stats[3].base_stat * 100) / 194,
            sdef: json.stats[4].base_stat,
            sdefBar: (json.stats[4].base_stat * 100) / 130,
            speed: json.stats[5].base_stat,
            speedBar: (json.stats[5].base_stat * 100) / 150,
        };
        return pokemonDetails;
    } catch (error) {
        throw new Error("Unable to retrieve pokemon details.");
    }
}
