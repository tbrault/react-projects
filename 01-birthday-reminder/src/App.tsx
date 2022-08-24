import React, { FunctionComponent, useState } from "react";
import data from "./data";
import List from "./List";
import Person from "./person";

const App: FunctionComponent = () => {
  const [people, setPeople] = useState<Person[]>(data);
  const [totalBirthdaysToday, settotalBirthdaysToday] = useState(people.length);

  return (
    <main>
      <section className="container">
        <h3>{totalBirthdaysToday} birthdays today</h3>
        <List people={people} />
        <button className="button">clear all</button>
      </section>
    </main>
  );
};

export default App;
