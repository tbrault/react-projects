import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";
import styles from "./Navbar.module.css";

function Navbar({ children }: { children: ReactNode }): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <NavLink to="/">
          <img className={styles.logo} src={logo} alt="cocktail logo" />
        </NavLink>
        <ul className={styles.navLinks}>{children}</ul>
      </div>
    </nav>
  );
}

export default Navbar;
