import React, { useState, useEffect } from "react";
import Values from "values.js";

type Props = {
  color: Values;
  index: number;
};

const SingleColor = ({ color, index }: Props): JSX.Element => {
  const hex = color.hexString();
  return (
    <article
      className={`${color.weight > 0 && index > 10 ? "color-light" : ""} color`}
      style={{ backgroundColor: hex }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};

export default SingleColor;
