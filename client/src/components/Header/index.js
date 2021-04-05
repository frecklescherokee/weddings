import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <nav className="container flex-row justify-space-between-lg justify-center align-center ">
        <Link to="/">
          <h1>My Wedding</h1>
        </Link>

        <div>
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login" className="login">Login</Link>
              {/* <Link to="/signup">Signup</Link> */}
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;