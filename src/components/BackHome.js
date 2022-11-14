import { Link } from "react-router-dom";
import home from "../assets/home.png";

/*My Navbar back to home  */

function BackHome() {
  return (
    <nav className="back-home">
      <Link to="/">
        <img width={600} src={home} alt="Back to Home Page" />
      </Link>
    </nav>
  );
}

export default BackHome