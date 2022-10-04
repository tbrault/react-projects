import React, { FormEvent, useState } from "react";
import SingleColor from "./components/SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState<string>("#d20000");
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<Values[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f2f5f6"
            onChange={(e) => setColor(e.target.value)}
            className={error ? "error" : ""}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} color={color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
