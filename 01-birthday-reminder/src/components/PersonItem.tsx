import React, { FunctionComponent } from "react";
import Person from "../models/Person";

type Props = {
  person: Person;
};

const PersonItem: FunctionComponent<Props> = ({ person }) => {
  const { name, age, image } = person;

  console.log(person);

  return (
    <article className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default PersonItem;
