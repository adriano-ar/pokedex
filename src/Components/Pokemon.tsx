import "../Assets/Styles/pokemon.scss";

interface Props {
    showPokemonDetail: Function;
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

const Pokemon: React.FC<Props> = (Props) => {
    const {
        showPokemonDetail,
        id,
        name,
        image,
        type,
        hp,
        attack,
        defense,
        sattack,
        sdef,
        speed,
    } = Props;

    return (
        <div onClick={() => showPokemonDetail(id)} className="pokemon">
            <img src={image} />
            <div>{(id + "").padStart(3, "0")}</div>
            <div className="pokemon-name">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </div>
            <div className="pokemon-type">
                {type.map((type: string, index: number) => (
                    <div key={index} className={`${type} type`}>
                        {type.toUpperCase()}
                    </div>
                ))}
            </div>
            <div>{hp}</div>
            <div>{attack}</div>
            <div>{defense}</div>
            <div>{sattack}</div>
            <div>{sdef}</div>
            <div>{speed}</div>
        </div>
    );
};

export default Pokemon;
