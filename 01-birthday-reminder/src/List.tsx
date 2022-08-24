import React, { FunctionComponent } from "react";
import Person from "./person";
import PersonItem from "./PersonItem";

type Props = {
  people: Person[];
};

const List: FunctionComponent<Props> = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <PersonItem person={person} />;
      })}
    </>
  );
};

export default List;
