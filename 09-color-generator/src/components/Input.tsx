import React from "react";

type Props = {
  type: string;
  color: string;
  error: boolean;
  setColor: Function;
};

const Input = ({ type, color, error, setColor }: Props): JSX.Element => {
  return (
    <input
      type={type}
      value={color}
      placeholder="#d20000"
      onChange={(e) => setColor(e.target.value)}
      className={error ? "error" : ""}
    />
  );
};

export default Input;
