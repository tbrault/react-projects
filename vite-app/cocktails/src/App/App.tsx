import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function App(): JSX.Element {
  return (
    <>
      <Navbar>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
