import React from "react";

const ErrorExample = () => {
  let title: string = "some title";

  const handleClick = (): void => {
    title = "change title";
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

export default ErrorExample;
