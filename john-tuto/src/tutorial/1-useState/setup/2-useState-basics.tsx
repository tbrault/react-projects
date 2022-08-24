import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("Random title");

  const handleClick = (): void => {
    setTitle("Changed title");
  };

  return (
    <div>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
