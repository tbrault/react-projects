import React, { useState, useEffect, FunctionComponent } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data/data";

const App: FunctionComponent = () => {
  const [reviews, setReviews] = useState(data);
  console.log("test");

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="section-center">
        <article>
          <img src="" alt="" className="person-img" />
          <h4>test</h4>
          <p className="title">title</p>
          <p className="text">text</p>
          <FaQuoteRight className="icon" />
        </article>
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
