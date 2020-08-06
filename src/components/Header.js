import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ onLogIn, userDetails, onLogOut }) => {
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

          <div className="dropdown">
            {userDetails.username ? (
              <button className="username dropbtn">
                <span>{userDetails.username}</span>
                <span className="material-icons">arrow_drop_down</span>
              </button>
            ) : (
              <button onClick={onLogIn} className="log-in dropbtn">
                Login
              </button>
            )}

            <div className="dropdown-content">
              <li>
                {userDetails.username && (
                  <Link to="/favorites">My Favourites</Link>
                )}
              </li>

              <li>
                {userDetails.username && (
                  <Link exact to="/" onClick={onLogOut}>
                    Logout
                  </Link>
                )}
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
