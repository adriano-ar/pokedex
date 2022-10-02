import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import PokemonList from "./Components/PokemonList";
import "./Assets/Styles/style.scss";

const App = () => {
    return (
        <div id="wrapper">
            <Header />
            <div id="content-wrapper">
                <div id="content">
                    <PokemonList />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
