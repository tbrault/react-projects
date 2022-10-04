import React, { useState, useEffect } from "react";
import Values from "values.js";

type Props = {
  color: Values;
  index: number;
  list: Values[];
};

const SingleColor = ({ color, index, list }: Props): JSX.Element => {
  const [alert, setAlert] = useState<boolean>(false);
  const hex = color.hexString();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  return (
    <article
      className={`${index > list.length / 2 && "color-light"} color`}
      style={{ backgroundColor: hex }}
      onClick={handleClick}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copy to clipboard</p>}
    </article>
  );
};

export default SingleColor;
