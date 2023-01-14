import { NavLink, Outlet } from "react-router-dom";

import Navbar from "../features/Navbar/Navbar";
import styles from "./App.module.css";

function App(): JSX.Element {
  return (
    <>
      <Navbar>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive
                ? `${styles.active}`
                : isPending
                ? `${styles.pending}`
                : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
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
