import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar({ children }: { children: ReactNode }): JSX.Element {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/">
          <img className="logo" src={logo} alt="cocktail logo" />
        </NavLink>
        <ul className="nav-links">{children}</ul>
      </div>
    </nav>
  );
}

export default Navbar;
