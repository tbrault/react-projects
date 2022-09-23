import React, { useState } from "react";
import data from "./data/data";

function App() {
  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form">
        <label htmlFor="numberOfParagraphs">paragraphs: </label>
        <input type="text" />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <p className="result"></p>
    </section>
  );
}

export default App;
