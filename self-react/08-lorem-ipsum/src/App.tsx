import React, { useState } from "react";
import data from "./data/data";

function App() {
  const [paragraphs, setParagraphs] = useState<number>(0);
  const [paragraphsDisplayed, setParagraphsDisplayed] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    let amount = paragraphs;
    if (paragraphs < 1) {
      amount = 1;
    }
    if (paragraphs > 8) {
      amount = 8;
    }
    setParagraphsDisplayed(data.slice(0, amount));
  };

  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form">
        <label htmlFor="numberOfParagraphs">paragraphs: </label>
        <input
          type="number"
          id="amount"
          value={paragraphs}
          onChange={(e) => setParagraphs(+e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="result">
        {paragraphsDisplayed.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
