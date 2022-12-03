import React, { useState, FunctionComponent } from "react";
import people from "../data/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review: FunctionComponent = () => {
  const [index, setIndex] = useState<number>(0);
  const { name, image, job, text } = people[index % people.length];

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
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img " />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={getRandomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
