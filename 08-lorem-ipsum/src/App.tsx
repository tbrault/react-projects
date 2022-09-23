import React, { useState } from "react";
import data from "./data/data";

function App() {
  const [numberOfParagraphs, setNumebrOfParagraphs] = useState<number>(2);

  const paragraphs = data.slice(0, numberOfParagraphs);

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form">
        <label htmlFor="numberOfParagraphs">paragraphs: </label>
        <input type="number" value={numberOfParagraphs} />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="result">
        {paragraphs.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
