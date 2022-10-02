import "../Assets/Styles/header.scss";

const Header = () => {
    return (
        <div id="header">
            <div id="header-content">
                <img
                    src={require("../Assets/Images/pokedex-top.png")}
                    alt="pokedex-top"
                    id="pokedex-top"
                />
                <img
                    src={require("../Assets/Images/logo.png")}
                    alt="brand-logo"
                    id="brand-logo"
                />
            </div>
        </div>
    );
};

export default Header;
