import React, { FunctionComponent, useState } from "react";
import data from "./data/data";
import List from "./components/List";
import { Person } from "./types/Person";

const App: FunctionComponent = () => {
  const [people, setPeople] = useState<Person[]>(data);
  const [totalBirthdaysToday, setTotalBirthdaysToday] = useState<number>(
    people.length
  );

  const handleChange = () => {
    setPeople([]);
    setTotalBirthdaysToday(0);
  };

  return (
    <main>
      <section className="container">
        <h3>{totalBirthdaysToday} birthdays today</h3>
        <List people={people} />
        <button className="button" onClick={handleChange}>
          clear all
        </button>
      </section>
    </main>
  );
};

export default App;
