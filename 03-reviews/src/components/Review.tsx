import React, { useState, FunctionComponent } from "react";
import people from "../data/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

type Person = {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
};

const Review: FunctionComponent = () => {
  const [person, setPerson] = useState<Person>(people[0]);

  const getPreviousPerson = () => {
    if (person.id === 1) {
      setPerson(people[people.length - 1]);
    } else {
      setPerson(people[person.id - 2]);
    }
  };

  const getNextPerson = () => {
    if (person.id === people.length) {
      setPerson(people[0]);
    } else {
      setPerson(people[person.id]);
    }
  };

  const getRandomIndex = () => {
    return Math.floor(Math.random() * people.length);
  };

  const getRandomPerson = () => {
    const index = getRandomIndex();
    setPerson(people[index]);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={person.image} alt={person.name} className="person-img " />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{person.name}</h4>
      <p className="job">{person.job}</p>
      <p className="info">{person.text}</p>
      <div>
        <button className="prev-btn" onClick={getPreviousPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={getNextPerson}>
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
