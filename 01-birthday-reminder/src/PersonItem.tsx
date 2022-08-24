import React, { FunctionComponent } from "react";
import Person from "./person";

type Props = {
  person: Person;
};

const PersonItem: FunctionComponent<Props> = ({ person }) => {
  const { id, name, age, image } = person;

  return (
    <article key={id} className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default PersonItem;
