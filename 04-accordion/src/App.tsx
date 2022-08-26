import React, { useState, FunctionComponent } from "react";
import data from "./data/data";
import SingleQuestion from "./components/Question";

const App: FunctionComponent = () => {
  return (
    <main>
      <section className="container">
        <h3>questions and answers about login</h3>
        <div>
          {data.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
