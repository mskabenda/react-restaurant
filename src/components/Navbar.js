import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/About"> About </Link>
        <Link to="/Menu"> Menu </Link>
        <Link to="/Contact"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;