import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbarStyle">
      <div className="logoStyle">Dashboard</div>
      <ul  className="navLinksStyle">
        <li className="navItemStyle">
          <NavLink
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="navItemStyle">
          <NavLink
            to="/block"
          >
            Block
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
