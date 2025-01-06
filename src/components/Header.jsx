import "../App.css"
import YotiBanner from '/images/carambar-banner.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
        <Link to="/"><img src={YotiBanner} alt="Banner Carambar" className="Carambar-banner" /></Link>
        </div>
      </header>
    </>
  );
};

export default Header;