import React from "react";
import { Link } from "react-router-dom";
import "../Style/Header.scss";

function Header() {
  return (
    <>
      <nav className="navHeader">
        <div className="blogContainer">
          <h1 className="blogTitle">Home</h1>
          <ul className="navMenu">
            <Link className="navLink" to="/home">
              Home
            </Link>
            <Link className="navLink" to="/logIn">
              Login
            </Link>
            <Link className="navLink" to="/signIn">
              SigIn
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
