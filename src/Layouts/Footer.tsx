import "../Assets/Styles/footer.scss";

const Footer = () => {
    return (
        <div id="footer">
            <div id="footer-content">
                <img
                    src={require("../Assets/Images/bottom-controls.jpg")}
                    alt="bottom-controls"
                    id="bottom-controls"
                />
            </div>
        </div>
    );
};

export default Footer;
