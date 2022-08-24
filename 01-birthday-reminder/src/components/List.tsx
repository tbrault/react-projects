import React, { FunctionComponent } from "react";
import Person from "../models/Person";
import PersonItem from "./PersonItem";

type Props = {
  people: Person[];
};

const List: FunctionComponent<Props> = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <PersonItem key={person.id} person={person} />;
      })}
    </>
  );
};

export default List;
