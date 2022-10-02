import IPokemon from "../Interfaces/IPokemon";
import IPokemonType from "../Interfaces/IPokemonType";

export default async function fetchPokemonList(): Promise<Array<IPokemon>> {
    let pokemon;
    const promises = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    await Promise.all(promises)
        .then((results) => {
            pokemon = results.map(
                (data): IPokemon => ({
                    name: data.name,
                    id: data.id,
                    image: data.sprites["front_default"],
                    type: data.types.map(
                        (type: IPokemonType) => type.type.name
                    ),
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    sattack: data.stats[3].base_stat,
                    sdef: data.stats[4].base_stat,
                    speed: data.stats[5].base_stat,
                })
            );
        })
        .catch((error) => {
            throw new Error("Unable to retrieve pokemon list");
        });
    return pokemon;
}
