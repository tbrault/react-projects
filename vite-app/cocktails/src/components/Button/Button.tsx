import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({
  children,
  path,
  buttonStyles,
}: {
  children: string;
  path: string;
  buttonStyles: string[];
}): JSX.Element {
  return (
    <Link
      to={path}
      className={`${styles[buttonStyles[0]]} ${styles[buttonStyles[1]]}`}
    >
      {children}
    </Link>
  );
}

export default Button;
