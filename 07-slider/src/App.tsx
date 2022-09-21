import React, { useState, useEffect, FunctionComponent } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./data/data";

const App: FunctionComponent = () => {
  const [index, setIndex] = useState<number>(0);

  const getRandomIndex = () => {
    return Math.floor(Math.random() * people.length);
  };

  const getRandomPerson = () => {
    let randomIndex = getRandomIndex();
    if (randomIndex === index) {
      randomIndex++;
    }
    setIndex(randomIndex);
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person) => {
          const { name, image, title, quote, id } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="prev" type="button">
          <FiChevronLeft />
        </button>
        <button className="next" type="button">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
