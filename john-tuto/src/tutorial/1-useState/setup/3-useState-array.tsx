import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id: number) => {
    let newPersons = people.filter((person) => person.id !== id);
    setPeople(newPersons);
  };

  return (
    <div>
      {people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
