import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ onLogIn, userDetails }) => {
  return (
    <header>
      <Link exact to="/" className="logo">
        <img src={process.env.PUBLIC_URL + "logo.png"} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li>
            {userDetails.username && (
              <NavLink to="/favorites" activeClassName="selected">
                My Favourites
              </NavLink>
            )}
          </li>
          <li>
            {userDetails.username ? (
              <button className="username">{userDetails.username}</button>
            ) : (
              <button onClick={onLogIn} className="log-in">
                Login
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
