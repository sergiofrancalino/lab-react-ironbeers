import { Link } from "react-router-dom";
import home from "../assets/home.png";

/*My Navbar back to home  */

function Navbar() {
  return (
    <nav className="back-home">
      <Link to="/">
        <img width={720} src={home} alt="Back to Home Page" />
      </Link>
    </nav>
  );
}

export default Navbar