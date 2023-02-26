import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dogs">Dogs</Link>
        <Link to="/checkout">My cart</Link>
      </div>
    </>
  );
};

export default Navbar;
