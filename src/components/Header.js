import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link exact to="/" className="logo">
        <img src={process.env.PUBLIC_URL + "logo.png"} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Movie">Movie</NavLink>
          </li>
          <li>
            <NavLink to="/TV">TV</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
