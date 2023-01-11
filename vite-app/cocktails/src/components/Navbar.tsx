import React from "react";
import logo from "../assets/logo.svg";

function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img className="logo" src={logo} alt={logo} />
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
