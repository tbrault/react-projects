import React, { useState, useEffect, FunctionComponent } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./data/data";

const peopleLength = people.length;
const lastIndex = peopleLength - 1;

const App: FunctionComponent = () => {
  const [index, setIndex] = useState<number>(0);

  const mod = (idx: number, len: number): number => ((idx % len) + len) % len;

  useEffect(() => {
    let slider = setInterval(
      () => setIndex(mod(index + 1, peopleLength)),
      3000
    );
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { name, image, title, quote, id } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === lastIndex)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          type="button"
          onClick={() => setIndex(mod(index - 1, peopleLength))}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          type="button"
          onClick={() => setIndex(mod(index + 1, peopleLength))}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
