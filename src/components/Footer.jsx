import "../App.css"
import YotiLogo from '/images/carambar-logo.svg';
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <>
        <footer>
                <div className="footer">
                <Link to="/"><img src={YotiLogo} alt="Logo Carambar" className="Carambar-logo" /></Link>
                </div>
        </footer>
        </>
    )
}

export default Footer;