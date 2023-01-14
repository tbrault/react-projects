import { Link } from "react-router-dom";

import styles from "./Button.module.css";

function Button({
  name,
  path,
  buttonStyles,
}: {
  name: string;
  path: string;
  buttonStyles: string[];
}): JSX.Element {
  return (
    <Link
      to={path}
      className={buttonStyles
        .map((style) => {
          return `${styles[style]}`;
        })
        .join(" ")}
    >
      {name}
    </Link>
  );
}

export default Button;
